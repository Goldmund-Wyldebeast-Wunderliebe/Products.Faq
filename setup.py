# -*- coding: utf-8 -*-

from setuptools import find_packages
from setuptools import setup

import os

version = '1.4.dev0.gww'

setup(name='Products.Faq',
      version=version,
      description="FAQ - An AT contenttype for Plone",
      long_description=open("README.rst").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      classifiers=[
          'Programming Language :: Python',
          'Programming Language :: Python :: 2.6',
          'Programming Language :: Python :: 2.7',
          'Framework :: Plone',
          'Framework :: Plone :: 4.0',
          'Framework :: Plone :: 4.1',
          'Framework :: Plone :: 4.2',
          'Framework :: Plone :: 4.3',
      ],
      keywords='FAQ Archetypes Plone Contenttype',
      author='Four Digits',
      author_email='info@fourdigits.nl',
      url='https://github.com/collective/Products.Faq',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['Products'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'Products.Archetypes',
          'Products.ATContentTypes',
          'Products.CMFCore',
          'Products.GenericSetup',
          'setuptools',
          'zope.i18nmessageid',
          'zope.interface',
      ],
      extras_require={
          'test': [
              'plone.app.testing',
              'plone.testing',
              'unittest2',
          ]
      },
      entry_points="""
      # -*- Entry points: -*-
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
