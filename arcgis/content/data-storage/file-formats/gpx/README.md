> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# GPX

GPX (the GPS Exchange Format) is a light-weight XML data format for the interchange of GPS data (waypoints, routes, and tracks) between applications and Web services on the Internet.

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

* **Purpose**: Interchange of GPS data (waypoints, routes, and tracks)
* **Data type**: [vector](../../../data-types/vector/README.md)
* **Type of format**: [GIS](../../../data-types/vector/gis/README.md)
* **Multi-file format**: No
* **File type**: plain-text
* **File extension(s)**: .gpx
* **Originally developed by**: Topografix (2002)
* **Technical description/Specification/Schema**: [GPX 1.1 Schema](http://www.topografix.com/gpx/1/1/gpx.xsd)
* **License**: *Unknown*
* **Regulated by**: Topografix
* **Status**: Open specification
* **Sample file(s)**: [GPX samples form GitHub Gists](https://gist.github.com/search?utf8=%E2%9C%93&q=gpx+sample&ref=searchresults)
* **Consumable by**:
    * [ArcGIS Pro](../../../../products/arcgis-desktop/arcgis-pro/README.md) - [How to: GPX To Features](http://pro.arcgis.com/en/pro-app/tool-reference/conversion/gpx-to-features.htm)
    * [ArcMap](../../../../products/arcgis-desktop/arcmap-arccatalog/README.md) - [How to: GPX To Features](http://desktop.arcgis.com/en/arcmap/10.3/tools/conversion-toolbox/gpx-to-features.htm)
    * [ArcGIS Online](../../../../products/arcgis-online/README.md) - [How to](https://www.esri.com/arcgis-blog/products/arcgis-online/uncategorized/using-gps-data-in-arcgis-online-web-maps/)
    * ...

## Introduction

GPX or GPS eXchange Format (GPS Interchange Format) is an XML schema designed to transfer GPS data between applications. It can be used to describe points (waypoints), routes (tracks), and routes (routes).

GPX establishes a standard way for the exchange and storage of information
maps on GPS devices, phones, watches and computers. An experienced technician can read a GPX file manually using simple text editing programs; you do not need specialized software to decode the information.
 
A device saves GPX data as a standard Unicode text file, usually with the GPX extension. The file itself contains data elements encapsulated in XML tags. The GPX specification accommodates any number of points that indicate a path or path, so GPX files can have any size. Simple files with few elements occupy less than 100 Kb. These files are self-contained, so their format requires only one file to describe a complete set of map data.

### Additional documentation

* [ArcGIS Online -> About GPX files](http://doc.arcgis.com/en/arcgis-online/reference/csv-gpx.htm#ESRI_SECTION1_44F0AF5FDE8640548B2B13A278FAB3E9)

### Tools & Samples

* [Features to GPX](https://www.arcgis.com/home/item.html?id=067d6ab392b24497b8466eb8447ea7eb): This tool turns features into a GPX file (a file type used by GPS devices and Smart Phones with GPS applications).
* [GPX Validator](http://www.topografix.com/gpx_validation.asp)
* [Koop](../../../../../devops/technologies/koop/README.md): An Open Geospatial ETL Engine that can translate into the [Geoservices specification](https://geoservices.github.io/) supported by the ArcGIS.

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["GPX"](https://esri-es.github.io/arcgis-search/?search="GPX"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).
