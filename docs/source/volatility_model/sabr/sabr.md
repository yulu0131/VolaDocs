# SABR随机波动率模型：市场隐含波动率微笑

## 概述

随着金融市场的发展，传统的BSM模型对于刻画金融资产价格变动过程变得不够精确，难以解释金融市场中的复杂现象。通过反算场内期权市场价格的隐含波动率，不难发现隐含波动率并不是一个常数值，与BSM模型的假设相悖。市场上观察到的隐含波动率曲线通常会呈现“微笑”形状，即隐含波动率随着行权价格的变动进行非线性变动。在这种情况下，关于波动率模型通常有两类改进方法：一类是局部波动率模型，即对隐含波动率直接进行建模，假设资产的波动率是资产价格和剩余期限的确定函数; 另一类是随机波动率模型，即通过一条随机过程描述波动率的变化。

在实践中发现，Dupire（1994）局部波动率模型难以达到预期的效果。核心问题在于当标的资产价格上涨或下跌时，理论上波动率微笑曲线应分别向右或向左整体移动，然而局部波动率模型却呈相反方向变动 (Hagan, 2002) 。因此，该类模型在动态对冲方面的实际表现甚至不如BSM模型。本文将着重阐述采用基于SABR (Stochastic, $\alpha$, $\beta$, $\rho$)模型的波动率拟合方法，包括**直接拟合参数方法**，以及通过平值（at-the-money）波动率确定Alpha的间接拟合方法（下文简称为**Alpha间接调参法**）。



### 模型回顾：CEV模型

随着外汇市场的发展，以及随机波动模型的推广，一个更为广义的BS模型开始推广流行，该模型为CEV（Constant Elasticity of Variance Model）模型，又被称为固定方差模型，试图捕捉随机波动率及其杠杆效应，由Cox（1975）提出。CEV模型描述的是资产价格 $S_t$ 和其波动率 $ \sigma $ 之间的关系：

$$
\begin{equation}
	dS_t = rS_t dt + \sigma S_t^{\alpha} dW_t 
\end{equation}
$$

其中， $\alpha$ 是弹性系数，它决定了波动率如何随着资产价格的变动而变化。当 $\alpha = 1 $ 时，该模型即为最常见的几何布朗运动模型。CEV模型可以描述波动率与资产价格的关系，但它不考虑波动率本身的随机性。CEV动态过程通常被用于Libor市场模型中的skew建模（Andersen and Andreasen, 2000）。



### SABR模型

SABR（Stochastic, $\alpha$, $\beta$, $\rho$）模型是一个在金融工程中广泛使用的随机波动率模型，可以用来捕捉市场中的隐含波动率微笑。SABR模型在上述CEV模型的基础上加入了波动率的随机性，针对资产的远期价格$F_t$以及远期随机波动率 $\sigma_t$ 进行建模。SABR模型可以描述为：

$$
\begin{equation}
\begin{aligned}
	dF_t &= \sigma_t F_t^{\beta} dW_{1,t} \\
	d\sigma_t &= \alpha \sigma_t dW_{2,t} \\
	dW_{1,t}dW_{2,t} &=\rho dt
\end{aligned}
\end{equation}
$$

其中，

- $\beta$ 在SABR模型中扮演与CEV模型中 $\alpha$相似的角色;
- $W_{1,t}$ 和 $ W_{2,t}$ 是两组Wiener过程，它们之间的相关性为$\rho$。
- $\beta \in [0, 1]$, producing a distribution within a range from  normal(Bachelier) to lognormal(Black76) distribution of the asset price.

  $\rho \in [-1, 1]$  *add their impacts on the volatility smile later*

  - negative $\rho$, engendering a negative-sloping smile, adding its effects to those of $\beta$
  - positive $\rho$, engendering a positive effect on the slope of smile, and thus mitigating the effect of $\beta$ and offsetting them

  SABR 模型是由 Hagan[1]在 2002 年提出的一种随机波动率模型，在抛弃了原始的 BSM
  模型中对于波动率为某一常数的假定，假设隐含波动率同样是符合几何布朗运动的，并且
  将隐含波动率设定为标的价格和合约行权价的函数，结合了隐含波动率修正模型的两种思
  路（随机波动率模型和局部波动率模型），更为准确的动态刻画出吻合市场特征的隐含波
  动率曲线。

  

  结合了隐含波动率修正模型的两种思路（随机波动率模型和局部波动率模型）

  

从形式上看，当在CEV模型中引入波动率 $\sigma$  的随机动态，即可推出SABR模型。简而言之，SABR是CEV模型的一种扩展形式，它不仅描述了资产价格的随机动态，还描述了波动率的随机动态。 

- CEV模型对于描述波动率与资产价格之间的某种确定性关系是很有用的，但在现实市场中，波动率本身经常显示出随机性。这就是为什么SABR模型会受到欢迎的原因，因为它能更好地捕捉这种波动率的随机性。
- 综上所述，SABR模型可以看作是SABR模型的自然延伸，通过增加波动率随机性来捕捉更多的市场现象。











随机波动率模型望文生义，就是认为必须用另外一条随机过程来描述波动率的变化，换句话说波动率不仅不是固定的，而且也无法用确定的(Deterministic)方程式来表示。这个描述与在计量经济学里面的ARCH或GARCH模型，在精神上是相通的概念。然而困难的是，要如何适当的设定这个波动率的随机过程，才可以让我们得到一个解析解，方便应用时进行模型参数的市场校正(Market Calibration)。

Heston与SABR两个模型采取不同的方法来解决这个问题。首先，Heston是针对现货资产的价格(Spot Price)来处理，因此它的两条随机过程是现货价格(S)与现货价格波动率的随机过程。至于，SABR则是针对资产的远期价格(Forward Price)来处理，因此它的两条随机过程是远期价格(F)与远期价格波动率的随机过程。





## SABR模型校正

### 直接拟合参数方法



### Alpha间接调参法



## 实证分析

###  2D波动率曲线



### 3D波动率曲面

