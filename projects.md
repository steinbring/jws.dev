---
title: 'Projects'
prev: false
next: false
---
# Projects

Like many professional web developers, most of what I write is not public and is the property of my employer.  The projects listed below are side projects (stuff written for fun).

## Websites
* I wrote [JWS Pictures](https://jws.pictures/) to see if you could build a blog that uses git commits as the sole data source. It uses [CI/CD Pipelines](https://jws.pictures/) to resize the images and build out data files.
* I created [Joe's Job Tracker](https://joes-job-tracker.web.app/) as a bit of a proof of concept during the [October 2023 Hack and Tell](https://hackandtell.rocks/events/2023-10/). It is mainly a proof of concept but also replaces a spreadsheet I used to track active jobs.  It uses Vue 3, Vue Composables, Firebase Cloud Firestore, and Google SSO.
* I created my [Vue Offline Boilerplate](https://boilerplate.jws.app/) as a proof of concept and a starting point for 2-3 future web apps I have in mind.  You can log in using Google or Microsoft credentials (work or personal ones will work) and create a user profile.  It establishes public profile pages out of that data.  It uses Vue 3, the composition API, Firebase Authentication, Firebase Cloud Firestore, Pinia, and Bulma.
	* You can see a test profile page at [https://boilerplate.jws.app/profile/steinbring/](https://boilerplate.jws.app/profile/steinbring/).
	* It uses the vite-plugin-pwa plugin for offline support, which means that you can install the app on your phone or laptop.
	* When I built the job tracker in October, it used Vuex. This app now uses Pinia (which I was excited to play with).
* I have been working on building a project and talent management system that uses the boilerplate app listed above.  Technologists have a physical location and self-reported technology proficiencies associated with their records.  Project managers can use those values to align available technologists with project goals and deadlines.
	* I am starting with a Progressive Web Application that uses the above "boilerplate" as a starting point, but it uses [Shoelace](https://jws.news/tag/web-awesome/) instead of [Bulma](https://jws.news/tag/bulma/).
	* A public URL will be available later.

## Android Applications
* [Once upon a time](https://github.com/steinbring?utf8=%E2%9C%93&tab=repositories&q=&type=archived&language=), I wrote a number of [AngularJS](https://angularjs.org/) / [Bootstrap](https://getbootstrap.com/) / [PhoneGap](https://cordova.apache.org/announcements/2020/08/14/goodbye-phonegap.html) apps.  The code is [still on GitHub](https://github.com/steinbring/PocketSteinbring), but it hasn't been updated in years, and the apps are not available on the Play Store anymore.

## Publications

* I post coding-related stuff to [jws.news](https://jws.news/category/coding/) and [DEV](https://dev.to/steinbring/).  [jws.news](https://jws.news) also contains much non-coding content.
