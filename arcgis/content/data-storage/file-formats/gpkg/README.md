> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# GPKG

GeoPackage (GPKG) is a data format for geographic information system implemented as a SQLite database container.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Quick overview](#quick-overview)
- [Introduction](#introduction)
- [Additional documentation](#additional-documentation)
- [Tools & Samples](#tools--samples)
- [Additional resources](#additional-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quick overview

* **Purpose**: File format for exchanging geospatial data supporting both raster and vector data, while being efficiently decodable by software, particularly in mobile devices
* **Data type**: [vector](../../../data-types/vector/README.md) and [raster](../../../data-types/raster/README.md)
* **Type of format**: [GIS](../../../data-types/vector/gis/README.md)
* **Multi-file format**: Yes/No/Optional
* **File type**: binary
* **File extension(s)**: .gpkg
* **Originally developed by**: [Open Geospatial Consortium (OGC)](https://en.wikipedia.org/wiki/Open_Geospatial_Consortium) (2014)
* **Technical description/Specification/Schema**: [GeoPackage Spec](http://www.geopackage.org/spec/)
* **License**: [read license](http://www.geopackage.org/spec/#_license_agreement)
* **Regulated by**: [Open Geospatial Consortium (OGC)](https://en.wikipedia.org/wiki/Open_Geospatial_Consortium)
* **Status**: [OGC standard](http://www.opengeospatial.org/standards/geopackage)
* **Sample file(s)**: [GeoPackage Data at geopackage.org](https://www.geopackage.org/data.html)
* **Consumable by**:
    * [ArcMap: An overview of the To GeoPackage toolset](http://desktop.arcgis.com/en/arcmap/latest/tools/conversion-toolbox/an-overview-of-the-to-geopackage-toolset.htm)
    * [ArcGIS Pro: An overview of the To GeoPackage toolset](http://pro.arcgis.com/en/pro-app/tool-reference/conversion/an-overview-of-the-to-geopackage-toolset.htm)
    * [ArcGIS Runtime SDK for .NET](../../../../../arcgis/developers/desktop/technologies/dot-net/README.md) - [Sample Feature layer (GeoPackage)](https://developers.arcgis.com/net/latest/wpf/sample-code/featurelayergeopackage.htm)
    * ...

## Introduction

GeoPackage is a universal file format for vector and raster spatial data.

It is open, standards-based, and independent of platforms or applications. It has been built on the basis of SQLite, so it uses SQL to use GeoPackage on any desktop or mobile operating system.

The GeoPackage specification describes a set of conventions for storage in a SQLite database of:

* Vector entities.
* A set of matrix of tiles of images and raster maps at different scales.
* Scheme.
* Metadata
* Extensions

As it is a database, it supports direct use, which means that we can access and update your data in a native storage format without the need for intermediate conversions.

ArcGIS in versions higher than ArcGIS 10.3 and ArcGIS Pro support the reading of Vector GeoPackages.

## Additional documentation

* [Understanding and Working with the OGC Geopackage](http://proceedings.esri.com/library/userconf/proc17/tech-workshops/tw_2585-349.pdf)
* [Esri Supports OGC GeoPackage Encoding Standard (2014)](http://www.esri.com/esri-news/releases/14-2qtr/esri-supports-ogc-geopackage-encoding-standard)
* [Getting Started With GeoPackage](http://www.geopackage.org/guidance/getting-started.html)

## Tools & Samples

* [developer-support samples](https://github.com/Esri/developer-support/search?q=csv&unscoped_q=geopackage)
    * [Add Rasters from File](https://github.com/Esri/developer-support/blob/96c94c093ddfebf6dba45bf136083de73a8aaeaf/runtime-java/add-rasters-from-file/README.md): Simple ArcGIS Runtime for Java application that adds supported images to the map by opening a folder and searching for a particular file extension

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["geopackage"](https://esri-es.github.io/arcgis-search/?search="geopackage"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).
