Search.setIndex({"docnames": ["index", "volatility_model/model_description", "volatility_model/sabr/sabr", "volatility_model/sabr/sabr_model", "volatility_model/svi/Quasi_explicit_techNotes", "volatility_model/svi/svi", "wiki", "wiki/commodity_option_info", "wiki/financial_option_info"], "filenames": ["index.rst", "volatility_model/model_description.rst", "volatility_model/sabr/sabr.md", "volatility_model/sabr/sabr_model.ipynb", "volatility_model/svi/Quasi_explicit_techNotes.md", "volatility_model/svi/svi.ipynb", "wiki.rst", "wiki/commodity_option_info.rst", "wiki/financial_option_info.rst"], "titles": ["VolSurface", "\u6ce2\u52a8\u7387\u6a21\u578b", "SABR\u968f\u673a\u6ce2\u52a8\u7387\u6a21\u578b\uff1a\u7ba1\u7406Smile\u98ce\u9669", "Commodity Option Volatility Surface using SABR", "Quasi-Explicit SVI\u6280\u672f\u6587\u6863", "SVI\u6a21\u578b", "\u671f\u6743Wiki", "\u5546\u54c1\u671f\u6743", "\u91d1\u878d\u671f\u6743"], "terms": {"this": [0, 3], "document": 0, "updat": 0, "on": [0, 3], "28th": 0, "august": 0, "2023": [0, 3, 4, 5], "svi": 0, "quasi": [0, 1, 5], "explicit": [0, 1, 5], "quant": 0, "debian": 0, "cd": 0, "volatility_surfac": 0, "python": 0, "manag": [0, 4], "py": 0, "runserv": 0, "black": 0, "lognorm": [0, 3], "bacheli": 0, "normal": [0, 3], "sabr": 0, "stochast": [2, 3, 4], "alpha": [2, 3], "beta": [2, 3], "rho": [2, 4], "the": [3, 4], "l2309": [3, 4, 5], "record": 3, "26th": 3, "juli": 3, "is": 3, "util": 3, "for": [3, 4, 5], "correspond": 3, "close": 3, "price": [3, 5], "futur": 3, "8179": [3, 5], "impli": [3, 4, 5], "of": [3, 4], "dataset": 3, "was": 3, "comput": [3, 4], "schole": 3, "incorpor": 3, "calendar": [3, 5], "day": 3, "basi": 3, "calcul": 3, "graphic": 3, "represent": 3, "delin": 3, "in": [3, 4], "subsequ": 3, "illustr": 3, "import": [3, 5], "panda": [3, 5], "as": [3, 5], "pd": [3, 5], "read_csv": [3, 5], "sample_iv_data": 3, "csv": [3, 5], "strike": [3, 5], "ivs": [3, 5], "7100": [3, 5], "269966": [3, 5], "7200": [3, 5], "246217": [3, 5], "7300": [3, 5], "222838": [3, 5], "7400": [3, 5], "202008": [3, 5], "7500": [3, 5], "184172": [3, 5], "7600": [3, 5], "169899": [3, 5], "7700": [3, 5], "158302": [3, 5], "7800": [3, 5], "150774": [3, 5], "7900": [3, 5], "145299": [3, 5], "8000": [3, 5], "141661": [3, 5], "10": [3, 5], "8100": [3, 5], "139141": [3, 5], "11": [3, 5], "8200": [3, 5], "137403": [3, 5], "12": [3, 5, 8], "8300": [3, 5], "135947": [3, 5], "13": [3, 5], "8400": [3, 5], "134929": [3, 5], "14": [3, 5], "8500": [3, 5], "133980": [3, 5], "15": [3, 5], "8600": [3, 5], "133102": [3, 5], "16": [3, 5], "8700": [3, 5], "132350": [3, 5], "should": 3, "have": 3, "calibr": [3, 4], "space": [3, 4], "and": [3, 4], "where": 3, "respect": 3, "when": 3, "we": 3, "cir": 3, "there": 3, "are": 3, "two": 3, "method": [3, 4], "includ": 3, "our": 3, "implement": [3, 4], "valu": [3, 5], "fix": 3, "below": 3, "optim": [3, 4, 5], "function": [3, 4, 5], "direct": 3, "with": [3, 4], "non": 3, "linear": 3, "least": 3, "squar": [3, 5], "from": [3, 5], "west": 3, "2005a": 3, "residu": 3, "can": 3, "be": 3, "form": 3, "an": 3, "object": 3, "to": [3, 4], "find": 3, "local": 3, "minimum": 3, "paramet": [3, 4], "compar": 3, "result": 3, "plot": [3, 5], "after": 3, "theoret": 3, "part": 3, "done": 3, "finish": 3, "section": 3, "volatil": [4, 5], "inspir": 4, "gather": 4, "2004": 4, "begin": 4, "equat": 4, "sigma_": 4, "bs": 4, "sqrt": [4, 5], "sigma": 4, "end": 4, "money": 4, "log": [4, 5], "frac": [4, 5], "f_t": 4, "zeliad": 4, "system": 4, "2009": 4, "tild": 4, "tv": 4, "align": 4, "at": 4, "dy": 4, "p_": 4, "min_": 4, "f_": 4, "y_i": 4, "v_i": 4, "vi": 4, "sum_": [4, 5], "tv_i": 4, "case": 4, "leq": 4, "mid": 4, "text": 4, "max_i": 4, "v_": 4, "x_i": 4, "nelder": 4, "mead": 4, "simplex": 4, "1965": 4, "gao": 4, "han": 4, "2010": 4, "26": [4, 5], "43": [4, 5], "02": 4, "algorithm": 4, "adapt": 4, "applic": 4, "51": 4, "pp": [4, 7], "259": 4, "277": 4, "parsimoni": 4, "arbitrag": 4, "free": 4, "parameter": 4, "valuat": 4, "deriv": 4, "present": 4, "global": 4, "risk": 4, "madrid": 4, "minim": 4, "journal": 4, "308": 4, "313": 4, "model": [1, 4, 5], "white": 4, "paper": 4, "sys": 5, "os": 5, "path": 5, "insert": 5, "abspath": 5, "process_data": 5, "df": 5, "l2309_20230726": 5, "365": 5, "ttm": 5, "spot": 5, "svi_quasi_explicit": 5, "np": 5, "param": 5, "svi_quasi_explicit_fit": 5, "svi_strik": 5, "arang": 5, "01": 5, "001": 5, "vol_quasi_svi": 5, "w_svi_quasi": 5, "svi_fit": 5, "var": 5, "power": 5, "svi_param": 5, "svi_curve_fit": 5, "var_svi": 5, "w_svi": 5, "vol_svi": 5, "matplotlib": 5, "pyplot": 5, "plt": 5, "label": 5, "origin": 5, "scatter": 5, "marker": 5, "color": 5, "grey": 5, "legend": 5, "savefig": 5, "figur": 5, "2d_comp": 5, "png": 5, "show": 5, "termin": 5, "success": 5, "exit": 5, "mode": 5, "current": 5, "0586298529238674e": 5, "07": 5, "iter": 5, "59": 5, "evalu": 5, "377": 5, "gradient": 5, "rmse": 5, "root": 5, "mean": 5, "error": 5, "y_": 5, "x_": 5, "rmse_quasi": 5, "rmse_svi": 5, "print": 5, "estim": 5, "00021079151215087837": 5, "009162684305542132": 5, "2d": 1, "3d": 1, "ine": 7, "shfe": 7, "czce": 7, "dce": 7, "gfex": 7, "sc": 7, "cu": 7, "al": 7, "zn": 7, "rb": 7, "au": 7, "ag": 7, "ru": 7, "sr": 7, "oi": 7, "rm": 7, "pk": 7, "cf": 7, "pta": 7, "ma": 7, "zc": 7, "pg": 7, "si": 7, "sse": 8, "szse": 8, "50etf": 8, "510050": 8, "2015": 8, "300etf": 8, "510300": 8, "2019": 8, "23": 8, "500etf": 8, "510500": 8, "2022": 8, "19": 8, "100etf": 8, "159901": 8, "etf": 8, "159915": 8, "159919": 8, "159922": 8, "input": 1, "data": 1, "surfac": 1}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"volsurfac": 0, "sabr": [1, 2, 3], "smile": 2, "commod": 3, "option": 3, "volatil": 3, "surfac": 3, "use": 3, "input": 3, "data": 3, "interpol": 3, "atm": 3, "vol": 3, "model": 3, "fit": 3, "market": 3, "bacheli": 3, "vs": 3, "black": 3, "3d": [3, 4, 5], "quasi": 4, "explicit": 4, "svi": [1, 4, 5], "2d": [4, 5], "wiki": 6}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "nbsphinx": 4, "sphinx": 58}, "alltitles": {"VolSurface": [[0, "volsurface"]], "\u5546\u54c1\u671f\u6743\u6ce2\u52a8\u7387\u66f2\u9762\u754c\u9762": [[0, "id1"]], "\u91d1\u878d\u671f\u6743\u6ce2\u52a8\u7387\u66f2\u9762\u754c\u9762": [[0, "id2"]], "SABR\u968f\u673a\u6ce2\u52a8\u7387\u6a21\u578b\uff1a\u7ba1\u7406Smile\u98ce\u9669": [[2, "sabr-smile"]], "\u6a21\u578b\u6982\u8ff0": [[2, "id1"]], "\u6a21\u578b\u6821\u6b63": [[2, "id2"]], "Commodity Option Volatility Surface using SABR": [[3, "Commodity-Option-Volatility-Surface-using-SABR"]], "2-D Input Data": [[3, "2-D-Input-Data"]], "Interpolate ATM vol": [[3, "Interpolate-ATM-vol"]], "SABR Model": [[3, "SABR-Model"]], "SABR \u2013 Fit Market": [[3, "SABR----Fit-Market"]], "Bachelier SABR vs Black SABR": [[3, "Bachelier-SABR-vs-Black-SABR"]], "3D surface": [[3, "3D-surface"]], "Black SABR Volatility Surface": [[3, "Black-SABR-Volatility-Surface"]], "Bachelier SABR Volatility Surface": [[3, "Bachelier-SABR-Volatility-Surface"]], "Quasi-Explicit SVI\u6280\u672f\u6587\u6863": [[4, "quasi-explicit-svi"]], "SVI \u6a21\u578b\u56de\u987e": [[4, "svi"]], "Quasi-Explicit \u6a21\u578b": [[4, "quasi-explicit"]], "\u5185\u5c42\u4f18\u5316": [[4, "id1"]], "\u5916\u5c42\u4f18\u5316": [[4, "id2"]], "\u964d\u7ef4\u95ee\u9898\u7684\u95ed\u5f0f\u89e3": [[4, "id3"]], "\u5b9e\u8bc1\u5206\u6790": [[4, "id4"]], "2D\u6ce2\u52a8\u7387\u66f2\u7ebf": [[4, "d"]], "3D\u6ce2\u52a8\u7387\u66f2\u9762": [[4, "id5"]], "\u603b\u7ed3": [[4, "id6"]], "\u53c2\u8003\u6587\u732e": [[4, "id7"]], "SVI\u6a21\u578b": [[5, "SVI\u6a21\u578b"], [1, "svi"]], "2D\u6d4b\u8bd5\u6570\u636e": [[5, "2D\u6d4b\u8bd5\u6570\u636e"]], "\u7ed3\u679c\u6bd4\u8f83": [[5, "\u7ed3\u679c\u6bd4\u8f83"]], "\u6a21\u578b\u6bd4\u8f83": [[5, "\u6a21\u578b\u6bd4\u8f83"]], "3D \u66f2\u9762\u6bd4\u8f83": [[5, "3D-\u66f2\u9762\u6bd4\u8f83"]], "\u671f\u6743Wiki": [[6, "wiki"]], "\u5546\u54c1\u671f\u6743": [[7, "id1"]], "\u4ea4\u6613\u6240\u4ee3\u7801": [[7, "id2"], [8, "id2"]], "\u54c1\u79cd\u4ee3\u7801\u53ca\u4fe1\u606f": [[7, "id3"], [8, "id3"]], "\u4e0a\u6d77\u56fd\u9645\u80fd\u6e90\u4ea4\u6613\u4e2d\u5fc3": [[7, "id4"]], "\u4e0a\u6d77\u671f\u8d27\u4ea4\u6613\u6240": [[7, "id6"]], "\u90d1\u5dde\u5546\u54c1\u4ea4\u6613\u6240": [[7, "id14"]], "\u5927\u8fde\u5546\u54c1\u4ea4\u6613\u6240": [[7, "id23"]], "\u5e7f\u5dde\u671f\u8d27\u4ea4\u6613\u6240": [[7, "id35"]], "\u91d1\u878d\u671f\u6743": [[8, "id1"]], "\u4e0a\u4ea4\u6240": [[8, "id4"]], "\u6df1\u4ea4\u6240": [[8, "id5"]], "\u6ce2\u52a8\u7387\u6a21\u578b": [[1, "id1"]], "SABR\u6a21\u578b": [[1, "sabr"]]}, "indexentries": {}})