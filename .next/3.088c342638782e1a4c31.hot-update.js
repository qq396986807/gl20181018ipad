webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_game__ = __webpack_require__("./src/game.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var _jsxFileName = '/Users/heiniu/Documents/TG/h5gamesIpad/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _default = function (_Component) {
    _inherits(_default, _Component);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
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
                    className: 'jsx-1050890222' + ' ' + 'gameContainer',
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
                            className: 'jsx-1050890222',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                            }
                        },
                        '\u7687\u5E1D\u8702\u5927\u4F5C\u6218'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1050890222',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', className: 'jsx-1050890222',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes', className: 'jsx-1050890222',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'manifest', href: '/manifest.json', className: 'jsx-1050890222',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'preload', href: '/static/fonts/Montserrat-Light.ttf', as: 'font', className: 'jsx-1050890222',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'preload', href: '/static/fonts/Montserrat-Thin.ttf', as: 'font', className: 'jsx-1050890222',
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
                    className: 'jsx-1050890222',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/assets/share.png', alt: '', className: 'jsx-1050890222' + ' ' + 'share',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/assets/rule.png', alt: '', className: 'jsx-1050890222' + ' ' + 'ruleShow',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
                    className: 'jsx-1050890222' + ' ' + 'mask',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-1050890222' + ' ' + 'beeBox',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
                        className: 'jsx-1050890222' + ' ' + 'play',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
                        className: 'jsx-1050890222' + ' ' + 'rule',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '1050890222',
                    css: '@font-face{font-family:"Montserrat-Regular";src:url("/static/fonts/Montserrat-Regular.ttf") format("truetype");}@font-face{font-family:"Montserrat-Light";src:url("/static/fonts/Montserrat-Light.ttf") format("truetype");}@font-face{font-family:"Montserrat-Thin";src:url("/static/fonts/Montserrat-Thin.ttf") format("truetype");}html,body{height:100vh;margin:0;overflow:hidden;background-color:black;}p{margin:0;padding:0;}.off{position:absolute;right:-10%;top:0;width:13%;margin-top:-18%;}.share,.ruleShow{width:100%;height:auto;position:absolute;left:0;top:0;z-index:1000;display:none;}.beeBox{position:absolute;width:66%;height:81.75vw;left:17%;top:23%;background-image:url(/static/assets/p1-t2.png);background-repeat:no-repeat;background-size:100% auto;display:none;}.palyAgainBox{width:80%;height:100vw;position:absolute;left:10%;top:32%;display:none;}.frendScore{width:100%;height:17vw;position:relative;overflow-y:auto;color:white;text-align:center;}.playAgainBg{width:100%;height:44.42vw;position:absolute;background-image:url(/static/assets/playAgain.png);background-repeat:no-repeat;background-size:100% auto;}.playAgainBg div{margin-left:15%;width:70%;border:1px solid white;}.beeBox div{margin-left:20%;width:60%;}.play{margin-top:81%;height:14%;}.playAgain{margin-top:12%;height:28%;}.rule{margin-top:3%;height:10%;}.mask{width:100%;height:100%;position:fixed;left:0;top:0;z-index:100;background-image:url(/static/assets/bg.png);background-repeat:no-repeat;background-size:100% 100%;display:none;}.rankList{width:90%;height:80%;overflow:auto;}.rankList p{margin-top:5%;color:#edb97b;width:100%;text-align:center;font-size:16px;padding:5px 0;}.listName{display:inline-block;width:50%;text-align:right;}.listScore{display:inline-block;width:50%;text-align:left;}.myScore{color:#edb97b;width:100%;text-align:center;font-size:16px;}.rankBox{width:80%;height:80%;position:absolute;z-index:10001;left:10%;top:10%;display:none;}.rankTitle{color:#fbe0b2;width:100%;text-align:center;}.rankExplain{color:#edb97b;width:100%;text-align:center;font-size:13px;}.gameContainer{height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFcUIsQUFHMEMsQUFNSixBQUlTLEFBT1AsQUFTTyxBQVdULEFBU0UsQUFRQSxBQVFLLEFBS0EsQUFLRCxBQUlBLEFBSUQsQUFJSCxBQVlGLEFBS0ssQUFRTyxBQUtBLEFBS1IsQUFNSCxBQVNJLEFBS0QsQUFNQSxBQUlvQixBQUlGLEFBSUQsU0F0SnBCLENBK0JFLEFBMkRELEFBNkJBLENBNUdDLEFBNkJBLEFBUUcsQUE4QkgsRUFwRkgsQUFpSmIsQ0FqRWUsQUFxQkcsQUFrQkgsQUFlQSxBQUtBLENBbEVoQixBQUdnQixDQWRELEFBS0EsRUF6REMsQUFnQkQsQ0FuQmQsRUEwRmtCLEFBWUosQUFLQSxBQVlRLENBN0hGLENBaUJFLEFBb0JBLEFBU0EsQUFzQ0gsRUFKbkIsQUF1Q3NCLEFBZUEsQUFLQSxDQXJGQSxBQVFLLEFBTTNCLEFBSUEsQUFJQSxFQWxEbUIsQUEyRUosQ0EzRkwsQ0FtSlgsQ0FoRHNCLEFBS0QsQUF1Q3JCLEVBSkEsRUExSWUsQUFzRmQsR0FoRzJCLEFBb0ZoQixDQWlCVyxBQXdCSixFQTVHUCxBQW9CRSxBQVNPLEVBcEJQLEFBNkZNLEFBZW5CLEFBS21CLENBckZvQyxDQTNDbkMsQUEwRVYsRUE2QlYsQ0FoR1UsQUEyRlYsQ0EvQ0EsQ0F4QlksQ0FnREksQ0EzREosQ0FtR0MsQ0EzR0ksR0E0QkQsQUF1REcsQ0E5REgsQUFnRmhCLEFBb0JBLEVBaEhtRCxDQTNCbkQsQUFXQSxDQW1IVyxDQXhDcUMsSUFuRWhDLEVBNEJNLENBZ0ZOLENBdkZoQixDQThEa0IsUUFsRmxCLEdBNEdBLEdBekJBLENBdkRBLE9BMkdBLENBckdnQyxDQWlHaEMsSUFKQSxPQXZIZ0MsQUEyREEsZ0JBaENGLFlBMUJBLEFBMkRBLGNBaEM5QixZQTFCZ0IsQUEyREMsYUExRGpCLEFBMkRBIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oZWluaXUvRG9jdW1lbnRzL1RHL2g1Z2FtZXNJcGFkIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBHYW1lIGZyb20gJy4uL3NyYy9nYW1lJ1xuaW1wb3J0ICQgZnJvbSAgJ2pxdWVyeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIENsaWVudC1zaWRlXG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSBcbiAgICAgICAgICAgICAgICB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIFxuICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXG4gICAgICAgICAgICAgICAgfHwgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXG4gICAgICAgICAgICAgICAgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIFxuICAgICAgICAgICAgICAgIHx8IGZ1bmN0aW9uKHJlcXVlc3RJRCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChyZXF1ZXN0SUQsIDEwMDAgLyA2MCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgfHwgZnVuY3Rpb24ocmVxdWVzdElEKXtjbGVhclRpbWVvdXQocmVxdWVzdElEKX07XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUodGhpcy5jYW52YXMpXG4gICAgICAgIH1cblxuXG4gICAgICAgIFxuXG4gICAgICAgIFxuXG4gICAgICAgIC8v54K55Ye76KeE5YiZXG4gICAgICAgICQoXCIucnVsZVwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJChcIi5ydWxlU2hvd1wiKS5mYWRlSW4oNTAwKTtcbiAgICAgICAgfSlcblxuICAgIFxuXG4gICAgICAgIFxuXG4gICAgICAgIC8v54K55Ye76YGu572p5raI5aSxXG4gICAgICAgICQoXCIucnVsZVNob3dcIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykuZmFkZU91dCg1MDApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+55qH5bid6JyC5aSn5L2c5oiYPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWxvYWRcIiBocmVmPVwiL3N0YXRpYy9mb250cy9Nb250c2VycmF0LUxpZ2h0LnR0ZlwiIGFzPVwiZm9udFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWxvYWRcIiBocmVmPVwiL3N0YXRpYy9mb250cy9Nb250c2VycmF0LVRoaW4udHRmXCIgYXM9XCJmb250XCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICAgICAgICByZWY9e2MgPT4gdGhpcy5jYW52YXMgPSBjfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NTBcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nc2hhcmUnIHNyYz0nL3N0YXRpYy9hc3NldHMvc2hhcmUucG5nJyBhbHQ9JycgLz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncnVsZVNob3cnIHNyYz0nL3N0YXRpYy9hc3NldHMvcnVsZS5wbmcnIGFsdD0nJyAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXNrJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmVlQm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXknPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncnVsZSc+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5vZmZ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTMlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xOCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hhcmUsLnJ1bGVTaG93e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYmVlQm94e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjYlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODEuNzV2dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxNyU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyMyU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvYXNzZXRzL3AxLXQyLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucGFseUFnYWluQm94e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDMyJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZnJlbmRTY29yZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbGF5QWdhaW5CZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0LjQydnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2Fzc2V0cy9wbGF5QWdhaW4ucG5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsYXlBZ2FpbkJnIGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYmVlQm94IGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbGF5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDgxJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTQlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucGxheUFnYWlue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ydWxle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hc2t7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvYXNzZXRzL2JnLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmtMaXN0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYW5rTGlzdCBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZWRiOTdiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubGlzdE5hbWV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubGlzdFNjb3Jle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubXlTY29yZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZWRiOTdiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucmFua0JveHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucmFua1RpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJlMGIyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYW5rRXhwbGFpbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZWRiOTdiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2FtZUNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1SZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTGlnaHRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtVGhpblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9Nb250c2VycmF0LVRoaW4udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=pages/index.js */'
                })
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', '/Users/heiniu/Documents/TG/h5gamesIpad/pages/index.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.088c342638782e1a4c31.hot-update.js.map