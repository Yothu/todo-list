"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["crud"],{

/***/ "./src/crud-module.js":
/*!****************************!*\
  !*** ./src/crud-module.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"getTasksLocalStorage\": () => (/* binding */ getTasksLocalStorage),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"deleteSelectedTask\": () => (/* binding */ deleteSelectedTask),\n/* harmony export */   \"modifyTask\": () => (/* binding */ modifyTask),\n/* harmony export */   \"deleteCompletedTasks\": () => (/* binding */ deleteCompletedTasks)\n/* harmony export */ });\n/* harmony import */ var _getLC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLC */ \"./src/getLC.js\");\n\n\nclass Task {\n  constructor(description, completed = false, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\nconst getTasksLocalStorage = () => {\n  if (localStorage.getItem('tasksContainer') != null) {\n    return JSON.parse(localStorage.getItem('tasksContainer'));\n  }\n  return [];\n};\n\nconst addTask = (description, tasksContainer) => {\n  const newTask = new Task(description, false, tasksContainer.length);\n  tasksContainer.push(newTask);\n  (0,_getLC__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasksContainer);\n  return newTask;\n};\n\nconst deleteTask = (index, tCont) => {\n  let change = false;\n  for (let i = 0; i < tCont.length; i += 1) {\n    if (change) {\n      tCont[i].index -= 1;\n    } else if (i === index) {\n      tCont = tCont.filter((task) => task.index !== index);\n      change = true;\n      i -= 1;\n    }\n  }\n  return tCont;\n};\n\nconst deleteSelectedTask = (taskToRemove, tasksContainer) => {\n  const tasksCo = taskToRemove.parentElement;\n  const tasksList = tasksCo.children;\n\n  for (let i = 0; i < tasksList.length; i += 1) {\n    if (tasksList[i] === taskToRemove) {\n      tasksContainer = deleteTask(i, tasksContainer);\n      tasksList[i].remove();\n      break;\n    }\n  }\n  return tasksContainer;\n};\n\nconst modifyTask = (taskInput, tasksContainer) => {\n  const taskChanged = taskInput.parentElement;\n  const taskList = taskChanged.parentElement.children;\n\n  for (let i = 0; i < taskList.length; i += 1) {\n    if (taskList[i] === taskChanged) {\n      tasksContainer[i].description = taskInput.value;\n    }\n  }\n  return tasksContainer;\n};\n\nconst deleteCompletedTasks = (checkboxes, tasksContainer) => {\n  const tasksInnerContainer = document.querySelector('.task-inner-container');\n  const tasks = tasksInnerContainer.children;\n  let tCont = tasksContainer;\n\n  checkboxes.forEach((box) => {\n    if (box.checked) {\n      for (let i = 0; i < tasks.length; i += 1) {\n        if (tasks[i] === box.parentElement) {\n          tCont = deleteTask(i, tCont);\n          tasks[i].remove();\n          break;\n        }\n      }\n    }\n  });\n  return tCont;\n};\n\n\n//# sourceURL=webpack://todo-list/./src/crud-module.js?");

/***/ }),

/***/ "./src/getLC.js":
/*!**********************!*\
  !*** ./src/getLC.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setTasksLocalStorage = (tasksContainer) => {\n  localStorage.setItem('tasksContainer', JSON.stringify(tasksContainer));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTasksLocalStorage);\n\n\n//# sourceURL=webpack://todo-list/./src/getLC.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/crud-module.js"));
/******/ }
]);