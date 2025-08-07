'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a8dcab4143ad2ee409bc7a83c3e255d7",
"version.json": "b91942697522d16bc0fabe5955bf5fe8",
"index.html": "1917fc3c7b37bce8e3da7e029810f86f",
"/": "1917fc3c7b37bce8e3da7e029810f86f",
"main.dart.js": "8b8f38d17bacaeb4fd9f56b57ed86054",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8436f97d36516e844c4fe0bb65246df7",
"assets/AssetManifest.json": "c8b1673c921352386ee98ec34578d46a",
"assets/NOTICES": "7d0836ff108bd523959bf472df9edd8d",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/AssetManifest.bin.json": "0e01f4ee8d91551fcf8f67d43865de36",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b32fe403dea71b30905668fac2b297c6",
"assets/fonts/MaterialIcons-Regular.otf": "d7ef7a542b2b70f2aee401ac15a7aa3b",
"assets/assets/item/Item_21.png": "2a1fd9e092d4af7bbbdcce451e4497fd",
"assets/assets/item/Item_35.png": "a99b00afe77793de6e2c04f217b7d98f",
"assets/assets/item/Item_34.png": "6e9c6ba86624a9e9d58d9bca19c78c58",
"assets/assets/item/Item_20.png": "248da28c7e8536ded0f0fe2afdef1a47",
"assets/assets/item/Item_36.png": "b10aecf89143c237ff915ec8a253e2d3",
"assets/assets/item/Item_22.png": "0e9d614e3869637ee2f781e2840474ef",
"assets/assets/item/Item_23.png": "82dc7c5f095536c73c4c6c2be49c82c0",
"assets/assets/item/Item_33.png": "ed8c66cf4eb09c9ed74fe54d3b30b2ca",
"assets/assets/item/Item_27.png": "09e4cff507da6e5f0fd7099efe850d34",
"assets/assets/item/Item_26.png": "223f0f6b147b1a299071e6321ae4cbdb",
"assets/assets/item/Item_32.png": "6be4de3fa88a3d4d56afbb51ef09834d",
"assets/assets/item/Item_18.png": "6abbaa331b21580a6bbfeaecb60ffb3c",
"assets/assets/item/Item_24.png": "63b978b08ad0325a59bddeafdd7d0958",
"assets/assets/item/Item_30.png": "211949dcfbdcd5cb517ee0e554ca6057",
"assets/assets/item/Item_31.png": "e080a1a559ebad0eb016f4e53ae30fa7",
"assets/assets/item/Item_25.png": "0c28dfea1020b71e14d23a17011a1861",
"assets/assets/item/Item_19.png": "7d559b91f0bdd38a918aa801defb7dca",
"assets/assets/item/Item_9.png": "17a5217863c86dfa5314cf44b9284a48",
"assets/assets/item/Item_8.png": "54ee79b94a773ff6e969656c0accd7d5",
"assets/assets/item/Item_5.png": "c3bfa856274892b6d89e5748e612d720",
"assets/assets/item/Item_4.png": "ed9b4423ef23a37a6cf2ca9b71fd01dd",
"assets/assets/item/Item_6.png": "c7816c8cc490566b08b0015e37fabec1",
"assets/assets/item/Item_7.png": "8f7e22564c27a7dd3e4a2cc0430df1ef",
"assets/assets/item/Item_3.png": "47d4ae989eff897fd8ea588237c58e60",
"assets/assets/item/Item_2.png": "e257b10d8aab8e0e67e53025c61f8a3c",
"assets/assets/item/Item_1.png": "caf81a7d110f3b70d36d5944ca07970f",
"assets/assets/item/Item_14.png": "4f75cdd587214f3e6f9537d5fb23315c",
"assets/assets/item/Item_28.png": "5115d051a455eed4fd260462ecd63d97",
"assets/assets/item/Item_29.png": "88fc1efb8bf13c1736c9061f028a0c92",
"assets/assets/item/Item_15.png": "741ad13708dbff1d8e335b6667f40734",
"assets/assets/item/Item_17.png": "c17ffbdb7745ec6be2f7c61f2b021f27",
"assets/assets/item/Item_16.png": "572fba6d7f45a8d93e7d8da0b5207670",
"assets/assets/item/Item_12.png": "6ddef91adfef64d1cc49d68e933200a2",
"assets/assets/item/Item_13.png": "daf35460b7a259e8f2a6eb4affefb12d",
"assets/assets/item/Item_11.png": "78e0d1fd1623f14b92eb12098acad88b",
"assets/assets/item/Item_10.png": "5ae2cb61bf4e6f55fe9fb3bfa14ce884",
"assets/assets/bg/background_27.png": "8e7d84e564e31bfb68ecda6bf18c61b0",
"assets/assets/bg/background_26.png": "a8df6f4921723e2a68bf5985693384a5",
"assets/assets/bg/background_18.png": "056312e59750474c7642aa38a6361538",
"assets/assets/bg/background_24.png": "5c06c029ceb61b86d2964ecdcaddba29",
"assets/assets/bg/background_25.png": "56151b64be487fbebb92c2e76b90335b",
"assets/assets/bg/background_19.png": "6fd9dca3529a6d788bf9bebf6fa32b42",
"assets/assets/bg/background_21.png": "9b3e6cca063d71ff94034a7b0c981a1e",
"assets/assets/bg/background_20.png": "f5acd3521e6b48328eda5376a179673a",
"assets/assets/bg/background_22.png": "ead3df63c71a1a1fbe33e28c0bd26f9f",
"assets/assets/bg/background_23.png": "bfe62a1c374c6364b27b46a6138ea588",
"assets/assets/bg/background_9.png": "ad73865360af97c7351a64703174ba14",
"assets/assets/bg/background_8.png": "43d9153e8a6416b7cca6536c8865781f",
"assets/assets/bg/background_6.png": "fd9b4cdfa8fe690733f2abfe87823ebe",
"assets/assets/bg/background_7.png": "9f978aed8f187ffc91d55f8791a6eebc",
"assets/assets/bg/background_5.png": "da7c731c5b69ba3e202f2e061efa5604",
"assets/assets/bg/background_4.png": "5ac808c6e021ddb4818de1e0f93b803a",
"assets/assets/bg/background_1.png": "4e17f4023c51c126e3772ed2f3423556",
"assets/assets/bg/background_3.png": "9982f171919861602b6bd10178b3260a",
"assets/assets/bg/background_2.png": "22e55c217ae0baf4490a6593a8e8c2b4",
"assets/assets/bg/background_12.png": "e6b1939582e7a595972a7c9ba2da42dc",
"assets/assets/bg/background_13.png": "743eb996493849c02c429e1bfa86e79f",
"assets/assets/bg/background_11.png": "346fb194713be9b894bdf40db72a7951",
"assets/assets/bg/background_10.png": "7879e0394bc4694e0ca8787461e350d4",
"assets/assets/bg/background_14.png": "58b29459e42658bc1f8aa34fea4842d4",
"assets/assets/bg/background_28.png": "4004a9b4e7e8036e48ec40cc3eb2c878",
"assets/assets/bg/background_15.png": "8b24c14e571572a6dbc6bec6bf7a25a2",
"assets/assets/bg/background_17.png": "efa6519ff09426eca0694f7995430320",
"assets/assets/bg/background_16.png": "db65347e521719eec3ce444aaecb3647",
"assets/assets/hero/Hero_9.png": "8ce862fac789dff3c623dba81db11fc9",
"assets/assets/hero/Hero_13.png": "7da6c758b2adb2b8890f1b91ed97da5d",
"assets/assets/hero/Hero_12.png": "83384bf8d6c499f1b8395ecb3956265e",
"assets/assets/hero/Hero_8.png": "f868b5b9852e964ec316ff73cd025cb9",
"assets/assets/hero/Hero_10.png": "cd86711fbb169a5f45a76d8b72c052c0",
"assets/assets/hero/Hero_11.png": "109aa62ad00ee783130911ae73b66c43",
"assets/assets/hero/Hero_15.png": "4887037a61226decb95f145f3c31a988",
"assets/assets/hero/Hero_14.png": "8449f4e5551b96b7da7b935ec158326e",
"assets/assets/hero/Hero_16.png": "6c5b0537458dfac85f3168a34a250b77",
"assets/assets/hero/Hero_17.png": "a56ed23bc08e9b2ff746648a6e364349",
"assets/assets/hero/Hero_26.png": "bfce7999c35fa7568c33d3ceeb657e30",
"assets/assets/hero/Hero_1.png": "b07b9855f404d2fac32fd6125cf85368",
"assets/assets/hero/Hero_3.png": "0f9543b1bc0724a37784cadabaa33206",
"assets/assets/hero/Hero_25.png": "babaa906b1e60a0f3e5764364e5ef3bb",
"assets/assets/hero/Hero_19.png": "3e83b891240fc3dac1288bff8d89bdc7",
"assets/assets/hero/Hero_18.png": "cdbc3d3789c70f3f97f2765406d6c58f",
"assets/assets/hero/Hero_24.png": "cf9cad62eeb6de589a64f6f3a28322e1",
"assets/assets/hero/Hero_2.png": "d8d7556ab329afc5d3570f6105ff50b8",
"assets/assets/hero/Hero_6.png": "934019fc6f4d600db520b476ce20bd83",
"assets/assets/hero/Hero_20.png": "2da6b5400b809df197b2933eaa9ea59a",
"assets/assets/hero/Hero_21.png": "e801dba4f1c52ab35c86ed766f12bbc5",
"assets/assets/hero/Hero_7.png": "7e21832c037b48a83eb8fea612bfe3f2",
"assets/assets/hero/Hero_5.png": "6dd08395f34b3e679fa774433c0b6b2f",
"assets/assets/hero/Hero_23.png": "7fbb901ea4ec44868bb32ce3fa2c64d3",
"assets/assets/hero/Hero_22.png": "d02963b5c298e9de5d7d0a80dc28d165",
"assets/assets/hero/Hero_4.png": "cf7aff3235cd8723987b6dd5ca12178a",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
