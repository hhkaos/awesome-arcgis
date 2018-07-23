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
* Postgre
* SQL Server
* Oracle
* etc.

## Introduction to Esri Geodatabases

> **Important**: an Esri Geodatabase is not always running on top of a DBMS

A geodatabase is a based on the relational database model and is allows you to store GIS information in one large file, which can contain multiple point, polygon, and/or polyline layers. It is a less “messy” way of organizing data than having multiple [shapefiles](../shapefile/README.md). in multiple folders.

Three types of geodatabases:

|Geodatabase type|Format|Multi-editor|Storage limit|Description|Release date|
|---|---|---|---|---|---|
|[Personal geodatabases](../file-formats/personal-geodatabase/README.md)| File format|No|2GB|Build on top of Microsoft Access|1999
|[File geodatabases](../file-formats/file-geodatabase/README.md)|File format| Unknown|1TB per dataset|Nothing Multiple files|2006
|[Enterprise geodatabases](./enterprise-geodatabase/README.md)| Database|Multi user and editor|"Unlimited" (Defined by the DBMS)|Is a collection of tables, views and functions stored inside a DBMS (work on top of Oracle, PostgreSQL, SQL Server, etc)|Unknown|

The functionality:

* Store datasets (tables for non spatial data, feature classes for vector data and raster), rules and relationships
* Reference rasters
* Behaviour rules and relationships to maintain integrity
* Addcional tools to help maintain the integrity of spatial data (advance data topology)
* Geometric networks (for route solving)
* Store toolboxes with geoprocessing tools, python scripts and models built in model builder
* Story address locators for geocoding tasks

A geodatabase can:

* store from a few MB until multiple terabytes of vector, raster and tabular data
* Support Multiple users and editor
