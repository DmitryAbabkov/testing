/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./.yarn/__virtual__/css-loader-virtual-85747349d9/2/.yarn/berry/cache/css-loader-npm-6.9.0-61ac86c93e-10c0.zip/node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-85747349d9/2/.yarn/berry/cache/css-loader-npm-6.9.0-61ac86c93e-10c0.zip/node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_85747349d9_2_yarn_berry_cache_css_loader_npm_6_9_0_61ac86c93e_10c0_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/__virtual__/css-loader-virtual-85747349d9/2/.yarn/berry/cache/css-loader-npm-6.9.0-61ac86c93e-10c0.zip/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./.yarn/__virtual__/css-loader-virtual-85747349d9/2/.yarn/berry/cache/css-loader-npm-6.9.0-61ac86c93e-10c0.zip/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_85747349d9_2_yarn_berry_cache_css_loader_npm_6_9_0_61ac86c93e_10c0_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_85747349d9_2_yarn_berry_cache_css_loader_npm_6_9_0_61ac86c93e_10c0_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_85747349d9_2_yarn_berry_cache_css_loader_npm_6_9_0_61ac86c93e_10c0_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/__virtual__/css-loader-virtual-85747349d9/2/.yarn/berry/cache/css-loader-npm-6.9.0-61ac86c93e-10c0.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-85747349d9/2/.yarn/berry/cache/css-loader-npm-6.9.0-61ac86c93e-10c0.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_85747349d9_2_yarn_berry_cache_css_loader_npm_6_9_0_61ac86c93e_10c0_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_85747349d9_2_yarn_berry_cache_css_loader_npm_6_9_0_61ac86c93e_10c0_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_85747349d9_2_yarn_berry_cache_css_loader_npm_6_9_0_61ac86c93e_10c0_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_85747349d9_2_yarn_berry_cache_css_loader_npm_6_9_0_61ac86c93e_10c0_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cards__logo-visa {
    width: 50px;
    height: 50px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":[".cards__logo-visa {\n    width: 50px;\n    height: 50px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-85747349d9/2/.yarn/berry/cache/css-loader-npm-6.9.0-61ac86c93e-10c0.zip/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-85747349d9/2/.yarn/berry/cache/css-loader-npm-6.9.0-61ac86c93e-10c0.zip/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-85747349d9/2/.yarn/berry/cache/css-loader-npm-6.9.0-61ac86c93e-10c0.zip/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-85747349d9/2/.yarn/berry/cache/css-loader-npm-6.9.0-61ac86c93e-10c0.zip/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_85747349d9_2_yarn_berry_cache_css_loader_npm_6_9_0_61ac86c93e_10c0_zip_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../.yarn/__virtual__/css-loader-virtual-85747349d9/2/.yarn/berry/cache/css-loader-npm-6.9.0-61ac86c93e-10c0.zip/node_modules/css-loader/dist/cjs.js!./style.css */ "./.yarn/__virtual__/css-loader-virtual-85747349d9/2/.yarn/berry/cache/css-loader-npm-6.9.0-61ac86c93e-10c0.zip/node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _yarn_virtual_style_loader_virtual_fed028b73e_2_yarn_berry_cache_style_loader_npm_3_3_4_e2ff5c12be_10c0_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_85747349d9_2_yarn_berry_cache_css_loader_npm_6_9_0_61ac86c93e_10c0_zip_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_85747349d9_2_yarn_berry_cache_css_loader_npm_6_9_0_61ac86c93e_10c0_zip_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _yarn_virtual_css_loader_virtual_85747349d9_2_yarn_berry_cache_css_loader_npm_6_9_0_61ac86c93e_10c0_zip_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _yarn_virtual_css_loader_virtual_85747349d9_2_yarn_berry_cache_css_loader_npm_6_9_0_61ac86c93e_10c0_zip_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-fed028b73e/2/.yarn/berry/cache/style-loader-npm-3.3.4-e2ff5c12be-10c0.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_js_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/js/game.js */ "./src/js/game.js");
/* harmony import */ var _src_js_game_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_js_game_js__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ (() => {



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/app.js");




// TODO: write your code in app.js

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map