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
    "revision": "2a5af663ee5b0e081f81bdd68b542288"
  },
  {
    "url": "assets/css/2.styles.abac559f.css",
    "revision": "231cbd041123079ec179e90adac4f778"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.b608fcc9.js",
    "revision": "60e2e8537c9c17847e379425d78a7633"
  },
  {
    "url": "assets/js/1.66dfc68b.js",
    "revision": "139c553c72896ea6bac1c67c03220805"
  },
  {
    "url": "assets/js/app.86149217.js",
    "revision": "b4826332f8f0009fbfbb1217a6be9698"
  },
  {
    "url": "guide/index.html",
    "revision": "7b26e9c439e6346b5d2ae77943ce2296"
  },
  {
    "url": "index.html",
    "revision": "e55fdf836e7c6bfd0c3b2f0bfa51e14d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
