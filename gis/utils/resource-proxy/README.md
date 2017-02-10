> **Note**: this page is only a draft, [help us](#contributions).

# Resource proxy
[Resource proxy](https://github.com/Esri/resource-proxy) allow you to avoid [CORS](https://enable-cors.org/)
problems, OAuth, ... when working with ArcGIS platform.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Resources](#resources)
- [Contributions](#contributions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction
This is an Open Source project from Esri with proxy files in three different languages: [DotNet](https://github.com/Esri/resource-proxy/tree/master/DotNet), [Java](https://github.com/Esri/resource-proxy/tree/master/Java) and [PHP](https://github.com/Esri/resource-proxy/tree/master/PHP). These supports:
* Accessing cross domain resources (CORS)
* Requests that exceed 2048 characters (avoid [URL length restrictions](http://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers#answer-417184))
* Accessing resources secured with [token based authentication](https://developers.arcgis.com/authentication/#security-methodologies).
* [OAuth 2.0 app logins](https://developers.arcgis.com/authentication).
* Enabling logging
* Both resource and referer based rate limiting

## Resources

* **Documentation**: [Proxy configuration settings](https://github.com/Esri/resource-proxy#proxy-configuration-settings)
* **Video**: [Use Online Services without End-user Login with Resource-Proxy](http://www.esri.com/videos/watch?videoid=4305&channelid=LegacyVideo&isLegacy=true&title=use-online-services-without-end-user-login-with-resource-proxy)
  * Slides: [PDF](http://proceedings.esri.com/library/userconf/devsummit15/papers/dev_int_202.pdf)
  * Length: 1h 04min 58secs
  * Source: [DevSummit](http://www.esri.com/events/devsummit) 2015
* **Community**:
  * [Resource proxy at GeoNet](https://geonet.esri.com/groups/resource-proxy)
  * [Github issues](https://github.com/Esri/resource-proxy/issues)

## Contributions
Please **feel free to help us** to improve this list:

* [Doing a pull request / opening an issue](https://github.com/hhkaos/awesome-arcgis#contributions)
* Or writing a comment:
  * If you find a broken link
  * Or if we are missing a nice resource.
