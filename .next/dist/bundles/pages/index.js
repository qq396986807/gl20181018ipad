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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_game__ = __webpack_require__("./src/game.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var _jsxFileName = '/Users/heiniu/Documents/TG/h5gamesIpad/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
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

                var game = new __WEBPACK_IMPORTED_MODULE_3__src_game__["a" /* default */](this.canvas);
            }

            //点击规则
            __WEBPACK_IMPORTED_MODULE_4_jquery___default()(".rule").click(function () {
                __WEBPACK_IMPORTED_MODULE_4_jquery___default()(".ruleShow").fadeIn(500);
            });

            //点击遮罩消失
            __WEBPACK_IMPORTED_MODULE_4_jquery___default()(".ruleShow").click(function () {
                __WEBPACK_IMPORTED_MODULE_4_jquery___default()(this).fadeOut(500);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-3326446635' + ' ' + 'gameContainer',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'title',
                        {
                            className: 'jsx-3326446635',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                            }
                        },
                        '\u7687\u5E1D\u8702\u5927\u4F5C\u6218'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-3326446635',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', className: 'jsx-3326446635',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes', className: 'jsx-3326446635',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'manifest', href: '/manifest.json', className: 'jsx-3326446635',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'preload', href: '/static/fonts/Montserrat-Light.ttf', as: 'font', className: 'jsx-3326446635',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'preload', href: '/static/fonts/Montserrat-Thin.ttf', as: 'font', className: 'jsx-3326446635',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('canvas', {
                    ref: function ref(c) {
                        return _this2.canvas = c;
                    },
                    height: '450',
                    width: '600',
                    className: 'jsx-3326446635',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/assets/share.png', alt: '', className: 'jsx-3326446635' + ' ' + 'share',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/assets/rule.png', alt: '', className: 'jsx-3326446635' + ' ' + 'ruleShow',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
                    className: 'jsx-3326446635' + ' ' + 'mask',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-3326446635' + ' ' + 'beeBox',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
                        className: 'jsx-3326446635' + ' ' + 'play',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
                        className: 'jsx-3326446635' + ' ' + 'rule',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '3326446635',
                    css: '@font-face{font-family:"Montserrat-Regular";src:url("/static/fonts/Montserrat-Regular.ttf") format("truetype");}@font-face{font-family:"Montserrat-Light";src:url("/static/fonts/Montserrat-Light.ttf") format("truetype");}@font-face{font-family:"Montserrat-Thin";src:url("/static/fonts/Montserrat-Thin.ttf") format("truetype");}html,body{height:100vh;margin:0;overflow:hidden;background-color:black;}p{margin:0;padding:0;}.off{position:absolute;right:-10%;top:0;width:13%;margin-top:-18%;}.share,.ruleShow{width:100%;height:auto;position:absolute;left:0;top:0;z-index:1000;display:none;}.beeBox{position:absolute;width:66%;height:81.75vw;left:17%;top:23%;background-image:url(/static/assets/p1-t2.png);background-repeat:no-repeat;background-size:100% auto;display:none;}.palyAgainBox{width:80%;height:100vw;position:absolute;left:10%;top:32%;display:none;}.frendScore{width:100%;height:17vw;position:relative;overflow-y:auto;color:white;text-align:center;}.playAgainBg{width:100%;height:44.42vw;position:absolute;background-image:url(/static/assets/playAgain.png);background-repeat:no-repeat;background-size:100% auto;}.playAgainBg div{margin-left:15%;width:70%;}.beeBox div{margin-left:20%;width:60%;}.play{margin-top:81%;height:14%;}.playAgain{margin-top:12%;height:28%;}.rule{margin-top:3%;height:10%;}.mask{width:100%;height:100%;position:fixed;left:0;top:0;z-index:100;background-image:url(/static/assets/bg.png);background-repeat:no-repeat;background-size:100% 100%;display:none;}.rankList{width:90%;height:80%;overflow:auto;}.rankList p{margin-top:5%;color:#edb97b;width:100%;text-align:center;font-size:16px;padding:5px 0;}.listName{display:inline-block;width:50%;text-align:right;}.listScore{display:inline-block;width:50%;text-align:left;}.myScore{color:#edb97b;width:100%;text-align:center;font-size:16px;}.rankBox{width:80%;height:80%;position:absolute;z-index:10001;left:10%;top:10%;display:none;}.rankTitle{color:#fbe0b2;width:100%;text-align:center;}.rankExplain{color:#edb97b;width:100%;text-align:center;font-size:13px;}.gameContainer{height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFcUIsQUFHMEMsQUFNSixBQUlTLEFBT1AsQUFTTyxBQVdULEFBU0UsQUFRQSxBQVFLLEFBS0EsQUFLRCxBQUlBLEFBSUQsQUFJSCxBQVlGLEFBS0ssQUFRTyxBQUtBLEFBS1IsQUFNSCxBQVNJLEFBS0QsQUFNQSxBQUlvQixBQUlGLEFBSUQsU0F0SnBCLENBK0JFLEFBMkRELEFBNkJBLENBNUdDLEFBNkJBLEFBUUcsQUE4QkgsRUFwRkgsQUFpSmIsQ0FqRWUsQUFxQkcsQUFrQkgsQUFlQSxBQUtBLENBbEVoQixBQUdnQixDQWRELEFBS0EsRUF6REMsQUFnQkQsQ0FuQmQsRUEwRmtCLEFBWUosQUFLQSxBQVlRLENBN0hGLENBaUJFLEFBb0JBLEFBU0EsQUFzQ0gsRUFKbkIsQUF1Q3NCLEFBZUEsQUFLQSxDQXJGQSxBQVN0QixBQUtBLEFBSUEsQUFJQSxFQWxEbUIsQUEyRUosQ0EzRkwsQ0FtSlgsQ0FoRHNCLEFBS0QsQUF1Q3JCLEVBSkEsRUExSWUsQUFzRmQsR0FoRzJCLEFBb0ZoQixDQWlCVyxBQXdCSixFQTVHUCxBQW9CRSxBQVNPLEVBcEJQLEFBNkZNLEFBZW5CLEFBS21CLENBckZvQyxDQTNDbkMsQUEwRVYsRUE2QlYsQ0FoR1UsQUEyRlYsRUF2RVksQ0FnREksQ0EzREosQ0FtR0MsQ0EzR0ksR0E0QkQsQUF1REcsQ0E5REgsQUFnRmhCLEFBb0JBLEVBaEhtRCxDQTNCbkQsQUFXQSxDQW1IVyxDQXhDcUMsSUFuRWhDLEVBNEJNLENBZ0ZOLENBdkZoQixDQThEa0IsUUFsRmxCLEdBNEdBLEdBekJBLENBdkRBLE9BMkdBLENBckdnQyxDQWlHaEMsSUFKQSxPQXZIZ0MsQUEyREEsZ0JBaENGLFlBMUJBLEFBMkRBLGNBaEM5QixZQTFCZ0IsQUEyREMsYUExRGpCLEFBMkRBIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oZWluaXUvRG9jdW1lbnRzL1RHL2g1Z2FtZXNJcGFkIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBHYW1lIGZyb20gJy4uL3NyYy9nYW1lJ1xuaW1wb3J0ICQgZnJvbSAgJ2pxdWVyeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIENsaWVudC1zaWRlXG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSBcbiAgICAgICAgICAgICAgICB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIFxuICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXG4gICAgICAgICAgICAgICAgfHwgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXG4gICAgICAgICAgICAgICAgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIFxuICAgICAgICAgICAgICAgIHx8IGZ1bmN0aW9uKHJlcXVlc3RJRCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChyZXF1ZXN0SUQsIDEwMDAgLyA2MCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgfHwgZnVuY3Rpb24ocmVxdWVzdElEKXtjbGVhclRpbWVvdXQocmVxdWVzdElEKX07XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUodGhpcy5jYW52YXMpXG4gICAgICAgIH1cblxuXG4gICAgICAgIFxuXG4gICAgICAgIFxuXG4gICAgICAgIC8v54K55Ye76KeE5YiZXG4gICAgICAgICQoXCIucnVsZVwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJChcIi5ydWxlU2hvd1wiKS5mYWRlSW4oNTAwKTtcbiAgICAgICAgfSlcblxuICAgIFxuXG4gICAgICAgIFxuXG4gICAgICAgIC8v54K55Ye76YGu572p5raI5aSxXG4gICAgICAgICQoXCIucnVsZVNob3dcIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykuZmFkZU91dCg1MDApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+55qH5bid6JyC5aSn5L2c5oiYPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWxvYWRcIiBocmVmPVwiL3N0YXRpYy9mb250cy9Nb250c2VycmF0LUxpZ2h0LnR0ZlwiIGFzPVwiZm9udFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWxvYWRcIiBocmVmPVwiL3N0YXRpYy9mb250cy9Nb250c2VycmF0LVRoaW4udHRmXCIgYXM9XCJmb250XCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICAgICAgICByZWY9e2MgPT4gdGhpcy5jYW52YXMgPSBjfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NTBcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nc2hhcmUnIHNyYz0nL3N0YXRpYy9hc3NldHMvc2hhcmUucG5nJyBhbHQ9JycgLz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncnVsZVNob3cnIHNyYz0nL3N0YXRpYy9hc3NldHMvcnVsZS5wbmcnIGFsdD0nJyAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXNrJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmVlQm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXknPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncnVsZSc+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5vZmZ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTMlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xOCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hhcmUsLnJ1bGVTaG93e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYmVlQm94e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjYlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODEuNzV2dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxNyU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyMyU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvYXNzZXRzL3AxLXQyLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucGFseUFnYWluQm94e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDMyJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZnJlbmRTY29yZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbGF5QWdhaW5CZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0LjQydnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2Fzc2V0cy9wbGF5QWdhaW4ucG5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsYXlBZ2FpbkJnIGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYmVlQm94IGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbGF5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDgxJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTQlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucGxheUFnYWlue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ydWxle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hc2t7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvYXNzZXRzL2JnLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmtMaXN0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYW5rTGlzdCBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZWRiOTdiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubGlzdE5hbWV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubGlzdFNjb3Jle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubXlTY29yZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZWRiOTdiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucmFua0JveHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucmFua1RpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJlMGIyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYW5rRXhwbGFpbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZWRiOTdiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2FtZUNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1SZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTGlnaHRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtVGhpblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9Nb250c2VycmF0LVRoaW4udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=pages/index.js */'
                })
            );
        }
    }]);

    return _class;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),

/***/ "./src/boot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./src/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var drawRect = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* Core */].drawRect,
    drawImage = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* Core */].drawImage,
    drawText = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* Core */].drawText,
    drawCircle = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* Core */].drawCircle,
    loadImg = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* Core */].loadImg,
    clearRect = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* Core */].clearRect;



/**
 * Credits page class
 */

var Boot = function () {
    function Boot() {
        _classCallCheck(this, Boot);

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
            y: __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].height / 2
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


    _createClass(Boot, [{
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
                drawImage(0, 0, __WEBPACK_IMPORTED_MODULE_0__core__["e" /* homePageAssetsPath */][n], __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].height);
                n++;
            }

            var ani = setInterval(function () {
                if (n > 74) {
                    clearInterval(ani);
                    drawImage(0, 0, 'static/assets/bg.png', __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].height);

                    //绘制首页头顶
                    drawImage(0, 0, 'static/assets/p1-t1.png', __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].width / 2.072);
                    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(".beeBox").fadeIn(1000);
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

            drawText(__WEBPACK_IMPORTED_MODULE_0__core__["d" /* halfCanvasWidth */] - 50 * __WEBPACK_IMPORTED_MODULE_0__core__["f" /* scale */], __WEBPACK_IMPORTED_MODULE_0__core__["c" /* halfCanvasHeight */] - 50 * __WEBPACK_IMPORTED_MODULE_0__core__["f" /* scale */], 16 * __WEBPACK_IMPORTED_MODULE_0__core__["f" /* scale */], 'white', 'Montserrat-Thin', "Loading " + percentage + "%");
        }
    }]);

    return Boot;
}();

/* harmony default export */ __webpack_exports__["a"] = (Boot);

/***/ }),

/***/ "./src/core.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export context */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return halfCanvasHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return halfCanvasWidth; });
/* unused harmony export assets */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return homePageAssetsPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return tutorialPageAssetsPath; });
/* unused harmony export beeDiePageAssetsPath */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Core; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preloader__ = __webpack_require__("preloader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preloader__);




var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var context = null;
var canvas = null;
var halfCanvasHeight = null;
var halfCanvasWidth = null;
var assets = [];
var scale = 1;

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

var Core = function () {
    function Core(canvasElm) {
        _classCallCheck(this, Core);

        scale = window.devicePixelRatio;
        canvas = canvasElm;
        context = canvas.getContext('2d');
        context.scale(scale, scale);

        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";

        halfCanvasHeight = window.innerHeight * scale / 2;
        halfCanvasWidth = window.innerWidth * scale / 2;

        loader = __WEBPACK_IMPORTED_MODULE_1_preloader___default()({
            xhrImages: false
        });

        loader2 = __WEBPACK_IMPORTED_MODULE_1_preloader___default()({
            xhrImages: false
        });

        loader3 = __WEBPACK_IMPORTED_MODULE_1_preloader___default()({
            xhrImages: false
        });
    }

    /**
     * Preload assets
     */


    _createClass(Core, null, [{
        key: 'preload',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var loadingAssets;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
                var i, img;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:

                                // home page assets
                                for (i = 0; i < 75; i++) {
                                    img = assetsRoot + '/page/' + i + '.png';
                                    // var img = 'https://gl20181019.oss-cn-hangzhou.aliyuncs.com/assets/page/'+i+'.png';

                                    homePageAssetsPath.push(img);
                                }

                                // tutorial
                                for (i = 1; i < 210; i++) {
                                    img = assetsRoot + '/course/' + i + '.png';
                                    // var img = 'https://gl20181019.oss-cn-hangzhou.aliyuncs.com/assets/course/'+i+'.png';

                                    tutorialPageAssetsPath.push(img);
                                }

                                // for(var i=0;i<25;i++){
                                //     // var img = assetsRoot + '/animation/beedie/beeDie_iphone_0000'+i+'.png';
                                //     // if(i > 9)
                                //     //     img = assetsRoot + '/animation/beedie/beeDie_iphone_000'+i+'.png';

                                //     var img = 'https://gl20181019.oss-cn-hangzhou.aliyuncs.com/assets/animation/beedie/beeDie_iphone_0000'+i+'.png';
                                //     if(i > 9)
                                //        img = 'https://gl20181019.oss-cn-hangzhou.aliyuncs.com/assets/animation/beedie/beeDie_iphone_000'+i+'.png';

                                //     beeDiePageAssetsPath.push(img);
                                // }

                            case 2:
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
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(progressCallback, completeCallback) {
                var i;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
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
            var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(progressCallback, completeCallback) {
                var i;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
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
            var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5(progressCallback, completeCallback) {
                var i;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
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

            var blockRadius = BLOCK_RADIUS * scale;

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
            for (var i = 0; i < canvas.height; i += 40) {
                context.fillStyle = 'white';
                context.fillRect(canvas.width / 2 - 1, i, 2, 20);
            }
        }

        /**
         * Suspends the execution until the time-out interval elapses
         * @param {integer} ms Milliseconds to sleep
         */

    }, {
        key: 'sleep',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7(ms) {
                var _this = this;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                return _context7.abrupt('return', new Promise(function () {
                                    var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6(resolve) {
                                        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
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
            context.clearRect(0, 0, canvas.height, canvas.width);
        }
    }]);

    return Core;
}();

/***/ }),

/***/ "./src/game.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bestScore */
/* unused harmony export score */
/* unused harmony export availableCircle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("./src/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boot__ = __webpack_require__("./src/boot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start__ = __webpack_require__("./src/start.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play__ = __webpack_require__("./src/play.js");




var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

/**
 * Suspends the execution until the time-out interval elapses
 * @param {integer} ms Milliseconds to sleep
 */
var sleep = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6(ms) {
        var _this2 = this;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        return _context6.abrupt('return', new Promise(function () {
                            var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5(resolve) {
                                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var preload = __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */].preload,
    loadAssets = __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */].loadAssets,
    preloadHomageAssets = __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */].preloadHomageAssets,
    preloadTutorialAssets = __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */].preloadTutorialAssets,
    preloadBeeDieAssets = __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */].preloadBeeDieAssets;


var bestScore = 0;
var score = 0;
var availableCircle = 4;

var boot = null;

var Game = function (_Core) {
    _inherits(Game, _Core);

    function Game(canvas) {
        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, canvas));

        var scale = window.devicePixelRatio;

        // Set the canvas full screen
        canvas.width = window.innerWidth * scale;
        canvas.height = window.innerHeight * scale;

        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = document.body.clientHeight + 'px';

        //this.boot = new Boot()
        boot = new __WEBPACK_IMPORTED_MODULE_2__boot__["a" /* default */]();
        _this.start = new __WEBPACK_IMPORTED_MODULE_3__start__["a" /* default */]();
        _this.play = new __WEBPACK_IMPORTED_MODULE_4__play__["a" /* default */]();

        _this.init();
        return _this;
    }

    _createClass(Game, [{
        key: 'init',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return preload();

                            case 2:
                                _context.next = 4;
                                return this.loadHomePageAssets();

                            case 4:
                                _context.next = 6;
                                return sleep(boot.VISIBILITY_DURATION);

                            case 6:
                                _context.next = 8;
                                return sleep(boot.HIDE_ANIMATION_DURATION);

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
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                loadAssets();
                                preloadHomageAssets(function (progress) {
                                    //console.log("=============preload" + progress);
                                    boot.drawLoadingProcess(parseInt(progress * 100));

                                    if (progress > 0.98) {
                                        //preloadTutorialAssets(function(progress){},function(){});
                                    }
                                }, function () {
                                    //console.log('============all content loaded!');

                                    boot.display();
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
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                preloadTutorialAssets(function (progress) {}, function () {});

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
            var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                preloadBeeDieAssets(function (progress) {}, function () {});

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
}(__WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */]);

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),

/***/ "./src/play.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("./src/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var drawRect = __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */].drawRect,
    drawImage = __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */].drawImage,
    drawText = __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */].drawText,
    drawCircle = __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */].drawCircle,
    drawLine = __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */].drawLine,
    sleep = __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */].sleep,
    drawBlock = __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */].drawBlock,
    drawImage2 = __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */].drawImage2;



/**
 * Credits page class
 */

var Play = function () {
	function Play() {
		var _this = this;

		_classCallCheck(this, Play);

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
			var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
				var changedTouches = _ref.changedTouches;
				var touch;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
								__WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].removeEventListener("touchstart", _this.onTouch);
								document.removeEventListener("visibilitychange", _this.onTabFocusOff);
								return _context.abrupt('return', _this.showStartScreen(_this.run.bind(_this)));

							case 6:
								if (!(_this.lastCoordinateX === 0)) {
									_context.next = 9;
									break;
								}

								_this.lastCoordinateX = Math.abs(__WEBPACK_IMPORTED_MODULE_1__core__["d" /* halfCanvasWidth */] - touch.pageX) * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */];
								return _context.abrupt('return', false);

							case 9:

								_this.distanceToX = Math.abs(_this.lastCoordinateX - touch.pageX) * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */];
								_this.swipeDirection = _this.lastCoordinateX > touch.pageX ? 'left' : 'right';
								_this.lastCoordinateX = touch.pageX * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */];

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

			var startYPosition = __WEBPACK_IMPORTED_MODULE_1__core__["c" /* halfCanvasHeight */] + __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].height / 6;

			if (_this.circles[0].y > startYPosition - 50 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */]) {

				_this.availableCircle.y -= 6 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */];
				_this.circles.map(function (circle, key) {
					circle.y -= 5 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */] - 2 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */] * key;
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


	_createClass(Play, [{
		key: 'finishGame',
		value: function finishGame() {
			if (this.finishFlag) {
				this.finish = this.finish + this.SPEED * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */];
				if (this.finish > 1841) {
					this.end = true;
				}
				drawImage(0, this.finish, 'static/assets/finishLine.png', __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width / 8.486);
			}
		}
	}, {
		key: 'draw',
		value: function draw() {
			// console.log(111);
			//drawRect(0, 0, canvas.width, canvas.height, 'black')
			//绘制背景
			drawImage(0, 0, 'static/assets/bg.png', __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].height);

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
						drawImage(block.x, block.y, 'static/assets/fk1.png', block.size, block.size);

						drawText(block.x + (block.size / 2 - (block.value > 9 ? 10 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */] : 6 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */])), block.y + block.size / 2 + 7 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */], 22 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */], 'black', 'Montserrat-Regular', block.value);
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
					drawImage(point.x, point.y, 'static/assets/count.png', 250, 250);

					drawText(point.x + 50 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */], point.y + 75 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */], 40 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */], 'black', 'Montserrat-Regular', point.value);
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
				drawImage(0, 0, 'static/assets/bg.png', __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].height);

				if (this.finishFlag) {
					//绘制首页头顶
					drawImage(0, 0, 'static/assets/finishTitle.png', __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width / 4.697);
				} else {
					clearInterval(this.gameOver);
					//绘制首页头顶
					drawImage(0, 0, 'static/assets/p1-t1.png', __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width / 2.072);
				}
				__WEBPACK_IMPORTED_MODULE_2_jquery___default()(".beeBox").fadeIn(500);
			} else {
				// if(this.dieBeeFlag2){
				// Current player available points
				drawText(this.availableCircle.x + 88, this.availableCircle.y + 30, 30 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */], '#ffd29a', 'Montserrat-Regular', this.availableCircle.value);
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
							drawImage(circle.x - 50, circle.y - 50, 'static/assets/bee.png', 300, 300);
							drawImage(circle.x + 86, circle.y + 200, 'static/assets/ball.png', 30, 30);
							bee++;
						} else {
							drawImage(circle.x + 86, circle.y + 200, 'static/assets/ball.png', 30, 30);
						}
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

			if (blockValue === 1) {
				return '#69F0AE';
			} else if (blockValue <= 4) {
				return '#00E676';
			} else if (blockValue <= 8) {
				return '#00C853';
			} else if (blockValue <= 12) {
				return '#FFD54F';
			} else if (blockValue <= 16) {
				return '#FFCA28';
			} else if (blockValue <= 20) {
				return '#FF8F00';
			} else if (blockValue >= 21) {
				return '#D84315';
			}
		}
	}, {
		key: 'addLines',
		value: function addLines() {

			if (this.blocked || this.end || this.pause) {
				return false;
			}

			var blockSize = __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width / 5;
			var numberOfLine = Math.random() * 3 + 1;
			var lineHeight = Math.floor(Math.random() * (blockSize * 2)) + blockSize;
			var key = Math.floor(Math.random() * (this.blocks.length - 1 - (this.blocks.length - 5) + 1) + (this.blocks.length - 5));
			var randomBlock = this.blocks[key];

			for (var i = 0; i < numberOfLine; i++) {

				var x = randomBlock.x + blockSize - this.LINE_WIDTH / 2;

				this.lines.push({
					xStart: x,
					yStart: randomBlock.y + blockSize - 4 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */],
					xEnd: x,
					yEnd: randomBlock.y + blockSize + lineHeight,
					lineWidth: this.LINE_WIDTH * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */],
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

					line.yStart += this.SPEED * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */];
					line.yEnd += this.SPEED * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */];
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

			var margin = this.BLOCK_MARGIN * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */];
			var blockSize = __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width / 8;

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
					var blockMargin = this.BLOCK_MARGIN * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */];
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
					if (block.y >= __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].height) {
						return previous;
					}

					// Remove the block from the array if value is 0
					if (block.value === 0) {
						return previous;
					}

					var y = block.y,
					    props = _objectWithoutProperties(block, ['y']);

					return previous.concat([_extends({
						y: y += _this2.SPEED * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */]
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

			if (this.lastCoordinateX >= 0 + this.CIRCLE_RADIUS && this.lastCoordinateX <= __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width - this.CIRCLE_RADIUS) {

				var playerX = this.circles[0].x + this.CIRCLE_RADIUS;
				var playerY = this.circles[0].y;

				var lineCollision = this.lines.some(function (line) {
					return playerY >= line.yStart && playerY <= line.yEnd && playerX >= line.xStart && playerX <= line.xStart + _this3.LINE_WIDTH * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */];
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
				    speed = Math.abs(circle.x - prev.x) / (2 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */]);
				circle.y = prev.y + this.CIRCLE_DIAMETER * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */];

				if (distance < speed) {
					circle.x = prev.x;
				} else if (circle.x > prev.x && circle.x - speed >= 0) {
					circle.x -= speed;
				} else if (circle.x < prev.x && circle.x - speed <= __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width) {
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
					__WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].removeEventListener("touchmove", this.onTouch);
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
				if (point.y < __WEBPACK_IMPORTED_MODULE_1__core__["c" /* halfCanvasHeight */] * 2) {

					// Collision with points点碰撞的事件
					if (point.y > _this4.availableCircle.y - 40 && point.y < _this4.availableCircle.y + 40 && point.x > _this4.availableCircle.x - 120 && point.x < _this4.availableCircle.x + 80) {

						// Adding points as circles on the screen
						for (var i = 0; i < point.value; i++) {
							var lastCircle = _this4.circles[_this4.circles.length - 1];

							_this4.circles.push({
								x: lastCircle.x,
								y: lastCircle.y + 20 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */]
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
								y: y + _this4.SPEED * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */]
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
			__WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].addEventListener("touchmove", this.onTouch, false);
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
			var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(showStartScreen) {
				var defaultX, defaultY, i, bestScore, oneColWith, _i;

				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
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
								this.availableCircle.x = __WEBPACK_IMPORTED_MODULE_1__core__["d" /* halfCanvasWidth */] - 3 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */];
								this.availableCircle.y = __WEBPACK_IMPORTED_MODULE_1__core__["c" /* halfCanvasHeight */] + __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].height / 6 - 20;
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
								this.gameOver = setTimeout(function () {
									this.finishFlag = true;
									//this.end = true;
									// console.log(this.end)
								}.bind(this), 20000);

								defaultX = __WEBPACK_IMPORTED_MODULE_1__core__["d" /* halfCanvasWidth */];
								defaultY = __WEBPACK_IMPORTED_MODULE_1__core__["c" /* halfCanvasHeight */] + __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].height / 6;


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
								oneColWith = __WEBPACK_IMPORTED_MODULE_1__core__["d" /* halfCanvasWidth */] / 2;

								for (_i = 1; _i <= 5; _i++) {
									this.cols.push(oneColWith * _i);
								}

								// Draw the circle of the start screen
								this.draw();

								this.before_play_animation = window.requestAnimationFrame(this.beforePlayAnimation);
								this.play_animation = window.requestAnimationFrame(this.playAnimation);

							case 36:
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

/* harmony default export */ __webpack_exports__["a"] = (Play);

/***/ }),

/***/ "./src/start.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./src/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var drawRect = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* Core */].drawRect,
    drawImage = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* Core */].drawImage,
    drawText = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* Core */].drawText,
    drawCircle = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* Core */].drawCircle,
    loadImg = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* Core */].loadImg;



/**
 * Credits page class
 */

var Start = function () {
    function Start() {
        var _this = this;

        _classCallCheck(this, Start);

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
            drawImage(0, 0, 'static/assets/tutorial.png', __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].height);
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(".beeBox").hide();
            __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].addEventListener("mousedown", _this.onTouch);
            document.querySelector('.play').removeEventListener("mousedown", _this.showTutorial);
            document.querySelector('.play').addEventListener("mousedown", _this.onTouch);
        };

        this.onTouch = function (evt) {
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(".beeBox").hide();
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(".palyAgainBox").hide();
            if (_this.FirstFlag) {
                //帧数


                var drawAni = function drawAni() {
                    drawImage(0, 0, __WEBPACK_IMPORTED_MODULE_0__core__["g" /* tutorialPageAssetsPath */][n], __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].height);
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
                __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].addEventListener("mousedown", _this.onTouch);
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
                __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].removeEventListener("touchstart", _this.onTouch);
                __WEBPACK_IMPORTED_MODULE_0__core__["b" /* canvas */].removeEventListener("mousedown", _this.onTouch);

                _this.runGame(_this.show.bind(_this));
            }
        };
    }

    _createClass(Start, [{
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

/* harmony default export */ __webpack_exports__["a"] = (Start);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "jquery":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "preloader":
/***/ (function(module, exports) {

module.exports = require("preloader");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map