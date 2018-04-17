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
    "revision": "5e34e3fbe4e21a5f1a6747c29223a3a9"
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
    "url": "assets/js/app.5211fbf6.js",
    "revision": "4f4cbb93d3bb80c992837218b82c02a7"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "af1440bcaf5239a2cfc7b5ede4ad8576"
  },
  {
    "url": "guide/index.html",
    "revision": "2aef984643900809557f1a77e6142e03"
  },
  {
    "url": "index.html",
    "revision": "d16688f88ca3635ae0d73254c7be6829"
  },
  {
    "url": "kungfu/index.html",
    "revision": "c34239b9bfe4e40afca9c9fb568f912c"
  },
  {
    "url": "kungfu/taiji-history.html",
    "revision": "39227e849f17ad9e37fd2dcbd710d17a"
  },
  {
    "url": "suibi/index.html",
    "revision": "1210f5cf2a177dbe3a305824e3555ee7"
  },
  {
    "url": "suibi/zhangsanfeng-guoxiang.html",
    "revision": "b8874f1a86b63675eeeb7e83a7aeb6f5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
