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
                    className: 'jsx-2200550604' + ' ' + 'gameContainer',
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
                            className: 'jsx-2200550604',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                            }
                        },
                        '\u7687\u5E1D\u8702\u5927\u4F5C\u6218'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-2200550604',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', className: 'jsx-2200550604',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes', className: 'jsx-2200550604',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'manifest', href: '/manifest.json', className: 'jsx-2200550604',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'preload', href: '/static/fonts/Montserrat-Light.ttf', as: 'font', className: 'jsx-2200550604',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'preload', href: '/static/fonts/Montserrat-Thin.ttf', as: 'font', className: 'jsx-2200550604',
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
                    className: 'jsx-2200550604',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/assets/share.png', alt: '', className: 'jsx-2200550604' + ' ' + 'share',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/assets/rule.png', alt: '', className: 'jsx-2200550604' + ' ' + 'ruleShow',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
                    className: 'jsx-2200550604' + ' ' + 'mask',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-2200550604' + ' ' + 'beeBox',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
                        className: 'jsx-2200550604' + ' ' + 'play',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
                        className: 'jsx-2200550604' + ' ' + 'rule',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '2200550604',
                    css: '@font-face{font-family:"Montserrat-Regular";src:url("/static/fonts/Montserrat-Regular.ttf") format("truetype");}@font-face{font-family:"Montserrat-Light";src:url("/static/fonts/Montserrat-Light.ttf") format("truetype");}@font-face{font-family:"Montserrat-Thin";src:url("/static/fonts/Montserrat-Thin.ttf") format("truetype");}html,body{height:100vh;margin:0;overflow:hidden;background-color:black;}p{margin:0;padding:0;}.off{position:absolute;right:-10%;top:0;width:13%;margin-top:-18%;}.share,.ruleShow{width:100%;height:auto;position:absolute;left:0;top:0;z-index:1000;display:none;}.beeBox{position:absolute;width:66%;height:81.75vw;left:17%;top:23%;background-image:url(/static/assets/p1-t2.png);background-repeat:no-repeat;background-size:100% auto;display:none;}.palyAgainBox{width:80%;height:100vw;position:absolute;left:10%;top:32%;display:none;}.frendScore{width:100%;height:17vw;position:relative;overflow-y:auto;color:white;text-align:center;}.playAgainBg{width:100%;height:44.42vw;position:absolute;background-image:url(/static/assets/playAgain.png);background-repeat:no-repeat;background-size:100% auto;}.playAgainBg div{margin-left:15%;width:70%;}.beeBox div{margin-left:20%;width:60%;border:1px solid white;}.play{margin-top:81%;height:14%;}.playAgain{margin-top:12%;height:28%;}.rule{margin-top:3%;height:10%;}.mask{width:100%;height:100%;position:fixed;left:0;top:0;z-index:100;background-image:url(/static/assets/bg.png);background-repeat:no-repeat;background-size:100% 100%;display:none;}.rankList{width:90%;height:80%;overflow:auto;}.rankList p{margin-top:5%;color:#edb97b;width:100%;text-align:center;font-size:16px;padding:5px 0;}.listName{display:inline-block;width:50%;text-align:right;}.listScore{display:inline-block;width:50%;text-align:left;}.myScore{color:#edb97b;width:100%;text-align:center;font-size:16px;}.rankBox{width:80%;height:80%;position:absolute;z-index:10001;left:10%;top:10%;display:none;}.rankTitle{color:#fbe0b2;width:100%;text-align:center;}.rankExplain{color:#edb97b;width:100%;text-align:center;font-size:13px;}.gameContainer{height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFcUIsQUFHMEMsQUFNSixBQUlTLEFBT1AsQUFTTyxBQVdULEFBU0UsQUFRQSxBQVFLLEFBS0EsQUFLRCxBQUlBLEFBSUQsQUFJSCxBQVlGLEFBS0ssQUFRTyxBQUtBLEFBS1IsQUFNSCxBQVNJLEFBS0QsQUFNQSxBQUlvQixBQUlGLEFBSUQsU0F0SnBCLENBK0JFLEFBMkRELEFBNkJBLENBNUdDLEFBNkJBLEFBUUcsQUE4QkgsRUFwRkgsQUFpSmIsQ0FqRWUsQUFxQkcsQUFrQkgsQUFlQSxBQUtBLENBbEVoQixBQUdnQixDQWRELEFBS0EsRUF6REMsQUFnQkQsQ0FuQmQsRUEwRmtCLEFBWUosQUFLQSxBQVlRLENBN0hGLENBaUJFLEFBb0JBLEFBU0EsQUFzQ0gsRUFKbkIsQUF1Q3NCLEFBZUEsQUFLQSxDQXJGQSxBQVN0QixBQUkyQixBQUszQixBQUlBLEVBbERtQixBQTJFSixDQTNGTCxDQW1KWCxDQWhEc0IsQUFLRCxBQXVDckIsRUFKQSxFQTFJZSxBQXNGZCxHQWhHMkIsQUFvRmhCLENBaUJXLEFBd0JKLEVBNUdQLEFBb0JFLEFBU08sRUFwQlAsQUE2Rk0sQUFlbkIsQUFLbUIsQ0FyRm9DLENBM0NuQyxBQTBFVixFQTZCVixDQWhHVSxBQTJGVixDQTFDQSxDQTdCWSxDQWdESSxDQTNESixDQW1HQyxDQTNHSSxHQTRCRCxBQXVERyxDQTlESCxBQWdGaEIsQUFvQkEsRUFoSG1ELENBM0JuRCxBQVdBLENBbUhXLENBeENxQyxJQW5FaEMsRUE0Qk0sQ0FnRk4sQ0F2RmhCLENBOERrQixRQWxGbEIsR0E0R0EsR0F6QkEsQ0F2REEsT0EyR0EsQ0FyR2dDLENBaUdoQyxJQUpBLE9BdkhnQyxBQTJEQSxnQkFoQ0YsWUExQkEsQUEyREEsY0FoQzlCLFlBMUJnQixBQTJEQyxhQTFEakIsQUEyREEiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hlaW5pdS9Eb2N1bWVudHMvVEcvaDVnYW1lc0lwYWQiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEdhbWUgZnJvbSAnLi4vc3JjL2dhbWUnXG5pbXBvcnQgJCBmcm9tICAnanF1ZXJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gQ2xpZW50LXNpZGVcbiAgICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIFxuICAgICAgICAgICAgICAgIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXG4gICAgICAgICAgICAgICAgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSBcbiAgICAgICAgICAgICAgICB8fCB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSBcbiAgICAgICAgICAgICAgICB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXG4gICAgICAgICAgICAgICAgfHwgZnVuY3Rpb24ocmVxdWVzdElEKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHJlcXVlc3RJRCwgMTAwMCAvIDYwKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICB8fCBmdW5jdGlvbihyZXF1ZXN0SUQpe2NsZWFyVGltZW91dChyZXF1ZXN0SUQpfTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSh0aGlzLmNhbnZhcylcbiAgICAgICAgfVxuXG5cbiAgICAgICAgXG5cbiAgICAgICAgXG5cbiAgICAgICAgLy/ngrnlh7vop4TliJlcbiAgICAgICAgJChcIi5ydWxlXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKFwiLnJ1bGVTaG93XCIpLmZhZGVJbig1MDApO1xuICAgICAgICB9KVxuXG4gICAgXG5cbiAgICAgICAgXG5cbiAgICAgICAgLy/ngrnlh7vpga7nvanmtojlpLFcbiAgICAgICAgJChcIi5ydWxlU2hvd1wiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS5mYWRlT3V0KDUwMCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT7nmofluJ3onILlpKfkvZzmiJg8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlbG9hZFwiIGhyZWY9XCIvc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtTGlnaHQudHRmXCIgYXM9XCJmb250XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlbG9hZFwiIGhyZWY9XCIvc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtVGhpbi50dGZcIiBhcz1cImZvbnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgICAgICAgIHJlZj17YyA9PiB0aGlzLmNhbnZhcyA9IGN9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1MFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdzaGFyZScgc3JjPScvc3RhdGljL2Fzc2V0cy9zaGFyZS5wbmcnIGFsdD0nJyAvPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdydWxlU2hvdycgc3JjPScvc3RhdGljL2Fzc2V0cy9ydWxlLnBuZycgYWx0PScnIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21hc2snPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZWVCb3gnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheSc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdydWxlJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm9mZntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0xMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMyU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE4JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaGFyZSwucnVsZVNob3d7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5iZWVCb3h7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NiU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MS43NXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE3JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIzJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9hc3NldHMvcDEtdDIucG5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYWx5QWdhaW5Cb3h7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDB2dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMzIlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mcmVuZFNjb3Jle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTd2dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsYXlBZ2FpbkJne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDQuNDJ2dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvYXNzZXRzL3BsYXlBZ2Fpbi5wbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucGxheUFnYWluQmcgZGl2e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5iZWVCb3ggZGl2e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbGF5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDgxJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTQlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucGxheUFnYWlue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ydWxle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hc2t7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvYXNzZXRzL2JnLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmtMaXN0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYW5rTGlzdCBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZWRiOTdiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubGlzdE5hbWV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubGlzdFNjb3Jle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubXlTY29yZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZWRiOTdiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucmFua0JveHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucmFua1RpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJlMGIyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYW5rRXhwbGFpbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZWRiOTdiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2FtZUNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1SZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTGlnaHRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtVGhpblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9Nb250c2VycmF0LVRoaW4udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=pages/index.js */'
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
//# sourceMappingURL=3.60d4fdafa1a683857866.hot-update.js.map