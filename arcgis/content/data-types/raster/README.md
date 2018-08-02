> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Raster data types

Rasters are digital aerial photographs, imagery from satellites, digital pictures, or even scanned maps.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Raster data types](#raster-data-types)
- [Videos](#videos)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

The raster model represents the surface of the earth as a grid of cells of equal size (square meter, square mile, ...) is usually used to represent continuous phenomena.

![Raster data](http://desktop.arcgis.com/en/arcmap/latest/manage-data/raster-and-images/GUID-6754AF39-CDE9-4F9D-8C3A-D59D93059BDD-web.png)

> Learn more: [What is raster data?](http://desktop.arcgis.com/en/arcmap/latest/manage-data/raster-and-images/what-is-raster-data.htm)

Raster data types could be classified in many different ways,

* **Number of spectral bands**: sunlight consist of more wavelengths of electromagnetic radiation than the human eye can see (images are single band or multispectral)
    * **Single bands**: grayscale imagery, DEM (Digital Elevation Model), 3D imagery (DTM and DSM)
    * **Multispectral**: NaturalColor, color infrared, NDMI, NDVI, ...

* **Imagery sources** (Sensor platforms):
    * Satellites: Landsat, MODIS, Sentinel, WorldView, ...
    * Aerial: aircrafts, helicopters, balloons, drones (UAVs), blimps and dirigibles, rockets, pigeons, kites, parachutes, ...
    * Ground based: vehicle-mounted poles, stand-alone telescoping, handheld, ...

* **Sensor type used**:
    * Passive (record reflected sunlight): cameras, spectrometers
    * Active (emit energy and record reflected radiation): Lidar, Radar, Sonar

* **Number of dimensions**: unidimensional or multidimensional.

* **Use type**: basemap, multispectral, temporal, event, elevation, ...

## Raster data types

> PENDING TO REVIEW THIS CLASSIFICATION

There are two main raster data types:

* [Aerial photography, aerial imagery or airborne imagery](./aerial-imagery/README.md): photographs from an flying object (aircraft, helicopters, UAVs (or "drones"), etc.
* [Satellite imagery (from satellite sensors)](./satellite-sensor/README.md)
* [Multidimensional data](./multidimensional/README.md): refers to data normally stored as variables, where each variable is a multidimensional array.

Digital pictures, or even scanned maps.

## Videos

[Imagery Youtube Playlist](https://www.youtube.com/playlist?list=PLahIW2YFPQd5uO1xe6QmO2wsQHfWnRs-B)

* [Imagery Sources and Usage in ArcGIS](https://www.youtube.com/watch?v=pnoj24ncZas&t=5s)
* [Python: Working with Raster Data](https://www.youtube.com/watch?v=1jx5uRwLld8&t=2625s)
