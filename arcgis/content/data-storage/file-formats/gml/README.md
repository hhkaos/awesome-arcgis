> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# GML

GML (Geography Markup Language) is the XML standard of the OGC to represent information of spatial elements

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Quick overview](#quick-overview)
- [Introduction](#introduction)
  - [Additional documentation](#additional-documentation)
  - [Tools & Samples](#tools--samples)
- [Additional resources](#additional-resources)
  - [Localized resources](#localized-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quick overview

* **Purpose**: XML standard to represent information of spatial elements
* **Data type**: [vector](../../../data-types/vector/README.md)
* **Type of format**: [GIS](../../../data-types/vector/gis/README.md)
* **Multi-file format**: No
* **File type**: text-file
* **File extension(s)**: .gml, .xml
* **Originally developed by**: 	[Open Geospatial Consortium (OGC)](https://en.wikipedia.org/wiki/Open_Geospatial_Consortium) (2000)
* **Technical description/specification/schemas**: [GML Official Schemas](http://www.opengeospatial.org/standards/gml#schemas)
* **License**: *Unknown*
* **Regulated by**: [Open Geospatial Consortium (OGC)](http://www.opengeospatial.org/standards/gml#schemas)
* **Status**: Standard, [ISO 19136:2007](http://www.iso.org/iso/iso_catalogue/catalogue_tc/catalogue_detail.htm?csnumber=32554)
* **Sample file(s)**: [GML samples on GitHub Gist](https://gist.github.com/search?utf8=%E2%9C%93&q=gml+sample)
* **Consumable by**:
    * [ArcGIS Desktop using ArcGIS Data Interoperabilty](https://support.esri.com/en/technical-article/000009150) (included in the [Esri Startup Program](../../../../../esri/startup-program/README.md) and the [ArcGIS Developer Subscription Professional Plan](https://developers.arcgis.com/pricing/))

## Introduction

GML (Geography Markup Language) is the XML standard of the OGC to represent information of spatial elements. The metadata exchange format is XML (eXtensible Markup Language).

GML was designed based on the abstract specification produced by the OpenGIS group, now Open Geospatial Consortium, and the ISO 19100 document series. GML does not contain specific information on how the visualization of the represented data should be done. For this, styles that are related to GML are used and are described in other XML sublanguages. Other extensions managed by GML include SMIL to define interaction elements and XPointer to represent metadata.

This format is used for the exchange of cadastral data, in addition to the Land Registry in Spain.
There are two formats, both based on the European INSPIRE directive:

* CP (Cadastral Parcel) for cadastral parcels
* BU (Building) for buildings.

One of the main problems of this trademark language is that there is the impossibility of downloading a GML document from a web service (server) other than that the web application was downloaded. This problem is called Cross-Domain.

### Additional documentation

### Tools & Samples

* [Koop](../../../../../arcgis/developers/devops/technologies/koop/README.md): An Open Geospatial ETL Engine that can translate into the [Geoservices specification](https://geoservices.github.io/) supported by the ArcGIS.
* [GML 2.1.2 validator](http://cite.opengeospatial.org/test_engine/gml/2.1.2/validator/)


## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["GML"](https://esri-es.github.io/arcgis-search/?search="GML"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

### Localized resources

* [Importador GML Catastro](http://www.esri.es/arcgis/soluciones/administracion/conversores-catastro/)
* [Herramientas ArcGIS Data Interoperabilty Extension (DIE) para tratamiento de GML Catastro](https://www.arcgis.com/home/item.html?id=82fcd952418d4adf8703215359c34cc3): Convertir GML a FileGDB
