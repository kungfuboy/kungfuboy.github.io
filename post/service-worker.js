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
    "revision": "f528aec1978ad730d3359ec291a4848f"
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
    "url": "assets/js/app.9b7b5a36.js",
    "revision": "4f4cbb93d3bb80c992837218b82c02a7"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "005d9bc79102ed18a41e6d0915320eb8"
  },
  {
    "url": "guide/index.html",
    "revision": "040a9510b6558faa218b27e194de0248"
  },
  {
    "url": "index.html",
    "revision": "2207e7f9a104bc27403bd9f267bd1da4"
  },
  {
    "url": "kungfu/index.html",
    "revision": "c0ca22d024ce7d2b67bef42a79ac6420"
  },
  {
    "url": "kungfu/taiji-history.html",
    "revision": "79393dcdd46e336faae5ae8a29bd039e"
  },
  {
    "url": "suibi/index.html",
    "revision": "ae446ef0001d5a1a4d6e83d884c62713"
  },
  {
    "url": "suibi/zhangsanfeng-guoxiang.html",
    "revision": "368bf7d1bcc105d4ce15f7d692f51030"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
