> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Name users

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Integration using OAuth 2.0](#integration-using-oauth-20)
- [User Types](#user-types)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

The ArcGIS platform has been designed mainly to be used directly by organizations, this is why it provides a user management system integrated, it use the identities to ensure privacy and security.

So, when we talk about name users at ArcGIS we are talking about users for [organization accounts](../account-types/README.md) for [ArcGIS Online](../products/arcgis-online/README.md) or [ArcGIS Enterprise](../products/arcgis-enterprise/README.md).

There are two levels of name users (level 1 and level 2) and they have different costs.

## Integration using OAuth 2.0

Any developer can add login button (as any other "social login") to enable an user with an ArcGIS account to [login to his app using oAuth, read more](https://github.com/esri-es/arcgis-oauth-samples).

## User Types

> **Note:** This section has been extracted from [What's Coming in ArcGIS Online: Introducing User Types](https://www.esri.com/arcgis-blog/products/arcgis-online/announcements/whats-coming-in-arcgis-online-introducing-user-types/) & [User types, roles, and privileges](https://doc.arcgis.com/en/arcgis-online/reference/roles.htm)

> **Note:** User Types replaced [User Levels](https://blogs.esri.com/esri/arcgis/2016/12/20/your-guide-to-named-user-levels/) on Dec. 2018

User types are a combination of identity, capabilities and apps that align with the needs of typical members in an organization. The user type determines the privileges that can be granted to the member through a default or custom role:

|Type|Capabilities|Apps|
|---|---|---|
|**Viewer** (formerly Level 1 users)|View items that are shared with them by other ArcGIS users, but they can’t create, edit, share, or perform analysis on items or data|[Essential Apps Bundle](https://www.esri.com/en-us/arcgis/products/arcgis-online/pricing/arcgis-online-subscriptions#apps).
|**Editor**|View and edit data in ArcGIS maps and apps that are shared with them by other ArcGIS users. Editors can’t analyze, create, or share items or data.|[Essential Apps Bundle](https://www.esri.com/en-us/arcgis/products/arcgis-online/pricing/arcgis-online-subscriptions#apps).
|**Field Worker**|Field Workers can view and edit data that has been shared with them by other ArcGIS users but can’t analyze, create, or share items or data|[Essential Apps and Field Apps bundles](https://www.esri.com/en-us/arcgis/products/arcgis-online/pricing/arcgis-online-subscriptions#apps).
|**Creator** (formerly Level 2 users)|All the capabilities of the Viewer, Editor, and Field Worker user types, plus the ability to create content, administer the organization, and share content|[Essential Apps, Field Apps, and Office Apps bundles](https://www.esri.com/en-us/arcgis/products/arcgis-online/pricing/arcgis-online-subscriptions#apps).
|**GIS Professional**|All the capabilities and app bundles of the Creator, plus access to ArcGIS Pro (Basic, Standard, or Advanced). It type can be assigned at the following three levels, which correspond to the three license levels of ArcGIS Pro: Basic, Standard & Advanced|Include access to apps in all of the [app bundles](https://www.esri.com/en-us/arcgis/products/arcgis-online/pricing/arcgis-online-subscriptions#apps) in addition to ArcGIS Pro
