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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakeDescriptionList */ \"(app-client)/./components/FunctionDescription/MakeDescriptionList.jsx\");\n/* harmony import */ var _page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page_context/UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n/* harmony import */ var _MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MakeMethodList.module.css */ \"(app-client)/./components/FunctionDescription/MakeMethodList.module.css\");\n/* harmony import */ var _MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MakeMethodList(param) {\n    var functionMethodObject = param.functionMethodObject;\n    var _this = this;\n    var _functionMethodObject_howto;\n    _s();\n    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), myAppName = _useContext.myAppName, myMethodId = _useContext.myMethodId;\n    var methodAppName = functionMethodObject.methodAppName;\n    console.log(myMethodId === functionMethod.methodNum.toString() && myAppName === methodAppName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: (_MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_4___default().listWrap),\n        children: [\n            functionMethodObject.howto.length !== 1 && ((_functionMethodObject_howto = functionMethodObject.howto) === null || _functionMethodObject_howto === void 0 ? void 0 : _functionMethodObject_howto.map(function(functionMethod1) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                        open: myMethodId === functionMethod1.methodNum.toString() && myAppName === methodAppName ? true : false,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                                children: [\n                                    \"방법\",\n                                    \" \".concat(functionMethod1.methodNum).concat(functionMethod1.methodTitle ? \") \".concat(functionMethod1.methodTitle) : \"\")\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                functionMethod: functionMethod1,\n                                dataAppName: methodAppName,\n                                dataMethodId: functionMethod1.methodNum\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, _this)\n                }, Math.random(), false, {\n                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, _this);\n            })),\n            functionMethodObject.howto.length === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                functionMethod: functionMethodObject.howto[0],\n                dataAppName: methodAppName,\n                dataMethodId: functionMethodObject.howto[0].methodNum\n            }, void 0, false, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(MakeMethodList, \"BIrvBjfHKT9YLTQ65sHgxeKYVeE=\");\n_c = MakeMethodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeMethodList);\nvar _c;\n$RefreshReg$(_c, \"MakeMethodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VNZXRob2RMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1DO0FBQ3FCO0FBQ0o7QUFDRjtBQUVsRCxTQUFTSSxlQUFlLEtBQXdCO1FBQXhCLDZCQUFFQzs7UUFXbEJBOztJQVZOLElBQWtDTCxjQUFBQSxpREFBVUEsQ0FBQ0UsZ0VBQVVBLEdBQS9DSSxZQUEwQk4sWUFBMUJNLFdBQVdDLGFBQWVQLFlBQWZPO0lBQ25CLElBQU1DLGdCQUFnQkgscUJBQXFCRztJQUMzQ0MsUUFBUUMsSUFDTkgsZUFBZUksZUFBZUMsVUFBVUMsY0FDdENQLGNBQWNFO0lBR2xCLHFCQUNFLDhEQUFDTTtRQUFHQyxXQUFXWiw0RUFBZ0JhOztZQUM1QlgscUJBQXFCWSxNQUFNQyxXQUFXLE1BQ3JDYixDQUFBQSw4QkFBQUEscUJBQXFCWSxtQkFBckJaLHlDQUFBQSxLQUFBQSxJQUFBQSw0QkFBNEJjLElBQUksU0FBQ1I7cUNBQy9CLDhEQUFDUzs4QkFDQyw0RUFBQ0M7d0JBQ0NDLE1BQ0VmLGVBQWVJLGdCQUFlQyxVQUFVQyxjQUN4Q1AsY0FBY0UsZ0JBQ1YsT0FDQTs7MENBRU4sOERBQUNlOztvQ0FBUTtvQ0FFTCxJQUNBWixPQURHQSxnQkFBZUMsV0FJbkIsT0FIQ0QsZ0JBQWVhLGNBQ1gsS0FBZ0MsT0FBM0JiLGdCQUFlYSxlQUNwQjs7Ozs7OzswQ0FHUiw4REFBQ3ZCLDREQUFtQkE7Z0NBQ2xCVSxnQkFBZ0JBO2dDQUNoQmMsYUFBYWpCO2dDQUNia0IsY0FBY2YsZ0JBQWVDOzs7Ozs7Ozs7Ozs7bUJBbkIxQmUsS0FBS0M7Ozs7OztZQXdCakJ2QixxQkFBcUJZLE1BQU1DLFdBQVcsbUJBQ3JDLDhEQUFDakIsNERBQW1CQTtnQkFDbEJVLGdCQUFnQk4scUJBQXFCWSxLQUFLLENBQUMsRUFBRTtnQkFDN0NRLGFBQWFqQjtnQkFDYmtCLGNBQWNyQixxQkFBcUJZLEtBQUssQ0FBQyxFQUFFLENBQUNMOzs7Ozs7Ozs7Ozs7QUFLdEQ7R0E3Q1NSO0tBQUFBO0FBK0NULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRnVuY3Rpb25EZXNjcmlwdGlvbi9NYWtlTWV0aG9kTGlzdC5qc3g/MjFkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWFrZURlc2NyaXB0aW9uTGlzdCBmcm9tIFwiLi9NYWtlRGVzY3JpcHRpb25MaXN0XCI7XG5pbXBvcnQgVXJsQ29udGV4dCBmcm9tIFwiLi4vcGFnZV9jb250ZXh0L1VybENvbnRleHRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01ha2VNZXRob2RMaXN0Lm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gTWFrZU1ldGhvZExpc3QoeyBmdW5jdGlvbk1ldGhvZE9iamVjdCB9KSB7XG4gIGNvbnN0IHsgbXlBcHBOYW1lLCBteU1ldGhvZElkIH0gPSB1c2VDb250ZXh0KFVybENvbnRleHQpO1xuICBjb25zdCBtZXRob2RBcHBOYW1lID0gZnVuY3Rpb25NZXRob2RPYmplY3QubWV0aG9kQXBwTmFtZTtcbiAgY29uc29sZS5sb2coXG4gICAgbXlNZXRob2RJZCA9PT0gZnVuY3Rpb25NZXRob2QubWV0aG9kTnVtLnRvU3RyaW5nKCkgJiZcbiAgICAgIG15QXBwTmFtZSA9PT0gbWV0aG9kQXBwTmFtZVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPG9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0V3JhcH0+XG4gICAgICB7ZnVuY3Rpb25NZXRob2RPYmplY3QuaG93dG8ubGVuZ3RoICE9PSAxICYmXG4gICAgICAgIGZ1bmN0aW9uTWV0aG9kT2JqZWN0Lmhvd3RvPy5tYXAoKGZ1bmN0aW9uTWV0aG9kKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICAgICAgICA8ZGV0YWlsc1xuICAgICAgICAgICAgICBvcGVuPXtcbiAgICAgICAgICAgICAgICBteU1ldGhvZElkID09PSBmdW5jdGlvbk1ldGhvZC5tZXRob2ROdW0udG9TdHJpbmcoKSAmJlxuICAgICAgICAgICAgICAgIG15QXBwTmFtZSA9PT0gbWV0aG9kQXBwTmFtZVxuICAgICAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgIDxzdW1tYXJ5PlxuICAgICAgICAgICAgICAgIOuwqeuylVxuICAgICAgICAgICAgICAgIHtgICR7ZnVuY3Rpb25NZXRob2QubWV0aG9kTnVtfSR7XG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbk1ldGhvZC5tZXRob2RUaXRsZVxuICAgICAgICAgICAgICAgICAgICA/IGApICR7ZnVuY3Rpb25NZXRob2QubWV0aG9kVGl0bGV9YFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICA8TWFrZURlc2NyaXB0aW9uTGlzdFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uTWV0aG9kPXtmdW5jdGlvbk1ldGhvZH1cbiAgICAgICAgICAgICAgICBkYXRhQXBwTmFtZT17bWV0aG9kQXBwTmFtZX1cbiAgICAgICAgICAgICAgICBkYXRhTWV0aG9kSWQ9e2Z1bmN0aW9uTWV0aG9kLm1ldGhvZE51bX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIHtmdW5jdGlvbk1ldGhvZE9iamVjdC5ob3d0by5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICA8TWFrZURlc2NyaXB0aW9uTGlzdFxuICAgICAgICAgIGZ1bmN0aW9uTWV0aG9kPXtmdW5jdGlvbk1ldGhvZE9iamVjdC5ob3d0b1swXX1cbiAgICAgICAgICBkYXRhQXBwTmFtZT17bWV0aG9kQXBwTmFtZX1cbiAgICAgICAgICBkYXRhTWV0aG9kSWQ9e2Z1bmN0aW9uTWV0aG9kT2JqZWN0Lmhvd3RvWzBdLm1ldGhvZE51bX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9vbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFrZU1ldGhvZExpc3Q7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIk1ha2VEZXNjcmlwdGlvbkxpc3QiLCJVcmxDb250ZXh0IiwiY2xhc3NlcyIsIk1ha2VNZXRob2RMaXN0IiwiZnVuY3Rpb25NZXRob2RPYmplY3QiLCJteUFwcE5hbWUiLCJteU1ldGhvZElkIiwibWV0aG9kQXBwTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJmdW5jdGlvbk1ldGhvZCIsIm1ldGhvZE51bSIsInRvU3RyaW5nIiwib2wiLCJjbGFzc05hbWUiLCJsaXN0V3JhcCIsImhvd3RvIiwibGVuZ3RoIiwibWFwIiwibGkiLCJkZXRhaWxzIiwib3BlbiIsInN1bW1hcnkiLCJtZXRob2RUaXRsZSIsImRhdGFBcHBOYW1lIiwiZGF0YU1ldGhvZElkIiwiTWF0aCIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/FunctionDescription/MakeMethodList.jsx\n"));

/***/ })

});