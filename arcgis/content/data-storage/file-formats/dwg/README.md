> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# DWG file formats

The [DWG](https://en.wikipedia.org/wiki/.dwg) format is the most widespread format used to create and share CAD data. In addition to Autodesk's proprietary versions, several third-party variants are also common.

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

* **Purpose**: *Unknown*
* **Data type**: [vector](../../../data-types/vector/README.md)
* **Type of format**: [CAD](../../../data-types/vector/cad/README.md)
* **Multi-file format**: Yes/No/Optional
* **File type**: binary/text-file
* **File extension(s)**: .dwg
* **Originally developed by**: [Autodesk](https://en.wikipedia.org/wiki/Autodesk), [Open Design Alliance](https://en.wikipedia.org/wiki/Open_Design_Alliance) and others (1982)
* **Technical description/specification**: n.a.
* **License**: *Unknown*
* **Regulated by**: Autodesk
* **Status**: proprietary
* **Sample file(s)**: [DWG sample files](https://esri-es.github.io/arcgis-developer-tips-and-tricks/arcgis-online/search/?q=dwg+type%3A%22CAD+Drawing%22&numResults=100&sortField=relevance&Thumbnail=generateThumbnail%28elem%29&Title=elem.title&Details=%27%3Ca+href%3D%22https%3A%2F%2Fwww.arcgis.com%2Fhome%2Fitem.html%3Fid%3D%27%2Belem.id%2B%27%22+target%3D%22_blank%22%3EDetails%3C%2Fa%3E%27&Owner=elem.owner&Type=elem.type&Type+keywords=elem.typeKeywords&Views=elem.numViews)
* **Consumable by**:
    * [ArcGIS Pro](../../../../products/arcgis-desktop/arcgis-pro/README.md) - [How to](http://pro.arcgis.com/en/pro-app/help/data/cad/georeferencing-cad-data.htm)
    * [ArcMap](../../../../products/arcgis-desktop/arcmap-arccatalog/README.md) - [How to](https://support.esri.com/en/technical-article/000012483)
    * [ArcGIS Data interoperability](../../../../products/extensions/data-interoperability/README.md)
    * ...

## Introduction

> Computer-Aided Design aids in the creation, modification, analysis, or optimization of a 2D and 3D designs. It is extensively used in many applications, including automotive, shipbuilding, and aerospace industries, industrial and architectural design, prosthetics, and many more.

Currently, [AutoCAD](https://en.wikipedia.org/wiki/AutoCAD) and [MicroStation](https://en.wikipedia.org/wiki/MicroStation) are the two most widely used general-purpose CAD platforms.

**[DWG](https://en.wikipedia.org/wiki/.dwg)** is binary file format used for storing two- and three- dimensional design data and metadata (developer by [Autodesk](https://en.wikipedia.org/wiki/Autodesk) for AutoCAD). DWG is a competing format to Autodesk's [DGN](../dgn/README.md).

The usual workflow when working with CAD data is to define a spatial reference, add the data to the map, georeference the dataset with existing data and set the display properties.

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["DWG"](https://esri-es.github.io/arcgis-search/?search="DWG"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

## Contributions

Feel free to improve/extend this resource page using [this template](https://github.com/hhkaos/awesome-arcgis/blob/master/templates/FILE_FORMAT_PAGE_TEMPLATE.md) ([Contribution Guide](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md)).
