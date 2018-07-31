> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# GIS data

When we talk about vector GIS data we are referring to objects on the surface of the earth (roads, rivers, neighborhoods, public lighting, houses, etc.)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Data storage](#data-storage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

The vector data model in GIS represents discrete objects on the surface of the earth: roads, rivers, neighborhoods, public lighting, houses, etc. Discrete objects are those that have their limits well defined.

These spatial objects can be represented as:

* **Point**: its spatial geometry consists of a single vertex.
    * They are used for geographical entities that can best be expressed by a single point of reference, such as a specific location of a tree, box or other point of interest.
    * A point-type object is described by its coordinates X, Y and optionally, Z.
    * The point is described by attributes such as, for example, a tree or a street lamp.
    * They can also be used to represent areas on a small scale. For example, cities on a world map will be represented by points instead of polygons.

* **Line or polyline**: its spatial geometry consists of two or more vertices.
    * A polyline is used to show the geometry of linear entities such as roads, rivers, contours, trails, flight paths, etc.
    * A polyline is a sequence of joined vertices. Each vertex has X and Y coordinates (and optionally Z). The distance can be measured.
    * The attributes of each polyline describe the properties or characteristics. For example, a road polyline may have attributes that describe whether it is a gravel or tar surface, how many lanes it has, whether it is a road, street, etc.

* **Polygon**: its spatial geometry consists of four or more vertices and the first and the last is the same.
    * The polygonal entities are closed areas such as dams, islands, administrative areas, etc.
    * Sequence of joined vertices, where the first and the last are the same. You can measure the area.
    * The attributes describe each polygon. For example, a land map might have attributes on land uses.

Choosing what type of geometry to use depends on the scale, convenience and what you want to do with the data in the GIS.
Most GIS applications do not allow you to mix more than one type of geometry in a single layer.

## Data storage

* **Database formats**: Esri Enterprise GeoDatabase, PostGIS, ...
* **GIS file formats**: [Shapefile](../../../data-storage/file-formats/shapefile/README.md), [personal geodatabase](../../../data-storage/file-formats/mdb/README.md), [File Geodatabase](../../../data-storage/file-formats/gdb/README.md), ...
* **General purpose file formats**: CSV,  Excel, ...
