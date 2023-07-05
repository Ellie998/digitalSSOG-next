"use strict";
(() => {
var exports = {};
exports.id = 703;
exports.ids = [703];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Frobots.txt%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/robots.txt?__next_metadata__
var robots_next_metadata_namespaceObject = {};
__webpack_require__.r(robots_next_metadata_namespaceObject);
__webpack_require__.d(robots_next_metadata_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(4664);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Frobots.txt%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/robots.txt?__next_metadata__


const contentType = "text/plain"
const buffer = Buffer.from("IyBodHRwczovL3d3dy5yb2JvdHN0eHQub3JnL3JvYm90c3R4dC5odG1sClVzZXItYWdlbnQ6ICoKRGlzYWxsb3c6ClNpdGVtYXA6IGh0dHBzOi8vc3NvZy5wYWdlcy5kZXYvc2l0ZW1hcC54bWw=", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, immutable, no-transform, max-age=31536000",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Frobots.txt%2Froute&name=app%2Frobots.txt%2Froute&pagePath=private-next-app-dir%2Frobots.txt&appDir=%2FUsers%2Fkim-yerim%2FDocuments%2Fproject%2Fdigital-ssog-react%2Fdigitalssog%2Fapp&appPaths=%2Frobots.txt&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/robots.txt/route","pathname":"/robots.txt","filename":"robots","bundlePath":"app/robots.txt/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Frobots.txt%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/app/robots.txt?__next_metadata__","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: robots_next_metadata_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/robots.txt/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [572], () => (__webpack_exec__(1096)));
module.exports = __webpack_exports__;

})();