> **Note**: this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# ArcGIS Third-Party Integrations

Find how to integrate your ArcGIS deployment with any other piece of technology to synchronize data, processes or create end-to-end workflows.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Overview](#overview)
- [Integration tools](#integration-tools)
  - [Automation Tools](#automation-tools)
  - [Data Integration Tools](#data-integration-tools)
- [ArcGIS Interoperable Products](#arcgis-interoperable-products)
  - [Computer-aided Design & Engineering](#computer-aided-design--engineering)
  - [Reporting Tools / BI tools](#reporting-tools--bi-tools)
  - [Facilities / Property / Workplace management](#facilities--property--workplace-management)
  - [Street-level imagery](#street-level-imagery)
  - [Content Management Software (CMS)](#content-management-software-cms)
  - [Office productivity](#office-productivity)
  - [Content Collaboration Platforms](#content-collaboration-platforms)
  - [Graphics & Photo Editing](#graphics--photo-editing)
- [Custom Integrations](#custom-integrations)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Overview

Nowadays, **any organization uses multiple products and technologies** in its day-to-day operations, products specialized in solving different needs that are **complementary to** those solved by **ArcGIS**.

The ideal scenario for any organization is to have the ability to interoperate and connect these technologies to synchronize data, processes or create end-to-end workflows.

To accomplish that you have three options:

* **Using integration tools**: tools specifically designed to connect products through graphic interfaces from which connectors are configured to automate processes between different technologies.

* **Use an ArcGIS Interoperable Product**: there are many existing products that are already interoperable with ArcGIS Product.

* **Develop an integration**: we and support standards, have open specifications, and provide APIS, libraries and other mechanisms to allow anyone to integrate with ArcGIS.

> **IMPORTANT:** on this page you won't find a complete list. We are adding products and technologies based on requests, so if you want to know if a product is interoperable with ArcGIS please write a comment.

## Integration tools

Below you will find some technologies that will allow you to connect your data or automate tasks with ArcGIS and another software.

### Automation Tools

Connect to thousands technologies and automate repetitive tasks using the out of the box 'integrations' provided by these tools.

**Important:** The list of connectors provided by these products is huge and constantly updated, so please check on their site directly to know if there is an integration with the product you are looking for.

|Product|Summary|
|---|---|
|Try.it|Manual, schedules and webhook triggers to apply edits, get features, layers, etc using [their ArcGIS connector](https://tray.io/connectors/arcgis-integrations).
|Microsoft Flow / Power Automate|Provides a [Survey123 connector](https://flow.microsoft.com/en-us/connectors/shared_survey123/survey123/) that connect to ArcGIS Online Hosted Feature Services Webhooks.
|Integromat|Create your customized scenario with Integromat. Automate repetitive tasks involved in using Survey123 and make your work easier. Read more: [Survey123 connector for Integromat](https://www.integromat.com/en/integrations/survey123)
|Zapier|Use [Zapier Connector for ArcGIS](https://marketplace.arcgis.com/listing.html?id=5ab7936269f8449b82b0f5c78695ab38) to map data from more than 1300 cloud apps on ArcGIS online. The connector will georefrence your data from spreadsheets, database tables, your CRM and ERP, and map it in ArcGIS Online in real time.
|Mapillary|It is allows to automates mapping using collaboration, cameras, and computer vision. Integrate Mapillary into ArcGIS Online, Web AppBuilder for ArcGIS and ArcGIS Pro with [Mapillary for ArcGIS](https://www.mapillary.com/arcgis).

### Data Integration Tools

**Important:** The list of data sources and formats supported by these tools is huge and constantly updated, so please check on their site directly to know if there is an integration with the product you are looking for.

|Product|Summary|
|---|---|
|FME|This ETL allows you to easily transform almost any dataset into an ArcGIS Compatible format and vicebersa. [Support +500 formats and technologies](https://www.safe.com/integrate/): DWG, HDFS, SHP, FGDB, Raster dataset, Oracle, Trimble SketchUp, Revit, Mapbox MBTiles, ERDAS, Elastic Search, DynamoDB, Hive, CouchDB, Google BigQuery, Carto etc. [ArcGIS Data Interoperability Extension](../products/extensions/data-interoperability/README.md) is also build on top of this software.
|Koop|Open Source that provides connectors to different data sources: AWS S3 Select, Google Analytics, Google Sheets, Gist, Socrata, MongoDB, Strava, Zillow, Carto, ServiceNow, PostgreSQL, CKAN, Yelp, Salesforce, etc. [Learn more](../developers/profiles/devops/technologies/koop/README.md).

## ArcGIS Interoperable Products

Below you will find a list of **commercial products and open source technologies** that are not owned by Esri but are already **interoperable with ArcGIS**.

### Computer-aided Design & Engineering

|Product|Integration type|
|---|---|
|Autocad|Revit is supported by ArcGIS Pro. It also exists a free plug-in to connect AutoCAD to ArcGIS ([ArcGIS for Autocad](../products/arcgis-for-autocad/README.md)). Work with Autodesk Civil 3D and InfraWorks directly though the [Autodesk Connector for ArcGIS](https://www.esri.com/en-us/about/esri-partner-network/our-partners/global-alliances/autodesk-esri)

### Reporting Tools / BI tools

|Product|Integration type|
|---|---|
|Stratio|It is possible to see data from Stratio on ArcGIS
|Power BI|Allow users can tap into the power of geospatial analytics, and access new map themes, demographic data, and map visualizations, inside Power BI. Read more about: [ArcGIS Maps for Power BI](../products/arcgis-maps-for-power-bi/README.md)

### Facilities / Property / Workplace management

|Product|Integration type|
|---|---|
|ServiceNow|It is integrated via ArcGIS Indoors ([video](https://youtu.be/Qp06rR0r6m8?t=1134)) which is made by the [Koop Servicenow provide](https://github.com/Esri/indoors-servicenow-feature-service). [Tray.io](https://tray.io/connectors/arcgis-servicenow-integrations) and [Strave](https://blog.staveapps.com/using-arcgis-online-with-servicenow) also offers integrations.
|Archibus|[ARCHIBUS Inc. is a partner](https://www.esri.com/partners/archibus-inc-a2T70000000TNKTEA4) it provides a [GeoSpatial Extension for Esri](https://archibus.com/products/extensions-framework/geospatial-extensions-for-esri/) : [Video](https://www.youtube.com/watch?v=EXmN4Ihqr6Q) \| [Flyer](https://www.archibus.net/ESRI-Integration)

### Street-level imagery

|Product|Integration type|
|---|---|
|Mapillary|It is allows to automates mapping using collaboration, cameras, and computer vision. Integrate Mapillary into ArcGIS Online, Web AppBuilder for ArcGIS and ArcGIS Pro with [Mapillary for ArcGIS](https://www.mapillary.com/arcgis).

### Content Management Software (CMS)

|Product|Integration type|
|---|---|
|Wordpress|Load ArcGIS Web Maps in Wordpress, [read more](https://www.geo-jobe.com/web-maps-for-wordpress/free/).

### Office productivity

|Product|Integration type|
|---|---|
|Microsoft Excel|Visualize and publish your data from Excel to ArcGIS directly using ArcGIS Maps for Office plugin
|Microsoft PowerPoint|Load maps form ArcGIS in your presentations

### Content Collaboration Platforms

|Product|Integration type|
|---|---|
|Microsoft SharePoint|Turn lists or data into color-coded, point, clustered point, or heat maps. Enrich key business measures with demographic and lifestyle data from Esri using [ArcGIS Maps for Sharepoint](../products/arcgis-maps-for-sharepoint/README.md)

### Graphics & Photo Editing

|Product|Integration type|
|---|---|
|Adobe Creative Cloud|Access and design with data-driven maps inside Adobe Illustrator and Photoshop with [ArcGIS Maps for Adobe Creative Cloud](../products/arcgis-maps-for-adobe-creative-cloud/README.md)

## Custom Integrations

Check our [open vision](../../esri/open-vision/README.md) and [developers tools](../developers/README.md) and you will find almost any integration can be made.

> **Note**: Not only you can use Koop, ArcGIS Webhooks and the APIs to integrate you data with ArcGIS. You have also the chance to install its Spatial Database Engine on top of the most populars SGBDM: PostgreSQL, Microsoft SQL server, Oracle, SAP HANA, etc. Learn more about [Enterprise Geodatabases](../content/data-storage/databases/enterprise-geodatabase/README.md)

If you need help on doing custom integrations we recommend you to Esri directly for help and if needed, we will put you in contact with one of [our partners](../../esri/partners/program-members/README.md)
