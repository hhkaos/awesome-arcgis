> **Note**: this page is only a draft, please [feel free to help us](#contributions) to improve this page, you can use [this template](https://github.com/esri-es/awesome-arcgis/blob/master/RESOURCE_PAGE_TEMPLATE.md) to get some ideas.

# Work offline

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Developer technologies](#developer-technologies)
  - [Native apps](#native-apps)
  - [Web apps](#web-apps)
  - [Patterns](#patterns)
    - [Services pattern](#services-pattern)
    - [Desktop pattern](#desktop-pattern)
  - [Conflicts](#conflicts)
- [Contributions](#contributions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Each day we realize that been able to work offline with our mobile, tablet or
desktop devices is more important, that why we offer you the chance to build
applications that could work with maps & GIS without internet connection.

There are many options to solve problems when you need apps to work offline, here
you will find many of those.

## Developer technologies
### Native apps
If you are a [mobile developer](../../mobile/README.md) or a [desktop developer](../../desktop/README.md)
you have all our native Runtimes and SDKs and some builders to build you own
custom apps.

In case you are not a developer or you want to build an app quickly you also
have [AppStudio Standard](../products/appstudio/README.md) and [Survey123](../products/survey123/README.md)
that will help you build offline apps.

And in case you don't need to but to build a custom or branded app you may also
consider to use [Collector for ArcGIS](http://www.esri.com/products/collector-for-arcgis).

### Web apps
But if you are a web developer and you don't need a powerful GIS SDK to build
app you can also build it using [phonegap](../../front-end/technologies/phonegap/README.md).

We also encourage you to take a look to the [offline-editor-js project](../../front-end/technologies/dojo/offline-editor-js/README.md) which is an ArcGIS JavaScript
library for handling offline editing and tiling.

If you are looking for a responsive app to collect points oflline you could take
a look to [GeoForm](https://github.com/Esri/geoform-template-js), a web app which can make the job (but it offline functionality
  [is limited](https://community.esri.com/groups/survey123/blog/2015/09/04/survey123-collector-and-geoform-a-quick-comparison)).

If you don't know already, you should learn about [progressive web apps](https://developers.google.com/web/progressive-web-apps/) in order to be
learn how to build reliable, fast and engaging apps even when you have no
Internet connection.

Google is doing a great job spreading the word about it benefits.

Check the videos at the [Proggressive Web App Summit 2016](https://www.youtube.com/playlist?list=PLNYkxOF6rcIAWWNR_Q6eLPhsyx6VvYjVb)

##Prepare content to be consumed offline

When you are developing an offline app you can follow two main patterns:

* **Services pattern**: Best for supporting a large number of users, this pattern allows multiple offline users to edit the same data layers and sync edits later, when online.
* **Desktop pattern**: Best for supporting applications with read-only data that requires periodic updates.

[Take maps offline with ArcGIS Online](http://doc.arcgis.com/en/arcgis-online/create-maps/take-maps-offline.htm)

### Patterns
#### Services pattern
The services pattern is best for supporting a large number of users. This pattern allows multiple offline users to edit the same data layers and sync edits later, when online.

For operational data, you can use a sync-enabled feature service from ArcGIS for Server, ArcGIS Online, or Portal for ArcGIS to generate the geodatabase for offline use. Through the synchronization process, you can control whether a user can upload their changes, download others' changes, or both. This allows the application to have an up-to-date view of the data. When more than one user is editing the same feature and the edits conflict, the last edit synchronized to the service overrides the others.

In one workflow, sometimes referred to as a pre-planned workflow, you generate the geodatabase once and load it onto your users' devices. This workflow requires you to [register a geodatabase](https://developers.arcgis.com/net/10-2/desktop/guide/create-an-offline-map.htm#ESRI_SECTION3_7BBF009905B847569B3E8B61A1991001).

For basemap data, ArcGIS tiled map services and ArcGIS Online basemaps allow for the on-demand creation of tile caches, letting you take your basemaps offline.

**Create a basemap from a tiled service (download a basemap)**: An offline copy of
tiled map services can be requested so that a basemap is available when the
application is working in an offline environment. These copies can be downloaded
in the form of a tile package (.tpk file) or compact cache by using the API.

#### Desktop pattern
This is the best for supporting applications with read-only data that requires
periodic updates.

You can use ArcGIS for Desktop to include features, tabular data, tile caches,
network datasets for directions and locators in your offline app.

Learn more: [Create ArcGIS Runtime content using ArcGIS Desktop](http://desktop.arcgis.com/en/arcmap/10.3/map/working-with-arcmap/creating-arcgis-runtime-content.htm)

To include operational data in your offline app generate a geodatabase (using
ArcGIS for Desktop).

**Create a basemap using ArcGIS for Desktop**: When you create a basemap using
ArcGIS for Desktop, you can set the format, tiling schemes, and levels of detail.
For details, see the online ArcGIS help topics
[How to create a tile package](http://desktop.arcgis.com/en/arcmap/10.3/map/working-with-arcmap/how-to-create-a-tile-package.htm) and [About tile packages](http://desktop.arcgis.com/en/arcmap/10.3/map/working-with-arcmap/about-tile-packages.htm).

### Conflicts
[Offline maps and versioned data](http://server.arcgis.com/en/server/latest/publish-services/linux/offline-maps-and-versioned-data.htm)

## Contributions

This project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).