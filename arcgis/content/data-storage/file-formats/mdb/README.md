> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# MDB

MDB is a database file used by Microsoft Access, but in a GIS context it use to be an **Esri Personal Geodatabase** which is based on Microsoft Access.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Quick overview](#quick-overview)
- [Introduction](#introduction)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quick overview

* **Purpose**: Store, query, and manage both spatial and nonspatial data.
* **Data type**: [vector](../../../data-types/vector/README.md) and [raster](../../../data-types/raster/README.md)
* **Type of format**: GIS
* **Multi-file format**: No
* **File type**: binary
* **File extension(s)**: .mdb, .zip
* **Originally developed by**: Microsoft (1992)
* **Technical description/specification**: *Not available*
* **License**: *Unknown*
* **Regulated by**: Microsoft
* **Status**: proprietary
* **Sample file(s)**: [Personal GeoDatabases sample files](https://www.state.nj.us/transportation/refdata/countysidewalks/downloads.shtm)
* **Consumable by**:
    * [ArcGIS Pro](../../../../products/arcgis-desktop/arcgis-pro/README.md) - [How to](http://pro.arcgis.com/en/pro-app/help/projects/connect-to-a-database.htm)
    * [ArcMap](../../../../products/arcgis-desktop/arcmap-arccatalog/README.md) - [How to](http://desktop.arcgis.com/en/arcmap/latest/manage-data/using-arccatalog/connect-to-file-or-personal-geodatabase.htm)
    * ArcObjects
    * ...

## Introduction

Personal GeoDatabases were introduced by Esri in ArcGIS for Desktop 8.0 (1999). It is single user and editor & 2GB storage limit.

|[Personal GDB](../file-formats/personal-geodatabase/README.md)| File format|No|2GB|1999

## Additional documentation

* Vídeo: [Geodatabase Fundamentals](https://www.youtube.com/watch?v=ocSd7NxPvBg)
* [Comparing the three types of geodatabases](http://desktop.arcgis.com/en/arcmap/latest/manage-data/geodatabases/types-of-geodatabases.htm)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["personal geodatabase"](https://esri-es.github.io/arcgis-search/?search="personal geodatabase"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

### Related resources

* [File GeoDataBase](../gdb/README.md): is the evolution of the personal geodatabase
