> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Feature services

Feature services allow you to serve feature data and nonspatial tables over the Internet or your intranet. This makes your data available for use in web clients, desktop apps, and field apps.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Hosted feature layers](#hosted-feature-layers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

Feature services are probably the most used ArcGIS service type. They can be prepare to [work offline](https://enterprise.arcgis.com/en/server/latest/publish-services/windows/prepare-data-for-offline-use.htm), [support edition tracking](https://enterprise.arcgis.com/en/server/latest/publish-services/windows/feature-service-permissions-and-editor-tracking.htm), versioning, etc.

It can be consume from any developer technology:

* [ArcGIS JavaScript API](../../../../developers/profiles/front-end/technologies/dojo/README.md) - [example](https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer/index.html)
* [Runtime SDK for Android](../../../../developers/profiles/mobile/technologies/android/README.md) - [example](https://developers.arcgis.com/android/latest/sample-code/feature-layer-feature-service.htm)
* ...

And also any other [ArcGIS Product](../../../../products/README.md)

## ArcGIS Online

* 10 minutes tutorials: (hosted feature layer)
    * [Import data](https://developers.arcgis.com/labs/arcgisonline/import-data/)
    * [Create a new dataset](https://developers.arcgis.com/labs/arcgisonline/create-a-new-dataset/)
    * [Explore layer data](https://developers.arcgis.com/labs/arcgisonline/explore-layer-data/)
    * [Configure layers](https://developers.arcgis.com/labs/arcgisonline/configure-layers/)
* Documentation: [Publish hosted feature layers](https://doc.arcgis.com/en/arcgis-online/share-maps/publish-features.htm#ESRI_SECTION1_809F1266856546EF9E6D2CEF3816FD7D)

## ArcGIS Enterprise

[What is a feature service?](https://enterprise.arcgis.com/en/server/latest/publish-services/windows/what-is-a-feature-service-.htm)

* [Publish a feature service from ArcMap](https://enterprise.arcgis.com/en/server/latest/publish-services/windows/publishing-feature-services.htm)
* [ArcGIS Pro Help > Share your work > Share a web layer > Web feature layer](http://pro.arcgis.com/en/pro-app/help/sharing/overview/web-feature-layer.htm)

## ArcGIS Online items

Check some [Feature Services share publicly in ArcGIS Online](https://esri-es.github.io/arcgis-developer-tips-and-tricks/arcgis-online/search/?q=type%3A%22Feature+Service%22&numResults=100&sortField=relevance&Thumbnail=generateThumbnail%28elem%29&Title=elem.title&Details=%27%3Ca+href%3D%22https%3A%2F%2Fwww.arcgis.com%2Fhome%2Fitem.html%3Fid%3D%27%2Belem.id%2B%27%22+target%3D%22_blank%22%3EDetails%3C%2Fa%3E%27&Owner=elem.owner&Type=elem.type&Views=elem.numViews&extension=on&bbox=-10.033009529111572%2C%2039.44182239367141%2C%202.1178693771351975%2C%2042.752364762864964)

## Related resources

* [Koop](../../../../developers/profiles/devops/technologies/koop/README.md)
* [geoservices.github.io](https://geoservices.github.io): An open source implementation of the GeoServices specification
