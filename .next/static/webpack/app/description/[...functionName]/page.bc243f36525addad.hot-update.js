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

/***/ "(app-client)/./components/layout/FunctionDescriptionPage.jsx":
/*!*******************************************************!*\
  !*** ./components/layout/FunctionDescriptionPage.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_FunctionDescription_MakeAppList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FunctionDescription/MakeAppList */ \"(app-client)/./components/FunctionDescription/MakeAppList.jsx\");\n/* harmony import */ var _DisplayBox_DisplayBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DisplayBox/DisplayBox */ \"(app-client)/./components/DisplayBox/DisplayBox.jsx\");\n/* harmony import */ var _FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FunctionDescriptionPage.module.css */ \"(app-client)/./components/layout/FunctionDescriptionPage.module.css\");\n/* harmony import */ var _FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _NoScrollLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NoScrollLink */ \"(app-client)/./components/NoScrollLink.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar data = __webpack_require__(/*! ../../../../../../public/data/functionData.json */ \"(app-client)/./public/data/functionData.json\");\n// import { functionDataURL } from \"../data\";\n\n\nfunction FunctionDescriptionPage() {\n    var _this = this;\n    var _detailFunctionObject_app;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), detailFunctionObject = _useState[0], setData = _useState[1];\n    var params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    var functionName = decodeURI(params.functionName);\n    //\n    var searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    var paramAppName = searchParams.get(\"appName\");\n    var parmaMethodId = searchParams.get(\"methodId\");\n    var paramDescriptionId = searchParams.get(\"descriptionId\");\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(paramAppName), 2), appName = _useState1[0], setAppName = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(parmaMethodId), 2), methodId = _useState2[0], setMethodId = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(paramDescriptionId), 2), descriptionId = _useState3[0], setDescriptionId = _useState3[1];\n    // fetch(functionDataURL)\n    //   .then((response) => response.json())\n    //   .then((data) => {\n    //     data.forEach((categoryObject) => {\n    //       if (\n    //         categoryObject.category !== \"new\" &&\n    //         categoryObject.category !== \"hot\"\n    //       ) {\n    //         categoryObject.objects?.forEach((ObjectInArray) => {\n    //           if (ObjectInArray.name === functionName) {\n    //             setData(ObjectInArray);\n    //             return;\n    //           }\n    //         });\n    //       }\n    //     });\n    //   });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        data.forEach(function(categoryObject) {\n            if (categoryObject.category !== \"new\" && categoryObject.category !== \"hot\") {\n                var _categoryObject_objects;\n                (_categoryObject_objects = categoryObject.objects) === null || _categoryObject_objects === void 0 ? void 0 : _categoryObject_objects.forEach(function(ObjectInArray) {\n                    if (ObjectInArray.name.slice(2) === functionName) {\n                        setData(ObjectInArray);\n                        return;\n                    }\n                });\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(appName);\n        console.log(methodId);\n        console.log(descriptionId);\n    }, [\n        appName,\n        methodId,\n        descriptionId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().main_header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: detailFunctionObject.name\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            \" 기능 소개\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().listBox),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"특징\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: detailFunctionObject.charateristic\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().listBox),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"관련 어플\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: (_detailFunctionObject_app = detailFunctionObject.app) === null || _detailFunctionObject_app === void 0 ? void 0 : _detailFunctionObject_app.map(function(appName) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoScrollLink__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                    href: \"/description/\".concat(functionName, \"/?appName=\").concat(appName, \"&methodId=0&descriptionId=0\"),\n                                                    children: appName\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, Math.random(), false, {\n                                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                                children: detailFunctionObject.name\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            \" 기능 실행 방법\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FunctionDescription_MakeAppList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        functionMethods: detailFunctionObject.method,\n                        appName: appName,\n                        methodId: methodId,\n                        descriptionId: descriptionId,\n                        setAppName: setAppName,\n                        setMethodId: setMethodId,\n                        setDescriptionId: setDescriptionId\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().displayBox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().subTitle),\n                                children: \"❗️ 학습에 도움을 드리기 위해 실제 스마트폰의 모습을 본따 만든 화면입니다.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayBox_DisplayBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                appName: appName,\n                                methodId: methodId,\n                                descriptionId: descriptionId\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexWrap)\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(FunctionDescriptionPage, \"aX0sS3LGabYYZsju80V9mFNHT2M=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = FunctionDescriptionPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FunctionDescriptionPage);\nvar _c;\n$RefreshReg$(_c, \"FunctionDescriptionPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9sYXlvdXQvRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ2lCO0FBQ2hDO0FBRThDO0FBQ3pCO0FBRWxELElBQU1PLE9BQU9DLG1CQUFPQSxDQUFDLHFHQUFnQztBQUNyRCw2Q0FBNkM7QUFDYztBQUNoQjtBQUUzQyxTQUFTRzs7UUFpRU1DOztJQWhFYixJQUF3Q1gsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBNUNXLHVCQUFpQ1gsY0FBWFksVUFBV1o7SUFDeEMsSUFBTWEsU0FBU1osMERBQVNBO0lBQ3hCLElBQU1hLGVBQWVDLFVBQVVGLE9BQU9DO0lBQ3RDLEVBQUU7SUFDRixJQUFNRSxlQUFlZCxnRUFBZUE7SUFDcEMsSUFBTWUsZUFBZUQsYUFBYUUsSUFBSTtJQUN0QyxJQUFNQyxnQkFBZ0JILGFBQWFFLElBQUk7SUFDdkMsSUFBTUUscUJBQXFCSixhQUFhRSxJQUFJO0lBQzVDLElBQThCbEIsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDaUIsbUJBQWhDSSxVQUF1QnJCLGVBQWRzQixhQUFjdEI7SUFDOUIsSUFBZ0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQ21CLG9CQUFsQ0ksV0FBeUJ2QixlQUFmd0IsY0FBZXhCO0lBQ2hDLElBQTBDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUNvQix5QkFBNUNLLGdCQUFtQ3pCLGVBQXBCMEIsbUJBQW9CMUI7SUFDMUMseUJBQXlCO0lBQ3pCLHlDQUF5QztJQUN6QyxzQkFBc0I7SUFDdEIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MsNENBQTRDO0lBQzVDLFlBQVk7SUFDWiwrREFBK0Q7SUFDL0QsdURBQXVEO0lBQ3ZELHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFFBQVE7SUFFUkQsZ0RBQVNBLENBQUM7UUFDUk8sS0FBS3FCLFFBQVEsU0FBQ0M7WUFDWixJQUNFQSxlQUFlQyxhQUFhLFNBQzVCRCxlQUFlQyxhQUFhLE9BQzVCO29CQUNBRDtnQkFBQUEsQ0FBQUEsMEJBQUFBLGVBQWVFLHFCQUFmRixxQ0FBQUEsS0FBQUEsSUFBQUEsd0JBQXdCRCxRQUFRLFNBQUNJO29CQUMvQixJQUFJQSxjQUFjQyxLQUFLQyxNQUFNLE9BQU9uQixjQUFjO3dCQUNoREYsUUFBUW1CO3dCQUNSO29CQUNGO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUNMaEMsZ0RBQVNBLENBQUM7UUFDUm1DLFFBQVFDLElBQUlkO1FBQ1phLFFBQVFDLElBQUlaO1FBQ1pXLFFBQVFDLElBQUlWO0lBQ2QsR0FBRztRQUFDSjtRQUFTRTtRQUFVRTtLQUFjO0lBRXJDLHFCQUNFLDhEQUFDVzs7MEJBQ0MsOERBQUNDO2dCQUFRQyxXQUFXOUIsd0ZBQW1CK0I7O2tDQUNyQyw4REFBQ0M7d0JBQUdGLFdBQVc5QixrRkFBYWlDOzswQ0FDMUIsOERBQUNDOzBDQUFHL0IscUJBQXFCcUI7Ozs7Ozs0QkFBUzs7Ozs7OztrQ0FFcEMsOERBQUNXOzswQ0FDQyw4REFBQ0M7Z0NBQUdOLFdBQVc5QixvRkFBZXFDOztrREFDNUIsOERBQUNDO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO2tEQUFHcEMscUJBQXFCcUM7Ozs7Ozs7Ozs7OzswQ0FFM0IsOERBQUNKO2dDQUFHTixXQUFXOUIsb0ZBQWVxQzs7a0RBQzVCLDhEQUFDQztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDSDtrREFDRWhDLENBQUFBLDRCQUFBQSxxQkFBcUJzQyxpQkFBckJ0Qyx1Q0FBQUEsS0FBQUEsSUFBQUEsMEJBQTBCdUMsSUFBSSxTQUFDN0I7aUVBQzlCLDhEQUFDdUI7MERBQ0MsNEVBQUNuQyxxREFBWUE7b0RBQ1gwQyxNQUFNLGdCQUF5QzlCLE9BQXpCUCxjQUFhLGNBQW9CLE9BQVJPLFNBQVE7OERBQ3REQTs7Ozs7OytDQUhJK0IsS0FBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVd4Qiw4REFBQ2hCO2dCQUFRQyxXQUFXOUIsaUZBQVk0Qjs7a0NBQzlCLDhEQUFDVTs7MENBQ0MsOERBQUNKO2dDQUFFSixXQUFXOUIsa0ZBQWFpQzswQ0FBRzlCLHFCQUFxQnFCOzs7Ozs7NEJBQVM7Ozs7Ozs7a0NBRzlELDhEQUFDNUIsbUZBQVdBO3dCQUNWa0QsaUJBQWlCM0MscUJBQXFCNEM7d0JBQ3RDbEMsU0FBU0E7d0JBQ1RFLFVBQVVBO3dCQUNWRSxlQUFlQTt3QkFDZkgsWUFBWUE7d0JBQ1pFLGFBQWFBO3dCQUNiRSxrQkFBa0JBOzs7Ozs7a0NBRXBCLDhEQUFDOEI7d0JBQUlsQixXQUFXOUIsdUZBQWtCaUQ7OzBDQUNoQyw4REFBQ1Y7Z0NBQUVULFdBQVc5QixxRkFBZ0JrRDswQ0FBRTs7Ozs7OzBDQUloQyw4REFBQ3JELDhEQUFVQTtnQ0FDVGdCLFNBQVNBO2dDQUNURSxVQUFVQTtnQ0FDVkUsZUFBZUE7Ozs7OzswQ0FDakIsOERBQUMrQjtnQ0FBSWxCLFdBQVc5QixxRkFBZ0JtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFDO0dBekdTakQ7O1FBRVFULHNEQUFTQTtRQUdIQyw0REFBZUE7OztLQUw3QlE7QUEyR1QsK0RBQWVBLHVCQUF1QkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9GdW5jdGlvbkRlc2NyaXB0aW9uUGFnZS5qc3g/MmYxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgTWFrZUFwcExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRnVuY3Rpb25EZXNjcmlwdGlvbi9NYWtlQXBwTGlzdFwiO1xuaW1wb3J0IERpc3BsYXlCb3ggZnJvbSBcIi4uL0Rpc3BsYXlCb3gvRGlzcGxheUJveFwiO1xuXG5jb25zdCBkYXRhID0gcmVxdWlyZShcIi9wdWJsaWMvZGF0YS9mdW5jdGlvbkRhdGEuanNvblwiKTtcbi8vIGltcG9ydCB7IGZ1bmN0aW9uRGF0YVVSTCB9IGZyb20gXCIuLi9kYXRhXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9GdW5jdGlvbkRlc2NyaXB0aW9uUGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTm9TY3JvbGxMaW5rIGZyb20gXCIuLi9Ob1Njcm9sbExpbmtcIjtcblxuZnVuY3Rpb24gRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UoKSB7XG4gIGNvbnN0IFtkZXRhaWxGdW5jdGlvbk9iamVjdCwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xuICBjb25zdCBmdW5jdGlvbk5hbWUgPSBkZWNvZGVVUkkocGFyYW1zLmZ1bmN0aW9uTmFtZSk7XG4gIC8vXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBwYXJhbUFwcE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiYXBwTmFtZVwiKTtcbiAgY29uc3QgcGFybWFNZXRob2RJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJtZXRob2RJZFwiKTtcbiAgY29uc3QgcGFyYW1EZXNjcmlwdGlvbklkID0gc2VhcmNoUGFyYW1zLmdldChcImRlc2NyaXB0aW9uSWRcIik7XG4gIGNvbnN0IFthcHBOYW1lLCBzZXRBcHBOYW1lXSA9IHVzZVN0YXRlKHBhcmFtQXBwTmFtZSk7XG4gIGNvbnN0IFttZXRob2RJZCwgc2V0TWV0aG9kSWRdID0gdXNlU3RhdGUocGFybWFNZXRob2RJZCk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbklkLCBzZXREZXNjcmlwdGlvbklkXSA9IHVzZVN0YXRlKHBhcmFtRGVzY3JpcHRpb25JZCk7XG4gIC8vIGZldGNoKGZ1bmN0aW9uRGF0YVVSTClcbiAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgICAgZGF0YS5mb3JFYWNoKChjYXRlZ29yeU9iamVjdCkgPT4ge1xuICAvLyAgICAgICBpZiAoXG4gIC8vICAgICAgICAgY2F0ZWdvcnlPYmplY3QuY2F0ZWdvcnkgIT09IFwibmV3XCIgJiZcbiAgLy8gICAgICAgICBjYXRlZ29yeU9iamVjdC5jYXRlZ29yeSAhPT0gXCJob3RcIlxuICAvLyAgICAgICApIHtcbiAgLy8gICAgICAgICBjYXRlZ29yeU9iamVjdC5vYmplY3RzPy5mb3JFYWNoKChPYmplY3RJbkFycmF5KSA9PiB7XG4gIC8vICAgICAgICAgICBpZiAoT2JqZWN0SW5BcnJheS5uYW1lID09PSBmdW5jdGlvbk5hbWUpIHtcbiAgLy8gICAgICAgICAgICAgc2V0RGF0YShPYmplY3RJbkFycmF5KTtcbiAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH0pO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRhdGEuZm9yRWFjaCgoY2F0ZWdvcnlPYmplY3QpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY2F0ZWdvcnlPYmplY3QuY2F0ZWdvcnkgIT09IFwibmV3XCIgJiZcbiAgICAgICAgY2F0ZWdvcnlPYmplY3QuY2F0ZWdvcnkgIT09IFwiaG90XCJcbiAgICAgICkge1xuICAgICAgICBjYXRlZ29yeU9iamVjdC5vYmplY3RzPy5mb3JFYWNoKChPYmplY3RJbkFycmF5KSA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdEluQXJyYXkubmFtZS5zbGljZSgyKSA9PT0gZnVuY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICBzZXREYXRhKE9iamVjdEluQXJyYXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhcHBOYW1lKTtcbiAgICBjb25zb2xlLmxvZyhtZXRob2RJZCk7XG4gICAgY29uc29sZS5sb2coZGVzY3JpcHRpb25JZCk7XG4gIH0sIFthcHBOYW1lLCBtZXRob2RJZCwgZGVzY3JpcHRpb25JZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbl9oZWFkZXJ9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICA8Yj57ZGV0YWlsRnVuY3Rpb25PYmplY3QubmFtZX08L2I+IOq4sOuKpSDshozqsJxcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEJveH0+XG4gICAgICAgICAgICA8aDI+7Yq57KeVPC9oMj5cbiAgICAgICAgICAgIDxwPntkZXRhaWxGdW5jdGlvbk9iamVjdC5jaGFyYXRlcmlzdGljfTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEJveH0+XG4gICAgICAgICAgICA8aDI+6rSA66CoIOyWtO2UjDwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtkZXRhaWxGdW5jdGlvbk9iamVjdC5hcHA/Lm1hcCgoYXBwTmFtZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgICAgICAgICAgICAgPE5vU2Nyb2xsTGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2Rlc2NyaXB0aW9uLyR7ZnVuY3Rpb25OYW1lfS8/YXBwTmFtZT0ke2FwcE5hbWV9Jm1ldGhvZElkPTAmZGVzY3JpcHRpb25JZD0wYH0+XG4gICAgICAgICAgICAgICAgICAgIHthcHBOYW1lfVxuICAgICAgICAgICAgICAgICAgPC9Ob1Njcm9sbExpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICA8YiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PntkZXRhaWxGdW5jdGlvbk9iamVjdC5uYW1lfTwvYj4g6riw64qlIOyLpO2WiVxuICAgICAgICAgIOuwqeuylVxuICAgICAgICA8L2gyPlxuICAgICAgICA8TWFrZUFwcExpc3RcbiAgICAgICAgICBmdW5jdGlvbk1ldGhvZHM9e2RldGFpbEZ1bmN0aW9uT2JqZWN0Lm1ldGhvZH1cbiAgICAgICAgICBhcHBOYW1lPXthcHBOYW1lfVxuICAgICAgICAgIG1ldGhvZElkPXttZXRob2RJZH1cbiAgICAgICAgICBkZXNjcmlwdGlvbklkPXtkZXNjcmlwdGlvbklkfVxuICAgICAgICAgIHNldEFwcE5hbWU9e3NldEFwcE5hbWV9XG4gICAgICAgICAgc2V0TWV0aG9kSWQ9e3NldE1ldGhvZElkfVxuICAgICAgICAgIHNldERlc2NyaXB0aW9uSWQ9e3NldERlc2NyaXB0aW9uSWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpc3BsYXlCb3h9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJUaXRsZX0+XG4gICAgICAgICAgICDinZfvuI8g7ZWZ7Iq17JeQIOuPhOybgOydhCDrk5zrpqzquLAg7JyE7ZW0IOyLpOygnCDsiqTrp4jtirjtj7DsnZgg66qo7Iq17J2EIOuzuOuUsCDrp4zrk6BcbiAgICAgICAgICAgIO2ZlOuptOyeheuLiOuLpC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPERpc3BsYXlCb3hcbiAgICAgICAgICAgIGFwcE5hbWU9e2FwcE5hbWV9XG4gICAgICAgICAgICBtZXRob2RJZD17bWV0aG9kSWR9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbklkPXtkZXNjcmlwdGlvbklkfT48L0Rpc3BsYXlCb3g+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmxleFdyYXB9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9uRGVzY3JpcHRpb25QYWdlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwidXNlU2VhcmNoUGFyYW1zIiwiTGluayIsIk1ha2VBcHBMaXN0IiwiRGlzcGxheUJveCIsImRhdGEiLCJyZXF1aXJlIiwiY2xhc3NlcyIsIk5vU2Nyb2xsTGluayIsIkZ1bmN0aW9uRGVzY3JpcHRpb25QYWdlIiwiZGV0YWlsRnVuY3Rpb25PYmplY3QiLCJzZXREYXRhIiwicGFyYW1zIiwiZnVuY3Rpb25OYW1lIiwiZGVjb2RlVVJJIiwic2VhcmNoUGFyYW1zIiwicGFyYW1BcHBOYW1lIiwiZ2V0IiwicGFybWFNZXRob2RJZCIsInBhcmFtRGVzY3JpcHRpb25JZCIsImFwcE5hbWUiLCJzZXRBcHBOYW1lIiwibWV0aG9kSWQiLCJzZXRNZXRob2RJZCIsImRlc2NyaXB0aW9uSWQiLCJzZXREZXNjcmlwdGlvbklkIiwiZm9yRWFjaCIsImNhdGVnb3J5T2JqZWN0IiwiY2F0ZWdvcnkiLCJvYmplY3RzIiwiT2JqZWN0SW5BcnJheSIsIm5hbWUiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm1haW5faGVhZGVyIiwiaDEiLCJ0aXRsZSIsImIiLCJ1bCIsImxpIiwibGlzdEJveCIsImgyIiwicCIsImNoYXJhdGVyaXN0aWMiLCJhcHAiLCJtYXAiLCJocmVmIiwiTWF0aCIsInJhbmRvbSIsImZ1bmN0aW9uTWV0aG9kcyIsIm1ldGhvZCIsImRpdiIsImRpc3BsYXlCb3giLCJzdWJUaXRsZSIsImZsZXhXcmFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/layout/FunctionDescriptionPage.jsx\n"));

/***/ })

});