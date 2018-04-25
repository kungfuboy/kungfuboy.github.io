/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "15baf397ca0f59ff5904acf739c0bfba"
  },
  {
    "url": "assets/css/3.styles.443d84ab.css",
    "revision": "231cbd041123079ec179e90adac4f778"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.a93e0ef1.js",
    "revision": "baa37679d198c8e4440233b84b20f761"
  },
  {
    "url": "assets/js/1.c5050887.js",
    "revision": "5bee0b4957f06bedf521dab88466f909"
  },
  {
    "url": "assets/js/2.450e8c96.js",
    "revision": "d1da5b9f31c17abad8e13e185471ff27"
  },
  {
    "url": "assets/js/app.96a2d47d.js",
    "revision": "615dd0f10bc8e8d63626be8d30f53139"
  },
  {
    "url": "index.html",
    "revision": "001bbbdf1e95170b427c13bd18800eb5"
  },
  {
    "url": "read/index.html",
    "revision": "8e57626fa0dcbd0cde64a025285ec1be"
  },
  {
    "url": "read/read-day.html",
    "revision": "4f3809dba60caa5ebea03e82d7288e34"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
