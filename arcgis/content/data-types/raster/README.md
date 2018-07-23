> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Raster data types

Rasters are digital aerial photographs, imagery from satellites, digital pictures, or even scanned maps.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Raster data types](#raster-data-types)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

The raster model represents the surface of the earth as a grid of cells of equal size (square meter, square mile, ...) is usually used to represent continuous phenomena.

![Raster data](http://desktop.arcgis.com/en/arcmap/latest/manage-data/raster-and-images/GUID-6754AF39-CDE9-4F9D-8C3A-D59D93059BDD-web.png)

Each cell must be rectangular, although not necessarily square, and it keeps both the coordinates of the location and the thematic value. The location of each cell is implicit, depending directly on the order it occupies in the grid, unlike the vector structure in which the topology is stored explicitly. The areas that contain the same thematic attribute are recognized as such, although the raster structures do not identify the boundaries of those areas as polygons per se.
The pixel / cell refers to the minimum unit of information of an image or a raster map. It is the smallest element to which a visualization device can independently assign an attribute such as color.

[What is raster data?](http://desktop.arcgis.com/en/arcmap/latest/manage-data/raster-and-images/what-is-raster-data.htm)

## Raster data types

Some raster data file formats:

* Enhanced Compressed Wavelet (ECW)
* Tagged Image File Format (TIFF) (GeoTIFF tags are supported.)
* Multiresolution Seamless Image Database (MRSID)

* [View full list of ArcGIS supported raster dataset file formats](http://desktop.arcgis.com/en/arcmap/10.3/manage-data/raster-and-images/supported-raster-dataset-file-formats.htm)
