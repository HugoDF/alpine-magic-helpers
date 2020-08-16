/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_truncate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/truncate.js */ "./src/truncate.js");
/* harmony import */ var _src_truncate_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_truncate_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_interval_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/interval.js */ "./src/interval.js");
/* harmony import */ var _src_interval_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_interval_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_fetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/fetch.js */ "./src/fetch.js");
/* harmony import */ var _src_fetch_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_fetch_js__WEBPACK_IMPORTED_MODULE_2__);




var alpine = window.deferLoadingAlpine || function (alpine) {
  return alpine();
};

window.deferLoadingAlpine = function (callback) {
  _src_truncate_js__WEBPACK_IMPORTED_MODULE_0___default()();
  _src_interval_js__WEBPACK_IMPORTED_MODULE_1___default()();
  _src_fetch_js__WEBPACK_IMPORTED_MODULE_2___default()();
  alpine(callback);
};

/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function registerFetchMagicMethod() {
  Alpine.addMagicProperty('fetch', function ($el) {
    return function () {// if (typeof parameters[0] !== 'string') return parameters[0]
      // // if only a number or string is passed in, keep it simple
      // if (typeof parameters[1] !== 'object') {
      //     return parameters[0].slice(0, parameters[1])
      // }
      // if (parameters[1].hasOwnProperty('words')) {
      //     return parameters[0].split(" ").splice(0, parameters[1].words).join(" ")
      // }
      // if (parameters[1].hasOwnProperty('characters')) {
      //     return parameters[0].slice(0, parameters[1]['characters'])
      // }
      // return parameters[0]
    };
  });
}

var alpine = window.deferLoadingAlpine || function (alpine) {
  return alpine();
};

window.deferLoadingAlpine = function (callback) {
  registerFetchMagicMethod();
  alpine(callback);
};

module.exports = registerFetchMagicMethod;

/***/ }),

/***/ "./src/interval.js":
/*!*************************!*\
  !*** ./src/interval.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function registerIntervalMagicMethod() {
  Alpine.addMagicProperty('interval', function ($el) {
    return function () {
      var _this = this;

      for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
        parameters[_key] = arguments[_key];
      }

      if (typeof parameters[0] !== 'function') return parameters[0];
      var timer = parameters[1];
      var delay = 0;
      var forceInterval = false; // Users can pass in an object as a second parameter instead

      if (_typeof(parameters[1]) === 'object') {
        if (parameters[1].hasOwnProperty('timer')) {
          timer = parameters[1].timer;
        }

        if (parameters[1].hasOwnProperty('delay')) {
          delay = parameters[1].delay;
        }

        if (parameters[1].hasOwnProperty('forceInterval')) {
          forceInterval = parameters[1].forceInterval;
        }
      }

      var loop = function loop() {
        var test = _this.hasOwnProperty('autoIntervalTest') ? _this.autoIntervalTest : true;
        setTimeout(function () {
          if (!_this.autoIntervalLoop) return;
          test && parameters[0].call(_this);
          forceInterval ? _this.autoIntervalLoop() : requestAnimationFrame(_this.autoIntervalLoop);
        }, timer);
      };

      this.autoIntervalLoop = loop;
      setTimeout(function () {
        if (!_this.autoIntervalLoop) return;
        forceInterval ? _this.autoIntervalLoop() : requestAnimationFrame(_this.autoIntervalLoop);
      }, delay);
      this.$watch('autoIntervalTest', function (test) {
        if (test) {
          _this.autoIntervalLoop = loop;
          forceInterval ? _this.autoIntervalLoop() : requestAnimationFrame(_this.autoIntervalLoop);
        } else {
          clearTimeout(_this.autoIntervalLoop);
          _this.autoIntervalLoop = null;
        }
      });
    };
  });
}

var alpine = window.deferLoadingAlpine || function (alpine) {
  return alpine();
};

window.deferLoadingAlpine = function (callback) {
  registerIntervalMagicMethod();
  alpine(callback);
};

module.exports = registerIntervalMagicMethod;

/***/ }),

/***/ "./src/truncate.js":
/*!*************************!*\
  !*** ./src/truncate.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function registerTruncateMagicMethod() {
  Alpine.addMagicProperty('truncate', function ($el) {
    return function () {
      for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
        parameters[_key] = arguments[_key];
      }

      if (typeof parameters[0] !== 'string') return parameters[0]; // if only a number or string is passed in, keep it simple

      if (_typeof(parameters[1]) !== 'object') {
        return parameters[0].slice(0, parameters[1]);
      }

      if (parameters[1].hasOwnProperty('words')) {
        return parameters[0].split(" ").splice(0, parameters[1].words).join(" ");
      }

      if (parameters[1].hasOwnProperty('characters')) {
        return parameters[0].slice(0, parameters[1]['characters']);
      }

      return parameters[0];
    };
  });
}

var alpine = window.deferLoadingAlpine || function (alpine) {
  return alpine();
};

window.deferLoadingAlpine = function (callback) {
  registerTruncateMagicMethod();
  alpine(callback);
};

module.exports = registerTruncateMagicMethod;

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevin/code/alpinejs/alpine-magic-helpers/index.js */"./index.js");


/***/ })

/******/ });