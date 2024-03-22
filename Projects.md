---
title: 'Projects'
---
# Projects

Like many professional web developers, most of what I write is not public and is the property of my employer.  The projects listed below are side projects (stuff written for fun).

## Websites
* I created [Joe's Job Tracker](https://joes-job-tracker.web.app/) as a bit of a proof of concept during the [October 2023 Hack and Tell](https://hackandtell.rocks/events/2023-10/). It is mainly a proof of concept but it also replaces a spreadsheet that I was using at work to track active jobs.  It uses Vue 3, Vue Composables, Firebase Cloud Firestore, and Google SSO.
* I created my [Vue Offline Boilerplate](https://boilerplate.jws.app/) as both a proof of concept and a starting point for 2-3 future web apps that I have in mind.  You can log in using Google or Microsoft credentials (work or personal ones will work) and create a user profile.  It creates public profile pages out of that data.  It uses Vue 3, the composition API, Firebase Authentication, Firebase Cloud Firestore, Pinia, and Bulma.
	* You can see a test profile page at [https://boilerplate.jws.app/profile/steinbring/](https://boilerplate.jws.app/profile/steinbring/) and I tried to create both a [JSON version](https://boilerplate.jws.app/profile/steinbring/json) and an [XML version](https://boilerplate.jws.app/profile/steinbring/xml) but looking back at it, that was never going to work.
	* It is using the vite-plugin-pwa plugin for offline support.  This means that you can install the app on your phone or laptop.
	* When I built the job tracker back in October, it was using Vuex. This app uses Pinia (which I was excited to play with).
* I have been working on building a project and talent management system that uses the boilerplate app listed above.  Technologists have a physical location and self-reported technology proficiencies associated with their records.  Project managers can use those values to align available technologists with project goals and deadlines.
	* I am starting with a Progressive Web Application that uses the above "boilerplate" as a starting point.
	* A public URL will be available, later.

## Android Applications
* [Once upon a time](https://github.com/steinbring?utf8=%E2%9C%93&tab=repositories&q=&type=archived&language=), I wrote a number of [AngularJS](https://angularjs.org/) / [Bootstrap](https://getbootstrap.com/) / [PhoneGap](https://phonegap.com/) apps.  The code is [still on GitHub](https://github.com/steinbring/PocketSteinbring) but it hasn't been updated in years and the apps are not available on the Play Store anymore.

## Publications

* I post coding-related stuff to [jws.news](https://jws.news/category/coding/) and [DEV](https://dev.to/steinbring/).  [jws.news](https://jws.news) also contains a lot of non-coding content.
