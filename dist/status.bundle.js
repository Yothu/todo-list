"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["status"],{

/***/ "./src/status-module.js":
/*!******************************!*\
  !*** ./src/status-module.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modifyStatus = (taskChanged, tasksContainer) => {\n  const tc = tasksContainer;\n  const taskList = taskChanged.parentElement.children;\n\n  for (let i = 0; i < taskList.length; i += 1) {\n    if (taskList[i] === taskChanged) {\n      if (tc[i].completed === true) {\n        tc[i].completed = false;\n        break;\n      } else {\n        tc[i].completed = true;\n        break;\n      }\n    }\n  }\n  return tasksContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modifyStatus);\n\n//# sourceURL=webpack://todo-list/./src/status-module.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/status-module.js"));
/******/ }
]);