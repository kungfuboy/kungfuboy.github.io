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
    "revision": "98b6fa17219422903a2a7b633f954dd5"
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
    "url": "assets/js/0.a1272708.js",
    "revision": "16cd8ad80e405e72157e56b0fcc1c050"
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
    "url": "assets/js/app.bcfc2963.js",
    "revision": "2942ac7867aa00ff61ad0caaa92aa6f6"
  },
  {
    "url": "index.html",
    "revision": "046b643696403053ee9cce22bf1015b5"
  },
  {
    "url": "read/index.html",
    "revision": "086cdacc917feb7052d7bd31997ae26b"
  },
  {
    "url": "read/read-day.html",
    "revision": "913d05c71994ccf8883d9113751839bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
