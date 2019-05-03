> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Content

To build great apps you need may need great content, learn what ArcGIS supports.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Find existing geolocated content in ArcGIS](#find-existing-geolocated-content-in-arcgis)
- [Additional resources](#additional-resources)
  - [Localized resources](#localized-resources)
    - [Spanish](#spanish)
- [Other related list of resources](#other-related-list-of-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

ArcGIS offer you the possibility to host your own geographic content and consume third party content. This content use to be delivered though ArcGIS services.

Learn more about:

* [ArcGIS geoinformation model](https://doc.arcgis.com/en/arcgis-online/reference/geo-info.htm)
* [ArcGIS data types](data-types/README.md)
* [ArcGIS data storage](data-storage/README.md)
* [ArcGIS service types](data-storage/service-types/README.md)
* [ArcGIS data providers](data-providers/README.md)

## Find existing geolocated content in ArcGIS

There are several places in the ArcGIS Platform where you can find/share content in different formats. Many will be free, some with be restricted to [ArcGIS named users](../account-types/name-users/README.md) and some will be paid.

|Source|Curated|Who publish?|
|---|---|---|
|[Living atlas](../living-atlas/README.md)|Yes|Esri, partners and customers
|[ArcGIS Online Location-based services](../products/arcgis-online/rest-apis/location-based-services/README.md)|Yes|Esri
|[Marketplace](../marketplace/README.md)|Yes|Esri and partners
|[ArcGIS Online community](https://github.com/esri-es/arcgis-developer-tips-and-tricks/tree/master/arcgis-online#tips-and-tricks-arcgis-online)|Mixed|Any ArcGIS user
|[ArcGIS Hub](../products/arcgis-hub/README.md)|Mixed|Esri and customers

Of course, there many other Esri customers managing their own infrastructure are also sharing content though the [REST APIs](../../esri/open-vision/open-specifications/arcgis-rest-api/README.md).

## Downloadable content

The creator of the dataset will be the one who configures without the data being only available for query (default value) or if they are also downloadable, and the license (open, commercial, non-commercial, etc.) of the data. If the creator configure the service as downloadable you will find an "Export" button within the item description page in the top right.

But if you are looking for downloadable geolocated data, we encourage you to first search in [ArcGIS Hub](../products/arcgis-hub/README.md) and [ArcGIS Open Data](../products/arcgis-online/arcgis-open-data/README.md).

If you don't find it, you can also try filtering in ArcGIS Online by keywords in the `License info` field, and in the case it is not downloadable, you can always ask the owner using the items details page comments if he or she could activate the ["Export Data" option](https://doc.arcgis.com/en/arcgis-online/manage-data/use-hosted-layers.htm#GUID-47A1D795-B330-45D7-89F7-9203A99E6924).

Use this is as an **[example search to find downloadable content](https://www.arcgis.com/home/search.html?q=licenseinfo%3A(gratuito%20OR%20gratis%20OR%20open%20OR%20libre%20OR%20free%20OR%20%22creative%20commons%22%20OR%20%22open%20data%22%20OR%20%22apache%22)&start=1&num=20)**.

## Authoritative and deprecated content

[Since June 2018](https://www.esri.com/arcgis-blog/products/arcgis-online/announcements/whats-new-public-authoritative-content/) any [creator](../account-types/name-users/README.md) can tag his own dataset as Authoritative and Deprecated as a good practice to help anyone within or outside an organization to search and filter item by their status: Authoritative and Deprecated.

> **Authoritative<sup>1</sup>:** *Organizations publishing this type of content, such as Esri (including our international distributors) and government agencies, are able to mark the best available content that they are sharing with everyone as ‘Authoritative’ and it will appear as authoritative from that organization. Users that are looking for this type of content can now filter their search results to just show content that is authoritative.*

## Limited access content

Some content hosted in ArcGIS Online and published by Esri like ready-to-use 2D and 3D map, layers, apps, tools and services published might require an [ArcGIS account](../account-types/README.md) (organizational user or a free developer account) to access.

There are three types of content:

|Content type|Example content|# Items|Consume credits|Require account|Provider
|---|---|---|---|
|Default content|Any content shared publicly|[View items (+1M)](https://www.arcgis.com/home/group.html?id=47dd57c9a59d458c86d3d6b978560088&view=list&start=1&num=20&searchTerm=#content)|No|No|Any [creator](../account-types/name-users/README.md)|
|[Subscriber content](https://doc.arcgis.com/en/arcgis-online/reference/faq.htm#GUID-AEC65CAD-F9E3-49AF-A5ED-3CFBCC8E3C3A)|NAIP imagery, landscape analysis layers, and historical maps |[Items (+2500)](https://www.arcgis.com/home/search.html?q=typekeywords%3A%22Requires%20Subscription%22%20-typekeywords%3A%22Requires%20Credits%22&start=1&num=20)|No|Yes|Esri
|[Premium content](https://doc.arcgis.com/en/arcgis-online/reference/faq.htm#GUID-7DD6E881-411F-4861-B140-C6E465C1371D)|Demographic and lifestyle maps as well as tools for geocoding, geoenrichment, network analysis, and spatial analysis|[Items (+1000)](https://www.arcgis.com/home/search.html?q=typekeywords%3A%22Requires%20Credits%22&start=1&num=20)|Yes<sup>1</sup>|Yes|Esri

> **Note:** Premium content like infographics and some Living Atlas Layers such as tapestry segmentation are charged based on the number of transactions of each item. 1,000 map requests (pan, zoom, and identify) costs 10 credits ($1). Find more at: [Understanding credits consumption by capability](https://doc.arcgis.com/en/arcgis-online/reference/credits.htm#ESRI_SECTION1_709121D2C7694DCAB9B8592F36F7A5BA).

Learn more: [Using subscriber content in Web Apps and Story Maps](https://www.esri.com/arcgis-blog/products/arcgis-online/sharing-collaboration/using-subscriber-content-in-web-apps-and-story-maps/)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["esri content"](https://esri-es.github.io/arcgis-search/?search="esri%20content"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

ArcGIS Online accounts publishing curated content: [esri](https://www.arcgis.com/home/search.html?q=owner%3Aesri&start=1&sortOrder=desc&sortField=relevance), [esri_dm](https://www.arcgis.com/home/search.html?q=owner%3Aesri_dm&start=1&sortOrder=desc&sortField=relevance), [esri_basemaps](https://www.arcgis.com/home/search.html?q=owner%3Aesri_basemaps&start=1&sortOrder=desc&sortField=relevance),  [esri_landscape2](https://www.arcgis.com/home/search.html?q=owner%3Aesri_landscape2&start=1&sortOrder=desc&sortField=relevance), ...

### Localized resources

#### Spanish

* [Contents from Esri Spain](https://www.esri.es/arcgis/contenidos/). Vídeos:
    * [Datos. La columna vertebral de tus proyectos. - CEsri18](https://www.youtube.com/watch?v=aUukXa8xyUE)
    * [Webinar Contenidos de la Plataforma](https://www.youtube.com/watch?v=yyWffKRmiKk)
    * [Seminario Esri y Tomtom: Mapas, navegación y tráfico](https://www.youtube.com/watch?v=K8g6thyrsoQ)

* ArcGIS Online user: [EsriEspanaContenidos](https://www.arcgis.com/home/search.html?q=owner:EsriEspanaContenidos&restrict=false)


## Other related list of resources

Find more geolocated and none geolocated content at [awesome-public-datasets](https://github.com/caesar0301/awesome-public-datasets)
