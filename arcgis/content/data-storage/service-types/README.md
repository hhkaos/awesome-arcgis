> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Service types in ArcGIS

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

Long time ago both the applications an the source code use to live in the same machine. Nowadays software architectures have evolved and distributed software is very common.

That's why ArcGIS provide many service type to be able to access to all the content stored in your databases or files.

**Learn more about the:** [types of services can you publish?](http://server.arcgis.com/en/server/latest/publish-services/linux/what-types-of-services-can-you-publish.htm)

|Service type|ArcGIS Online|ArcGIS Enterprise|
|---|---|---|
|[Feature service](feature-service/README.md)|Yes|Yes|
|Map service|Yes|Yes
|Vector tile service|Yes|Yes
|Geocode service|no?|Yes
|Geodata service|n.a|Yes
|Geometry service||Yes
|[Image services](./image-services/README.md)|Limited|Yes ([Image Server](../../../products/extensions/image-server/README.md) required)|
|KML service||Yes
|Network analyst service||Yes
|[Scene service](scene-service/README.md)|Yes|Yes
|Schematic service||Yes
|[OGC service](ogc-service/README.md)|WFS and WMTS|Yes
|Stream service|As item|Yes
|Geoprocessing service|As item|Yes

> Note: [What is geoprocessing?](http://pro.arcgis.com/en/pro-app/help/analysis/geoprocessing/basics/what-is-geoprocessing-.htm)
