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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakeDescriptionList */ \"(app-client)/./components/FunctionDescription/MakeDescriptionList.jsx\");\n/* harmony import */ var _page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page_context/UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MakeMethodList(param) {\n    var functionMethodObject = param.functionMethodObject;\n    var _this = this;\n    var // functionMethodObject.howto.length !== 1 &&\n    _functionMethodObject_howto;\n    _s();\n    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), myAppName = _useContext.myAppName, myMethodId = _useContext.myMethodId;\n    var methodAppName = functionMethodObject.methodAppName;\n    console.log(functionMethodObject.howto.length);\n    (_functionMethodObject_howto = functionMethodObject.howto) === null || _functionMethodObject_howto === void 0 ? void 0 : _functionMethodObject_howto.map(function(functionMethod) {\n        var methodNum = functionMethod.methodNum.toString();\n        var methodTitle = functionMethod.methodTitle;\n        console.log(functionMethod);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                open: myMethodId === methodNum && myAppName === methodAppName ? true : false,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                        children: [\n                            \"방법\",\n                            \" \".concat(methodNum).concat(methodTitle ? \") \".concat(methodTitle) : \"\")\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        functionMethod: functionMethod,\n                        dataAppName: methodAppName,\n                        dataMethodId: methodNum\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this)\n        }, Math.random(), false, {\n            fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, _this);\n    });\n// return (\n//   <ol className={classes.listWrap}>\n//     {functionMethodObject.howto.length === 1 && (\n//       <MakeDescriptionList\n//         functionMethod={functionMethodObject.howto[0]}\n//         dataAppName={functionMethodObject.methodAppName}\n//         dataMethodId={functionMethodObject.howto[0].methodNum.toString()}\n//       />\n//     )}\n//     {/* {functionMethodObject.howto.length !== 1 && methodListCotent} */}\n//   </ol>\n// );\n}\n_s(MakeMethodList, \"BIrvBjfHKT9YLTQ65sHgxeKYVeE=\");\n_c = MakeMethodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeMethodList);\nvar _c;\n$RefreshReg$(_c, \"MakeMethodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VNZXRob2RMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtQztBQUNxQjtBQUNKO0FBQ0Y7QUFFbEQsU0FBU0ksZUFBZSxLQUF3QjtRQUF4Qiw2QkFBRUM7O1FBS3hCLDZDQUE2QztJQUM3Q0E7O0lBTEEsSUFBa0NMLGNBQUFBLGlEQUFVQSxDQUFDRSxnRUFBVUEsR0FBL0NJLFlBQTBCTixZQUExQk0sV0FBV0MsYUFBZVAsWUFBZk87SUFDbkIsSUFBTUMsZ0JBQWdCSCxxQkFBcUJHO0lBQzNDQyxRQUFRQyxJQUFJTCxxQkFBcUJNLE1BQU1DO0lBR3ZDUCxDQUFBQSw4QkFBQUEscUJBQXFCTSxtQkFBckJOLHlDQUFBQSxLQUFBQSxJQUFBQSw0QkFBNEJRLElBQUksU0FBQ0M7UUFDL0IsSUFBTUMsWUFBWUQsZUFBZUMsVUFBVUM7UUFDM0MsSUFBTUMsY0FBY0gsZUFBZUc7UUFDbkNSLFFBQVFDLElBQUlJO1FBQ1oscUJBQ0UsOERBQUNJO3NCQUNDLDRFQUFDQztnQkFDQ0MsTUFDRWIsZUFBZVEsYUFBYVQsY0FBY0UsZ0JBQ3RDLE9BQ0E7O2tDQUVOLDhEQUFDYTs7NEJBQVE7NEJBRUwsSUFBZUosT0FBWkYsV0FBa0QsT0FBdENFLGNBQWMsS0FBaUIsT0FBWkEsZUFBZ0I7Ozs7Ozs7a0NBRXRELDhEQUFDaEIsNERBQW1CQTt3QkFDbEJhLGdCQUFnQkE7d0JBQ2hCUSxhQUFhZDt3QkFDYmUsY0FBY1I7Ozs7Ozs7Ozs7OztXQWRYUyxLQUFLQzs7Ozs7SUFtQmxCO0FBRUEsV0FBVztBQUNYLHNDQUFzQztBQUN0QyxvREFBb0Q7QUFDcEQsNkJBQTZCO0FBQzdCLHlEQUF5RDtBQUN6RCwyREFBMkQ7QUFDM0QsNEVBQTRFO0FBQzVFLFdBQVc7QUFDWCxTQUFTO0FBQ1QsNEVBQTRFO0FBQzVFLFVBQVU7QUFDVixLQUFLO0FBQ1A7R0E1Q1NyQjtLQUFBQTtBQThDVCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Z1bmN0aW9uRGVzY3JpcHRpb24vTWFrZU1ldGhvZExpc3QuanN4PzIxZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1ha2VEZXNjcmlwdGlvbkxpc3QgZnJvbSBcIi4vTWFrZURlc2NyaXB0aW9uTGlzdFwiO1xuaW1wb3J0IFVybENvbnRleHQgZnJvbSBcIi4uL3BhZ2VfY29udGV4dC9VcmxDb250ZXh0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NYWtlTWV0aG9kTGlzdC5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIE1ha2VNZXRob2RMaXN0KHsgZnVuY3Rpb25NZXRob2RPYmplY3QgfSkge1xuICBjb25zdCB7IG15QXBwTmFtZSwgbXlNZXRob2RJZCB9ID0gdXNlQ29udGV4dChVcmxDb250ZXh0KTtcbiAgY29uc3QgbWV0aG9kQXBwTmFtZSA9IGZ1bmN0aW9uTWV0aG9kT2JqZWN0Lm1ldGhvZEFwcE5hbWU7XG4gIGNvbnNvbGUubG9nKGZ1bmN0aW9uTWV0aG9kT2JqZWN0Lmhvd3RvLmxlbmd0aCk7XG5cbiAgLy8gZnVuY3Rpb25NZXRob2RPYmplY3QuaG93dG8ubGVuZ3RoICE9PSAxICYmXG4gIGZ1bmN0aW9uTWV0aG9kT2JqZWN0Lmhvd3RvPy5tYXAoKGZ1bmN0aW9uTWV0aG9kKSA9PiB7XG4gICAgY29uc3QgbWV0aG9kTnVtID0gZnVuY3Rpb25NZXRob2QubWV0aG9kTnVtLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbWV0aG9kVGl0bGUgPSBmdW5jdGlvbk1ldGhvZC5tZXRob2RUaXRsZTtcbiAgICBjb25zb2xlLmxvZyhmdW5jdGlvbk1ldGhvZCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgICA8ZGV0YWlsc1xuICAgICAgICAgIG9wZW49e1xuICAgICAgICAgICAgbXlNZXRob2RJZCA9PT0gbWV0aG9kTnVtICYmIG15QXBwTmFtZSA9PT0gbWV0aG9kQXBwTmFtZVxuICAgICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgICAgOiBmYWxzZVxuICAgICAgICAgIH0+XG4gICAgICAgICAgPHN1bW1hcnk+XG4gICAgICAgICAgICDrsKnrspVcbiAgICAgICAgICAgIHtgICR7bWV0aG9kTnVtfSR7bWV0aG9kVGl0bGUgPyBgKSAke21ldGhvZFRpdGxlfWAgOiBcIlwifWB9XG4gICAgICAgICAgPC9zdW1tYXJ5PlxuICAgICAgICAgIDxNYWtlRGVzY3JpcHRpb25MaXN0XG4gICAgICAgICAgICBmdW5jdGlvbk1ldGhvZD17ZnVuY3Rpb25NZXRob2R9XG4gICAgICAgICAgICBkYXRhQXBwTmFtZT17bWV0aG9kQXBwTmFtZX1cbiAgICAgICAgICAgIGRhdGFNZXRob2RJZD17bWV0aG9kTnVtfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGV0YWlscz5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfSk7XG5cbiAgLy8gcmV0dXJuIChcbiAgLy8gICA8b2wgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RXcmFwfT5cbiAgLy8gICAgIHtmdW5jdGlvbk1ldGhvZE9iamVjdC5ob3d0by5sZW5ndGggPT09IDEgJiYgKFxuICAvLyAgICAgICA8TWFrZURlc2NyaXB0aW9uTGlzdFxuICAvLyAgICAgICAgIGZ1bmN0aW9uTWV0aG9kPXtmdW5jdGlvbk1ldGhvZE9iamVjdC5ob3d0b1swXX1cbiAgLy8gICAgICAgICBkYXRhQXBwTmFtZT17ZnVuY3Rpb25NZXRob2RPYmplY3QubWV0aG9kQXBwTmFtZX1cbiAgLy8gICAgICAgICBkYXRhTWV0aG9kSWQ9e2Z1bmN0aW9uTWV0aG9kT2JqZWN0Lmhvd3RvWzBdLm1ldGhvZE51bS50b1N0cmluZygpfVxuICAvLyAgICAgICAvPlxuICAvLyAgICAgKX1cbiAgLy8gICAgIHsvKiB7ZnVuY3Rpb25NZXRob2RPYmplY3QuaG93dG8ubGVuZ3RoICE9PSAxICYmIG1ldGhvZExpc3RDb3RlbnR9ICovfVxuICAvLyAgIDwvb2w+XG4gIC8vICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ha2VNZXRob2RMaXN0O1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJNYWtlRGVzY3JpcHRpb25MaXN0IiwiVXJsQ29udGV4dCIsImNsYXNzZXMiLCJNYWtlTWV0aG9kTGlzdCIsImZ1bmN0aW9uTWV0aG9kT2JqZWN0IiwibXlBcHBOYW1lIiwibXlNZXRob2RJZCIsIm1ldGhvZEFwcE5hbWUiLCJjb25zb2xlIiwibG9nIiwiaG93dG8iLCJsZW5ndGgiLCJtYXAiLCJmdW5jdGlvbk1ldGhvZCIsIm1ldGhvZE51bSIsInRvU3RyaW5nIiwibWV0aG9kVGl0bGUiLCJsaSIsImRldGFpbHMiLCJvcGVuIiwic3VtbWFyeSIsImRhdGFBcHBOYW1lIiwiZGF0YU1ldGhvZElkIiwiTWF0aCIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/FunctionDescription/MakeMethodList.jsx\n"));

/***/ })

});