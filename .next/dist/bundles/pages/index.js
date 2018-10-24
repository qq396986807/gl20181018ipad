module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(5);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(1);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(0);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "preloader"
var external__preloader_ = __webpack_require__(7);
var external__preloader__default = /*#__PURE__*/__webpack_require__.n(external__preloader_);

// CONCATENATED MODULE: ./src/core.js




var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var context = null;
var core_canvas = null;
var halfCanvasHeight = null;
var halfCanvasWidth = null;
var assets = [];
var core_scale = 1;

var assetsRoot = '/static/assets';
var assetsPath = [assetsRoot + '/Bar.png', assetsRoot + '/Bloc.png', assetsRoot + '/Circle.png'];

var homePageAssetsPath = [];
var tutorialPageAssetsPath = [];
var beeDiePageAssetsPath = [];

var cacheImage = [];

var BLOCK_RADIUS = 20;

var loader = null;
var loader2 = null;
var loader3 = null;

var core_Core = function () {
    function Core(canvasElm) {
        _classCallCheck(this, Core);

        core_scale = window.devicePixelRatio;
        core_canvas = canvasElm;
        context = core_canvas.getContext('2d');
        context.scale(core_scale, core_scale);

        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";

        halfCanvasHeight = window.innerHeight * core_scale / 2;
        halfCanvasWidth = window.innerWidth * core_scale / 2;

        loader = external__preloader__default()({
            xhrImages: false
        });

        loader2 = external__preloader__default()({
            xhrImages: false
        });

        loader3 = external__preloader__default()({
            xhrImages: false
        });
    }

    /**
     * Preload assets
     */


    _createClass(Core, null, [{
        key: 'preload',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee() {
                var loadingAssets;
                return regenerator__default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                loadingAssets = assetsPath.map(function (path) {
                                    return new Promise(function (resolve, reject) {
                                        var img = new Image();
                                        img.onload = resolve;
                                        img.src = path;
                                        assets.push(img);
                                    });
                                });
                                return _context.abrupt('return', Promise.all(loadingAssets));

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function preload() {
                return _ref.apply(this, arguments);
            }

            return preload;
        }()
    }, {
        key: 'loadAssets',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee2() {
                var i, fileName, img;
                return regenerator__default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:

                                for (i = 0; i < 76; i++) {
                                    fileName = i;

                                    if (i < 10) {
                                        fileName = "0000" + i;
                                    } else if (i > 9 && i < 100) {
                                        fileName = "000" + i;
                                    }

                                    //var img = assetsRoot + '/animation/welcomescreen-jpg/'+fileName+'.jpg';
                                    img = 'https://glcdn.wcampaign.cn/ipadassets/animation/welcomescreen-jpg/' + fileName + '.jpg';


                                    homePageAssetsPath.push(img);
                                }

                                // tutorial
                                for (i = 1; i < 210; i++) {
                                    fileName = i;

                                    if (i < 10) {
                                        fileName = "0000" + i;
                                    } else if (i > 9 && i < 100) {
                                        fileName = "000" + i;
                                    } else if (i > 99 && i < 1000) {
                                        fileName = "00" + i;
                                    }

                                    //var img = assetsRoot + '/animation/tutorial-jpg/'+fileName+'.jpg';
                                    img = 'https://glcdn.wcampaign.cn/ipadassets/animation/tutorial-jpg/' + fileName + '.jpg';


                                    tutorialPageAssetsPath.push(img);
                                }

                                for (i = 0; i < 27; i++) {
                                    fileName = i;

                                    if (i < 10) {
                                        fileName = "0000" + i;
                                    } else if (i > 9 && i < 100) {
                                        fileName = "000" + i;
                                    }

                                    //var img = assetsRoot + '/animation/beedie/'+fileName+'.png';
                                    img = 'https://glcdn.wcampaign.cn/ipadassets/animation/beedie/' + fileName + '.png';


                                    beeDiePageAssetsPath.push(img);
                                }

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function loadAssets() {
                return _ref2.apply(this, arguments);
            }

            return loadAssets;
        }()
    }, {
        key: 'preloadHomageAssets',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee3(progressCallback, completeCallback) {
                var i;
                return regenerator__default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:

                                loader.on('progress', progressCallback);

                                loader.on('complete', function () {
                                    //loader.reset();
                                    completeCallback();
                                });

                                for (i = homePageAssetsPath.length - 1; i >= 0; i--) {
                                    loader.add(homePageAssetsPath[i]);
                                }

                                loader.load();

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function preloadHomageAssets(_x, _x2) {
                return _ref3.apply(this, arguments);
            }

            return preloadHomageAssets;
        }()
    }, {
        key: 'preloadTutorialAssets',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee4(progressCallback, completeCallback) {
                var i;
                return regenerator__default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:

                                loader2.on('progress', progressCallback);

                                loader2.on('complete', completeCallback);

                                for (i = tutorialPageAssetsPath.length - 1; i >= 0; i--) {
                                    loader2.add(tutorialPageAssetsPath[i]);
                                }

                                loader2.load();

                            case 4:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function preloadTutorialAssets(_x3, _x4) {
                return _ref4.apply(this, arguments);
            }

            return preloadTutorialAssets;
        }()
    }, {
        key: 'preloadBeeDieAssets',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee5(progressCallback, completeCallback) {
                var i;
                return regenerator__default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:

                                loader3.on('progress', progressCallback);

                                loader3.on('complete', completeCallback);

                                for (i = beeDiePageAssetsPath.length - 1; i >= 0; i--) {
                                    loader3.add(beeDiePageAssetsPath[i]);
                                }

                                loader3.load();

                            case 4:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function preloadBeeDieAssets(_x5, _x6) {
                return _ref5.apply(this, arguments);
            }

            return preloadBeeDieAssets;
        }()

        /**
         * 
         * @param {number} leftX 
         * @param {number} topY 
         * @param {number} w 
         * @param {number} h 
         * @param {string} color 
         */

    }, {
        key: 'drawRect',
        value: function drawRect(leftX, topY, w, h, color) {
            context.fillStyle = color;
            context.fillRect(leftX, topY, w, h);
        }

        /**
         * 
         * @param {number} centerX 
         * @param {number} centerY 
         * @param {number} radius 
         * @param {string} color 
         */

    }, {
        key: 'drawCircle',
        value: function drawCircle(centerX, centerY, radius, color) {
            context.fillStyle = color;
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
            context.fill();
        }

        /**
         * 
         * @param {number} x 
         * @param {number} y 
         * @param {number} textSize 
         * @param {string} color 
         * @param {string} font 
         * @param {string} text 
         */

    }, {
        key: 'drawText',
        value: function drawText(x, y, textSize, color, font, text) {
            context.font = 'normal ' + textSize + 'px ' + font;
            context.fillStyle = color;
            context.fillText(text, x, y);
        }

        /**
         * 
         * @param {number} x 
         * @param {number} y 
         * @param {string} path 
         * @param {number} w 
         * @param {number} h
         */

    }, {
        key: 'drawImage',
        value: function drawImage(x, y, path, w, h) {

            var isCached = cacheImage.find(function (img) {
                return img.path === path;
            });

            if (isCached) {
                return context.drawImage(isCached.img, x, y, w, h);
            }

            var img = new Image();
            img.src = path;
            img.onload = function () {
                cacheImage.push({
                    path: path,
                    img: img
                });
                context.drawImage(img, x, y, w, h);
            };
        }

        /**
         * 
         */

    }, {
        key: 'loadImg',
        value: function loadImg(arr, n) {
            var i = 0;
            var arrPath = arr; //图片数组
            var total = n;
            function loadImgFun(num, imgArr) {
                var img = new Image();
                img.src = imgArr[num];
                var path = imgArr[num];
                console.log(path);
                if (num < total) {
                    img.onload = function () {
                        cacheImage.push({
                            path: path,
                            img: img
                        });
                        i++;
                        loadImgFun(i, arrPath);
                    };
                }
            }
            loadImgFun(i, arrPath);
        }

        /**
         * Draw block
         * @param {number} x 
         * @param {number} y 
         * @param {number} size 
         * @param {string} color 
         */

    }, {
        key: 'drawBlock',
        value: function drawBlock(x, y, size, color) {

            var blockRadius = BLOCK_RADIUS * core_scale;

            context.strokeStyle = color;
            context.lineJoin = "round";
            context.lineWidth = blockRadius;

            context.strokeRect(x + blockRadius / 2, y + blockRadius / 2, size - blockRadius, size - blockRadius);
            context.fillStyle = color;
            context.fillRect(x + blockRadius / 2, y + blockRadius / 2, size - blockRadius, size - blockRadius);
        }

        /**
         * @param  {number} xStart
         * @param  {number} yStart
         * @param  {number} xEnd
         * @param  {number} yEnd
         * @param  {number} lineWidth
         * @param  {string} color
         */

    }, {
        key: 'drawLine',
        value: function drawLine(xStart, yStart, xEnd, yEnd, lineWidth, color) {
            context.beginPath();
            context.moveTo(xStart, yStart);
            context.lineTo(xEnd, yEnd);
            context.lineWidth = lineWidth;
            context.strokeStyle = color;
            context.lineCap = "round";
            context.stroke();
        }

        /**
         * Using this method to debug and check the center of the canvas
         */

    }, {
        key: 'drawNet',
        value: function drawNet() {
            for (var i = 0; i < core_canvas.height; i += 40) {
                context.fillStyle = 'white';
                context.fillRect(core_canvas.width / 2 - 1, i, 2, 20);
            }
        }

        /**
         * Suspends the execution until the time-out interval elapses
         * @param {integer} ms Milliseconds to sleep
         */

    }, {
        key: 'sleep',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee7(ms) {
                var _this = this;

                return regenerator__default.a.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                return _context7.abrupt('return', new Promise(function () {
                                    var _ref7 = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee6(resolve) {
                                        return regenerator__default.a.wrap(function _callee6$(_context6) {
                                            while (1) {
                                                switch (_context6.prev = _context6.next) {
                                                    case 0:
                                                        _context6.next = 2;
                                                        return setTimeout(resolve, ms);

                                                    case 2:
                                                    case 'end':
                                                        return _context6.stop();
                                                }
                                            }
                                        }, _callee6, _this);
                                    }));

                                    return function (_x8) {
                                        return _ref7.apply(this, arguments);
                                    };
                                }()));

                            case 1:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function sleep(_x7) {
                return _ref6.apply(this, arguments);
            }

            return sleep;
        }()
    }, {
        key: 'clearRect',
        value: function clearRect() {
            context.clearRect(0, 0, core_canvas.height, core_canvas.width);
        }
    }]);

    return Core;
}();
// EXTERNAL MODULE: external "jquery"
var external__jquery_ = __webpack_require__(2);
var external__jquery__default = /*#__PURE__*/__webpack_require__.n(external__jquery_);

// CONCATENATED MODULE: ./src/boot.js


var boot__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function boot__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var drawRect = core_Core.drawRect,
    drawImage = core_Core.drawImage,
    drawText = core_Core.drawText,
    drawCircle = core_Core.drawCircle,
    loadImg = core_Core.loadImg,
    clearRect = core_Core.clearRect;



/**
 * Credits page class
 */

var boot_Boot = function () {
    function Boot() {
        boot__classCallCheck(this, Boot);

        this.VISIBILITY_DURATION = 1500;
        this.HIDE_ANIMATION_DURATION = 1000;
        this.VOODOO_LOGO_HEIGHT = 85;
        this.VOODOO_LOGO_WIDTH = 300;
        this.BENTO_LOGO_HEIGHT = 85;
        this.BENTO_LOGO_WIDTH = 150;
        this.LIGHT_FONT_SIZE = 33;
        this.BOLD_FONT_SIZE = 48;
        this.CIRCLE_RADIUS = 10;
        this.framesPerSecond = 60;
        this.bestScore = 0;
        this.blackBlock = {
            x: 0,
            y: 0
        };
        this.whiteBlock = {
            x: 0,
            y: core_canvas.height / 2
        };

        this.hideAnimation = function (timestamp) {

            // if(this.blackBlock.x >= -(canvas.width) && this.whiteBlock.x <= canvas.width) {
            //     this.blackBlock.x -= (25 * scale)
            //     this.voodooLogo.x -= (25 * scale)

            //     this.whiteBlock.x += (25 * scale)
            //     this.bentoLogo.x += (25 * scale)
            //     this.draw()
            //     window.requestAnimationFrame(this.hideAnimation)
            // } else {
            //     window.cancelAnimationFrame(this.hide_animation)
            // }
        };
    }

    // this.voodooLogo = {
    //     x: halfCanvasWidth - ((this.VOODOO_LOGO_WIDTH * scale) / 2),
    //     y: (halfCanvasHeight / 2) - ((this.VOODOO_LOGO_HEIGHT * scale) / 2)
    // }

    // this.bentoLogo = {
    //     x: halfCanvasWidth - ((this.BENTO_LOGO_WIDTH * scale) / 2),
    //     y: ((halfCanvasHeight / 2) * 3) - ((this.BENTO_LOGO_HEIGHT * scale) / 2)
    // }

    /**
     * Display the boot state the first time
     */


    boot__createClass(Boot, [{
        key: 'display',
        value: function display() {

            // Preload fonts because preload seems not working on chrome :'(
            drawText(0, -200, 1, 'black', 'Montserrat-Thin', 'a');
            drawText(0, -200, 1, 'black', 'Montserrat-Regular', 'a');

            // if(localStorage.key('bestScore') !== null) {
            //     this.bestScore = localStorage.getItem('bestScore')
            // }

            this.draw();
            return Promise.resolve();
        }

        /**
         * Hide the boot state with animation
         */

    }, {
        key: 'hide',
        value: function hide() {
            this.hide_animation = window.requestAnimationFrame(this.hideAnimation);
        }
    }, {
        key: 'draw',
        value: function draw() {
            // Background
            //一开始屏的背景
            // drawRect(0, 0, canvas.width, canvas.height, 'black')
            // drawImage(
            //     0,
            //     0,
            //     'static/assets/bg.png',
            // 	canvas.width,
            // 	canvas.height
            // )

            // Black and white block
            //drawRect(this.blackBlock.x, this.blackBlock.y, canvas.width, canvas.height / 2, '#212121')
            //drawRect(this.whiteBlock.x, this.whiteBlock.y, canvas.width, canvas.height / 2, 'white')

            // Voodoo and Bento logo
            //drawImage(this.voodooLogo.x, this.voodooLogo.y, "static/voodoo.png", this.VOODOO_LOGO_WIDTH*scale, this.VOODOO_LOGO_HEIGHT*scale)
            //drawImage(this.bentoLogo.x, this.bentoLogo.y, "static/bento.png", this.BENTO_LOGO_WIDTH*scale, this.BENTO_LOGO_HEIGHT*scale)

            // During the hide animation we display a preview of the start screen.
            // When the white and black block are enough away from the center we can
            // write the text without blink effect.
            // if(this.blackBlock.x < -(canvas.width/2) - (canvas.width/4)) {
            //     this.drawStartScreen()
            // }
            this.drawStartScreen();
        }
    }, {
        key: 'drawStartScreen',
        value: function drawStartScreen() {
            var n = 0; //帧数

            function drawAni() {
                drawImage(0, 0, homePageAssetsPath[n], core_canvas.width, core_canvas.height);
                n++;
            }

            var ani = setInterval(function () {
                if (n > 74) {
                    clearInterval(ani);
                    drawImage(0, 0, 'static/assets/bg.png', core_canvas.width, core_canvas.height);

                    //绘制首页头顶
                    drawImage(0, 0, 'static/assets/p1-t1.png', core_canvas.width, core_canvas.width / 2.072);
                    external__jquery__default()(".beeBox").fadeIn(1000);
                } else {
                    drawAni();
                }
            }, 1000 / 20);
        }
    }, {
        key: 'drawLoadingProcess',
        value: function drawLoadingProcess(percentage) {
            //绘制首页头顶
            clearRect();

            drawText(halfCanvasWidth - 50 * core_scale, halfCanvasHeight - 50 * core_scale, 16 * core_scale, 'white', 'Montserrat-Thin', "Loading " + percentage + "%");
        }
    }]);

    return Boot;
}();

/* harmony default export */ var boot = (boot_Boot);
// CONCATENATED MODULE: ./src/start.js


var start__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function start__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var start_drawRect = core_Core.drawRect,
    start_drawImage = core_Core.drawImage,
    start_drawText = core_Core.drawText,
    start_drawCircle = core_Core.drawCircle,
    start_loadImg = core_Core.loadImg;



/**
 * Credits page class
 */

var start_Start = function () {
    function Start() {
        var _this = this;

        start__classCallCheck(this, Start);

        this.framesPerSecond = 60;
        this.startInstructionOpacity = 0;
        this.reverseOpacity = false;
        this.useTouch = false;
        this.bestScore = 0;
        this.LIGHT_FONT_SIZE = 33;
        this.BOLD_FONT_SIZE = 48;
        this.CIRCLE_RADIUS = 10;
        this.FirstFlag = true;

        this.showTutorial = function () {
            start_drawImage(0, 0, 'static/assets/tutorial.png', core_canvas.width, core_canvas.height);
            external__jquery__default()(".beeBox").hide();
            core_canvas.addEventListener("mousedown", _this.onTouch);
            document.querySelector('.play').removeEventListener("mousedown", _this.showTutorial);
            document.querySelector('.play').addEventListener("mousedown", _this.onTouch);
        };

        this.onTouch = function (evt) {
            external__jquery__default()(".beeBox").hide();
            external__jquery__default()(".palyAgainBox").hide();
            if (_this.FirstFlag) {
                //帧数


                var drawAni = function drawAni() {
                    start_drawImage(0, 0, tutorialPageAssetsPath[n], core_canvas.width, core_canvas.height);
                    n++;
                };

                var n = 0;

                _this.ani = setInterval(function () {
                    if (n > 208) {
                        clearInterval(this.ani);
                    } else {
                        drawAni();
                    }
                    console.log(n);
                }.bind(_this), 1000 / 20);
                core_canvas.addEventListener("mousedown", _this.onTouch);
                _this.FirstFlag = false;
            } else {
                evt.preventDefault();
                clearInterval(_this.ani);
                if (evt.type === 'touchstart') {
                    _this.useTouch = true;
                }

                if (evt.type === "touchend" || evt.type === "mousedown" && _this.useTouch === true) {
                    return false;
                }

                clearInterval(_this.instructionAnimation);
                core_canvas.removeEventListener("touchstart", _this.onTouch);
                core_canvas.removeEventListener("mousedown", _this.onTouch);

                _this.runGame(_this.show.bind(_this));
            }
        };
    }

    start__createClass(Start, [{
        key: 'draw',
        value: function draw() {}
        //console.log('draw')
        // Background
        // drawRect(0, 0, canvas.width, canvas.height, 'black')
        // drawImage(
        //     0,
        //     0,
        //     'static/assets/bg.png',
        // 	canvas.width,
        // 	canvas.height
        // )

        // //绘制首页头顶
        // drawImage(
        //     0,
        //     0,
        //     'static/assets/p1-t1.png',
        // 	canvas.width,
        // 	canvas.width / 1.953
        // )

        // //绘制那只大蜜蜂
        // drawImage(
        //     canvas.width * 0.1,
        //     canvas.height * 0.23,
        //     'static/assets/p1-t2.png',
        //     canvas.width * 0.8,
        //     canvas.width * 0.8 / 0.802
        // )

        // drawText(
        //     halfCanvasWidth - (50*scale), 
        //     halfCanvasHeight - (55*scale) - (canvas.height/4), 
        //     this.LIGHT_FONT_SIZE * scale, 
        //     'white', 
        //     'Montserrat-Thin', 
        //     'Snake'
        // )
        // drawText(
        //     halfCanvasWidth - (35*scale), 
        //     halfCanvasHeight - (canvas.height/4), 
        //     this.BOLD_FONT_SIZE * scale, 
        //     'white', 
        //     'Montserrat-Regular', 
        //     'VS'
        // )
        // drawText(
        //     halfCanvasWidth - (45*scale), 
        //     halfCanvasHeight + (45 * scale) - (canvas.height/4), 
        //     this.LIGHT_FONT_SIZE * scale, 
        //     'white', 
        //     'Montserrat-Thin', 
        //     'Block'
        // )

        // if(this.bestScore > 0) {
        //     drawText(
        //         halfCanvasWidth - (40 * scale), 
        //         halfCanvasHeight - (halfCanvasHeight / 7), 
        //         16 * scale, 
        //         'white', 
        //         'Montserrat-Thin', 
        //         'Best score :'
        //     )

        //     drawText(
        //         halfCanvasWidth - ((this.bestScore > 9 ? 20 : 10) * scale), 
        //         halfCanvasHeight + (10 * scale), 
        //         this.LIGHT_FONT_SIZE * scale, 
        //         'white', 
        //         'Montserrat-Regular', 
        //         this.bestScore
        //     )
        // }

        // Start instruction text
        // drawText(
        //     halfCanvasWidth - (55 * scale), 
        //     halfCanvasHeight + (canvas.height/3), 
        //     22 * scale, 
        //     `rgba(255, 255, 255, ${this.startInstructionOpacity.toFixed(2)})`, 
        //     'Montserrat-Thin', 
        //     'Tap to play'
        // );

        // drawText(
        //     halfCanvasWidth - (4*scale), 
        //     (halfCanvasHeight + canvas.height/6) - (20*scale),
        //      14 * scale, 
        //      'white', 
        //      'Montserrat-Regular', 
        //      '4')

        // drawCircle(
        //     halfCanvasWidth, 
        //     halfCanvasHeight + canvas.height/6, 
        //     this.CIRCLE_RADIUS * scale, 
        //     `rgb(255, 204, 0)`
        // );


        /**
         * Show the start state
         */

    }, {
        key: 'show',
        value: function show(runGame) {

            this.runGame = runGame;

            // canvas.addEventListener("touchstart", this.onTouch)
            //canvas.addEventListener("mousedown", this.onTouch)

            // document.querySelector('.play').addEventListener("touchstart", this.onTouch)
            document.querySelector('.play').addEventListener("mousedown", this.showTutorial);
            //document.querySelector('.playAgain').addEventListener("mousedown", this.onTouch)

            // if(localStorage.key('bestScore') !== null) {
            //     this.bestScore = localStorage.getItem('bestScore')
            // }

            // Start instruction text blinking
            // this.instructionAnimation = setInterval(() => {

            //     const opacity = parseFloat(this.startInstructionOpacity.toFixed(2));

            //     if(opacity <= 1 && !this.reverseOpacity) {
            //         this.startInstructionOpacity += 0.04
            //         if(opacity === 1) {
            //             this.reverseOpacity = !this.reverseOpacity
            //         }
            //     } else if(opacity >= 0 && this.reverseOpacity) {
            //         this.startInstructionOpacity -= 0.04
            //         if(opacity === 0) {
            //             this.reverseOpacity = !this.reverseOpacity
            //         }
            //     }

            //     this.draw()
            // }, 20)

            this.draw();
        }

        //出现第一次的教程图片

    }]);

    return Start;
}();

/* harmony default export */ var start = (start_Start);
// CONCATENATED MODULE: ./src/play.js




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var play__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function play__asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function play__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var play_drawRect = core_Core.drawRect,
    play_drawImage = core_Core.drawImage,
    play_drawText = core_Core.drawText,
    play_drawCircle = core_Core.drawCircle,
    drawLine = core_Core.drawLine,
    play_sleep = core_Core.sleep,
    drawBlock = core_Core.drawBlock,
    drawImage2 = core_Core.drawImage2;



/**
 * Credits page class
 */

var play_Play = function () {
	function Play() {
		var _this = this;

		play__classCallCheck(this, Play);

		this.CIRCLE_RADIUS = 10;
		this.CIRCLE_DIAMETER = this.CIRCLE_RADIUS * 2;
		this.LINE_WIDTH = 3;
		this.BLOCK_MARGIN = 1;
		this.SPEED = 9;
		this.framesPerSecond = 60;
		this.startAnimationEnded = false;
		this.lastAddedTime = 0;
		this.lastBlockCollisionTime = 0;
		this.restartLabelTime = 0;
		this.restart = false;
		this.listenersApplied = false;
		this.lastCoordinateX = 0;
		this.distanceToX = 0;
		this.swipeDirection = '';
		this.score = 0;
		this.end = false;
		this.pause = false;
		this.newBestScore = false;
		this.bestScore = 0;
		this.blocked = false;
		this.circles = [];
		this.cols = [];
		this.points = [];
		this.blocks = [];
		this.lines = [];
		this.finish = 0;
		this.hitBlock = null;
		this.restartOpacity = 0;
		this.reverseOpacity = false;
		this.dieBeeFlag = false;
		this.dieBeeFlag2 = true;
		this.finishFlag = false;
		this.timeSecond = 15;
		this.availableCircle = {
			x: 0,
			y: 0,
			value: 4
		};

		this.onTabFocusOff = function () {
			if (document.visibilityState === 'hidden') {
				_this.pause = true;
			} else {
				_this.pause = false;
			}
		};

		this.onTouch = function () {
			var _ref2 = play__asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(_ref) {
				var changedTouches = _ref.changedTouches;
				var touch;
				return regenerator__default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								touch = changedTouches[0];

								// Called when the game was ended and touch the screen

								if (!_this.end) {
									_context.next = 6;
									break;
								}

								// Remove all listeners and interval before showing the start screen
								_this.restart = true;
								core_canvas.removeEventListener("touchstart", _this.onTouch);
								document.removeEventListener("visibilitychange", _this.onTabFocusOff);
								return _context.abrupt('return', _this.showStartScreen(_this.run.bind(_this)));

							case 6:
								if (!(_this.lastCoordinateX === 0)) {
									_context.next = 9;
									break;
								}

								_this.lastCoordinateX = Math.abs(halfCanvasWidth - touch.pageX) * core_scale;
								return _context.abrupt('return', false);

							case 9:

								_this.distanceToX = Math.abs(_this.lastCoordinateX - touch.pageX) * core_scale;
								_this.swipeDirection = _this.lastCoordinateX > touch.pageX ? 'left' : 'right';
								_this.lastCoordinateX = touch.pageX * core_scale;

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}();

		this.restartLabelAnimation = function (timestamp) {

			if (!_this.end || _this.restart) {
				return false;
			}

			if (!_this.restartLabelTime || _this.restartLabelTime - _this.restartLabelTime <= 100) {
				_this.restartLabelTime = timestamp;

				var opacity = parseFloat(_this.restartOpacity.toFixed(2));

				if (opacity <= 1 && !_this.reverseOpacity) {
					_this.restartOpacity += 0.04;
					if (opacity === 1) {
						_this.reverseOpacity = !_this.reverseOpacity;
					}
				} else if (opacity >= 0 && _this.reverseOpacity) {
					_this.restartOpacity -= 0.04;
					if (opacity === 0) {
						_this.reverseOpacity = !_this.reverseOpacity;
					}
				}

				_this.draw();
				window.requestAnimationFrame(_this.restartLabelAnimation);
			}
		};

		this.beforePlayAnimation = function () {

			var startYPosition = halfCanvasHeight + core_canvas.height / 6;

			if (_this.circles[0].y > startYPosition - 50 * core_scale) {

				_this.availableCircle.y -= 6 * core_scale;
				_this.circles.map(function (circle, key) {
					circle.y -= 5 * core_scale - 2 * core_scale * key;
				});

				_this.draw();

				window.requestAnimationFrame(_this.beforePlayAnimation);
			} else {
				_this.startAnimationEnded = true;
				_this.applyListeners();
				window.cancelAnimationFrame(_this.before_play_animation);
			}
		};

		this.playAnimation = function (timestamp) {

			if (_this.startAnimationEnded === false || _this.pause === true) {
				return window.requestAnimationFrame(_this.playAnimation);
			}

			if (!_this.end) {

				if (!_this.lastAddedTime && !_this.lastBlockCollisionTime) {
					_this.lastAddedTime = _this.lastBlockCollisionTime = timestamp;
					_this.addPoints();
					_this.addBlocks();
				} else {

					if (timestamp - _this.lastAddedTime >= 2000) {
						// Each 1,5s add points and blocks
						_this.addBlocks();
						_this.addPoints();
						_this.lastAddedTime = timestamp;
					} else if (timestamp - _this.lastBlockCollisionTime >= 100) {
						// Each 100ms handle block collision
						if (_this.blocked) {
							_this.handleBlockCollision();
						}
						_this.lastBlockCollisionTime = timestamp;
					}
				}

				_this.updateCircles();
				_this.updateBlocks();
				_this.updatePoints();
				_this.updateLines();
				_this.draw();
				_this.finishGame();

				window.requestAnimationFrame(_this.playAnimation);
			} else {
				_this.draw();
			}
		};
	} //游戏速度

	//终点的线y值
	//倒计时定时器


	play__createClass(Play, [{
		key: 'finishGame',
		value: function finishGame() {
			if (this.finishFlag) {
				this.finish = this.finish + this.SPEED * core_scale;
				if (this.finish > 1841) {
					this.end = true;
				}
				play_drawImage(0, this.finish, 'static/assets/finishLine.png', core_canvas.width, core_canvas.width / 8.486);
			}
		}
	}, {
		key: 'draw',
		value: function draw() {
			// console.log(111);
			//drawRect(0, 0, canvas.width, canvas.height, 'black')
			//绘制背景
			play_drawImage(0, 0, 'static/assets/bg.png', core_canvas.width, core_canvas.height);

			// Falling blocks
			//创建障碍方块
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.blocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var block = _step.value;


					if (block.value > 0) {
						// drawBlock(block.x, block.y, block.size, block.color)
						play_drawImage(block.x, block.y, block.color[0], block.size, block.size);

						play_drawText(block.x + (block.size / 2 - (block.value > 9 ? 10 * core_scale : 6 * core_scale)), block.y + block.size / 2 + 7 * core_scale, 22 * core_scale, block.color[1], 'Montserrat-Regular', block.value);
					}
				}

				// for(const line of this.lines) {
				// 	drawLine(line.xStart, line.yStart, line.xEnd, line.yEnd, line.lineWidth, line.color)
				// }

				// Falling points
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = this.points[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var point = _step2.value;


					// drawCircle(
					// 	point.x,
					// 	point.y,
					// 	this.CIRCLE_RADIUS * scale,
					// 	`rgb(255, 204, 0)`
					// )
					play_drawImage(point.x, point.y, 'static/assets/count.png', 250, 250);

					play_drawText(point.x + 50 * core_scale, point.y + 75 * core_scale, 40 * core_scale, 'black', 'Montserrat-Regular', point.value);
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			if (this.end === true) {

				play_drawImage(0, 0, 'static/assets/bg.png', core_canvas.width, core_canvas.height);

				if (this.finishFlag) {
					//绘制首页头顶
					play_drawImage(0, 0, 'static/assets/finishTitle.png', core_canvas.width, core_canvas.width / 4.518);
				} else {
					clearInterval(this.gameOver);
					//绘制首页头顶
					play_drawImage(0, 0, 'static/assets/finishTitle-lose.png', core_canvas.width, core_canvas.width / 4.518);
				}
				external__jquery__default()(".beeBox").fadeIn(500);
			} else {
				// if(this.dieBeeFlag2){
				// Current player available points
				play_drawText(this.availableCircle.x + 88, this.availableCircle.y + 30, 30 * core_scale, '#ffd29a', 'Montserrat-Regular', this.availableCircle.value);
				//标记蜜蜂头
				var bee = 0;

				// Current player available points line
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = this.circles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var circle = _step3.value;

						// drawCircle(
						// 	circle.x,
						// 	circle.y,
						// 	this.CIRCLE_RADIUS * scale,
						// 	`rgb(255, 204, 0)`
						// )
						if (bee == 0) {
							play_drawImage(circle.x - 50, circle.y - 50, 'static/assets/bee.png', 300, 300);
							play_drawImage(circle.x + 86, circle.y + 200, 'static/assets/ball.png', 30, 30);
							bee++;
						} else {
							play_drawImage(circle.x + 86, circle.y + 200, 'static/assets/ball.png', 30, 30);
						}
						//创建分数的背景
						play_drawImage(0, 0, '/static/assets/ipad-title.png', core_canvas.width, core_canvas.width / 10.172);

						play_drawText(halfCanvasWidth - 75 * core_scale, 55 * core_scale, 45 * core_scale, 'white', 'Montserrat-Regular', '剩余: ' + this.timeSecond);
						// console.log(circle.y)
					}

					//创建分数的背景
					// drawImage(
					// 	0,
					// 	0,
					// 	'static/assets/score.png',
					// 	canvas.width,
					// 	canvas.width / 4.286
					// )

					// drawText(
					// 	halfCanvasWidth - (45 * scale),
					// 	23 * scale,
					// 	20 * scale,
					// 	'white',
					// 	'Montserrat-Regular',
					// 	'分数: '+this.score * 10
					// )
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}
			// }

		}
	}, {
		key: 'getBlockColor',
		value: function getBlockColor(blockValue) {

			var currentPoints = this.availableCircle.value;

			// if(blockValue === 1) {
			// 	return '#69F0AE'
			// } else if(blockValue <= 4) {
			// 	return '#00E676'
			// } else if(blockValue <= 8) {
			// 	return '#00C853'
			// } else if (blockValue <= 12) {
			// 	return '#FFD54F'
			// } else if(blockValue <= 16) {
			// 	return '#FFCA28'
			// } else if(blockValue <= 20) {
			// 	return '#FF8F00'
			// } else if(blockValue >= 21) {
			// 	return '#D84315'
			// }

			if (blockValue > 9) {
				var arr = ['static/assets/fk2.png', 'white'];
				return arr;
			} else {
				var _arr = ['static/assets/fk1.png', 'black'];
				return _arr;
			}
		}
	}, {
		key: 'addLines',
		value: function addLines() {

			if (this.blocked || this.end || this.pause) {
				return false;
			}

			var blockSize = core_canvas.width / 5;
			var numberOfLine = Math.random() * 3 + 1;
			var lineHeight = Math.floor(Math.random() * (blockSize * 2)) + blockSize;
			var key = Math.floor(Math.random() * (this.blocks.length - 1 - (this.blocks.length - 5) + 1) + (this.blocks.length - 5));
			var randomBlock = this.blocks[key];

			for (var i = 0; i < numberOfLine; i++) {

				var x = randomBlock.x + blockSize - this.LINE_WIDTH / 2;

				this.lines.push({
					xStart: x,
					yStart: randomBlock.y + blockSize - 4 * core_scale,
					xEnd: x,
					yEnd: randomBlock.y + blockSize + lineHeight,
					lineWidth: this.LINE_WIDTH * core_scale,
					color: 'white'
				});
			}
		}
	}, {
		key: 'updateLines',
		value: function updateLines() {
			if (this.end || this.pause || this.blocked) {
				return false;
			}

			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = this.lines[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var line = _step4.value;

					line.yStart += this.SPEED * core_scale;
					line.yEnd += this.SPEED * core_scale;
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}
		}
	}, {
		key: 'addBlocks',
		value: function addBlocks() {

			if (this.blocked || this.end || this.pause) {
				return false;
			}

			var margin = this.BLOCK_MARGIN * core_scale;
			var blockSize = core_canvas.width / 8;

			for (var i = 0; i < 8; i++) {

				var x = void 0;

				if (i === 0) {
					x = margin;
				} else {
					x = margin + blockSize * i;
				}

				var value = Math.floor(Math.random() * (this.availableCircle.value * 2)) + 1;

				this.blocks.push({
					x: x,
					y: -(blockSize * 4),
					size: blockSize - margin * 2,
					value: value,
					color: this.getBlockColor(value)
				});
			}

			this.addLines();
		}
	}, {
		key: 'updateBlocks',
		value: function updateBlocks() {
			var _this2 = this;

			if (this.end || this.pause) {
				return false;
			}

			// First check for collision
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = this.blocks[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var block = _step5.value;


					var blockBottomPosition = block.y + block.size;
					var blockMargin = this.BLOCK_MARGIN * core_scale;
					var playerX = this.circles[0].x;
					var playerY = this.circles[0].y;

					if (blockBottomPosition >= playerY - (this.CIRCLE_DIAMETER + 1) && blockBottomPosition <= playerY + this.CIRCLE_DIAMETER) {
						// console.log(
						// 	playerX > (block.x - blockMargin)
						// 	&& playerX < ((block.x - blockMargin) + (block.size + blockMargin))
						// )
						// console.log('a='+playerX);
						// console.log('b='+(block.x - blockMargin));
						// console.log('c='+((block.x - blockMargin) + (block.size + blockMargin)));
						// Collision X
						if (playerX >= block.x - blockMargin && playerX <= block.x - blockMargin + (block.size + blockMargin)) {

							if (block.value > 0) {
								this.blocked = true;
								this.hitBlock = block;
							} else {
								this.blocked = false;
								this.hitBlock = null;
							}
						}
					}
				}

				// Update blocks position and handle blocks to remove
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}

			if (!this.blocked) {

				this.blocks = this.blocks.reduce(function (previous, block, key) {

					// Remove the block from the array when outside of canvas
					if (block.y >= core_canvas.height) {
						return previous;
					}

					// Remove the block from the array if value is 0
					if (block.value === 0) {
						return previous;
					}

					var y = block.y,
					    props = _objectWithoutProperties(block, ['y']);

					return previous.concat([_extends({
						y: y += _this2.SPEED * core_scale
					}, props)]);
				}, []);
			}
		}
	}, {
		key: 'updateCircles',
		value: function updateCircles() {
			var _this3 = this;

			// Value was not set yet
			if (this.lastCoordinateX === 0 || this.circles.length === 0) {
				return false;
			}

			if (this.lastCoordinateX >= 0 + this.CIRCLE_RADIUS && this.lastCoordinateX <= core_canvas.width - this.CIRCLE_RADIUS) {

				var playerX = this.circles[0].x + this.CIRCLE_RADIUS;
				var playerY = this.circles[0].y;

				var lineCollision = this.lines.some(function (line) {
					return playerY >= line.yStart && playerY <= line.yEnd && playerX >= line.xStart && playerX <= line.xStart + _this3.LINE_WIDTH * core_scale;
				});

				if (!lineCollision) {
					this.circles[0].x = this.lastCoordinateX;
					this.availableCircle.x = this.lastCoordinateX - 10;
				}
			}

			for (var i = 1; i < this.circles.length; i++) {

				var circle = this.circles[i],
				    prev = this.circles[i - 1],
				    distance = Math.sqrt((circle.x - prev.x) * (circle.x - prev.x)),
				    speed = Math.abs(circle.x - prev.x) / (2 * core_scale);
				circle.y = prev.y + this.CIRCLE_DIAMETER * core_scale;

				if (distance < speed) {
					circle.x = prev.x;
				} else if (circle.x > prev.x && circle.x - speed >= 0) {
					circle.x -= speed;
				} else if (circle.x < prev.x && circle.x - speed <= core_canvas.width) {
					circle.x += speed;
				}
			}
		}

		/**
   * Called every 500ms when player was colliding with a block
   * 当玩家与一个块碰撞时，每500毫秒调用一个
   */

	}, {
		key: 'handleBlockCollision',
		value: function handleBlockCollision() {
			if (this.hitBlock !== null && this.hitBlock.value > 0 && this.availableCircle.value > 0) {
				this.hitBlock.value -= 1;
				this.hitBlock.color = this.getBlockColor(this.hitBlock.value);
				this.availableCircle.value -= 1;

				if (this.availableCircle.value === 0 && !this.end) {
					this.end = true;
					window.cancelAnimationFrame(this.play_animation);

					//绘制蜜蜂死亡
					// this.dieBeeFlag2 = false;
					// var n = 0;//帧数
					// function drawAni(){
					// 	drawImage(
					// 		0,
					// 		0,
					// 		'static/assets/bg.png',
					// 		canvas.width,
					// 		canvas.height
					// 	)
					// 	n++;
					// }

					// var ani = setInterval(function(){
					// 	if(n>23){
					// 		this.dieBeeFlag = true;
					// 		clearInterval(ani);
					// 	}else{
					// 		drawAni();
					// 		console.log(n);
					// 		console.log(beeDiePageAssetsPath[n]);
					// 	}

					// }.bind(this),1000/20)


					//结束
					core_canvas.removeEventListener("touchmove", this.onTouch);
					//scanvas.addEventListener("touchstart", this.onTouch);

					if (this.bestScore === 0 || this.score * 10 > this.bestScore) {
						this.newBestScore = true;
						this.bestScore = this.score;
					}

					window.requestAnimationFrame(this.restartLabelAnimation);
				}

				this.circles.pop();
			}
		}

		/**
   * Add points on hidden the top of the canvas
   */

	}, {
		key: 'addPoints',
		value: function addPoints() {

			if (this.blocked || this.end || this.pause) {
				return false;
			}

			var numberOfPoints = Math.floor(Math.random() * 3) + 1;

			for (var i = 0; i < numberOfPoints; i++) {
				this.points.push({
					x: this.cols[i],
					y: -200,
					value: Math.floor(Math.random() * 5) + 1
				});
			}
		}

		/**
   * Update points y position and remove points with 
   * y position upper than canvas height
   */

	}, {
		key: 'updatePoints',
		value: function updatePoints() {
			var _this4 = this;

			if (this.blocked || this.end || this.pause) {
				return false;
			}

			this.points = this.points.reduce(function (previous, point) {

				// Check if the points y position are upper than canvas height
				if (point.y < halfCanvasHeight * 2) {

					// Collision with points点碰撞的事件
					if (point.y > _this4.availableCircle.y - 40 && point.y < _this4.availableCircle.y + 40 && point.x > _this4.availableCircle.x - 120 && point.x < _this4.availableCircle.x + 80) {

						// Adding points as circles on the screen
						for (var i = 0; i < point.value; i++) {
							var lastCircle = _this4.circles[_this4.circles.length - 1];

							_this4.circles.push({
								x: lastCircle.x,
								y: lastCircle.y + 20 * core_scale
							});
						}

						_this4.availableCircle.value += point.value;
						_this4.score += point.value;

						return previous;
					} else {

						if (!_this4.blocked) {
							var y = point.y,
							    props = _objectWithoutProperties(point, ['y']);

							return previous.concat([_extends({
								y: y + _this4.SPEED * core_scale
							}, props)]);
						}
						return previous;
					}
				}
				return previous;
			}, []);
		}

		/**
   * When user leave the tab pause the game
   * 当用户离开标签暂停游戏
   */


		/**
   * When user swipe on the screen during the game
   * 当用户在游戏过程中在屏幕上滑动时
   */

	}, {
		key: 'applyListeners',
		value: function applyListeners() {
			this.listenersApplied = true;
			core_canvas.addEventListener("touchmove", this.onTouch, false);
			document.addEventListener("visibilitychange", this.onTabFocusOff);
		}

		/**
   * Animation of circles before be able to play
   * 动画的圆形才能播放
   */


		/**
   * Animation during the game session
   * 游戏过程中的动画
   * @param {number} timestamp 
   */

	}, {
		key: 'run',


		/**
   * Run the game
   */
		value: function () {
			var _ref3 = play__asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee2(showStartScreen) {
				var defaultX, defaultY, i, bestScore, oneColWith, _i;

				return regenerator__default.a.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:

								this.showStartScreen = showStartScreen;

								// Reset values
								this.startAnimationEnded = false;
								this.listenersApplied = false;
								this.lastAddedTime = 0;
								this.lastBlockCollisionTime = 0;
								this.restartLabelTime = 0;
								this.restart = false;
								this.availableCircle.x = halfCanvasWidth - 3 * core_scale;
								this.availableCircle.y = halfCanvasHeight + core_canvas.height / 6 - 20;
								this.availableCircle.value = 4;
								this.restartOpacity = 0;
								this.reverseOpacity = false;
								this.blocks = [];
								this.points = [];
								this.circles = [];
								this.cols = [];
								this.pause = false;
								this.blocked = false;
								this.hitBlock = null;
								this.end = false;
								this.finish = 0;
								this.finishFlag = false;
								this.lastCoordinateX = 0;
								//分数重置
								this.score = 0;
								this.dieBeeFlag = false;
								this.dieBeeFlag2 = true;
								this.timeSecond = 15;
								this.gameOver = setTimeout(function () {
									this.finishFlag = true;
									//this.end = true;
									// console.log(this.end)
								}.bind(this), 15000);

								clearInterval(this.timeSecondInt);
								this.timeSecondInt = setInterval(function () {
									if (this.timeSecond == 0) {
										clearInterval(this.timeSecondInt);
									} else {
										this.timeSecond = parseInt(this.timeSecond) - 1;
									}
								}.bind(this), 1000);

								defaultX = halfCanvasWidth;
								defaultY = halfCanvasHeight + core_canvas.height / 6;


								for (i = 0; i < this.availableCircle.value; i++) {
									this.circles.push({ x: defaultX, y: defaultY });
								}

								if (localStorage.key('bestScore') !== null) {
									bestScore = localStorage.getItem('bestScore');

									if (bestScore) {
										this.bestScore = parseInt(bestScore);
									} else {
										this.bestScore = 0;
									}
								} else {
									this.bestScore = 0;
								}

								// Initialization of columns for points position
								oneColWith = halfCanvasWidth / 2;

								for (_i = 1; _i <= 5; _i++) {
									this.cols.push(oneColWith * _i);
								}

								// Draw the circle of the start screen
								this.draw();

								this.before_play_animation = window.requestAnimationFrame(this.beforePlayAnimation);
								this.play_animation = window.requestAnimationFrame(this.playAnimation);

							case 39:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function run(_x2) {
				return _ref3.apply(this, arguments);
			}

			return run;
		}()
	}]);

	return Play;
}();

/* harmony default export */ var play = (play_Play);
// CONCATENATED MODULE: ./src/game.js




var game__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

/**
 * Suspends the execution until the time-out interval elapses
 * @param {integer} ms Milliseconds to sleep
 */
var game_sleep = function () {
    var _ref5 = game__asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee6(ms) {
        var _this2 = this;

        return regenerator__default.a.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        return _context6.abrupt('return', new Promise(function () {
                            var _ref6 = game__asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee5(resolve) {
                                return regenerator__default.a.wrap(function _callee5$(_context5) {
                                    while (1) {
                                        switch (_context5.prev = _context5.next) {
                                            case 0:
                                                _context5.next = 2;
                                                return setTimeout(resolve, ms);

                                            case 2:
                                            case 'end':
                                                return _context5.stop();
                                        }
                                    }
                                }, _callee5, _this2);
                            }));

                            return function (_x2) {
                                return _ref6.apply(this, arguments);
                            };
                        }()));

                    case 1:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));

    return function sleep(_x) {
        return _ref5.apply(this, arguments);
    };
}();

function game__asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function game__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var game_preload = core_Core.preload,
    game_loadAssets = core_Core.loadAssets,
    game_preloadHomageAssets = core_Core.preloadHomageAssets,
    game_preloadTutorialAssets = core_Core.preloadTutorialAssets,
    game_preloadBeeDieAssets = core_Core.preloadBeeDieAssets;


var game_bestScore = 0;
var score = 0;
var availableCircle = 4;

var game_boot = null;

var game_Game = function (_Core) {
    _inherits(Game, _Core);

    function Game(canvas) {
        game__classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, canvas));

        var scale = window.devicePixelRatio;

        // Set the canvas full screen
        canvas.width = window.innerWidth * scale;
        canvas.height = window.innerHeight * scale;

        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = document.body.clientHeight + 'px';

        //this.boot = new Boot()
        game_boot = new boot();
        _this.start = new start();
        _this.play = new play();

        _this.init();
        return _this;
    }

    game__createClass(Game, [{
        key: 'init',
        value: function () {
            var _ref = game__asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee() {
                return regenerator__default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return game_preload();

                            case 2:
                                _context.next = 4;
                                return this.loadHomePageAssets();

                            case 4:
                                _context.next = 6;
                                return game_sleep(game_boot.VISIBILITY_DURATION);

                            case 6:
                                _context.next = 8;
                                return game_sleep(game_boot.HIDE_ANIMATION_DURATION);

                            case 8:
                                // Show the start menu
                                this.start.show(this.play.run.bind(this.play));

                                setTimeout(this.loadHomePageAssetsFinished, 3000);
                                setTimeout(this.loadBeeDieAssetsFinished, 6000);

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function init() {
                return _ref.apply(this, arguments);
            }

            return init;
        }()
    }, {
        key: 'loadHomePageAssets',
        value: function () {
            var _ref2 = game__asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee2() {
                return regenerator__default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                game_loadAssets();
                                game_preloadHomageAssets(function (progress) {
                                    //console.log("=============preload" + progress);
                                    game_boot.drawLoadingProcess(parseInt(progress * 100));

                                    if (progress > 0.98) {
                                        //preloadTutorialAssets(function(progress){},function(){});
                                    }
                                }, function () {
                                    //console.log('============all content loaded!');

                                    game_boot.display();
                                });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function loadHomePageAssets() {
                return _ref2.apply(this, arguments);
            }

            return loadHomePageAssets;
        }()
    }, {
        key: 'loadHomePageAssetsFinished',
        value: function () {
            var _ref3 = game__asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee3() {
                return regenerator__default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                game_preloadTutorialAssets(function (progress) {}, function () {});

                            case 1:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function loadHomePageAssetsFinished() {
                return _ref3.apply(this, arguments);
            }

            return loadHomePageAssetsFinished;
        }()
    }, {
        key: 'loadBeeDieAssetsFinished',
        value: function () {
            var _ref4 = game__asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee4() {
                return regenerator__default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                game_preloadBeeDieAssets(function (progress) {}, function () {});

                            case 1:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function loadBeeDieAssetsFinished() {
                return _ref4.apply(this, arguments);
            }

            return loadBeeDieAssetsFinished;
        }()
    }]);

    return Game;
}(core_Core);

/* harmony default export */ var src_game = (game_Game);
// CONCATENATED MODULE: ./pages/index.js
var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var pages__class = function (_Component) {
    pages__inherits(_class, _Component);

    function _class() {
        pages__classCallCheck(this, _class);

        return pages__possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    pages__createClass(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Client-side
            if (typeof window !== 'undefined') {

                window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (requestID) {
                    window.setTimeout(requestID, 1000 / 60);
                };

                window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function (requestID) {
                    clearTimeout(requestID);
                };

                var game = new src_game(this.canvas);
            }

            //点击规则
            external__jquery__default()(".rule").click(function () {
                external__jquery__default()(".ruleShow").fadeIn(500);
            });

            //点击遮罩消失
            external__jquery__default()(".ruleShow").click(function () {
                external__jquery__default()(this).fadeOut(500);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return external__react__default.a.createElement(
                'div',
                {
                    className: 'jsx-3141407584' + ' ' + 'gameContainer'
                },
                external__react__default.a.createElement(
                    head__default.a,
                    null,
                    external__react__default.a.createElement(
                        'title',
                        {
                            className: 'jsx-3141407584'
                        },
                        '\u5E1D\u7687\u8702\u5927\u4F5C\u6218'
                    ),
                    external__react__default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-3141407584'
                    }),
                    external__react__default.a.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', className: 'jsx-3141407584'
                    }),
                    external__react__default.a.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes', className: 'jsx-3141407584'
                    }),
                    external__react__default.a.createElement('link', { rel: 'manifest', href: '/manifest.json', className: 'jsx-3141407584'
                    }),
                    external__react__default.a.createElement('link', { rel: 'preload', href: '/static/fonts/Montserrat-Light.ttf', as: 'font', className: 'jsx-3141407584'
                    }),
                    external__react__default.a.createElement('link', { rel: 'preload', href: '/static/fonts/Montserrat-Thin.ttf', as: 'font', className: 'jsx-3141407584'
                    })
                ),
                external__react__default.a.createElement('canvas', {
                    ref: function ref(c) {
                        return _this2.canvas = c;
                    },
                    height: '450',
                    width: '600',
                    className: 'jsx-3141407584'
                }),
                external__react__default.a.createElement('img', { src: '/static/assets/share.png', alt: '', className: 'jsx-3141407584' + ' ' + 'share'
                }),
                external__react__default.a.createElement('img', { src: '/static/assets/rule.png', alt: '', className: 'jsx-3141407584' + ' ' + 'ruleShow'
                }),
                external__react__default.a.createElement('div', {
                    className: 'jsx-3141407584' + ' ' + 'mask'
                }),
                external__react__default.a.createElement(
                    'div',
                    {
                        className: 'jsx-3141407584' + ' ' + 'beeBox'
                    },
                    external__react__default.a.createElement('div', {
                        className: 'jsx-3141407584' + ' ' + 'play'
                    }),
                    external__react__default.a.createElement('div', {
                        className: 'jsx-3141407584' + ' ' + 'rule'
                    })
                ),
                external__react__default.a.createElement(style__default.a, {
                    styleId: '3141407584',
                    css: ['@font-face{font-family:"Montserrat-Regular";src:url("/static/fonts/Montserrat-Regular.ttf") format("truetype");}', '@font-face{font-family:"Montserrat-Light";src:url("/static/fonts/Montserrat-Light.ttf") format("truetype");}', '@font-face{font-family:"Montserrat-Thin";src:url("/static/fonts/Montserrat-Thin.ttf") format("truetype");}', 'html,body{height:100vh;margin:0;overflow:hidden;background-color:black;}', 'p{margin:0;padding:0;}', '.off{position:absolute;right:-10%;top:0;width:13%;margin-top:-18%;}', '.share,.ruleShow{width:100%;height:auto;position:absolute;left:0;top:0;z-index:1000;display:none;}', '.beeBox{position:absolute;width:66%;height:81.75vw;left:17%;top:23%;background-image:url(/static/assets/p1-t2.png);background-repeat:no-repeat;background-size:100% auto;display:none;}', '.palyAgainBox{width:80%;height:100vw;position:absolute;left:10%;top:32%;display:none;}', '.frendScore{width:100%;height:17vw;position:relative;overflow-y:auto;color:white;text-align:center;}', '.playAgainBg{width:100%;height:44.42vw;position:absolute;background-image:url(/static/assets/playAgain.png);background-repeat:no-repeat;background-size:100% auto;}', '.playAgainBg div{margin-left:15%;width:70%;}', '.beeBox div{margin-left:20%;width:60%;}', '.play{margin-top:81%;height:14%;}', '.playAgain{margin-top:12%;height:28%;}', '.rule{margin-top:3%;height:10%;}', '.mask{width:100%;height:100%;position:fixed;left:0;top:0;z-index:100;background-image:url(/static/assets/bg.png);background-repeat:no-repeat;background-size:100% 100%;display:none;}', '.rankList{width:90%;height:80%;overflow:auto;}', '.rankList p{margin-top:5%;color:#edb97b;width:100%;text-align:center;font-size:16px;padding:5px 0;}', '.listName{display:inline-block;width:50%;text-align:right;}', '.listScore{display:inline-block;width:50%;text-align:left;}', '.myScore{color:#edb97b;width:100%;text-align:center;font-size:16px;}', '.rankBox{width:80%;height:80%;position:absolute;z-index:10001;left:10%;top:10%;display:none;}', '.rankTitle{color:#fbe0b2;width:100%;text-align:center;}', '.rankExplain{color:#edb97b;width:100%;text-align:center;font-size:13px;}', '.gameContainer{height:100vh;}']
                })
            );
        }
    }]);

    return _class;
}(external__react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages__class);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("preloader");

/***/ })
/******/ ]);