> Please [feel free to help us](#contributions) to improve this page.

# Geoevent Server
[ArcGIS GeoEvent Server](http://www.esri.com/arcgis/products/geoevent-server)
enables you to work with Real-Time Mapping and Analytics


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Training](#training)
  - [Documentation](#documentation)
  - [Videos](#videos)
- [Code](#code)
- [Community](#community)
- [People you should know](#people-you-should-know)
- [News](#news)
- [Additional resources](#additional-resources)
- [Contributions](#contributions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction
ArcGIS GeoEvent Server can track dynamic assets that are constantly changing
location such as vehicles, aircraft, and vessels or stationary assets such as
weather and environmental monitoring sensors. In addition, it provides real-time
situational awareness for coordinated field activities.

## Training
### Documentation

* [Extending GeoEvent Server](http://server.arcgis.com/en/geoevent/latest/administer/extending-geoevent-server.htm)
* [Tutorials](http://www.arcgis.com/home/search.html?q=tutorial%20owner%3AGeoEventTeam&t=content)
* [GeoEvent Team items on ArcGIS Online](http://www.arcgis.com/home/search.html?q=owner%3AGeoEventTeam&t=content&focus=all)
* [ArcGIS GeoEvent Server Gallery](http://geoevent.maps.arcgis.com/apps/MapAndAppGallery/index.html?appid=186a8c8df5954bf1a8ec7dd847cbee14)

### Videos
On **video.esri.com** there are [more than 40 videos related to GeoEvent](http://www.esri.com/videos/search?q=geoevent#?sortby=recent&channels=esri,Events,ArcGIS,Industries,ArcGIS,esri). You can also find it slides at [**proceedings.esri.com**](https://www.google.es/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=geoevent+site:proceedings.esri.com).


|Event|Title|Length|
|---|---|---|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[GeoEvent Server: Internet of Things (IoT)](https://www.youtube.com/watch?v=n-UGR-QJ0m4&list=PLaPDDLTCmy4Z844nQ0aFdRCTICoNDPf7E&index=1)|1h 01min 37secs
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[Real-Time GIS: GeoEvent Extension](http://www.esri.com/videos/watch?videoid=5019&channelid=LegacyVideo&isLegacy=true&title=real-time-gis:-geoevent-extension)|1h 02min 14secs
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[Real-Time GIS: Leveraging Stream Services](http://www.esri.com/videos/watch?videoid=5021&channelid=LegacyVideo&isLegacy=true&title=real-time-gis:-leveraging-stream-services)|55min 58secs
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[Real-Time GIS: Best Practices](http://www.esri.com/videos/watch?videoid=4361&isLegacy=true&title=arcgis-geoevent-extension-for-server-creating-processors-with-the-sdk)|1h 04min 34secs
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[Spatiotemporal Big Data Store](http://www.esri.com/videos/watch?videoid=5080&channelid=LegacyVideo&isLegacy=true&title=spatiotemporal-big-data-store)|1h 01min 17secs
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[ArcGIS GeoEvent Extension for Server: Creating Processors with the SDK](http://www.esri.com/videos/watch?videoid=4361&isLegacy=true&title=arcgis-geoevent-extension-for-server-creating-processors-with-the-sdk)|56min 58secs

## Code
* [Proxy that handles tokens for versions of ArcGIS GeoEvent Processor for Server and ArcGIS GeoEvent Extension for Server](https://github.com/Esri/geoevent-datastore-proxy)
* [The Cluster Simulator functions as a source of data feeding GeoEvents into a cluster of ArcGIS Servers running GeoEvent Extension.](https://github.com/Esri/cluster-simulator-for-geoevent)
* [Custom processors, adapters and transports for geoevent server.](https://github.com/Esri/solutions-geoevent-java)
* ArcGIS GeoEvent Extension Samples:
  * [MongoDB Outbound Connector for storing GeoEvents.](https://github.com/Esri/mongodb-for-geoevent)
  * [Hadoop Outbound Connector for storing GeoEvents in HDFS.](https://github.com/Esri/hadoop-for-geoevent)
  * [Twitter connectors for sending and receiving tweets](https://github.com/Esri/twitter-for-geoevent)
  * [Instagram Inbound Connector for receiving Instagram feeds.](https://github.com/Esri/instagram-for-geoevent)
  * [Trimble Connector for receiving raw data in the TAIP format.](https://github.com/Esri/trimble-for-geoevent)
  * [RabbitMQ connectors for connecting to RabbitMQ Message Servers](https://github.com/Esri/rabbitmq-for-geoevent)
  * [ActiveMQ connectors for connecting to ActiveMQ Message Servers](https://github.com/Esri/activemq-for-geoevent)
  * [KML Connector](https://github.com/Esri/kml-for-geoevent)
  * [Connector for receiving raw data in the NMEA format.](https://github.com/Esri/nmea-for-geoevent)
  * [Http Inbound Transport for polling a REST endpoint](https://github.com/Esri/httpPoll-for-geoevent)
* [Sample JavaScript Aggregation Viewer using Map Service queries with an Aggregation Renderer and rendering images server side](https://github.com/esri/aggregation-viewer-server-map-service)
* [Sample JavaScript Aggregation Viewer using aggregation (lod) queries and rendering aggregation bins client side](https://github.com/esri/aggregation-viewer-client-feature-layer)
* More sample code on github: [geoev search](https://github.com/Esri?utf8=%E2%9C%93&q=geoev) & [geoevent topic](https://github.com/topics/geoevent)

## Community
* [Real-Time & Big Data GIS on GeoNet](https://geonet.esri.com/groups/real-time-gis)
* [GeoEvent on GeoNet](https://geonet.esri.com/community/gis/enterprise-gis/geoevent)

## People you should know
They don't work on the support team and some may even not work at Esri,
but they are opening some projects and sharing insights related to this
technology so we recommend you to follow them.

|Avatar|Name|Github|Twitter|ArcGIS Online|GeoNet|Stack Overflow|
|---|---|---|---|---|---|---|
|![Mansour Raad](https://avatars2.githubusercontent.com/u/984730?v=3&s=50)|Mansour Raad|[Github](https://github.com/mraad)|[Twitter](mraad)|n.a.|n.a.|n.a.|
|![Adam Mollenkopf](https://avatars0.githubusercontent.com/u/4580532?s=50&v=4)|[Adam Mollenkopf](https://www.linkedin.com/in/adammollenkopf)|[Github](https://github.com/amollenkopf)|[Twitter](https://www.twitter.com/amollenkopf)|n.a.|n.a.|n.a.|
|<img src="https://pbs.twimg.com/profile_images/489426544264085506/BsgyioAS_400x400.jpeg" width="50" alt="Suzzane">|Suzzane Foss|n.a.|[Twitter](https://www.twitter.com/sfoss_esri)|n.a.|n.a.|n.a.

## News
* [blogs.esri.com](https://www.esri.com/search?filter=Blogs&q=geoevent&search=Search)

## Additional resources
Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["scene service"](https://esri-es.github.io/arcgis-search/?search="geoevent"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

## Contributions
Please **feel free to help us** to improve this list:

* [Doing a pull request / opening an issue](https://github.com/hhkaos/awesome-arcgis#contributions)
* Or writing a comment:
  * If you find a broken link
  * Or if we are missing a nice resource.
