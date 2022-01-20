"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".todo-list {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.task-outer-container {\\n  border: 3px solid #ecebea;\\n  flex-basis: 70vw;\\n}\\n\\n.title-container {\\n  display: flex;\\n  justify-content: space-between;\\n  border-bottom: 1px solid #ecebea;\\n}\\n\\n.tasks-container-title {\\n  font-size: 18px;\\n  font-family: 'Helvetica', 'Arial', sans-serif;\\n  margin: 0;\\n  padding: 20px;\\n  user-select: none;\\n}\\n\\n.form-container {\\n  /* padding: 15px 20px; */\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.reload-icon {\\n  padding: 20px;\\n  margin: 0 !important;\\n}\\n\\n.task-form {\\n  border: none;\\n  font-size: 18px;\\n  color: #b0afaf;\\n  height: 100%;\\n  width: 100%;\\n  font-style: italic;\\n  padding: 15px 0 15px 20px;\\n}\\n\\n.hide {\\n  display: none !important;\\n}\\n\\n.task-inner-container {\\n  display: flex;\\n  flex-direction: column;\\n  list-style: none;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.task {\\n  display: flex;\\n  justify-content: space-between;\\n  border-top: 1px solid #ecebea;\\n  border-bottom: 1px solid #ecebea;\\n}\\n\\n.focus-task {\\n  background-color: #fffec3;\\n}\\n\\n.check-box {\\n  width: 20px;\\n  height: 20px;\\n  margin: auto 20px;\\n  cursor: pointer;\\n}\\n\\n.description {\\n  margin: 0;\\n  padding: 20px 0;\\n  flex-grow: 1;\\n  font-family: 'Helvetica', 'Arial', sans-serif;\\n  font-size: 18px;\\n  border: none;\\n  background-color: transparent;\\n}\\n\\n.complete-task-description {\\n  text-decoration: line-through;\\n  color: #a9a9a9;\\n}\\n\\n.complete {\\n  color: #a9a9a9;\\n  text-decoration: line-through;\\n}\\n\\n.more-icon {\\n  transform: rotate(90deg);\\n  width: 20px;\\n  height: 20px;\\n  padding: 20px;\\n  cursor: pointer;\\n}\\n\\n.clear-container {\\n  display: flex;\\n  padding: 15px 20px;\\n  background-color: #f6f6f6;\\n  justify-content: center;\\n}\\n\\n.clear-text {\\n  margin: 0;\\n  color: black;\\n  font-family: 'Helvetica', 'Arial', sans-serif;\\n  font-size: 18px;\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\ninput[type=\\\"text\\\"] {\\n  outline: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/crud-module.js":
/*!****************************!*\
  !*** ./src/crud-module.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"deleteSelectedTask\": () => (/* binding */ deleteSelectedTask),\n/* harmony export */   \"modifyTask\": () => (/* binding */ modifyTask),\n/* harmony export */   \"deleteCompletedTasks\": () => (/* binding */ deleteCompletedTasks)\n/* harmony export */ });\n/* harmony import */ var _setLS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setLS */ \"./src/setLS.js\");\n\n\nclass Task {\n  constructor(description, completed = false, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\nconst addTask = (description, tasksContainer) => {\n  const newTask = new Task(description, false, tasksContainer.length);\n  tasksContainer.push(newTask);\n  (0,_setLS__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasksContainer);\n  return newTask;\n};\n\nconst deleteTask = (index, tCont) => {\n  let change = false;\n  for (let i = 0; i < tCont.length; i += 1) {\n    if (change) {\n      tCont[i].index -= 1;\n    } else if (i === index) {\n      tCont = tCont.filter((task) => task.index !== index);\n      change = true;\n      i -= 1;\n    }\n  }\n  return tCont;\n};\n\nconst deleteSelectedTask = (taskToRemove, tasksContainer) => {\n  const tasksCo = taskToRemove.parentElement;\n  const tasksList = tasksCo.children;\n\n  for (let i = 0; i < tasksList.length; i += 1) {\n    if (tasksList[i] === taskToRemove) {\n      tasksContainer = deleteTask(i, tasksContainer);\n      tasksList[i].remove();\n      break;\n    }\n  }\n  return tasksContainer;\n};\n\nconst modifyTask = (taskInput, tasksContainer) => {\n  const taskChanged = taskInput.parentElement;\n  const taskList = taskChanged.parentElement.children;\n\n  for (let i = 0; i < taskList.length; i += 1) {\n    if (taskList[i] === taskChanged) {\n      tasksContainer[i].description = taskInput.value;\n    }\n  }\n  return tasksContainer;\n};\n\nconst deleteCompletedTasks = (checkboxes, tasksContainer) => {\n  const tasksInnerContainer = document.querySelector('.task-inner-container');\n  const tasks = tasksInnerContainer.children;\n  let tCont = tasksContainer;\n\n  checkboxes.forEach((box) => {\n    if (box.checked) {\n      for (let i = 0; i < tasks.length; i += 1) {\n        if (tasks[i] === box.parentElement) {\n          tCont = deleteTask(i, tCont);\n          tasks[i].remove();\n          break;\n        }\n      }\n    }\n  });\n  return tCont;\n};\n\n\n//# sourceURL=webpack://todo-list/./src/crud-module.js?");

/***/ }),

/***/ "./src/getLS.js":
/*!**********************!*\
  !*** ./src/getLS.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTasksLocalStorage = () => {\n    if (localStorage.getItem('tasksContainer') != null) {\n        return JSON.parse(localStorage.getItem('tasksContainer'));\n    }\n    return [];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTasksLocalStorage);\n\n//# sourceURL=webpack://todo-list/./src/getLS.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _reload_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reload.png */ \"./src/reload.png\");\n/* harmony import */ var _enter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enter.png */ \"./src/enter.png\");\n/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete.png */ \"./src/delete.png\");\n/* harmony import */ var _status_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status-module */ \"./src/status-module.js\");\n/* harmony import */ var _crud_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crud-module */ \"./src/crud-module.js\");\n/* harmony import */ var _setLS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setLS */ \"./src/setLS.js\");\n/* harmony import */ var _getLS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getLS */ \"./src/getLS.js\");\n\n\n\n\n\n\n\n\n\n\n\nlet tasksContainer = (0,_getLS__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\nconst createTaskHTML = (description, status = false) => {\n  const tasksInnerContainer = document.querySelector('.task-inner-container');\n  const taskContainer = document.createElement('li');\n  taskContainer.classList.add('task');\n\n  const checkbox = document.createElement('input');\n  checkbox.setAttribute('type', 'checkbox');\n  checkbox.classList.add('check-box', 'statusBox');\n  taskContainer.appendChild(checkbox);\n\n  const descriptionContainer = document.createElement('input');\n  descriptionContainer.setAttribute('type', 'text');\n  descriptionContainer.classList.add('description');\n  descriptionContainer.value = description;\n  taskContainer.appendChild(descriptionContainer);\n\n  checkbox.addEventListener('change', () => {\n    tasksContainer = (0,_status_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(checkbox.parentElement, tasksContainer);\n    descriptionContainer.classList.toggle('complete');\n    (0,_setLS__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(tasksContainer);\n  });\n\n  if (status) {\n    checkbox.checked = true;\n    descriptionContainer.classList.add('complete');\n  }\n\n  descriptionContainer.addEventListener('change', () => {\n    tasksContainer = (0,_crud_module__WEBPACK_IMPORTED_MODULE_5__.modifyTask)(descriptionContainer, tasksContainer);\n    (0,_setLS__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(tasksContainer);\n  });\n\n  const delIcon = new Image();\n  delIcon.src = _delete_png__WEBPACK_IMPORTED_MODULE_3__;\n  delIcon.setAttribute('id', 'deleteTask');\n  delIcon.classList.add('check-box', 'reload-icon', 'delete-icon');\n  delIcon.setAttribute('alt', 'delete-icon');\n  taskContainer.appendChild(delIcon);\n\n  descriptionContainer.addEventListener('focus', () => {\n    taskContainer.classList.toggle('focus-task');\n  });\n\n  descriptionContainer.addEventListener('blur', () => {\n    taskContainer.classList.toggle('focus-task');\n  });\n\n  delIcon.addEventListener('click', () => {\n    tasksContainer = (0,_crud_module__WEBPACK_IMPORTED_MODULE_5__.deleteSelectedTask)(delIcon.parentElement, tasksContainer);\n    (0,_setLS__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(tasksContainer);\n  });\n\n  tasksInnerContainer.appendChild(taskContainer);\n};\n\nconst displayTasks = (array) => {\n  for (let i = 0; i < array.length; i += 1) {\n    createTaskHTML(array[i].description, array[i].completed);\n  }\n};\n\nconst upwardOrderArray = (array) => {\n  for (let i = 0; i < array.length - 1; i += 1) {\n    for (let j = i + 1; j < array.length; j += 1) {\n      if (array[i].index > array[j].index) {\n        [array[j], array[i]] = [array[i], array[j]];\n      }\n    }\n  }\n  return array;\n};\n\nconst setReloadIcon = () => {\n  const formContainer = document.querySelector('.title-container');\n  const reIcon = new Image();\n  reIcon.src = _reload_png__WEBPACK_IMPORTED_MODULE_1__;\n  reIcon.setAttribute('id', 'reloadButton');\n  reIcon.classList.add('check-box', 'reload-icon');\n  reIcon.setAttribute('alt', 'reload-icon');\n  formContainer.appendChild(reIcon);\n};\n\nconst setEnterIcon = () => {\n  const formContainer = document.querySelector('.form-container');\n  const enIcon = new Image();\n  enIcon.src = _enter_png__WEBPACK_IMPORTED_MODULE_2__;\n  enIcon.setAttribute('id', 'enterForm');\n  enIcon.classList.add('check-box', 'reload-icon');\n  enIcon.setAttribute('alt', 'enter-icon');\n  formContainer.appendChild(enIcon);\n};\n\nsetEnterIcon();\nsetReloadIcon();\n\nwindow.onload = () => {\n  if (tasksContainer != null && tasksContainer.length > 0) {\n    tasksContainer = upwardOrderArray(tasksContainer);\n    displayTasks(tasksContainer);\n  } else {\n    tasksContainer = [];\n  }\n};\n\nconst enterButton = document.getElementById('enterForm');\nconst clearButton = document.getElementById('clearButton');\n\nenterButton.addEventListener('click', () => {\n  const newDescription = document.getElementById('taskForm').value;\n  const newTask = (0,_crud_module__WEBPACK_IMPORTED_MODULE_5__.addTask)(newDescription, tasksContainer);\n  createTaskHTML(newTask.description);\n  document.getElementById('taskForm').value = '';\n});\n\nclearButton.addEventListener('click', () => {\n  const checkBoxes = document.querySelectorAll('.statusBox');\n  tasksContainer = (0,_crud_module__WEBPACK_IMPORTED_MODULE_5__.deleteCompletedTasks)(checkBoxes, tasksContainer);\n  (0,_setLS__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(tasksContainer);\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/setLS.js":
/*!**********************!*\
  !*** ./src/setLS.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setTasksLocalStorage = (tasksContainer) => {\n  localStorage.setItem('tasksContainer', JSON.stringify(tasksContainer));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTasksLocalStorage);\n\n\n//# sourceURL=webpack://todo-list/./src/setLS.js?");

/***/ }),

/***/ "./src/status-module.js":
/*!******************************!*\
  !*** ./src/status-module.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modifyStatus = (taskChanged, tasksContainer) => {\n  const tc = tasksContainer;\n  const taskList = taskChanged.parentElement.children;\n\n  for (let i = 0; i < taskList.length; i += 1) {\n    if (taskList[i] === taskChanged) {\n      if (tc[i].completed === true) {\n        tc[i].completed = false;\n        break;\n      } else {\n        tc[i].completed = true;\n        break;\n      }\n    }\n  }\n  return tasksContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modifyStatus);\n\n//# sourceURL=webpack://todo-list/./src/status-module.js?");

/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ce1f523c16f7af7ecc0.png\";\n\n//# sourceURL=webpack://todo-list/./src/delete.png?");

/***/ }),

/***/ "./src/enter.png":
/*!***********************!*\
  !*** ./src/enter.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1aaef4eeec6c445002d.png\";\n\n//# sourceURL=webpack://todo-list/./src/enter.png?");

/***/ }),

/***/ "./src/reload.png":
/*!************************!*\
  !*** ./src/reload.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"573f8bf282d92beace11.png\";\n\n//# sourceURL=webpack://todo-list/./src/reload.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);