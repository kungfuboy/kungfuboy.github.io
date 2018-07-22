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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4e7c8bf830dc08503d79e0a85b3e7fd5"
  },
  {
    "url": "assets/css/9.styles.77057a7e.css",
    "revision": "f6a8a025fbad004e2eae71de71a745da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.f343d06c.js",
    "revision": "b6751cbf3886669cf41f9f5c3c9ba2bb"
  },
  {
    "url": "assets/js/1.d0fe7c6c.js",
    "revision": "3f31fc6fe14935c8d24809d345bc4d3c"
  },
  {
    "url": "assets/js/2.3cd03a3a.js",
    "revision": "f10efa5058f3b0eb14264dc65b622c2b"
  },
  {
    "url": "assets/js/3.dbecc47a.js",
    "revision": "4b502752dcaa40c8f90998f54f065150"
  },
  {
    "url": "assets/js/4.1027531a.js",
    "revision": "e3e9d470a75f0d4ff616383e4492c51d"
  },
  {
    "url": "assets/js/5.c5e9d01e.js",
    "revision": "dcad7177dbed7533b2ac7b0f9704054a"
  },
  {
    "url": "assets/js/6.1b39d8ae.js",
    "revision": "70089e0493b53e1eed4b0030a2518dd2"
  },
  {
    "url": "assets/js/7.b94e0451.js",
    "revision": "9032b544deaf7fb979aa805c477c2448"
  },
  {
    "url": "assets/js/8.c3a3181b.js",
    "revision": "72322c802fcafbaba24e7bfbc1bcfdec"
  },
  {
    "url": "assets/js/app.64f089fb.js",
    "revision": "25f5e4f163886b58f20afd41f911759a"
  },
  {
    "url": "index.html",
    "revision": "ec9d5faf3ef9c979b7e3033cd6b1f99b"
  },
  {
    "url": "kungfu/index.html",
    "revision": "a810ee42ed9004cdd2020f9c29871a05"
  },
  {
    "url": "kungfu/taiji-history.html",
    "revision": "351b2f0a9192f2a58ca90475278b8778"
  },
  {
    "url": "read/index.html",
    "revision": "433192350fa98cbfefd9a430c6c559c5"
  },
  {
    "url": "read/read-day.html",
    "revision": "789d4a39373964395ce9a427cb83f35c"
  },
  {
    "url": "think/index.html",
    "revision": "c309b3ef68b33095da78dcbc09ee6e1f"
  },
  {
    "url": "think/ion-machine.html",
    "revision": "40866207ab5f97bdce99a521506dd8f7"
  },
  {
    "url": "think/last-year.html",
    "revision": "96b03e308e178e81210ae001eaae5882"
  },
  {
    "url": "think/traffic-accident.html",
    "revision": "4f4f582144f6744749c3dbc68fdb4f43"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
