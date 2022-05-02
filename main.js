/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/home.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../pictures/restaurant.jpg */ \"./src/pictures/restaurant.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script&family=Roboto&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\n    font-size: 16px;\\n}\\n\\n*{\\n    box-sizing: border-box;\\n    margin: 0;\\n    padding: 0;\\n    font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n    word-wrap: break-word;\\n    word-break: break-all;\\n}\\n\\nbody{\\n    background:rgba(0, 0, 0, 0.7) url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-repeat: no-repeat;\\n    background-color: black;\\n    background-position: center;\\n    background-size: cover;\\n    background-attachment: fixed;\\n}\\n\\n#content{\\n    display: flex;\\n    flex-direction: column;\\n    position: relative;\\n}\\n\\n.header{\\n    border: 5px solid black;\\n    background-color: black;\\n    color: white;\\n    display: flex;\\n    justify-content: space-evenly;\\n    align-items: center;\\n    flex-direction: column;\\n    height: 200px;\\n}\\n\\n.restaurant-name{\\n    font-family: \\\"Dancing Script\\\", \\\"Roboto\\\", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n    font-size: 3.5rem;\\n    font-weight: 600;\\n}\\n\\n.pages{\\n    display: flex;\\n    width: 400px;\\n    justify-content: space-between;\\n}\\n\\n.buttons{\\n    background-color: transparent;\\n    outline: none;\\n    border: 2px solid white;\\n    color: white;\\n    height: 50px;\\n    width: 100px;\\n    font-size: 1.2rem;\\n    font-weight: 700;\\n}\\n\\n.buttons.active{\\n    background-color: #aaa;\\n    color: black;\\n}\\n\\n.buttons.active:hover{\\n    background-color: #ccc;\\n    color: black;\\n}\\n\\n.body{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    height: 650px;\\n    padding-bottom: 50px;\\n}\\n\\n.body > h1{\\n    margin-bottom: 20px;\\n    color: white;\\n    font-size: 1.5rem;\\n    font-weight: 700;\\n}\\n\\n.slogan{\\n    margin-top: 20px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    color: white;\\n    font-size: 2rem;\\n    font-weight: 700;\\n}\\n\\n.opening-hours{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-evenly;\\n    align-items: center;\\n    background-color: black;\\n    border-radius: 15px;\\n    color: white;\\n    font-size: 1.5rem;\\n    font-weight: 700;\\n    height: 450px;\\n    width: 320px;\\n    padding: 1rem;\\n\\n}\\n\\nul{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    padding: 1rem;\\n    height: 100%;\\n}\\n\\nli{\\n    list-style-type: none;\\n}\\n\\n.footer{\\n    position: absolute;\\n    bottom: 0;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: black;\\n    color: white;\\n    height: 50px;\\n    width: 100%;\\n}\\n\\n/* Contact Page */\\n.contact-title{\\n    margin-top: 20px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    color: white;\\n}\\n\\n.contact-info{\\n    height: 650px;\\n    padding-bottom: 50px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.contact-section{\\n    width: 370px;\\n    height: 450px;\\n    background-color: black;\\n    border-radius: 15px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 35px;\\n    padding: 10px;\\n    color: white;\\n    font-size: 1.5rem;\\n    word-break: break-all;\\n    font-weight: 700;\\n}\\n\\n/* Menu Page */\\n.menu{\\n    height: 650px;\\n    padding-bottom: 50px;\\n    justify-content: center;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    padding-bottom: 50px;\\n}\\n\\n.menu-title{\\n    margin-top: 20px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    color: white;\\n}\\n\\n.menu-container{\\n    height: 500px;\\n    width: 700px;\\n    background-color: black;\\n    border-radius: 15px;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    gap: 25px;\\n    padding: 20px;\\n}\\n\\n.menu-item{\\n    height: 100%;\\n    width: 100%;\\n    color: white;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column-reverse;\\n    font-size: 1.5rem;\\n    font-weight: 700;\\n    object-fit: cover;\\n    border: white solid 2px;\\n}\\n\\n.menu-item > img{\\n    margin-top: 40px;\\n    width: 40%;\\n}\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/home.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/home.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/home.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = function(){\n    const content =  document.querySelector(\"#content\")\n    const footer = document.createElement(\"div\")\n    footer.classList.add(\"footer\")\n    footer.innerText = \"made by roshaun-code\"\n    content.appendChild(footer)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://restaurant-page/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = function(){\n    const content = document.querySelector(\"#content\")\n\n    const header = document.createElement(\"div\")\n    const pages = document.createElement(\"div\")\n    const homeButton = document.createElement(\"button\")\n    const contactButton = document.createElement(\"button\")\n    const menuButton = document.createElement(\"button\")\n    const restaurantName = document.createElement(\"h1\")\n\n    restaurantName.classList.add(\"restaurant-name\")\n    header.classList.add(\"header\")\n    pages.classList.add(\"pages\")\n    homeButton.classList.add(\"buttons\")\n    homeButton.classList.add(\"active\")\n    contactButton.classList.add(\"buttons\")\n    menuButton.classList.add(\"buttons\")\n    homeButton.setAttribute(\"id\",\"home\")\n    contactButton.setAttribute(\"id\",\"contact\")\n    menuButton.setAttribute(\"id\",\"menu\")\n\n    restaurantName.innerText = \"Divine Taste\"\n    homeButton.innerText = \"Home\"\n    contactButton.innerText = \"Contact\"\n    menuButton.innerText = \"Menu\"\n\n    content.appendChild(header)\n    header.appendChild(pages)\n    pages.append(homeButton, contactButton, menuButton)\n    header.appendChild(restaurantName)\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://restaurant-page/./src/components/header.js?");

/***/ }),

/***/ "./src/components/setactive.js":
/*!*************************************!*\
  !*** ./src/components/setactive.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setActive = function(button){\n    const buttons = document.querySelectorAll(\".buttons\");\n\n    buttons.forEach((button) => {\n      if (button !== this) {\n        button.classList.remove(\"active\");\n      }\n    });\n  \n    button.classList.add(\"active\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setActive);\n\n//# sourceURL=webpack://restaurant-page/./src/components/setactive.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/home.css */ \"./src/styles/home.css\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _components_setactive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/setactive */ \"./src/components/setactive.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\nconst content = document.querySelector(\"#content\")\nconst buttons = document.querySelectorAll(\".buttons\")\nconst homeButton = document.querySelector(\"#home\")\nconst contactButton = document.querySelector(\"#contact\")\nconst menuButton = document.querySelector(\"#menu\")\n\nfunction removeContainer(){\n    const containers = document.querySelectorAll(\".container\")\n    containers.forEach(container => {\n        container.remove()\n    })\n}\n\nfunction removeFooter(){\n    const footers = document.querySelectorAll(\".footer\")\n    footers.forEach(footer => {\n        footer.remove()\n    })\n}\n\n\nhomeButton.addEventListener(\"click\", () => {\n    if (homeButton.classList.contains(\"active\")) return\n    ;(0,_components_setactive__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(homeButton)\n    removeContainer()\n    removeFooter()\n    ;(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    ;(0,_components_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n})\n\ncontactButton.addEventListener(\"click\", () => {\n    if (contactButton.classList.contains(\"active\")) return\n    ;(0,_components_setactive__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(contactButton)\n    removeContainer()\n    removeFooter()\n    ;(0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    ;(0,_components_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n})\n\nmenuButton.addEventListener(\"click\", () => {\n    if (menuButton.classList.contains(\"active\")) return\n    ;(0,_components_setactive__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(menuButton)\n    removeContainer()\n    removeFooter()\n    ;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n    ;(0,_components_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n})\n\n\n\n;(0,_components_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n\n// homePage.addEventListener(\"click\", (e) => {\n//     if (e.target.classList.contains(\"active\")) return\n//     else {\n//         buttons.forEach(button => {\n//             if(button.classList.contains(\"active\")){\n//                 button.classList.remove(\"active\")\n//                 homeLoad()\n//                 homeContainer.classList.add(\"active\")\n//             }\n//         });\n//     }\n// })\n\n// contactPage.addEventListener(\"click\", (e) => {\n//     if (e.target.classList.contains(\"active\")) return\n//     else {\n//         buttons.forEach(button => {\n//             if(button.classList.contains(\"active\")){\n//                 button.classList.remove(\"active\")\n//                 containers.forEach(container => {\n//                     container.classList.remove(\"active\")\n//                 })\n//                 contactLoad()\n//                 const contactContainer = document.querySelector(\"#contact-container\")\n//                 contactContainer.classList.add(\"active\")\n//             }\n//         });\n//     }\n// })\n\n// menuPage.addEventListener(\"click\", (e) => {\n//     if (e.target.classList.contains(\"active\")) return\n//     else {\n//         buttons.forEach(button => {\n//             if(button.classList.contains(\"active\")){\n//                 button.classList.remove(\"active\")\n//                 menuLoad()\n//                 menuContainer.classList.add(\"active\")\n//             }\n//         });\n//     }\n// })\n\n\n// const buttons = document.querySelectorAll(\"target\")\n// buttons.forEach((button) => {\n//     button.addEventListener(\"click\", () => {\n//         const target = document.querySelector(\".target\")\n//         target.classList.add(\"active\")\n//     })\n// })\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactLoad = function(){\n    const content = document.querySelector(\"#content\")\n    const container = document.createElement(\"div\")\n    const contactInfo = document.createElement(\"div\")\n    const contact = document.createElement(\"div\")\n    const title = document.createElement(\"h1\")\n    const telephone = document.createElement(\"p\")\n    const email = document.createElement(\"p\")\n    container.classList.add(\"container\")\n    contactInfo.classList.add(\"contact-info\")\n    contact.classList.add(\"contact-section\")\n    title.classList.add(\"contact-title\")\n    title.innerText = \"Contact\"\n    telephone.innerText = \"TELEPHONE: (999) 555-1234\"\n    email.innerText = \"EMAIL: divinetaste@gmail.com\"\n\n    content.appendChild(container)\n    container.appendChild(title)\n    container.appendChild(contactInfo)\n    contactInfo.appendChild(contact)\n    contact.append(telephone, email)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = function(){\n    const content = document.querySelector(\"#content\")\n    const container = document.createElement(\"div\")\n    container.classList.add(\"container\")\n\n    // homeContainer.setAttribute(\"id\",\"home-container\")\n    // homeContainer.classList.add(\"container\")\n    // homeContainer.classList.add(\"active\")\n\n    //body stuff\n    const body = document.createElement(\"div\")\n    const img = document.createElement(\"img\")\n    const slogan = document.createElement(\"p\")\n    const openingHours = document.createElement(\"div\")\n    const openingText = document.createElement(\"h1\")\n    const openingElement = document.createElement(\"ul\")\n    const openingItem1 = document.createElement(\"li\")\n    const openingItem2 = document.createElement(\"li\")\n    const openingItem3 = document.createElement(\"li\")\n    const openingItem4 = document.createElement(\"li\")\n    const openingItem5 = document.createElement(\"li\")\n\n    body.classList.add(\"body\")\n    img.classList.add(\"image\")\n    slogan.classList.add(\"slogan\")\n    openingHours.classList.add(\"opening-hours\")\n    openingText.classList.add(\"opening-text\")\n    openingElement.classList.add(\"opening-element\")\n    openingItem1.classList.add(\"opening-item\")\n    openingItem2.classList.add(\"opening-item\")\n    openingItem3.classList.add(\"opening-item\")\n    openingItem4.classList.add(\"opening-item\")\n    openingItem5.classList.add(\"opening-item\")\n\n    slogan.innerText = \"Come on down to Divine Taste! Try our amazing food!\"\n    openingText.innerText = \"We are open on these days!\"\n    openingItem1.innerHTML = \"Monday: 8am - 4pm\" \n    openingItem2.innerHTML = \"Tuesday: 8am - 4pm\"\n    openingItem3.innerHTML = \"Wednesday: 8am - 4pm\" \n    openingItem4.innerHTML = \"Thursday: 8am - 4pm\" \n    openingItem5.innerHTML = \"Friday: 8am - 4pm\" \n\n    content.appendChild(container)\n    container.appendChild(slogan)\n    container.appendChild(body)\n    body.append(img, openingHours)\n    openingHours.appendChild(openingElement)\n    openingElement.append(openingItem1, openingItem2, openingItem3, openingItem4, openingItem5)\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pictures_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pictures/burger.png */ \"./src/pictures/burger.png\");\n/* harmony import */ var _pictures_pizza_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pictures/pizza.png */ \"./src/pictures/pizza.png\");\n/* harmony import */ var _pictures_salad_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pictures/salad.png */ \"./src/pictures/salad.png\");\n/* harmony import */ var _pictures_cake_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pictures/cake.png */ \"./src/pictures/cake.png\");\n\n\n\n\n\nconst menuLoad = function(){\n    const content = document.querySelector(\"#content\")\n    const container = document.createElement(\"div\")\n    const menu = document.createElement(\"div\")\n    const menuContainer = document.createElement(\"div\")\n    const burger = document.createElement(\"div\")\n    const pizza = document.createElement(\"div\")\n    const salad = document.createElement(\"div\")\n    const cake = document.createElement(\"div\")\n    const burgerImg = document.createElement(\"img\")\n    const pizzaImg = document.createElement(\"img\")\n    const saladImg = document.createElement(\"img\")\n    const cakeImg = document.createElement(\"img\")\n    container.classList.add(\"container\")\n    menu.classList.add(\"menu\")\n    menuContainer.classList.add(\"menu-container\")\n    burger.classList.add(\"burger\")\n    pizza.classList.add(\"pizza\")\n    salad.classList.add(\"salad\")\n    cake.classList.add(\"cake\")\n    burger.classList.add(\"menu-item\")\n    pizza.classList.add(\"menu-item\")\n    salad.classList.add(\"menu-item\")\n    cake.classList.add(\"menu-item\")\n    burgerImg.src = _pictures_burger_png__WEBPACK_IMPORTED_MODULE_0__\n    pizzaImg.src = _pictures_pizza_png__WEBPACK_IMPORTED_MODULE_1__\n    saladImg.src = _pictures_salad_png__WEBPACK_IMPORTED_MODULE_2__\n    cakeImg.src = _pictures_cake_png__WEBPACK_IMPORTED_MODULE_3__\n    burger.innerText = \"Burger\"\n    pizza.innerText = \"Pizza\"\n    salad.innerText = \"Salad\"\n    cake.innerText = \"Cake\"\n\n    const title = document.createElement(\"h1\")\n    title.classList.add(\"menu-title\")\n    title.innerText = \"Menu\"\n    content.appendChild(container)\n    container.appendChild(title)\n    container.appendChild(menu)\n    menu.appendChild(menuContainer)\n    menuContainer.append(burger, pizza, salad, cake)\n    burger.append(burgerImg)\n    pizza.append(pizzaImg)\n    salad.append(saladImg)\n    cake.append(cakeImg)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pictures/burger.png":
/*!*********************************!*\
  !*** ./src/pictures/burger.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"17293268e6ef04cb533e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pictures/burger.png?");

/***/ }),

/***/ "./src/pictures/cake.png":
/*!*******************************!*\
  !*** ./src/pictures/cake.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8ef7b01743f65b66c106.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pictures/cake.png?");

/***/ }),

/***/ "./src/pictures/pizza.png":
/*!********************************!*\
  !*** ./src/pictures/pizza.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dcbd5cd6210083079514.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pictures/pizza.png?");

/***/ }),

/***/ "./src/pictures/restaurant.jpg":
/*!*************************************!*\
  !*** ./src/pictures/restaurant.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2be25b30d6fc89ba410f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pictures/restaurant.jpg?");

/***/ }),

/***/ "./src/pictures/salad.png":
/*!********************************!*\
  !*** ./src/pictures/salad.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3e3b36e421c5061ffc33.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pictures/salad.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;