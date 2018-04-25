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
    "revision": "8f20f3df01461c0e497dbe1881e1dda7"
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
    "url": "assets/js/0.3b5217a8.js",
    "revision": "7fcbedafe31233afed34a1b087ac5d93"
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
    "url": "assets/js/app.d4412a07.js",
    "revision": "03aa8edd3c54a18581614165c15e1335"
  },
  {
    "url": "index.html",
    "revision": "db85ae5a8a5e139325822f4f6808669d"
  },
  {
    "url": "read/index.html",
    "revision": "35846264793d0a8f8fad24907299e68f"
  },
  {
    "url": "read/read-day.html",
    "revision": "1e47a531fc449d95efed63ffd23ef1cb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
