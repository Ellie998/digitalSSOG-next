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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MakeMethodList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakeMethodList */ \"(app-client)/./components/FunctionDescription/MakeMethodList.jsx\");\n/* harmony import */ var _MakeAppList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MakeAppList.module.css */ \"(app-client)/./components/FunctionDescription/MakeAppList.module.css\");\n/* harmony import */ var _MakeAppList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MakeAppList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction MakeAppList(param) {\n    var functionMethods = param.functionMethods, setAppName = param.setAppName, appName = param.appName;\n    var _this = this;\n    // const searchParams = useSearchParams();\n    // const paramAppName = searchParams.get(\"appName\");\n    // const [appName, setAppName] = useState(paramAppName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: (_MakeAppList_module_css__WEBPACK_IMPORTED_MODULE_4___default().listWrap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_MakeAppList_module_css__WEBPACK_IMPORTED_MODULE_4___default().extraInfoWrap),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"bi bi-info-circle-fill\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    \" 아래 글씨를 눌러보세요\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            functionMethods === null || functionMethods === void 0 ? void 0 : functionMethods.map(function(functionMethodObject) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                        open: appName === functionMethodObject.methodAppName ? true : false,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                                \"data-tooltip-left\": \"클릭!\",\n                                className: (_MakeAppList_module_css__WEBPACK_IMPORTED_MODULE_4___default().fontSize_1_2rem),\n                                children: [\n                                    functionMethodObject.methodAppName,\n                                    \" 어플\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MakeMethodList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                functionMethodObject: functionMethodObject,\n                                setAppName: setAppName\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this)\n                }, Math.random(), false, {\n                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeAppList.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = MakeAppList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeAppList);\nvar _c;\n$RefreshReg$(_c, \"MakeAppList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VBcHBMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBQ0o7QUFDQztBQUNIO0FBRTVDLFNBQVNLLFlBQVksS0FBd0M7UUFBdENDLGtCQUFGLE1BQUVBLGlCQUFpQkMsYUFBbkIsTUFBbUJBLFlBQVlDLFVBQS9CLE1BQStCQTs7SUFDbEQsMENBQTBDO0lBQzFDLG9EQUFvRDtJQUNwRCx3REFBd0Q7SUFFeEQscUJBQ0UsOERBQUNDO1FBQUdDLFdBQVdSLHlFQUFnQlM7OzBCQUM3Qiw4REFBQ0M7Z0JBQUVGLFdBQVdSLDhFQUFxQlc7O2tDQUNqQyw4REFBQ0M7d0JBQUVKLFdBQVU7Ozs7OztvQkFBNkI7Ozs7Ozs7WUFFM0NKLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCUyxJQUFJLFNBQUNDO3FDQUNyQiw4REFBQ0M7OEJBQ0MsNEVBQUNDO3dCQUNDQyxNQUNFWCxZQUFZUSxxQkFBcUJJLGdCQUFnQixPQUFPOzswQ0FFMUQsOERBQUNDO2dDQUNDQyxxQkFBa0I7Z0NBQ2xCWixXQUFXUixnRkFBdUJxQjs7b0NBQ2pDUCxxQkFBcUJJO29DQUFjOzs7Ozs7OzBDQUV0Qyw4REFBQ25CLHVEQUFjQTtnQ0FDYmUsc0JBQXNCQTtnQ0FDdEJULFlBQVlBOzs7Ozs7Ozs7Ozs7bUJBWlRpQixLQUFLQzs7Ozs7Ozs7Ozs7O0FBbUJ0QjtLQTlCU3BCO0FBZ0NULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRnVuY3Rpb25EZXNjcmlwdGlvbi9NYWtlQXBwTGlzdC5qc3g/Y2EwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgTWFrZU1ldGhvZExpc3QgZnJvbSBcIi4vTWFrZU1ldGhvZExpc3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01ha2VBcHBMaXN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTWFrZUFwcExpc3QoeyBmdW5jdGlvbk1ldGhvZHMsIHNldEFwcE5hbWUsIGFwcE5hbWUgfSkge1xuICAvLyBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgLy8gY29uc3QgcGFyYW1BcHBOYW1lID0gc2VhcmNoUGFyYW1zLmdldChcImFwcE5hbWVcIik7XG4gIC8vIGNvbnN0IFthcHBOYW1lLCBzZXRBcHBOYW1lXSA9IHVzZVN0YXRlKHBhcmFtQXBwTmFtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8b2wgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RXcmFwfT5cbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5leHRyYUluZm9XcmFwfT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktaW5mby1jaXJjbGUtZmlsbFwiPjwvaT4g7JWE656YIOq4gOyUqOulvCDriIzrn6zrs7TshLjsmpRcbiAgICAgIDwvcD5cbiAgICAgIHtmdW5jdGlvbk1ldGhvZHM/Lm1hcCgoZnVuY3Rpb25NZXRob2RPYmplY3QpID0+IChcbiAgICAgICAgPGxpIGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICAgICAgPGRldGFpbHNcbiAgICAgICAgICAgIG9wZW49e1xuICAgICAgICAgICAgICBhcHBOYW1lID09PSBmdW5jdGlvbk1ldGhvZE9iamVjdC5tZXRob2RBcHBOYW1lID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICB9PlxuICAgICAgICAgICAgPHN1bW1hcnlcbiAgICAgICAgICAgICAgZGF0YS10b29sdGlwLWxlZnQ9XCLtgbTrpq0hXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZvbnRTaXplXzFfMnJlbX0+XG4gICAgICAgICAgICAgIHtmdW5jdGlvbk1ldGhvZE9iamVjdC5tZXRob2RBcHBOYW1lfSDslrTtlIxcbiAgICAgICAgICAgIDwvc3VtbWFyeT5cbiAgICAgICAgICAgIDxNYWtlTWV0aG9kTGlzdFxuICAgICAgICAgICAgICBmdW5jdGlvbk1ldGhvZE9iamVjdD17ZnVuY3Rpb25NZXRob2RPYmplY3R9XG4gICAgICAgICAgICAgIHNldEFwcE5hbWU9e3NldEFwcE5hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvb2w+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ha2VBcHBMaXN0O1xuIl0sIm5hbWVzIjpbInVzZVNlYXJjaFBhcmFtcyIsIk1ha2VNZXRob2RMaXN0IiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWFrZUFwcExpc3QiLCJmdW5jdGlvbk1ldGhvZHMiLCJzZXRBcHBOYW1lIiwiYXBwTmFtZSIsIm9sIiwiY2xhc3NOYW1lIiwibGlzdFdyYXAiLCJwIiwiZXh0cmFJbmZvV3JhcCIsImkiLCJtYXAiLCJmdW5jdGlvbk1ldGhvZE9iamVjdCIsImxpIiwiZGV0YWlscyIsIm9wZW4iLCJtZXRob2RBcHBOYW1lIiwic3VtbWFyeSIsImRhdGEtdG9vbHRpcC1sZWZ0IiwiZm9udFNpemVfMV8ycmVtIiwiTWF0aCIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/FunctionDescription/MakeAppList.jsx\n"));

/***/ })

});