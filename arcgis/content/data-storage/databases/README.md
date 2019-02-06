> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Databases

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Introduction to Esri Geodatabases](#introduction-to-esri-geodatabases)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

When an application needs to support simultaneous editing of users, work with large volumes of data, etc. we would want to use databases capable of performing advanced functionalities with spatial data, for example:

* [Esri Enterprise GeoDatabases](./enterprise-geodatabase/README.md)
* PostgreSQL
* Microsoft SQL Server
* Oracle
* Informix
* IBM DB2

When working with spatial data normally we would use the spatial version of a database:

* PostGIS instead of PostgreSQL
* Oracle Spatial instead of Oracle
* etc.

If we don't use an ArcGIS geodatabase but we want to connect it to use in with the platform we might want to use [Koop](../../../developers//profiles/devops/technologies/koop/README.md) to expose our data to the platform.


## Introduction to Esri Geodatabases

> **Important**: no every Esri GeoDatabase type run on top of a DBMS

A geodatabase is a based on the relational database model and is allows you to store GIS information in "one large file", which can contain multiple point, polygon, and/or polyline layers. It is a less “messy” way of organizing data than having multiple [shapefiles](../shapefile/README.md) in multiple folders.

> Geodatabases also allows you to set up a topology, store rasters, add domains or geometric networks, which you can’t do with shapefiles.

Three types of geodatabases (GDB):

|Geodatabase type|Format|Multi-editor|Storage limit|Release date|
|---|---|---|---|---|
|[Personal GDB](../file-formats/mdb/README.md)| File format|No|2GB|1999
|[File GDB](../file-formats/dgb/README.md)|File format|Many readers or one writer per feature object (dataset/raster/...) (but multiple people editing different feature classes or tables at the same time)|1TB to 256TB (with keywords) per dataset|2006
|[Enterprise GDB](./enterprise-geodatabase/README.md)| Database|Multiuser: many readers and many writers (unlimited editors)|Up to DBMS limits|Unknown|

> **Detailed comparison**: [Comparing the three types of geodatabases](http://desktop.arcgis.com/en/arcmap/latest/manage-data/geodatabases/types-of-geodatabases.htm)


The functionality:

* Store datasets (tables for non spatial data, feature classes for vector data and raster), rules and relationships
* Reference rasters
* Behaviour rules and relationships to maintain integrity
* Additional tools to help maintain the integrity of spatial data (advance data topology)
* Geometric networks (for route solving)
* Store toolboxes with geoprocessing tools, python scripts and models built in model builder
* Story address locators for geocoding tasks

A geodatabase can:

* store from a few MB until multiple terabytes of vector, raster and tabular data
* Support Multiple users and editor
