> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Databases

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Introduction to Esri Geodatabases](#introduction-to-esri-geodatabases)
  - [Types](#types)
  - [Functionality](#functionality)
  - [Field Data Types](#field-data-types)
- [Videos](#videos)

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

### Types

Three types of geodatabases (GDB):

|Geodatabase type|Format|Multi-editor|Storage limit|Release date|
|---|---|---|---|---|
|[Personal GDB](../file-formats/mdb/README.md)| File format|No|2GB|1999
|[File GDB](../file-formats/dgb/README.md)|File format|Many readers or one writer per feature object (dataset/raster/...) (but multiple people editing different feature classes or tables at the same time)|1TB to 256TB (with keywords) per dataset|2006
|[Enterprise GDB](./enterprise-geodatabase/README.md)| Database|Multiuser: many readers and many writers (unlimited editors)|Up to DBMS limits|Unknown|

> **Detailed comparison**: [Comparing the three types of geodatabases](http://desktop.arcgis.com/en/arcmap/latest/manage-data/geodatabases/types-of-geodatabases.htm)

### Functionality

The functionality:

* Store datasets (tables for non spatial data, feature classes for vector data and raster), rules and relationships
* Reference rasters
* Behaviour rules and relationships to maintain integrity
* Additional tools to help maintain the integrity of spatial data (advance data topology)
* Geometric networks (for route solving)
* Store toolboxes with geoprocessing tools, python scripts and models built in model builder
* Story address locators for geocoding tasks
* Define rules to filter possible attribute values using: domains, subtypes an [contingent values](https://pro.arcgis.com/en/pro-app/help/data/geodatabases/overview/contingent-values.htm)

A geodatabase can:

* Store from a few MB until multiple terabytes of vector, raster and tabular data
* Support Multiple users and editor

### Field Data Types

As you can check in the [ArcGIS Pro documentation site](https://pro.arcgis.com/en/pro-app/help/data/geodatabases/overview/arcgis-field-data-types.htm), Geodatabases support different data types: numbers, text, dates, BLOBs, object identifiers, global identifiers, fields of type raster and geometries.

> The internal keywords for these are: "esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeString", "esriFieldTypeDate", "esriFieldTypeOID", "esriFieldTypeGeometry", "esriFieldTypeBlob", "esriFieldTypeRaster", "esriFieldTypeGUID", "esriFieldTypeGlobalID" and "esriFieldTypeXML".

> Note: hosted layers in ArcGIS Online only supports: double, integer, string and date. [More info](https://doc.arcgis.com/en/arcgis-online/manage-data/add-or-delete-fields.htm)

## Videos

We have created a [Geodatabases Youtube playlist](https://www.youtube.com/channel/PLahIW2YFPQd614YjgzbN1_MNBKDTLBP2w/playlists?disable_polymer=1) that we think it might be worth to you to save ([how to save a Youtube Playlist](../../../../assets/SavePlaylist.gif)).

On [*video.esri.com*](https://www.esri.com/videos/search?q=Geodatabases#?sortby=recent) and [Esri Events](https://www.youtube.com/channel/UC_yE3TatdZKAXvt_TzGJ6mw/search?query=Geodatabases) you will find many technical talks. Or check [Esri Geodev](https://www.youtube.com/channel/UCgCXcfk5uEraWkpE9wlRwgw) channel for short videos.
```

And

|Event|Title|Length|
|---|---|---|
|n.a.|[Geodatabase Fundamentals](https://www.youtube.com/watch?v=ocSd7NxPvBg&list=PLahIW2YFPQd614YjgzbN1_MNBKDTLBP2w&index=11&t=0s)| 1h 3min 26secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[Accessing Your Enterprise Geodatabase using SQL](https://www.youtube.com/watch?v=WM_PN7v_HIs&list=PLahIW2YFPQd614YjgzbN1_MNBKDTLBP2w&index=8)|1h 2min 37secs
|[DevSummit](http://www.esri.com/events/devsummit) 2019|[Administering Your Enterprise Geodatabase using Python](https://www.youtube.com/watch?v=1aphrj5B2fs&list=PLahIW2YFPQd614YjgzbN1_MNBKDTLBP2w&index=1)|54min 16secs
|n.a.|[Working with a Multi-User Geodatabase](https://www.youtube.com/watch?v=ibGC6ycA_9Y)|1h 0min 46secs

> You might also find interesting videos at [Esri Industries](https://www.youtube.com/channel/UCZTiOg3n0pqUDSatq7mS2PA/search?query="Geodatabases"), [ArcGIS](https://www.youtube.com/channel/UCgGDPs8cte-VLJbgpaK4GPw/search?query="GeoDatabases"), [EsriTV](https://www.youtube.com/user/esritv/search?query="GeoDatabases"), [Esri R&D Center](https://www.youtube.com/user/esripdx/search?query="GeoDatabases") [etc](https://esri-es.github.io/awesome-arcgis/esri/#youtube-channels)

### Slides

More slides in [*proceedings.esri.com*](https://www.google.es/search?q=site%3Aproceedings.esri.com+GeoDatabases) or check on [GeoNet](https://community.esri.com/content?query=GeoDatabases&filterID=all~objecttype~objecttype%5Bdocument%5D).
