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

/***/ "(app-client)/./components/FunctionDescription/MakeMethodList.jsx":
/*!***********************************************************!*\
  !*** ./components/FunctionDescription/MakeMethodList.jsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakeDescriptionList */ \"(app-client)/./components/FunctionDescription/MakeDescriptionList.jsx\");\n/* harmony import */ var _page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page_context/UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n/* harmony import */ var _MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MakeMethodList.module.css */ \"(app-client)/./components/FunctionDescription/MakeMethodList.module.css\");\n/* harmony import */ var _MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MakeMethodList(param) {\n    var functionMethodObject = param.functionMethodObject;\n    var _this = this;\n    var _functionMethodObject_howto;\n    _s();\n    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), myAppName = _useContext.myAppName, myMethodId = _useContext.myMethodId;\n    var methodAppName = functionMethodObject.methodAppName;\n    console.log(methodAppName);\n    console.log(myAppName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: (_MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_4___default().listWrap),\n        children: [\n            functionMethodObject.howto.length !== 1 && ((_functionMethodObject_howto = functionMethodObject.howto) === null || _functionMethodObject_howto === void 0 ? void 0 : _functionMethodObject_howto.map(function(functionMethod) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                        open: myMethodId === functionMethod.methodNum.toString() && myAppName === methodAppName ? true : false,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                                children: [\n                                    \"방법\",\n                                    \" \".concat(functionMethod.methodNum).concat(functionMethod.methodTitle ? \") \".concat(functionMethod.methodTitle) : \"\")\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                functionMethod: functionMethod,\n                                dataAppName: methodAppName,\n                                dataMethodId: functionMethod.methodNum\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, _this)\n                }, Math.random(), false, {\n                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, _this);\n            })),\n            functionMethodObject.howto.length === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                functionMethod: functionMethodObject.howto[0],\n                dataAppName: methodAppName,\n                dataMethodId: functionMethodObject.howto[0].methodNum\n            }, void 0, false, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(MakeMethodList, \"BIrvBjfHKT9YLTQ65sHgxeKYVeE=\");\n_c = MakeMethodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeMethodList);\nvar _c;\n$RefreshReg$(_c, \"MakeMethodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VNZXRob2RMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1DO0FBQ3FCO0FBQ0o7QUFDRjtBQUVsRCxTQUFTSSxlQUFlLEtBQXdCO1FBQXhCLDZCQUFFQzs7UUFTbEJBOztJQVJOLElBQWtDTCxjQUFBQSxpREFBVUEsQ0FBQ0UsZ0VBQVVBLEdBQS9DSSxZQUEwQk4sWUFBMUJNLFdBQVdDLGFBQWVQLFlBQWZPO0lBQ25CLElBQU1DLGdCQUFnQkgscUJBQXFCRztJQUMzQ0MsUUFBUUMsSUFBSUY7SUFDWkMsUUFBUUMsSUFBSUo7SUFFWixxQkFDRSw4REFBQ0s7UUFBR0MsV0FBV1QsNEVBQWdCVTs7WUFDNUJSLHFCQUFxQlMsTUFBTUMsV0FBVyxNQUNyQ1YsQ0FBQUEsOEJBQUFBLHFCQUFxQlMsbUJBQXJCVCx5Q0FBQUEsS0FBQUEsSUFBQUEsNEJBQTRCVyxJQUFJLFNBQUNDO3FDQUMvQiw4REFBQ0M7OEJBQ0MsNEVBQUNDO3dCQUNDQyxNQUNFYixlQUFlVSxlQUFlSSxVQUFVQyxjQUN4Q2hCLGNBQWNFLGdCQUNWLE9BQ0E7OzBDQUVOLDhEQUFDZTs7b0NBQVE7b0NBRUwsSUFDQU4sT0FER0EsZUFBZUksV0FJbkIsT0FIQ0osZUFBZU8sY0FDWCxLQUFnQyxPQUEzQlAsZUFBZU8sZUFDcEI7Ozs7Ozs7MENBR1IsOERBQUN2Qiw0REFBbUJBO2dDQUNsQmdCLGdCQUFnQkE7Z0NBQ2hCUSxhQUFhakI7Z0NBQ2JrQixjQUFjVCxlQUFlSTs7Ozs7Ozs7Ozs7O21CQW5CMUJNLEtBQUtDOzs7Ozs7WUF3QmpCdkIscUJBQXFCUyxNQUFNQyxXQUFXLG1CQUNyQyw4REFBQ2QsNERBQW1CQTtnQkFDbEJnQixnQkFBZ0JaLHFCQUFxQlMsS0FBSyxDQUFDLEVBQUU7Z0JBQzdDVyxhQUFhakI7Z0JBQ2JrQixjQUFjckIscUJBQXFCUyxLQUFLLENBQUMsRUFBRSxDQUFDTzs7Ozs7Ozs7Ozs7O0FBS3REO0dBM0NTakI7S0FBQUE7QUE2Q1QsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VNZXRob2RMaXN0LmpzeD8yMWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYWtlRGVzY3JpcHRpb25MaXN0IGZyb20gXCIuL01ha2VEZXNjcmlwdGlvbkxpc3RcIjtcbmltcG9ydCBVcmxDb250ZXh0IGZyb20gXCIuLi9wYWdlX2NvbnRleHQvVXJsQ29udGV4dFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWFrZU1ldGhvZExpc3QubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBNYWtlTWV0aG9kTGlzdCh7IGZ1bmN0aW9uTWV0aG9kT2JqZWN0IH0pIHtcbiAgY29uc3QgeyBteUFwcE5hbWUsIG15TWV0aG9kSWQgfSA9IHVzZUNvbnRleHQoVXJsQ29udGV4dCk7XG4gIGNvbnN0IG1ldGhvZEFwcE5hbWUgPSBmdW5jdGlvbk1ldGhvZE9iamVjdC5tZXRob2RBcHBOYW1lO1xuICBjb25zb2xlLmxvZyhtZXRob2RBcHBOYW1lKTtcbiAgY29uc29sZS5sb2cobXlBcHBOYW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxvbCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdyYXB9PlxuICAgICAge2Z1bmN0aW9uTWV0aG9kT2JqZWN0Lmhvd3RvLmxlbmd0aCAhPT0gMSAmJlxuICAgICAgICBmdW5jdGlvbk1ldGhvZE9iamVjdC5ob3d0bz8ubWFwKChmdW5jdGlvbk1ldGhvZCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgICAgICAgPGRldGFpbHNcbiAgICAgICAgICAgICAgb3Blbj17XG4gICAgICAgICAgICAgICAgbXlNZXRob2RJZCA9PT0gZnVuY3Rpb25NZXRob2QubWV0aG9kTnVtLnRvU3RyaW5nKCkgJiZcbiAgICAgICAgICAgICAgICBteUFwcE5hbWUgPT09IG1ldGhvZEFwcE5hbWVcbiAgICAgICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxuICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICA8c3VtbWFyeT5cbiAgICAgICAgICAgICAgICDrsKnrspVcbiAgICAgICAgICAgICAgICB7YCAke2Z1bmN0aW9uTWV0aG9kLm1ldGhvZE51bX0ke1xuICAgICAgICAgICAgICAgICAgZnVuY3Rpb25NZXRob2QubWV0aG9kVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgPyBgKSAke2Z1bmN0aW9uTWV0aG9kLm1ldGhvZFRpdGxlfWBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIDwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgPE1ha2VEZXNjcmlwdGlvbkxpc3RcbiAgICAgICAgICAgICAgICBmdW5jdGlvbk1ldGhvZD17ZnVuY3Rpb25NZXRob2R9XG4gICAgICAgICAgICAgICAgZGF0YUFwcE5hbWU9e21ldGhvZEFwcE5hbWV9XG4gICAgICAgICAgICAgICAgZGF0YU1ldGhvZElkPXtmdW5jdGlvbk1ldGhvZC5tZXRob2ROdW19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICB7ZnVuY3Rpb25NZXRob2RPYmplY3QuaG93dG8ubGVuZ3RoID09PSAxICYmIChcbiAgICAgICAgPE1ha2VEZXNjcmlwdGlvbkxpc3RcbiAgICAgICAgICBmdW5jdGlvbk1ldGhvZD17ZnVuY3Rpb25NZXRob2RPYmplY3QuaG93dG9bMF19XG4gICAgICAgICAgZGF0YUFwcE5hbWU9e21ldGhvZEFwcE5hbWV9XG4gICAgICAgICAgZGF0YU1ldGhvZElkPXtmdW5jdGlvbk1ldGhvZE9iamVjdC5ob3d0b1swXS5tZXRob2ROdW19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvb2w+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ha2VNZXRob2RMaXN0O1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJNYWtlRGVzY3JpcHRpb25MaXN0IiwiVXJsQ29udGV4dCIsImNsYXNzZXMiLCJNYWtlTWV0aG9kTGlzdCIsImZ1bmN0aW9uTWV0aG9kT2JqZWN0IiwibXlBcHBOYW1lIiwibXlNZXRob2RJZCIsIm1ldGhvZEFwcE5hbWUiLCJjb25zb2xlIiwibG9nIiwib2wiLCJjbGFzc05hbWUiLCJsaXN0V3JhcCIsImhvd3RvIiwibGVuZ3RoIiwibWFwIiwiZnVuY3Rpb25NZXRob2QiLCJsaSIsImRldGFpbHMiLCJvcGVuIiwibWV0aG9kTnVtIiwidG9TdHJpbmciLCJzdW1tYXJ5IiwibWV0aG9kVGl0bGUiLCJkYXRhQXBwTmFtZSIsImRhdGFNZXRob2RJZCIsIk1hdGgiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/FunctionDescription/MakeMethodList.jsx\n"));

/***/ })

});