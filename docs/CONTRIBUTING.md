# Contributions

You may know [why we started this project](https://github.com/hhkaos/awesome-arcgis/blob/master/about/README.md) or you might not, but whatever it is, we are very happy you are thinking on contributing.

**Anyone is welcome to contribute** to this repository, not only the [ArcGIS Experts listed here](https://esri-es.github.io/arcgis-experts/), so please feel free to do any contribution.

> **Disclaimer**: The technology change fast and some resources may be out to date or broken.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [How to contribute](#how-to-contribute)
  - [Commenting on Disqus (< 1 min)](#commenting-on-disqus--1-min)
  - [Opening an issue (< 1 min)](#opening-an-issue--1-min)
  - [Using: Github Online Editor (< 2 min)](#using-github-online-editor--2-min)
  - [Using: Your favourite IDE locally](#using-your-favourite-ide-locally)
- [Starting a new resources page](#starting-a-new-resources-page)
  - [Sample resource pages](#sample-resource-pages)
- [Develop and build locally](#develop-and-build-locally)
  - [Check existing links programatically](#check-existing-links-programatically)
  - [Configurations](#configurations)
- [ArcGIS experts](#arcgis-experts)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How to contribute

We are looking contributors willing to help:

* **Adding new resource pages**:
  * You can help us [starting a new resources page](#starting-a-new-resources-page)
* **Enhancing existing resource pages**:
  * Fixing broken links
  * Suggesting missing resources

> You can use the [ArcGIS Search Engine](https://esri-es.github.io/arcgis-search/) to help us find missing resources.

### Commenting on Disqus (< 1 min)

If you are in the [build version](https://hhkaos.github.io/awesome-arcgis/) made with [Gitbook](https://github.com/GitbookIO/gitbook) and you can report a broken link or suggest a new resource **using Disqus**. You can do it like so:

[![Animation adding a comment on Disqus](https://github.com/hhkaos/awesome-arcgis/blob/master/assets/Contribute%20thru%20disquss.gif?raw=true)](https://www.youtube.com/watch?v=1FBYMX_abhk&index=3&list=PLVfQL04Y8hoILL6FDtB-zM_gHgkJur3kX)

### Opening an issue (< 1 min)

You can also report a broken link or suggest a new resource [opening a new issue](https://github.com/hhkaos/awesome-arcgis/issues/new) directly on Github.

> **Note**: This option requires you to have a Github account

[![Animation opening an issue](https://github.com/hhkaos/awesome-arcgis/blob/master/assets/Opening%20an%20issue.gif?raw=true)](https://www.youtube.com/watch?v=HGyQn3hhfIA&index=2&list=PLVfQL04Y8hoILL6FDtB-zM_gHgkJur3kX)

### Using: Github Online Editor (< 2 min)

> **Note**: This option requires you to have a Github account

**Edit a resource page from your browser**: [learn how](https://help.github.com/articles/editing-files-in-your-repository/).

Or you can also watch this video to learn **how to create a new page** using the Github Online Editor:

[![Animation showing how to use the Github Online Editor](https://github.com/hhkaos/awesome-arcgis/blob/master/assets/Using-%20Github%20Online%20Editor.gif?raw=true)](https://www.youtube.com/watch?v=OndbEzpZ124&t=2s&list=PLVfQL04Y8hoILL6FDtB-zM_gHgkJur3kX&index=1)


### Using: Your favourite IDE locally

> **Note**: This option requires you to have a Github account

If you are a developer you can also [fork this repo](https://help.github.com/articles/fork-a-repo/), make your contributions and do a [pull request](https://help.github.com/articles/about-pull-requests/)

> Optionally you can [test it and create a new build](#develop-and-build-locally).

## Starting a new resources page

When you are considering to start a new resources page first you need to do is search on the [project structure](https://github.com/hhkaos/awesome-arcgis/blob/master/SUMMARY.md) and find or create the section where it should live.

Then you can start drafting this page using the "[resource page template](https://github.com/hhkaos/awesome-arcgis/blob/master/RESOURCE_PAGE_TEMPLATE.md)" we have build (if it makes sense), or directly starting from scratch if you will.

> **Note**: remember you can [ArcGIS Search Engine](https://esri-es.github.io/arcgis-search/) to help you find great resources or try to reach other [ArcGIS Experts](https://esri-es.github.io/arcgis-experts/) to help you with it.

### Sample resource pages

These are sample pages you can check to better understand what we are trying to achieve on each resource page:

* **Vector tiles resource page**:<br> [/arcgis/content/service-types/map-service/tile-map-service/vector-tiles/README.md](https://hhkaos.github.io/awesome-arcgis/arcgis/content/service-types/map-service/tile-map-service/vector-tiles/)

* **Web AppBuilder Developer Edition resources page**:<br> [/arcgis/products/web-appbuilder/developer-edition/README.md](https://github.com/hhkaos/awesome-arcgis/blob/master/arcgis/products/web-appbuilder/developer-edition/README.md)

* **Java Developers resources page**:<br> [/desktop/technologies/java/README.md](https://github.com/hhkaos/awesome-arcgis/tree/master/desktop/technologies/java)

* **BIM resources page**:<br> [/esri/disciplines/bim/README.md](https://github.com/hhkaos/awesome-arcgis/tree/master/esri/disciplines/bim)

* **Leaflet Developers resources page**:<br> [/front-end/technologies/leaflet/README.md](https://github.com/hhkaos/awesome-arcgis/tree/master/front-end/technologies/leaflet)

## Develop and build locally

First you need to have [npm](https://www.npmjs.com/) installed in your computer and they from the root folder run:

```
$ npm install
$ npm run install
```

To start the development environment run:

`$ npm run serve`

> Be patient, it will take some time but whenever it is ready you will see a message saying `Serving book on http://localhost:4000`

And whenever you are ready to create the new deployment run:

`$ npm run build`

> Be patient, this process can take a few minutes

### Check existing links programatically

You can help us checking broken links running this command:

`$ node deploy.js --links`

This will display a link of messages but also it will create a bunch of files (called *ab-results--[PATH TO FILE]*) with a JSON containing detailes information about the state of the links in this repo.

You can place them in the ignored folder `awesomebot-results`.

`$ mkdir awesomebot-results && mv ab-* awesomebot-results`

### Configurations

* **Ignore files and folders on build**: You can add folders and files you want to ignore during the build process, you can do that adding them to the `ignores` property at [book.json](https://github.com/hhkaos/awesome-arcgis/blob/master/book.json#L6)

* **Exclude from awesomebot**: if we want the `deploy.js` script to avoid checking links on any folder or file we can add it to the `excludeFromLinkChecker` array at [deploy.js](https://github.com/hhkaos/awesome-arcgis/blob/master/deploy.js#L5)

* **Exclude from doctoc**: every table of contents is generated automatically,
we edit the [deploy.js](https://github.com/hhkaos/awesome-arcgis/blob/master/deploy.js#L11) script to add any file to `excludeFileFromDocToc` array, or any folder to the `excludeFoldersFromDocToc` array if we don't want them to have a TOC.

## ArcGIS experts

Everyone can contribute to this project, but we are also looking for [ArcGIS Experts](https://esri-es.github.io/arcgis-experts/) willing to help us curate and maintain each resource page.
