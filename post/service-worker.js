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
    "revision": "eac7e3c2dd65f2ccd676220baf83fa28"
  },
  {
    "url": "assets/css/7.styles.124d4d69.css",
    "revision": "9316f92b619555eab16e04c0930834a1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.6a120059.js",
    "revision": "d9bb5bff4a2613fbcc011923eb9dd1a9"
  },
  {
    "url": "assets/js/1.c57d8a46.js",
    "revision": "4b733d4d0e6715eb2c355ac04f2475c2"
  },
  {
    "url": "assets/js/2.98cea216.js",
    "revision": "1af617ef34ebe270c1a08f9aba618b72"
  },
  {
    "url": "assets/js/3.b8101932.js",
    "revision": "5495dcdc54a93b5693186a96a0779304"
  },
  {
    "url": "assets/js/4.e2e225fd.js",
    "revision": "a09a8b68fdf21946f12e84f9e08f4152"
  },
  {
    "url": "assets/js/5.f96a10d0.js",
    "revision": "c1a203b6c651f9229b420bbca18e9601"
  },
  {
    "url": "assets/js/6.4837f59b.js",
    "revision": "16df50657650abe7803c82a9caddf586"
  },
  {
    "url": "assets/js/app.2819c844.js",
    "revision": "422693dc13196bbe6f3c7b33cbb82b99"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d0924318f1005caff8cf5bb0fc1d82fe"
  },
  {
    "url": "guide/index.html",
    "revision": "eb5f0f67600b5572aa97f46d3b421987"
  },
  {
    "url": "index.html",
    "revision": "79c9462d4c3962fd6787a3767b7e4361"
  },
  {
    "url": "kungfu/index.html",
    "revision": "05e996ded531ae1eaedc7e150d3abcc8"
  },
  {
    "url": "kungfu/taiji-history.html",
    "revision": "0000bb5d16f57625b84b6d72cb5a9933"
  },
  {
    "url": "suibi/index.html",
    "revision": "8ea3a33d60cee13b6300438c47207170"
  },
  {
    "url": "suibi/zhangsanfeng-guoxiang.html",
    "revision": "80af557991560b55ab6eb2c48b3c2bb2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
