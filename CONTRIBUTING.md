# Contributions

Anyone is welcome to contribute to this repository, not only the [ArcGIS Experts listed here](https://esri-es.github.io/arcgis-experts/), so please feel free to do any contribution.

> **Disclaimer**: The technology change fast and some resources may be out to date or broken.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [How to contribute](#how-to-contribute)
  - [Commenting on Disqus (< 1 min)](#commenting-on-disqus--1-min)
  - [Opening an issue (< 1 min)](#opening-an-issue--1-min)
  - [Editing from your browser](#editing-from-your-browser)
  - [Contributing from local](#contributing-from-local)
- [Resource page structure](#resource-page-structure)
- [Develop and build locally](#develop-and-build-locally)
- [Check existing links programatically](#check-existing-links-programatically)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How to contribute

We are looking contributors willing to help:

* **Enhancing existing resource pages**:
  * Fixing broken links
  * Suggesting missing resources
* **Adding new resource pages**:
  * You can help us just adding resources directly

### Commenting on Disqus (< 1 min)

If you are in the [build version](https://hhkaos.github.io/awesome-arcgis/) made with [Gitbook](https://github.com/GitbookIO/gitbook) and you can report a broken link or suggest a new resource, you can do it like so:

![Animation adding a comment on Disqus](https://github.com/hhkaos/awesome-arcgis/blob/master/assets/Contribute%20thru%20disquss.gif?raw=true)

### Opening an issue (< 1 min)

You can also report a broken link or suggest a new resource [opening a new issue](https://github.com/hhkaos/awesome-arcgis/issues/new).

> **Note**: This option requires you to have a Github account

![Animation opening an issue](https://github.com/hhkaos/awesome-arcgis/blob/master/assets/Opening%20an%20issue.gif?raw=true)

### Editing from your browser

> **Note**: This option requires you to have a Github account

Creating or edit a Github page from your browser ([learn how](https://help.github.com/articles/editing-files-in-your-repository/)) (*Github account required*)

### Contributing from local

> **Note**: This option requires you to have a Github account

If you are a developer you can also [fork this repo](https://help.github.com/articles/fork-a-repo/), do a [pull request](https://help.github.com/articles/about-pull-requests/) and optionally [create a new deployment](#develop-and-build-locally).

## Resource page structure

We have build this "[resource page template](https://github.com/hhkaos/awesome-arcgis/blob/master/RESOURCE_PAGE_TEMPLATE.md)"  to help anyone to start a new resource page or get ideas on which kind of resources could be included.

A sample resources list that shows what we are trying to collect on each page is the
[Web AppBuilder resource page](arcgis/products/web-appbuilder/README.md).

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

## Check existing links programatically

You can help us checking broken links running this command:

`$ node deploy.js --links`

This will display a link of messages but also it will create a bunch of files (called *ab-results--[PATH TO FILE]*) with a JSON containing detailes information about the state of the links in this repo.

You can place them in the ignored folder `awesomebot-results`.

`$ mkdir awesomebot-results && mv ab-* awesomebot-results`
