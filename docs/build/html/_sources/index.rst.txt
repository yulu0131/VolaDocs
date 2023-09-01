.. VolSurface documentation master file, created by
   sphinx-quickstart on Thu Jun 15 10:12:29 2023.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

VolSurface
======================================

.. warning:: This documentation updates on 1st September2023!


.. toctree::
   :maxdepth: 2
   :hidden:

   期权Wiki <wiki>
   波动率模型 <volatility_model/model_description>

支持场内商品期权和权益类期权的波动率模型，可在线获取数据并支持数据可视化功能。


波动率模型
------------------------

#. 隐含波动率

#. SVI

    * Surface SVI

    * Quasi-Explicit SVI

#. SABR

    * Black SABR 

    * Bachelier SABR


终端调用命令
-----------------------

.. code-block:: bash

   quant@debian:~$ cd volatility_surface
   quant@debian:~/volatility_surface$ python manage.py runserver


商品期权波动率曲面界面
==================================

.. note:: 新增Black(LogNormal)/Bachelier(Normal)SABR模型。

.. image:: figures/commodity_iv.png
  :width: 700

.. image:: figures/commodity_svi.png
  :width: 700

.. image:: figures/commodity_quasi_explicit.png
  :width: 700

.. image:: figures/BLACK_SABR.png
  :width: 700

.. image:: figures/BACHELIER_SABR.png
  :width: 700

金融期权波动率曲面界面
==================================

.. image:: figures/equity_iv.png
  :width: 700

.. image:: figures/equity_svi.png
  :width: 700

.. image:: figures/equity_quasi_explicit.png
  :width: 700
