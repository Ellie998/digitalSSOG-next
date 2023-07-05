"use strict";
(() => {
var exports = {};
exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 8017:
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

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/sitemap.xml?__next_metadata__
var sitemap_next_metadata_namespaceObject = {};
__webpack_require__.r(sitemap_next_metadata_namespaceObject);
__webpack_require__.d(sitemap_next_metadata_namespaceObject, {
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
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/sitemap.xml?__next_metadata__


const contentType = "application/xml"
const buffer = Buffer.from("PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHVybHNldAogICAgICB4bWxucz0iaHR0cDovL3d3dy5zaXRlbWFwcy5vcmcvc2NoZW1hcy9zaXRlbWFwLzAuOSIKICAgICAgeG1sbnM6eHNpPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSIKICAgICAgeHNpOnNjaGVtYUxvY2F0aW9uPSJodHRwOi8vd3d3LnNpdGVtYXBzLm9yZy9zY2hlbWFzL3NpdGVtYXAvMC45CiAgICAgICAgICAgIGh0dHA6Ly93d3cuc2l0ZW1hcHMub3JnL3NjaGVtYXMvc2l0ZW1hcC8wLjkvc2l0ZW1hcC54c2QiPgo8IS0tIGNyZWF0ZWQgd2l0aCBGcmVlIE9ubGluZSBTaXRlbWFwIEdlbmVyYXRvciB3d3cueG1sLXNpdGVtYXBzLmNvbSAtLT4KPHVybD4KICA8bG9jPmh0dHBzOi8vc3NvZy5wYWdlcy5kZXYvPC9sb2M+CiAgPGxhc3Rtb2Q+MjAyMy0wNi0yOFQwNzowOToxMCswMDowMDwvbGFzdG1vZD4KICA8cHJpb3JpdHk+MS4wMDwvcHJpb3JpdHk+CjwvdXJsPgo8IS0t7KCE7ZmU67Cb6riwLS0+Cjx1cmw+CiAgPGxvYz5odHRwczovL3Nzb2cucGFnZXMuZGV2L2Rlc2NyaXB0aW9uLyVGMCU5RiU5MyU5RSVFQyVBMCU4NCVFRCU5OSU5NCVFQiVCMCU5QiVFQSVCOCVCMCglRUMlODglOTglRUMlOEIlQTApPC9sb2M+CiAgPGxhc3Rtb2Q+MjAyMy0wNi0yOFQwNzowOToxMCswMDowMDwvbGFzdG1vZD4KICA8cHJpb3JpdHk+MC44MDwvcHJpb3JpdHk+CjwvdXJsPgo8IS0t7KCE7ZmU6rG46riwLS0+Cjx1cmw+CiAgPGxvYz5odHRwczovL3Nzb2cucGFnZXMuZGV2L2Rlc2NyaXB0aW9uLyVGMCU5RiU5MyU5RSVFQyVBMCU4NCVFRCU5OSU5NCVFQSVCMSVCOCVFQSVCOCVCMCglRUIlQjAlOUMlRUMlOEIlQTApPC9sb2M+CiAgPGxhc3Rtb2Q+MjAyMy0wNi0yOFQwNzowOToxMCswMDowMDwvbGFzdG1vZD4KICA8cHJpb3JpdHk+MC44MDwvcHJpb3JpdHk+CjwvdXJsPgo8IS0t7JiB7IOB7Ya17ZmUIOuwnOyLoC0tPgo8dXJsPgogIDxsb2M+aHR0cHM6Ly9zc29nLnBhZ2VzLmRldi9kZXNjcmlwdGlvbi8lRjAlOUYlQTQlQjMlRUMlOTglODElRUMlODMlODElRUQlODYlQjUlRUQlOTklOTQlMjAlRUIlQjAlOUMlRUMlOEIlQTA8L2xvYz4KICA8bGFzdG1vZD4yMDIzLTA2LTI4VDA3OjA5OjEwKzAwOjAwPC9sYXN0bW9kPgogIDxwcmlvcml0eT4wLjgwPC9wcmlvcml0eT4KPC91cmw+CjwhLS3rrLjsnpAg67Cc7IugLS0+Cjx1cmw+CiAgPGxvYz5odHRwczovL3Nzb2cucGFnZXMuZGV2L2Rlc2NyaXB0aW9uLyVGMCU5RiU5MiVBQyVFQiVBQyVCOCVFQyU5RSU5MCUyMCVFQiVCMCU5QyVFQyU4QiVBMDwvbG9jPgogIDxsYXN0bW9kPjIwMjMtMDYtMjhUMDc6MDk6MTArMDA6MDA8L2xhc3Rtb2Q+CiAgPHByaW9yaXR5PjAuODA8L3ByaW9yaXR5Pgo8L3VybD4KPCEtLeusuOyekCDsiJjsi6AtLT4KPHVybD4KICA8bG9jPmh0dHBzOi8vc3NvZy5wYWdlcy5kZXYvZGVzY3JpcHRpb24vJUYwJTlGJTkyJUFDJUVCJUFDJUI4JUVDJTlFJTkwJTIwJUVDJTg4JTk4JUVDJThCJUEwPC9sb2M+CiAgPGxhc3Rtb2Q+MjAyMy0wNi0yOFQwNzowOToxMCswMDowMDwvbGFzdG1vZD4KICA8cHJpb3JpdHk+MC44MDwvcHJpb3JpdHk+CjwvdXJsPgo8IS0t7JiI7JW966y47J6QIOuwnOyGoS0tPgo8dXJsPgogIDxsb2M+aHR0cHM6Ly9zc29nLnBhZ2VzLmRldi9kZXNjcmlwdGlvbi8lRTIlOUMlODklRUYlQjglOEYlRUMlOTglODglRUMlOTUlQkQlMjAlRUIlQUMlQjglRUMlOUUlOTAlMjAlRUIlQjAlOUMlRUMlODYlQTE8L2xvYz4KICA8bGFzdG1vZD4yMDIzLTA2LTI4VDA3OjA5OjEwKzAwOjAwPC9sYXN0bW9kPgogIDxwcmlvcml0eT4wLjgwPC9wcmlvcml0eT4KPC91cmw+CjwhLS3rrLjsnpAg7KCE64usLS0+Cjx1cmw+CiAgPGxvYz5odHRwczovL3Nzb2cucGFnZXMuZGV2L2Rlc2NyaXB0aW9uLyVFMiU5QyU4OSVFRiVCOCU4RiVFQiVBQyVCOCVFQyU5RSU5MCUyMCVFQyVBMCU4NCVFQiU4QiVBQzwvbG9jPgogIDxsYXN0bW9kPjIwMjMtMDYtMjhUMDc6MDk6MTArMDA6MDA8L2xhc3Rtb2Q+CiAgPHByaW9yaXR5PjAuODA8L3ByaW9yaXR5Pgo8L3VybD4KPCEtLeydtOuvuOyngCwg64+Z7JiB7IOBIOyghOyGoS0tPgo8dXJsPgogIDxsb2M+aHR0cHM6Ly9zc29nLnBhZ2VzLmRldi9kZXNjcmlwdGlvbi8lRjAlOUYlOTMlODElRUMlOUQlQjQlRUIlQUYlQjglRUMlQTclODAsJTIwJUVCJThGJTk5JUVDJTk4JTgxJUVDJTgzJTgxJTIwJUVDJUEwJTg0JUVDJTg2JUExPC9sb2M+CiAgPGxhc3Rtb2Q+MjAyMy0wNi0yOFQwNzowOToxMCswMDowMDwvbGFzdG1vZD4KICA8cHJpb3JpdHk+MC44MDwvcHJpb3JpdHk+CjwvdXJsPgo8IS0t7Jik65SU7JikIOyghOyGoS0tPgo8dXJsPgogIDxsb2M+aHR0cHM6Ly9zc29nLnBhZ2VzLmRldi9kZXNjcmlwdGlvbi8lRjAlOUYlOTMlODElRUMlOTglQTQlRUIlOTQlOTQlRUMlOTglQTQlMjAlRUMlQTAlODQlRUMlODYlQTE8L2xvYz4KICA8bGFzdG1vZD4yMDIzLTA2LTI4VDA3OjA5OjEwKzAwOjAwPC9sYXN0bW9kPgogIDxwcmlvcml0eT4wLjgwPC9wcmlvcml0eT4KPC91cmw+CjwhLS3sl7Drnb3sspgg6rO17JygLS0+Cjx1cmw+CiAgPGxvYz5odHRwczovL3Nzb2cucGFnZXMuZGV2L2Rlc2NyaXB0aW9uLyVFMiU5OCU4RSVFRiVCOCU4RiVFQyU5NyVCMCVFQiU5RCVCRCVFQyVCMiU5OCUyMCVFQSVCMyVCNSVFQyU5QyVBMDwvbG9jPgogIDxsYXN0bW9kPjIwMjMtMDYtMjhUMDc6MDk6MTArMDA6MDA8L2xhc3Rtb2Q+CiAgPHByaW9yaXR5PjAuODA8L3ByaW9yaXR5Pgo8L3VybD4KPCEtLeq3uOujueyxhO2MheuwqSDrgpjqsIDquLAg67CPIOy0iOuMgCDqsbDrtoAtLT4KPHVybD4KICA8bG9jPmh0dHBzOi8vc3NvZy5wYWdlcy5kZXYvZGVzY3JpcHRpb24vJUYwJTlGJTk5JThCJUVBJUI3JUI4JUVCJUEzJUI5JUVDJUIxJTg0JUVEJThDJTg1JUVCJUIwJUE5JTIwJUVDJUI0JTg4JUVCJThDJTgwJUVBJUIxJUIwJUVCJUI2JTgwJTIwJUVCJUIwJThGJTIwJUVCJTgyJTk4JUVBJUIwJTgwJUVBJUI4JUIwPC9sb2M+CiAgPGxhc3Rtb2Q+MjAyMy0wNy0wMVQwNzowOToxMCswMDowMDwvbGFzdG1vZD4KICA8cHJpb3JpdHk+MC44MDwvcHJpb3JpdHk+CjwvdXJsPgo8IS0t6re466O57LGE7YyF67CpIOuMgO2ZlCDsnqDquIgtLT4KPHVybD4KICA8bG9jPmh0dHBzOi8vc3NvZy5wYWdlcy5kZXYvZGVzY3JpcHRpb24vJUUyJTlCJTk0JUVGJUI4JThGJUVBJUI3JUI4JUVCJUEzJUI5JUVDJUIxJTg0JUVEJThDJTg1JUVCJUIwJUE5JTIwJUVDJUIxJTg0JUVEJThDJTg1JTIwJUVDJTlFJTg1JUVCJUEwJUE1JUVDJUIwJUJEJTIwJUVDJTlFJUEwJUVBJUI4JTg4JUVEJTk1JTk4JUVBJUI4JUIwPC9sb2M+CiAgPGxhc3Rtb2Q+MjAyMy0wNy0wM1QwNzowOToxMCswMDowMDwvbGFzdG1vZD4KICA8cHJpb3JpdHk+MC44MDwvcHJpb3JpdHk+CjwvdXJsPgo8L3VybHNldD4=", 'base64'
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fsitemap.xml%2Froute&name=app%2Fsitemap.xml%2Froute&pagePath=private-next-app-dir%2Fsitemap.xml&appDir=%2FUsers%2Fkim-yerim%2FDocuments%2Fproject%2Fdigital-ssog-react%2Fdigitalssog%2Fapp&appPaths=%2Fsitemap.xml&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/sitemap.xml/route","pathname":"/sitemap.xml","filename":"sitemap","bundlePath":"app/sitemap.xml/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Fsitemap.xml%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/app/sitemap.xml?__next_metadata__","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: sitemap_next_metadata_namespaceObject,
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

    const originalPathname = "/sitemap.xml/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [572], () => (__webpack_exec__(8017)));
module.exports = __webpack_exports__;

})();