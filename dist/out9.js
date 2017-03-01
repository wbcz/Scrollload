/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(23)('wks')
  , uid        = __webpack_require__(14)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(11);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(3)
  , IE8_DOM_DEFINE = __webpack_require__(37)
  , toPrimitive    = __webpack_require__(52)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys')
  , uid    = __webpack_require__(14);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(32);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(4)
  , hide      = __webpack_require__(6)
  , redefine  = __webpack_require__(21)
  , ctx       = __webpack_require__(16)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , hide      = __webpack_require__(6)
  , has       = __webpack_require__(2)
  , SRC       = __webpack_require__(14)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

__webpack_require__(4).inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(2)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(38)
  , defined = __webpack_require__(8);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(13)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(54);
module.exports = __webpack_require__(4).Array.from;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__underscore_throttle__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assign__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_localscrollfix__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_localscrollfix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_localscrollfix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrollfix__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrollfix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_scrollfix__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  author: fa-ge
 *  github: https://github.com/fa-ge/Scrollload
 */





function isIos() {
    return (/iphone/i.test(window.navigator.userAgent)
    );
}

function generateHtml(str) {
    return '<div style="text-align: center;font-size: 12px;line-height: 50px;">' + str + '</div>';
}

function setStyles(els, cssObj) {
    if ('transform' in cssObj) {
        cssObj['webkitTransform'] = cssObj['transform'];
    }
    if ('transition' in cssObj) {
        cssObj['webkitTransition'] = cssObj['transition'];
    }
    els.forEach(function (el) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assign__["a" /* default */])(el.style, cssObj);
    });
}

function noop() {}

var Scrollload = function () {
    function Scrollload() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Scrollload);

        this._options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assign__["a" /* default */])({}, Scrollload.defaults, options);
        var container = this._options.container;
        this.container = container;
        if (!(container instanceof HTMLElement)) {
            throw new Error('container must be a HTMLElement instance!');
        }
        this.isLock = this._options.isInitLock;
        this.win = this._options.window;
        this.isGlobalScroll = this.win === window;
        this.windowHeight = window.innerHeight;
        // 是否有更多数据了
        this.hasMoreData = true;

        this.createBottomDom();
        this.fixLocalScroll();

        this.scrollListener = this.scrollListener.bind(this);
        this.resizeListener = this.resizeListener.bind(this);

        //对滚动和resize的监听函数设置节流
        this.scrollListenerWrapThrottle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__underscore_throttle__["a" /* default */])(this.scrollListener, 50);
        this.resizeListenerWrapThrottle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__underscore_throttle__["a" /* default */])(this.resizeListener, 50);

        this.attachScrollListener();

        if (this._options.enablePullRefresh) {
            this.contentDom = container.querySelector('.' + this._options.contentClass);
            this.createTopDom();
            // 开始滑动时候的pageY
            this.startPageY = 0;
            // 滑动时的前一个pageY
            this.prePageY = 0;
            // 内容是否在滑动中
            this.isMoving = false;
            // 是否是向下滑动
            this.isMovingDown = true;
            // 是否在刷新中
            this.isRefreshing = false;
            // 是否有执行touchStart函数, 刷新中不允许去滑动内容
            this.enterTouchStart = false;
            // 滑动的距离
            this.distance = 0;

            this.container.style.overflow = 'hidden';
            this.attachTouchListener();
        }
    }

    //修复ios局部滚动的bug


    _createClass(Scrollload, [{
        key: 'fixLocalScroll',
        value: function fixLocalScroll() {
            if (this.win !== window && isIos()) {
                if (this._options.useLocalScrollFix) {
                    this.localScrollFix = new __WEBPACK_IMPORTED_MODULE_2_localscrollfix___default.a(this.win);
                }
                if (this._options.useScrollFix) {
                    new __WEBPACK_IMPORTED_MODULE_3_scrollfix___default.a(this.win);
                }
            } else {
                this._options.useLocalScrollFix = false;
                this._options.useScrollFix = false;
            }
        }
    }, {
        key: 'createBottomDom',
        value: function createBottomDom() {
            this.container.insertAdjacentHTML('beforeend', '<div class="scrollload-bottom">' + this._options.loadingHtml + '</div>');
            this.bottomDom = this.container.querySelector('.scrollload-bottom');
        }
    }, {
        key: 'createTopDom',
        value: function createTopDom() {
            var _options = this._options,
                notEnoughRefreshPortHtml = _options.notEnoughRefreshPortHtml,
                overRefreshPortHtml = _options.overRefreshPortHtml,
                refreshingHtml = _options.refreshingHtml;

            this.container.insertAdjacentHTML('afterbegin', '<div class="scrollload-top" style="position: relative;">\n                <div class="scrollload-top-content" style="position: absolute; left: 0; right: 0;">\n                    <div class="scrollload-notEnoughRefreshPort" style="display: block">' + notEnoughRefreshPortHtml + '</div>\n                    <div class="scrollload-overRefreshPort" style="display: none">' + overRefreshPortHtml + '</div>\n                    <div class="scrollload-refreshing" style="display: none">' + refreshingHtml + '</div>\n                </div>\n            </div>');

            this.topDom = this.container.querySelector('.scrollload-top');
            this.topContentDom = this.topDom.querySelector('.scrollload-top-content');

            this.topDomHeight = this.topContentDom.clientHeight;
            this.topDom.style.top = '-' + this.topDomHeight + 'px';

            this.notEnoughRefreshPortDom = this.topContentDom.querySelector('.scrollload-notEnoughRefreshPort');
            this.overRefreshPortDom = this.topContentDom.querySelector('.scrollload-overRefreshPort');
            this.refreshingDom = this.topContentDom.querySelector('.scrollload-refreshing');
        }
    }, {
        key: 'showNoDataDom',
        value: function showNoDataDom() {
            this.bottomDom.innerHTML = this._options.noDataHtml;
        }
    }, {
        key: 'showLoadingDom',
        value: function showLoadingDom() {
            this.bottomDom.innerHTML = this._options.loadingHtml;
        }
    }, {
        key: 'showExceptionDom',
        value: function showExceptionDom() {
            this.bottomDom.innerHTML = this._options.exceptionHtml;
        }
    }, {
        key: 'showNotEnoughRefreshPortDom',
        value: function showNotEnoughRefreshPortDom() {
            setStyles([this.overRefreshPortDom, this.refreshingDom], { display: 'none' });
            setStyles([this.notEnoughRefreshPortDom], { display: 'block' });
        }
    }, {
        key: 'showOverRefreshPortDom',
        value: function showOverRefreshPortDom() {
            setStyles([this.notEnoughRefreshPortDom, this.refreshingDom], { display: 'none' });
            setStyles([this.overRefreshPortDom], { display: 'block' });
        }
    }, {
        key: 'showRefreshingDom',
        value: function showRefreshingDom() {
            setStyles([this.notEnoughRefreshPortDom, this.overRefreshPortDom], { display: 'none' });
            setStyles([this.refreshingDom], { display: 'block' });
        }

        // 计算向下滑动距离的函数

    }, {
        key: 'calMovingDistance',
        value: function calMovingDistance(start, end) {
            this.distance = this._options.calMovingDistance(start, end);
        }
    }, {
        key: 'isTop',
        value: function isTop() {
            return this.isGlobalScroll ? window.pageYOffset <= 0 : this.win.scrollTop <= 0;
        }

        // 刷新完成后的处理

    }, {
        key: 'refreshComplete',
        value: function refreshComplete() {
            setStyles([this.topDom, this.contentDom, this.bottomDom], { transition: 'all 300ms', transform: 'translate3d(0, 0, 0)' });
            this.isRefreshing = false;
        }

        // 内容在滑动中的处理

    }, {
        key: 'movingHandler',
        value: function movingHandler() {
            if (this.isArrivedRefreshPort()) {
                this.arrivedRefreshPortHandler();
            }

            if (this.isOverRefreshPort()) {
                this.overRefreshPortHandler();
            } else {
                this.notEnoughRefreshPortHandler();
            }

            var distance = Math.max(this.distance, 0);
            if (distance === 0) {
                this.isMoving = false;
            }

            setStyles([this.topDom, this.contentDom, this.bottomDom], { transform: 'translate3d(0, ' + distance + 'px, 0)' });

            this._options.touchMove.call(this, this);
        }

        // 是否超过可刷新的位置

    }, {
        key: 'isOverRefreshPort',
        value: function isOverRefreshPort() {
            return this.distance >= this.topDomHeight;
        }

        // 触发下拉刷新

    }, {
        key: 'triggerPullResfresh',
        value: function triggerPullResfresh() {
            var cssObj = {
                'transition': 'all 300ms'
            };
            this.showRefreshingDom();
            this.isRefreshing = true;
            cssObj['transform'] = 'translate3d(0, ' + this.topDomHeight + 'px, 0)';
            this._options.pullRefresh.call(this, this);
            setStyles([this.topDom, this.contentDom, this.bottomDom], cssObj);
        }

        // 超过可刷新位置后的监听函数

    }, {
        key: 'overRefreshPortHandler',
        value: function overRefreshPortHandler() {
            this._options.overRefreshPortHandler.call(this, this);
        }

        // 未超过可刷新位置前的监听函数

    }, {
        key: 'notEnoughRefreshPortHandler',
        value: function notEnoughRefreshPortHandler() {
            this._options.notEnoughRefreshPortHandler.call(this, this);
        }

        // 是否到达了可刷新的位置

    }, {
        key: 'isArrivedRefreshPort',
        value: function isArrivedRefreshPort() {
            var preDistance = this._options.calMovingDistance(this.startPageY, this.prePageY);
            return this.distance >= this.topDomHeight && preDistance < this.topDomHeight || this.distance <= this.topDomHeight && preDistance > this.topDomHeight;
        }

        // 对到达了刷新的位置时的处理

    }, {
        key: 'arrivedRefreshPortHandler',
        value: function arrivedRefreshPortHandler() {
            if (this.isMovingDown) {
                this.showOverRefreshPortDom();
            } else {
                this.showNotEnoughRefreshPortDom();
            }

            this._options.arrivedRefreshPortHandler.call(this, this);
        }
    }, {
        key: 'touchStart',
        value: function touchStart(event) {
            this.enterTouchStart = true;
            this.startPageY = this.prePageY = event.touches[0].pageY;
            setStyles([this.topDom, this.contentDom, this.bottomDom], {
                transform: 'translate3d(0, 0, 0)',
                transition: 'none'
            });
            this.showNotEnoughRefreshPortDom();

            this._options.touchStart.call(this, this);
        }
    }, {
        key: 'touchMove',
        value: function touchMove(event) {
            var pageY = event.touches[0].pageY;
            this.isMovingDown = pageY >= this.prePageY;

            if (this.isMoving) {
                this.calMovingDistance(this.startPageY, pageY);
                this.movingHandler();

                event.preventDefault();
            } else if (this.isTop() && this.isMovingDown) {
                // 如果滑动的时候此时在最高的位置并且是向下滑动的，那么就标记可以滑动
                this.isMoving = true;

                event.preventDefault();
            }

            this.prePageY = pageY;
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd(event) {
            this._options.touchEnd.call(this, this);

            // 如果是可以刷新的位置
            if (this.isOverRefreshPort()) {
                this.triggerPullResfresh();
            } else {
                this.refreshComplete();
            }

            this.startPageY = this.prePageY = 0;
            this.isMoving = false;
        }
    }, {
        key: 'scrollListener',
        value: function scrollListener() {
            if (this.isLock) {
                return;
            }

            if (this.isBottom()) {
                this.isLock = true;
                this._options.loadMore.call(this, this);
            }
        }
    }, {
        key: 'isBottom',
        value: function isBottom() {
            var win = this.win,
                bottomDom = this.bottomDom,
                windowHeight = this.windowHeight;

            var bottomDomTop = bottomDom.getBoundingClientRect().top;
            var winHeight = void 0;

            if (this.isGlobalScroll) {
                winHeight = windowHeight;
            } else {
                var _win$getBoundingClien = win.getBoundingClientRect(),
                    height = _win$getBoundingClien.height,
                    top = _win$getBoundingClien.top;

                winHeight = height;
                bottomDomTop = bottomDomTop - top;
            }

            return bottomDomTop - winHeight <= this._options.threshold;
        }
    }, {
        key: 'resizeListener',
        value: function resizeListener() {
            //更新缓存的windowHeight
            if (this.isGlobalScroll) {
                this.windowHeight = window.innerHeight;
            }
            this.scrollListener();
        }
    }, {
        key: 'attachScrollListener',
        value: function attachScrollListener() {
            this.win.addEventListener('scroll', this.scrollListenerWrapThrottle);
            this.win.addEventListener('resize', this.resizeListenerWrapThrottle);
            this.scrollListener();
        }
    }, {
        key: 'detachScrollListener',
        value: function detachScrollListener() {
            this.win.removeEventListener('scroll', this.scrollListenerWrapThrottle);
            this.win.removeEventListener('resize', this.resizeListenerWrapThrottle);
        }
    }, {
        key: 'attachTouchListener',
        value: function attachTouchListener() {
            var _this = this;

            this.container.addEventListener('touchstart', function (event) {
                _this.enterTouchStart = false;
                if (!_this.isRefreshing) {
                    _this.touchStart(event);
                }
            });
            this.container.addEventListener('touchmove', function (event) {
                if (!_this.enterTouchStart) {
                    return;
                }
                _this.touchMove(event);
            });
            this.container.addEventListener('touchend', function (event) {
                if (!_this.isMoving) {
                    return;
                }
                _this.touchEnd(event);
            });
        }
    }, {
        key: 'lock',
        value: function lock() {
            this.isLock = true;
        }
    }, {
        key: 'unLock',
        value: function unLock() {
            this.isLock = false;
            if (this.hasMoreData) {
                this.scrollListener();
            }
            if (this._options.useLocalScrollFix) {
                this.localScrollFix.update();
            }
        }
    }, {
        key: 'noData',
        value: function noData() {
            this.lock();

            this.hasMoreData = false;
            this.showNoDataDom();

            if (this._options.useLocalScrollFix && !this.localScrollFix.isArrived) {
                this.localScrollFix.arrived();
            }

            this.detachScrollListener();
        }
    }, {
        key: 'refreshData',
        value: function refreshData() {
            this.showLoadingDom();

            this.isLock = false;
            this.hasMoreData = true;

            if (this._options.useLocalScrollFix) {
                this.localScrollFix = new __WEBPACK_IMPORTED_MODULE_2_localscrollfix___default.a(this.win);
            }

            this.attachScrollListener();
        }
    }, {
        key: 'throwException',
        value: function throwException() {
            this.showExceptionDom();
        }
    }, {
        key: 'solveException',
        value: function solveException() {
            if (this.hasMoreData) {
                this.showLoadingDom();
                this.unLock();
            } else {
                this.showNoDataDom();
            }
        }
    }, {
        key: 'setOptions',
        value: function setOptions(options) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assign__["a" /* default */])(this._options, options);
        }
    }, {
        key: 'getOptions',
        value: function getOptions() {
            return this._options;
        }
    }], [{
        key: 'setGlobalOptions',
        value: function setGlobalOptions(options) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assign__["a" /* default */])(Scrollload.defaults, options);
        }
    }]);

    return Scrollload;
}();

Scrollload.defaults = {
    // 内容的类名
    contentClass: 'scrollload-content',

    // 初始化的时候是否锁定，锁定的话则不会去加载更多
    isInitLock: false,
    // 阀值
    threshold: 10,
    // 视窗
    window: window,
    // 修复局部滚动的两个坑
    useLocalScrollFix: false,
    useScrollFix: false,

    // 底部加载中的html
    loadingHtml: generateHtml('加载中...'),
    // 底部没有更多数据的html
    noDataHtml: generateHtml('没有更多数据了'),
    // 底部出现异常的html
    exceptionHtml: generateHtml('出现异常'),
    // 加载更多的回调
    loadMore: noop,

    // 是否开启下拉刷新
    enablePullRefresh: false,
    // 顶部下拉刷新的html
    notEnoughRefreshPortHtml: generateHtml('下拉刷新'),
    // 顶部松开刷新的html
    overRefreshPortHtml: generateHtml('松开刷新'),
    // 顶部正在刷新的html
    refreshingHtml: generateHtml('正在刷新'),
    // 下拉刷新的回调
    pullRefresh: noop,
    // 到达刷新点的回调(包括向上和向下，可以通过isMovingDown判断方向)
    arrivedRefreshPortHandler: noop,
    // 开始滑动的回调
    touchStart: noop,
    // 滑动时的回调
    touchMove: noop,
    // 滑动中松开手指的回调
    touchEnd: noop,
    // 超过可刷新位置后的监听函数
    overRefreshPortHandler: noop,
    // 未超过可刷新位置前的监听函数
    notEnoughRefreshPortHandler: noop,

    // 计算下拉的阻力函数
    calMovingDistance: function calMovingDistance(start, end) {
        return (end - start) / 3;
    }
};
/* harmony default export */ __webpack_exports__["a"] = Scrollload;


window.Scrollload = Scrollload;

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

/**
 * ScrollFix v0.1
 * http://www.joelambert.co.uk
 *
 * Copyright 2011, Joe Lambert.
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function () {
  var ScrollFix = function(elem) {
    // Variables to track inputs
    var startY, startTopScroll;

    elem = elem || document.querySelector(elem);

    // If there is no element, then do nothing
    if(!elem) {
      return;
    }

    // Handle the start of interactions
    elem.addEventListener('touchstart', function(event){
      startY = event.touches[0].pageY;
      startTopScroll = elem.scrollTop;

      if(startTopScroll <= 0) {
        elem.scrollTop = 1;
      }

      if(startTopScroll + elem.offsetHeight >= elem.scrollHeight) {
        elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
      }

    }, false);

  };

  // if we've got a window and we don't have a module
  // create a global;
  if ((typeof window != 'undefined') && (typeof module == 'undefined')) {
    window.ScrollFix = ScrollFix;
  }
  // otherwise, export it.
  else {
    module.exports = ScrollFix;
  }

})();


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LocalScrollFix.js"] = factory();
	else
		root["LocalScrollFix.js"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 使ios浏览器中局部滚动内容未占满视窗的一屏时候不出界
 */
var LocalScrollFix = function () {
    function LocalScrollFix(win) {
        _classCallCheck(this, LocalScrollFix);

        if (!win || win === window) return null;

        if (!(win instanceof HTMLElement)) {
            throw new Error('parameter 1 must be a HTMLElement instance!');
        }
        this.win = win;

        var fixDom = win.querySelector('.localScrollFix-fixDom');
        if (!fixDom) {
            this.createFixDom();
        } else {
            this.fixDom = fixDom;
        }

        this.isArrived = false;
        this.update();
    }

    _createClass(LocalScrollFix, [{
        key: 'createFixDom',
        value: function createFixDom() {
            this.win.insertAdjacentHTML('beforeend', '<div class="localScrollFix-fixDom" style="margin: 0; padding: 0"></div>');
            this.fixDom = this.win.querySelector('.localScrollFix-fixDom');
        }
    }, {
        key: 'removeFixDom',
        value: function removeFixDom() {
            this.win.removeChild(this.fixDom);
            this.fixDom = null;
        }
    }, {
        key: 'arrived',
        value: function arrived() {
            this.isArrived = true;
            this.removeFixDom();
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.isArrived) {
                return;
            }

            var fixDomPaddingTop = this.computerFixDomPaddingTop();
            if (fixDomPaddingTop >= 0) {
                this.fixDom.style.paddingTop = fixDomPaddingTop + 3 + 'px';
            } else {
                this.arrived();
            }
        }

        /**
         * 计算fixDom所需要的paddingTop值
         * @returns {number}
         */

    }, {
        key: 'computerFixDomPaddingTop',
        value: function computerFixDomPaddingTop() {
            var fixDom = this.fixDom,
                win = this.win;


            var fixDomTop = fixDom.getBoundingClientRect().top;
            var winBottom = win.getBoundingClientRect().bottom;

            var _window$getComputedSt = window.getComputedStyle(win, null),
                winPaddingBottom = _window$getComputedSt.paddingBottom,
                winBorderBottomWidth = _window$getComputedSt.borderBottomWidth;

            return winBottom - parseFloat(winPaddingBottom) - parseFloat(winBorderBottomWidth) - fixDomTop;
        }
    }]);

    return LocalScrollFix;
}();

/* harmony default export */ exports["default"] = LocalScrollFix;


window.LocalScrollFix = LocalScrollFix;

/***/ })
/******/ ]);
});

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(24)
  , toLength  = __webpack_require__(25)
  , toIndex   = __webpack_require__(51);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7)
  , createDesc      = __webpack_require__(11);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(20)(function(){
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(10)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(3);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(45)
  , descriptor     = __webpack_require__(11)
  , setToStringTag = __webpack_require__(22)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(44)
  , $export        = __webpack_require__(19)
  , redefine       = __webpack_require__(21)
  , hide           = __webpack_require__(6)
  , has            = __webpack_require__(2)
  , Iterators      = __webpack_require__(10)
  , $iterCreate    = __webpack_require__(41)
  , setToStringTag = __webpack_require__(22)
  , getPrototypeOf = __webpack_require__(47)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(3)
  , dPs         = __webpack_require__(46)
  , enumBugKeys = __webpack_require__(18)
  , IE_PROTO    = __webpack_require__(12)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(36).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(3)
  , getKeys  = __webpack_require__(49);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(2)
  , toObject    = __webpack_require__(26)
  , IE_PROTO    = __webpack_require__(12)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(2)
  , toIObject    = __webpack_require__(24)
  , arrayIndexOf = __webpack_require__(33)(false)
  , IE_PROTO     = __webpack_require__(12)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(48)
  , enumBugKeys = __webpack_require__(18);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(13)
  , defined   = __webpack_require__(8);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(13)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(34)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(10);
module.exports = __webpack_require__(4).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(16)
  , $export        = __webpack_require__(19)
  , toObject       = __webpack_require__(26)
  , call           = __webpack_require__(40)
  , isArrayIter    = __webpack_require__(39)
  , toLength       = __webpack_require__(25)
  , createProperty = __webpack_require__(35)
  , getIterFn      = __webpack_require__(53);

$export($export.S + $export.F * !__webpack_require__(43)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(50)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(42)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var assign = function assign(target, varArgs) {
    // .length of function is 2
    if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
};

/* harmony default export */ __webpack_exports__["a"] = assign;

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function later() {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function throttled() {
        var now = Date.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };

    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };

    return throttled;
};;

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 70 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_fn_array_from__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_fn_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_fn_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Scrollload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_css__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__loading_css__);






var data = [{
    image: 'http://imagesrcdola.b0.upaiyun.com/0/20141222121421_798.jpg',
    name: '画圆圈',
    label: '创意游戏',
    desc: '动手画个圆，你行吗？'
}, {
    image: 'http://imagesrcdola.b0.upaiyun.com/0/20150611143728_164.png',
    name: '英雄难过棍子关',
    label: '创意游戏',
    desc: '动手画个圆，你行吗？'
}, {
    image: 'http://imagesrcdola.b0.upaiyun.com/0/20150403115426_276.jpg',
    name: '胸口碎大石',
    label: '创意游戏',
    desc: '动手画个圆，你行吗？'
}, {
    image: 'http://imagesrcdola.b0.upaiyun.com/0/20150611160815_643.jpg',
    name: '酒后别开车',
    label: '创意游戏',
    desc: '动手画个圆，你行吗？'
}, {
    image: 'http://imagesrcdola.b0.upaiyun.com/0/20150715225730_758.jpg',
    name: '是男人就去优衣库',
    label: '创意游戏',
    desc: '动手画个圆，你行吗？'
}];

function getData() {
    return Array.from(new Array(5)).map(function () {
        var item = data[Math.floor(Math.random() * 5)];
        return '\n        <li>\n            <div class="info">\n                <img class="image" src="' + item.image + '">\n                <div class="desc">\n                    <p>' + item.name + '</p>\n                    <span>' + item.label + '</span>\n                    <p>' + item.desc + '</p>\n                </div>\n            </div>\n            <a class="btn" href="http://m.dolapocket.com/" target="_blank">\u5F00\u59CB</a>\n        </li>\n';
    }).join('');
}
var count = 0;
var scrollload = new __WEBPACK_IMPORTED_MODULE_1__Scrollload__["a" /* default */](document.querySelector('.container'), function (sl) {
    setTimeout(function () {
        if (count++ < 5) {
            document.querySelector('.list').insertAdjacentHTML('beforeend', getData());
            sl.unLock();
        } else {
            sl.noData();
        }
    }, 500);
}, {
    loadingHtml: '\n            <div class="two-balls-swing">\n                <div class="two-balls-swing-circle"></div>\n                <div class="two-balls-swing-circle"></div>\n            </div>\n'
});

/***/ })
/******/ ]);