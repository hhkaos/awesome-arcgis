> **Goal**: compile everything a user or developer interested in this topic should know about it in the Esri World.

---
> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# TopoJSON

*Very short description about it*

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

* **Purpose**: Extension of GeoJSON. TopoJSON introduces a new type, "Topology", that contains GeoJSON objects. Usually used combined with D3.js
* **Data type**: [vector](../../../data-types/vector/README.md)
* **Type of format**: [GIS](../../../data-types/vector/gis/README.md)
* **Multi-file format**: No
* **File type**: plain-text
* **File extension(s)**: .json
* **Originally developed by**: [Michael Bostock](https://github.com/mbostock)
* **Technical description/specification**: [The TopoJSON Format Specification](https://github.com/topojson/topojson-specification/blob/master/README.md)
* **License**: [Copyright (c) 2012-2016, Michael Bostock All rights reserved.](https://github.com/topojson/topojson/blob/master/LICENSE.md)
* **Regulated by**: [Michael Bostock](https://github.com/mbostock)
* **Status**: Open specification
* **Sample file(s)**: [TopoJSON gallery](https://github.com/topojson/topojson/wiki/Gallery)
* **Consumable by**: *Esri products supporting it*

## Introduction

[From TopoJSON Wiki](https://github.com/topojson/topojson/wiki/Introduction):

> TopoJSON is an extension of GeoJSON. TopoJSON introduces a new type, "Topology", that contains GeoJSON objects. A topology has an objects map which indexes geometry objects by name. These are standard GeoJSON objects, such as polygons, multi-polygons and geometry collections. However, the coordinates for these geometries are stored in the topology's arcs array, rather than on each object separately. An arc is a sequence of points, similar to a line string; the arcs are stitched together to form the geometry. Lastly, the topology has a transform which specifies how to convert delta-encoded integer coordinates to their native values (such as longitude & latitude).

## Additional documentation

* [TopoJSON 2.0 API Reference](https://github.com/topojson/topojson/blob/master/README.md)

## Tools

* [Koop](../../../../../devops/technologies/koop/README.md): An Open Geospatial ETL Engine that can translate into the [Geoservices specification](https://geoservices.github.io/) supported by the ArcGIS.

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["topojson"](https://esri-es.github.io/arcgis-search/?search="topojson"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).
