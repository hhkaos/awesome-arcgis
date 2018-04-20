> **Note**: this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Koop
[Koop](https://koopjs.github.io/) is an Open Geospatial ETL Engine that allow anyone to transform, query, and download geospatial data on the web.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
  - [Videos](#videos)
- [Code](#code)
- [Community](#community)
- [People you should know](#people-you-should-know)
- [Resources](#resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Introduction

Koop is a highly-extensible Javascript toolkit for connecting incompatible spatial APIs. Out of the box it exposes a Node.js server that can translate GeoJSON into the [Geoservices](https://geoservices.github.io/) specification supported by the ArcGIS family of products (GeoJSON, CSV, KML, Shapefile and Feature Service). Koop can be extended to translate data from any source to any API specification. Don't let API incompatiblity get in your way, start using one of Koop's data providers or [write your own](https://koopjs.github.io/docs/specs/provider.html).

![Koop Diagram](https://user-images.githubusercontent.com/7832202/28444721-43eb6ea6-6d8d-11e7-8d56-3af46fd5bf88.png)

[View demo](http://koop.dc.esri.com/)

## Training

### Documentation

* [Koop Documentation](https://koopjs.github.io/docs)
* [ArcGIS REST API Documentation](http://resources.arcgis.com/en/help/arcgis-rest-api/)
* [ArcGIS for Developers](http://developers.arcgis.com)
* [@esri](http://twitter.com/esri)

### Videos

On [*video.esri.com*](https://www.esri.com/videos/search?q=koop#?sortby=recent) and [Esri Events](https://www.youtube.com/channel/UC_yE3TatdZKAXvt_TzGJ6mw/search?query=koop) you will find many technical talks.

|Event|Title|Length|
|---|---|---|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[Koop: Using 3rd Party Services Within the ArcGIS Platform](https://www.youtube.com/watch?v=NTSAvDUvRQM)|59min 20secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[Deploying Koop with Docker and Kubernetes](https://www.youtube.com/watch?v=a9P58niTSNM)|30min 50secs|

> You might also find interesting videos at [Esri Industries](https://www.youtube.com/channel/UCZTiOg3n0pqUDSatq7mS2PA/search?query="koop"), [ArcGIS](https://www.youtube.com/channel/UCgGDPs8cte-VLJbgpaK4GPw/search?query="koop"), [EsriTV](https://www.youtube.com/user/esritv/search?query="koop"), [Esri R&D Center](https://www.youtube.com/user/esripdx/search?query="koop") [etc](https://esri-es.github.io/awesome-arcgis/esri/#youtube-channels)

### Slides

* [Koop: Using 3rd Party Services in ArcGIS](http://proceedings.esri.com/library/userconf/devsummit-dc17/papers/devsummit-dc_16.pdf)
* [Koop: The Good Parts](http://proceedings.esri.com/library/userconf/devsummit16/papers/dev_int_124.pdf)

More slides in [*proceedings.esri.com*](https://www.google.es/search?q=site%3Aproceedings.esri.com+koop) or check on [GeoNet](https://community.esri.com/content?query=TOPIC&filterID=all~objecttype~objecttype%5Bdocument%5D).

## Get the tool

Koop is an Open Source tool and you can [install Koop using npm](https://koopjs.github.io/docs/setup/) or [using Docker](https://github.com/koopjs/koop-docker-example).

## Code

Github:
    * [Source code](https://github.com/koopjs)
    * [Official providers](https://github.com/koopjs?utf8=%E2%9C%93&q=provider&type=&language=): ArcGIS Online, Socrata, Github, Gist, CKAN, Mongo, Google Sheets, Yelp, ACS, Open Data, OSM, and many more
    * [Koop related repos at Esri R&D Center (near) Washington](https://github.com/esridc?utf8=%E2%9C%93&q=koop&type=&language=)
    * [3rd party repositories](https://github.com/topics/koop)

[More at ArcGIS Search](https://esri-es.github.io/arcgis-search/?search=koop+site%3Agithub.com&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page)

## Live demos

* [CKAN provider](https://github.com/koopjs/koop-provider-ckan#access-ckan-data)
* [OpenStreetMap](http://koop.dc.esri.com/osm/points/state/Colorado/county/Larimer/field/amenity/pub/)

## Support and Community

If you need some help with Koop please **use the Github issues as the community forum for your questions** on the given repository.

> There are some questions also on [StackExchange](https://gis.stackexchange.com/search?q=koop)

If needed, remember you can always check the [Technical Support Website for developer products](https://support.esri.com/en/Products/Developers) and the [Technical Support Blog at GeoNet](https://community.esri.com/groups/technical-support/blog/tags#/) to find additional resources.

## People you should know

Please find the [ArcGIS Experts on this topic using this tool](https://esri-es.github.io/arcgis-experts/?topic=koop):

[![ArcGIS Experts Tool Screenshot](https://github.com/esri-es/arcgis-experts/blob/master/assets/imgs/arcgis-experts-tool.png?raw=true)](https://esri-es.github.io/arcgis-experts/?topic=koop)

They don't work on the support team and some may even not work at Esri,
but they are opening some projects and sharing insights related to this
technology so we recommend you to follow them.

## News

> Links to articles to specific articles but also to any source of news.

More news:

* ["TOPIC" at esri.com search engine](https://www.esri.com/en-us/search#/?q=koop&v=0&tab=Explore&page=1)
* [Blog Posts about "koop" inside Places at GeoNet](https://community.esri.com/content?query=koop&filterID=all~objecttype~objecttype%5Bblogpost%5D)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["koop"](https://esri-es.github.io/arcgis-search/?search="koop"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

You should also check [Daniel Fenton ArcGIS Online Account](http://www.arcgis.com/home/search.html?q=owner%3ADFenton_dcdev) in order to find some samples.
