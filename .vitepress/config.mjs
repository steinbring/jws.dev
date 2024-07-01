import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "Joe Steinbring",
  description: "Joe Steinbring is a web application engineer based in Glendale, Wisconsin. He is a traveler, a photographer, a politics watcher, and habitual hobby collector.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'What I am doing now', link: '/now' },
      { text: 'About me', link: '/about' },
      { text: 'My Resume', link: '/resume' },
      { text: 'Contact me', link: '/contact' }
    ],

    sidebar: [
      {
        items: [
          { text: 'What I am doing now', link: '/now' },
          { text: 'About me', link: '/about' },
          { text: 'Resume', link: '/resume' },
          { text: 'My Experience', link: '/experience'},
          { text: 'Travel', link: '/travel'},
          { text: 'Resources', link: '/resources'},
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M266.9 87.1q-15.8 0-27.2 10.9t-12.4 27.2 10.2 28.7 27.7 13.4 29-10.2 13.4-27.7-10.2-29.2-28-13.1h-2.5zm-43.1 47l-114.9 58.4q9.9 9.9 12.4 23.8L235.7 158q-9.4-9.9-11.9-23.8zm82.7 13.4q-6.4 12.4-18.8 18.8l90.6 91.1q6.4-12.4 19.3-18.8zm-70.3 10.9l-66.8 131.2 19.8 19.8L260 170.8q-13.9-2.5-23.8-12.4zm51.5 7.9q-10.9 5.4-22.8 5l-4-.5 10.4 65.4 27.7 4.5zM76.8 183.2q-15.8 0-27.2 11.1t-12.4 27.2 10.2 28.7 28 13.4 29.2-10.4 13.1-27.7-10.4-29-27.5-13.4h-3zm44.6 33.7q.5 4.5 .5 8.9q-.5 9.4-5 17.3l65.4 10.4 12.9-24.8zm111.4 17.8L219.9 260l154 24.3q-.5-4-.5-8.4q.5-9.4 5-17.8zm184.2 3q-15.8 .5-27.2 11.4t-12.1 27.2T388 305t27.7 13.4 29-10.2 13.4-28T447.9 251t-28-13.4h-3zm-300.1 6.4q-6.4 12.4-19.3 18.8l104 104 25.3-12.4zM97.1 262.9q-10.4 5.4-21.8 5l-4.5-.5 19.8 126.8q10.4-5 22.3-4.5l4 .5zm180.2 10.9l23.8 154q10.4-5 21.8-4.5l5 .5L305 278.3zm96.6 11.4l-58.4 29.7 4 27.7 66.8-33.7q-9.9-9.9-12.4-23.8zm12.9 24.3l-58.9 114.4q13.9 2.5 23.8 12.4l58.9-114.4q-13.9-2.5-23.8-12.4zM151.5 323.8l-33.7 66.4q13.9 2.5 23.8 12.4l29.7-58.9zm129.7 8.4l-139.1 70.8q9.4 9.9 11.9 23.8L285.2 360zM254 381.8l-25.3 12.4 52.5 53q6.4-12.4 19.3-18.8zM109.9 393.7q-15.8 0-27.5 11.1T70.1 432t10.4 28.5 27.7 13.4 29-10.2 13.4-27.7-10.2-29-28-13.4h-2.5zM154 427.3q1 4.5 .5 8.9q-.5 9.4-4.5 17.3l126.8 20.3q-.5-4.5-.5-8.9q.5-8.9 5-17.3zm165.9 0q-15.8 0-27.2 11.1t-12.1 27.2 10.2 28.7 27.7 13.4 29.2-10.4 13.4-27.7-10.2-29-28-13.4h-3z"/></svg>'
        },
        link: 'https://jws.social/@joe',
        ariaLabel: 'JWS Social',
        rel: 'me'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54a102.5 102.5 0 0 1 -.9-13.9c85.6 20.9 158.7 9.1 178.8 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zm-75.1 125.2h-46.6v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.3V197c0-58.5-64-56.6-64-6.9v114.2H90.2c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175z"/></svg>'
        },
        link: 'https://toot.works/@joe',
        ariaLabel: 'Toot Works',
        rel: 'me'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8 .9 0 1.8 .1 2.8 .2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7 .3 13.7 .3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"/></svg>'
        },
        link: 'https://jws.news/',
        ariaLabel: 'Blog',
        rel: 'me'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>'
        },
        link: 'https://www.linkedin.com/in/steinbring/',
        ariaLabel: 'LinkedIn',
        rel: 'me'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>'
        },
        link: 'https://github.com/steinbring/',
        ariaLabel: 'GitHub',
        rel: 'me'
      },
    ]
  },
  head: [
    ['meta', { property: 'og:title', content: 'Joe Steinbring | Milwaukeean, Developer, AI Expert, and Traveler' }],
    ['meta', { property: 'og:description', content: 'Joe Steinbring is your guide to the world of coding, AI innovations, and global traveling experiences in Milwaukee.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://jws.dev' }],
    ['meta', { property: 'og:image', content: 'https://jws.dev/logo.png' }],
    ['meta', { property: 'og:site_name', content: 'Joe Steinbring | Milwaukeean, Developer, AI Expert, and Traveler' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'keywords', content: 'Joe Steinbring, Joseph Steinbring, Steinbring, JWS, Machine Learning, AI, Artificial Intelligence, Milwaukee Developer, Milwaukee, Vue.js, Vue, React, AngularJS, JavaScript, Ollama, Travel' }],
    // Twitter
    ['meta', { property: 'twitter:title', content: 'Joe Steinbring | Milwaukeean, Developer, AI Expert, and Traveler' }],
    ['meta', { property: 'twitter:description', content: 'Joe Steinbring is your guide to the world of coding, AI innovations, and global traveling experiences in Milwaukee.' }],
    ['meta', { property: 'twitter:image', content: 'https://jws.dev/logo.png' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:site', content: '@steinbring' }],
  ],
})
