# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html
import os
import sys

sys.path.insert(0, os.path.abspath('..'))
sys.path.insert(0, os.path.abspath('../../process_data'))

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'VolSurface'
copyright = '2023, Yu Lu'
author = 'Yu Lu'
release = '0.0.1a'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration
extensions = ['sphinx.ext.autodoc',
              'sphinx.ext.autosummary',
              'sphinx.ext.napoleon',
              'sphinx.ext.intersphinx',
              'sphinx.ext.mathjax',
              'nbsphinx',
              'myst_parser'
            ]

source_syffux = ['.rst', '.md']
myst_enable_extensions = ["dollarmath", "amsmath"]
master_doc = 'index'
templates_path = ['_templates']
exclude_patterns = []
language = 'zh_CN'
## path set up


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'furo'
html_static_path = ['_static']


# Napoleon options
napoleon_google_docstring = False
napoleon_numpy_docstring = True

intersphinx_mapping = {
    'python': ('https://docs.python.org/', None),
    'numpy': ('https://docs.scipy.org/doc/numpy/', None)
}

# drop module name
add_module_names = False