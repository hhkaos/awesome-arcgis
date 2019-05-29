> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# GTFS

The General Transit Feed Specification (GTFS) defines an open standard format for exchanging public transportation schedule, geographic and fare information.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Quick overview](#quick-overview)
- [Introduction](#introduction)
- [Additional documentation](#additional-documentation)
- [Tools](#tools)
- [Additional resources](#additional-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quick overview

* **Purpose**: Exchanging public transportation schedule, geographic and fare information.
* **Data type**: [vector](../../../data-types/vector/README.md)
* **Type of format**: [Transit schedule format](../../../data-types/vector/transit-schedule/README.md)
* **Multi-file format**: Yes (ZIP)
* **File type**: binary
* **File extension(s)**: .zip (agency.txt, routes.txt, trips.txt, stop_times.txt, stops.txt, calendar.txt)
* **Originally developed by**: started out as a side project of Google employee Chris Harrelson (2006)
* **Technical description/specification**: [General Transit Feed Specification Reference](https://developers.google.com/transit/gtfs/reference/)
* **License**: CC BY 3.0
* **Regulated by**: Google
* **Status**: de facto standard
* **Sample file(s)**: [gtfs.org/examples/](http://gtfs.org/examples/)
* **Consumable by**:
    * ArcMap
    * ArcGIS Pro
    * GeoEvent
    * ...

## Introduction

It is a file format extended from CSV ([vector data types](../../../data-types/vector/README.md))  as a format for public transportation schedules and associated geographic information. It has become a de facto standard.

## Additional documentation

* [Cool tools for analysis with public transit data](https://www.esri.com/arcgis-blog/products/network-analyst/analytics/cool-tools-for-analysis-with-public-transit-data/)
* [How to make a shapes.txt file for your GTFS dataset with ArcGIS](https://blogs.esri.com/esri/arcgis/2017/07/19/how-to-make-a-shapes-txt-file-for-your-gtfs-dataset-with-arcgis/)

## Tools

* [Display GTFS transit stops and lines (route shapes) in ArcMap or ArcGIS Pro](https://www.arcgis.com/home/item.html?id=380aa7cbf010417ab3ae32a6f11e00d9)
* [public-transit-tools](http://esri.github.io/public-transit-tools/): python tools for working with GTFS public transit data in ArcGIS
* [gtfsrealtime-for-geoevent](https://github.com/Esri/gtfsrealtime-for-geoevent): ArcGIS GeoEvent Server sample connector for GTFS (Google Transit Feed Specification) real-time feed.

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["GTFS"](https://esri-es.github.io/arcgis-search/?search="GTFS"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).
