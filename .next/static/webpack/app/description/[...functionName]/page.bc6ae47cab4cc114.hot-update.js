"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/description/[...functionName]/page",{

/***/ "(app-client)/./components/FunctionDescription/MakeAppList.jsx":
/*!********************************************************!*\
  !*** ./components/FunctionDescription/MakeAppList.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MakeMethodList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakeMethodList */ \"(app-client)/./components/FunctionDescription/MakeMethodList.jsx\");\n/* harmony import */ var _MakeAppList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MakeAppList.module.css */ \"(app-client)/./components/FunctionDescription/MakeAppList.module.css\");\n/* harmony import */ var _MakeAppList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MakeAppList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction MakeAppList(param) {\n    var functionMethods = param.functionMethods, appName = param.appName, methodId = param.methodId, descriptionId = param.descriptionId;\n    var _this = this;\n    //   const searchParams = useSearchParams();\n    //   const paramAppName = searchParams.get(\"appName\");\n    // const [appName, setAppName] = useState(paramAppName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: (_MakeAppList_module_css__WEBPACK_IMPORTED_MODULE_4___default().listWrap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_MakeAppList_module_css__WEBPACK_IMPORTED_MODULE_4___default().extraInfoWrap),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"bi bi-info-circle-fill\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    \" 아래 글씨를 눌러보세요\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            functionMethods === null || functionMethods === void 0 ? void 0 : functionMethods.map(function(functionMethodObject) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                        open: appName === functionMethodObject.methodAppName ? true : false,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                                \"data-tooltip-left\": \"클릭!\",\n                                className: (_MakeAppList_module_css__WEBPACK_IMPORTED_MODULE_4___default().fontSize_1_2rem),\n                                children: [\n                                    functionMethodObject.methodAppName,\n                                    \" 어플\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MakeMethodList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                functionMethodObject: functionMethodObject,\n                                methodId: methodId,\n                                descriptionId: descriptionId,\n                                appName: appName,\n                                setAppName: setAppName,\n                                setMethodId: setMethodId,\n                                setDescriptionId: setDescriptionId\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this)\n                }, Math.random(), false, {\n                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = MakeAppList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeAppList);\nvar _c;\n$RefreshReg$(_c, \"MakeAppList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VBcHBMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBQ0o7QUFDQztBQUNIO0FBRTVDLFNBQVNLLFlBQVksS0FBcUQ7UUFBbkRDLGtCQUFGLE1BQUVBLGlCQUFpQkMsVUFBbkIsTUFBbUJBLFNBQVNDLFdBQTVCLE1BQTRCQSxVQUFVQyxnQkFBdEMsTUFBc0NBOztJQUN6RCw0Q0FBNEM7SUFDNUMsc0RBQXNEO0lBQ3RELHdEQUF3RDtJQUV4RCxxQkFDRSw4REFBQ0M7UUFBR0MsV0FBV1QseUVBQWdCVTs7MEJBQzdCLDhEQUFDQztnQkFBRUYsV0FBV1QsOEVBQXFCWTs7a0NBQ2pDLDhEQUFDQzt3QkFBRUosV0FBVTs7Ozs7O29CQUE2Qjs7Ozs7OztZQUUzQ0wsNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUJVLElBQUksU0FBQ0M7cUNBQ3JCLDhEQUFDQzs4QkFDQyw0RUFBQ0M7d0JBQ0NDLE1BQ0ViLFlBQVlVLHFCQUFxQkksZ0JBQWdCLE9BQU87OzBDQUUxRCw4REFBQ0M7Z0NBQ0NDLHFCQUFrQjtnQ0FDbEJaLFdBQVdULGdGQUF1QnNCOztvQ0FDakNQLHFCQUFxQkk7b0NBQWM7Ozs7Ozs7MENBRXRDLDhEQUFDcEIsdURBQWNBO2dDQUNiZ0Isc0JBQXNCQTtnQ0FDdEJULFVBQVVBO2dDQUNWQyxlQUFlQTtnQ0FDZkYsU0FBU0E7Z0NBQ1RrQixZQUFZQTtnQ0FDWkMsYUFBYUE7Z0NBQ2JDLGtCQUFrQkE7Ozs7Ozs7Ozs7OzttQkFqQmZDLEtBQUtDOzs7Ozs7Ozs7Ozs7QUF3QnRCO0tBbkNTeEI7QUFxQ1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VBcHBMaXN0LmpzeD9jYTAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBNYWtlTWV0aG9kTGlzdCBmcm9tIFwiLi9NYWtlTWV0aG9kTGlzdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWFrZUFwcExpc3QubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNYWtlQXBwTGlzdCh7IGZ1bmN0aW9uTWV0aG9kcywgYXBwTmFtZSwgbWV0aG9kSWQsIGRlc2NyaXB0aW9uSWQgfSkge1xuICAvLyAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICAvLyAgIGNvbnN0IHBhcmFtQXBwTmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJhcHBOYW1lXCIpO1xuICAvLyBjb25zdCBbYXBwTmFtZSwgc2V0QXBwTmFtZV0gPSB1c2VTdGF0ZShwYXJhbUFwcE5hbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPG9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0V3JhcH0+XG4gICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZXh0cmFJbmZvV3JhcH0+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWluZm8tY2lyY2xlLWZpbGxcIj48L2k+IOyVhOuemCDquIDslKjrpbwg64iM65+s67O07IS47JqUXG4gICAgICA8L3A+XG4gICAgICB7ZnVuY3Rpb25NZXRob2RzPy5tYXAoKGZ1bmN0aW9uTWV0aG9kT2JqZWN0KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgICAgIDxkZXRhaWxzXG4gICAgICAgICAgICBvcGVuPXtcbiAgICAgICAgICAgICAgYXBwTmFtZSA9PT0gZnVuY3Rpb25NZXRob2RPYmplY3QubWV0aG9kQXBwTmFtZSA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgfT5cbiAgICAgICAgICAgIDxzdW1tYXJ5XG4gICAgICAgICAgICAgIGRhdGEtdG9vbHRpcC1sZWZ0PVwi7YG066atIVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb250U2l6ZV8xXzJyZW19PlxuICAgICAgICAgICAgICB7ZnVuY3Rpb25NZXRob2RPYmplY3QubWV0aG9kQXBwTmFtZX0g7Ja07ZSMXG4gICAgICAgICAgICA8L3N1bW1hcnk+XG4gICAgICAgICAgICA8TWFrZU1ldGhvZExpc3RcbiAgICAgICAgICAgICAgZnVuY3Rpb25NZXRob2RPYmplY3Q9e2Z1bmN0aW9uTWV0aG9kT2JqZWN0fVxuICAgICAgICAgICAgICBtZXRob2RJZD17bWV0aG9kSWR9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uSWQ9e2Rlc2NyaXB0aW9uSWR9XG4gICAgICAgICAgICAgIGFwcE5hbWU9e2FwcE5hbWV9XG4gICAgICAgICAgICAgIHNldEFwcE5hbWU9e3NldEFwcE5hbWV9XG4gICAgICAgICAgICAgIHNldE1ldGhvZElkPXtzZXRNZXRob2RJZH1cbiAgICAgICAgICAgICAgc2V0RGVzY3JpcHRpb25JZD17c2V0RGVzY3JpcHRpb25JZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC9vbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFrZUFwcExpc3Q7XG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwiTWFrZU1ldGhvZExpc3QiLCJjbGFzc2VzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNYWtlQXBwTGlzdCIsImZ1bmN0aW9uTWV0aG9kcyIsImFwcE5hbWUiLCJtZXRob2RJZCIsImRlc2NyaXB0aW9uSWQiLCJvbCIsImNsYXNzTmFtZSIsImxpc3RXcmFwIiwicCIsImV4dHJhSW5mb1dyYXAiLCJpIiwibWFwIiwiZnVuY3Rpb25NZXRob2RPYmplY3QiLCJsaSIsImRldGFpbHMiLCJvcGVuIiwibWV0aG9kQXBwTmFtZSIsInN1bW1hcnkiLCJkYXRhLXRvb2x0aXAtbGVmdCIsImZvbnRTaXplXzFfMnJlbSIsInNldEFwcE5hbWUiLCJzZXRNZXRob2RJZCIsInNldERlc2NyaXB0aW9uSWQiLCJNYXRoIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/FunctionDescription/MakeAppList.jsx\n"));

/***/ })

});