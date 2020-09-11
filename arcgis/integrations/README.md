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
  - [Reporting Tools / Business Intelligence (BI) tools](#reporting-tools--business-intelligence-bi-tools)
  - [Facilities / Property / Workplace / Asset Management](#facilities--property--workplace--asset-management)
  - [Computerized Maintenance Management Software (CMMS)](#computerized-maintenance-management-software-cmms)
  - [Field Service Management (FSM)](#field-service-management-fsm)
  - [Business Process Automation](#business-process-automation)
  - [Data Science Platforms](#data-science-platforms)
  - [Web Content Management Software (WCMS)](#web-content-management-software-wcms)
  - [Enterprise Content Management](#enterprise-content-management)
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

[Computer-aided design](https://en.wikipedia.org/wiki/Computer-aided_design) (CAD) is the use of computers (or workstations) to aid in the creation, modification, analysis, or optimization of a design.

|Product|Integration type|
|---|---|
|Autocad|Revit is supported by ArcGIS Pro. It also exists a free plug-in to connect AutoCAD to ArcGIS ([ArcGIS for Autocad](../products/arcgis-for-autocad/README.md)). Work with Autodesk Civil 3D and InfraWorks directly though the [Autodesk Connector for ArcGIS](https://www.esri.com/en-us/about/esri-partner-network/our-partners/global-alliances/autodesk-esri)

### Reporting Tools / Business Intelligence (BI) tools

[Business intelligence](https://en.wikipedia.org/wiki/Business_intelligence) (BI) comprises the strategies and technologies used by enterprises for the data analysis of business information.[1] BI technologies provide historical, current, and predictive views of business operations.

|Product|Integration type|
|---|---|
|Tableau|They provide a connector to ArcGIS Server to set it up as a data  source. The connector also supports connections via GeoService API. Learn more: [support](https://help.tableau.com/current/pro/desktop/en-us/examples_esri.htm) \| [tutorial: Connect to Esri and Oracle](https://www.tableau.com/about/blog/2020/4/more-spatial-data-power-tableau-connect-esri-and-oracle)
|Power BI|Allow users can tap into the power of geospatial analytics, and access new map themes, demographic data, and map visualizations, inside Power BI. Read more about: [ArcGIS Maps for Power BI](../products/arcgis-maps-for-power-bi/README.md)
|Stratio|It is possible to see data from Stratio on ArcGIS

### Facilities / Property / Workplace / Asset Management

[Computer-aided facility management](https://en.wikipedia.org/wiki/Computer-aided_facility_management) (CAFM) is the support of [facility management](https://en.wikipedia.org/wiki/Facility_management) by information technology.[1] The supply of information about the facilities is the center of attention.

|Product|Integration type|
|---|---|
|ServiceNow|It is integrated via ArcGIS Indoors ([video](https://youtu.be/Qp06rR0r6m8?t=1134)) which is made by the [Koop Servicenow provide](https://github.com/Esri/indoors-servicenow-feature-service). [Tray.io](https://tray.io/connectors/arcgis-servicenow-integrations) and [Strave](https://blog.staveapps.com/using-arcgis-online-with-servicenow) also offers integrations.
|Archibus|[ARCHIBUS Inc. is a partner](https://www.esri.com/partners/archibus-inc-a2T70000000TNKTEA4) it provides a [GeoSpatial Extension for Esri](https://archibus.com/products/extensions-framework/geospatial-extensions-for-esri/) : [Video](https://www.youtube.com/watch?v=EXmN4Ihqr6Q) \| [Flyer](https://www.archibus.net/ESRI-Integration)

### Computerized Maintenance Management Software (CMMS)

[Computerized maintenance management system](https://en.wikipedia.org/wiki/Computerized_maintenance_management_system) (CMMS), also known as computerized maintenance management information system (CMMIS), is a software package that maintains a computer database of information about an organization's maintenance operations

|Product|Integration type|
|---|---|
|Cartegraph| The most common integration path connects asset records in the Cartegraph database with asset features in ArcGIS. [Learn more](https://campus.cartegraph.com/Help/Implementation/Implementation_How-To/Cartegraph_and_ArcGIS_Integration_Guide)

### Field Service Management (FSM)

 The market for [FSM software](https://en.wikipedia.org/wiki/Field_service_management#Software) remains fragmented. The software can be deployed both on-premises or as a hosted or cloud-based system. Typically, FSM software is integrated with backend systems such as service management, billing, accounting, parts inventory and other HR systems.

|Product|Integration type|
|---|---|
|Oracle E-Business Suite|Oracle Enterprise Asset Management directly integrates with an ESRI GIS System. With this integration, ESRI is the primary source GIS system. The geometry would be part of the ESRI GIS, and EAM holds the reference of the geometry and pulls the geometry whenever required. [Learn more](https://docs.oracle.com/cd/E26401_01/doc.122/e48789/T259967T634229.htm#T634231)
|Field Squared|Create and schedule work orders against your Esri assets, automate asset management and maintenance workflows utilizing your Esri assets, etc. [Learn more](https://fieldsquared.com/platform/esri-arcgis-integration/)

### Business Process Automation

[Business process automation](https://en.wikipedia.org/wiki/Business_process_automation) (BPA), also known as business automation or digital transformation, is the technology-enabled automation of complex business processes.

|Product|Integration type|
|---|---|
|Mapillary|Street-level imagery platform that scales and automates mapping using collaboration, cameras, and computer vision. Integrate Mapillary into ArcGIS Online, Web AppBuilder for ArcGIS and ArcGIS Pro with [Mapillary for ArcGIS](https://www.mapillary.com/arcgis).

### Data Science Platforms

[Data science](https://en.wikipedia.org/wiki/Data_science) is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data.

|Product|Integration type|
|---|---|
|Alteryx|Alteryx can use ArcGIS as a data source [reading and writing from FileGeodatabases](https://help.alteryx.com/2019.2/DataSources/ESRI.htm) .
|IBM Cloud|Watson Studio leverages the ArcGIS platform to quickly integrate maps, global data, advanced geospatial analytics with Watson machine learning models and data science solutions. Use the Python API for ArcGIS compose and automate model workflows together with Jupyter Notebooks, R, and leading scripting languages. [Learn more](https://www.esri.com/en-us/about/esri-partner-network/our-partners/global-alliances/ibm/ibm-cloud).

### Web Content Management Software (WCMS)

A [web content management system](https://en.wikipedia.org/wiki/Web_content_management_system) (WCM or WCMS) is a software content management system (CMS) specifically for web content.

|Product|Integration type|
|---|---|
|Wordpress|Load ArcGIS Web Maps in Wordpress, [read more](https://www.geo-jobe.com/web-maps-for-wordpress/free/).
|Microsoft SharePoint|Turn lists or data into color-coded, point, clustered point, or heat maps. Enrich key business measures with demographic and lifestyle data from Esri using [ArcGIS Maps for Sharepoint](../products/arcgis-maps-for-sharepoint/README.md)

### Enterprise Content Management

[Enterprise content management](https://en.wikipedia.org/wiki/Enterprise_content_management) (ECM) extends the concept of content management by adding a timeline for each content item and, possibly, enforcing processes for its creation, approval and distribution.

|Product|Integration type|
|---|---|
|Laserfiche|This integration allows users to view, search, and upload documents directly into Laserfiche through the ArcGIS interface. [Learn more](https://www.laserfiche.com/marketplace/cities-digital-arcgis/)
|M-Files|M-Files for Esri ArcGIS functions on two levels. From the user perspective, the M-Files for ArcGIS integration offers a seamless way of working, accessing, and managing content. The M-Files interface is embedded into your ArcGIS web applications allowing users to access and interact with related content from M-Files. Likewise, ArcGIS maps are embedded into the M-Files desktop application, allowing users to access related map(s) and assets. [Learn more](https://www.m-files.com/en/m-files-for-esri-arcgis)

### Office productivity

[Productivity software](https://en.wikipedia.org/wiki/Productivity_software) (also called personal productivity software or office productivity software) is application software used for producing information (such as documents, presentations, worksheets, databases, charts, graphs, digital paintings, electronic music and digital video).

|Product|Integration type|
|---|---|
|Microsoft Excel|Visualize and publish your data from Excel to ArcGIS directly using ArcGIS Maps for Office plugin
|Microsoft PowerPoint|Load maps form ArcGIS in your presentations

### Content Collaboration Platforms

A content collaboration platform helps organizations keep all of their content, media files, and documents in one place for easy storage and retrieval.

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
