> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Multi-Resolution Seamless Image Database (MrSID)

MrSID (pronounced Mister Sid) is an acronym that stands for multiresolution seamless image database. It is a file format (filename extension .sid) developed and patented by LizardTech for encoding of georeferenced raster graphics, such as orthophotos. | *Source:  [wikipedia](https://en.wikipedia.org/wiki/MrSID)*.


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

**Description**: A proprietary compression technique especially for maintaining the quality of large images. Allows for a high compression ratio and fast access to large amounts of data at any scale. The MrSID Encoder is developed and supported by [LizardTech, Inc](http://www.lizardtech.com/). Supports generations 2, 3, and 4.

**Extensions**: Single file—extension \*.sid, World file—extension \*.sdw

**Read/Write**: Read-only

**Supported data types**: 8- and 16-bit unsigned integer

**Supports multiband**: Yes:

* Generation 2 and generation 3—limited to 1 or 3 bands
* Generation 4—unlimited"

**Supports compression**: Wavelet (lossy)

**Supports color map**: No

## Introduction

MrSID was originally developed for Geographic Information Systems (GIS). With this format, large raster image files such as aerial photographs or satellite imagery are compressed and can be quickly viewed without having to decompress the entire file.
