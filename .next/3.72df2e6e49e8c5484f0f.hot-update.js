webpackHotUpdate(3,{

/***/ "./src/play.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("./src/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

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
						drawImage(block.x, block.y, block.color[0], block.size, block.size);

						drawText(block.x + (block.size / 2 - (block.value > 9 ? 10 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */] : 6 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */])), block.y + block.size / 2 + 7 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */], 22 * __WEBPACK_IMPORTED_MODULE_1__core__["f" /* scale */], block.color[1], 'Montserrat-Regular', block.value);
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
					drawImage(0, 0, 'static/assets/finishTitle.png', __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width / 4.518);
				} else {
					clearInterval(this.gameOver);
					//绘制首页头顶
					drawImage(0, 0, 'static/assets/finishTitle-lose.png', __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_1__core__["b" /* canvas */].width / 4.518);
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
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Play;
}();

var _default = Play;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(drawRect, 'drawRect', '/Users/heiniu/Documents/TG/h5gamesIpad/src/play.js');
	reactHotLoader.register(drawImage, 'drawImage', '/Users/heiniu/Documents/TG/h5gamesIpad/src/play.js');
	reactHotLoader.register(drawText, 'drawText', '/Users/heiniu/Documents/TG/h5gamesIpad/src/play.js');
	reactHotLoader.register(drawCircle, 'drawCircle', '/Users/heiniu/Documents/TG/h5gamesIpad/src/play.js');
	reactHotLoader.register(drawLine, 'drawLine', '/Users/heiniu/Documents/TG/h5gamesIpad/src/play.js');
	reactHotLoader.register(sleep, 'sleep', '/Users/heiniu/Documents/TG/h5gamesIpad/src/play.js');
	reactHotLoader.register(drawBlock, 'drawBlock', '/Users/heiniu/Documents/TG/h5gamesIpad/src/play.js');
	reactHotLoader.register(drawImage2, 'drawImage2', '/Users/heiniu/Documents/TG/h5gamesIpad/src/play.js');
	reactHotLoader.register(Play, 'Play', '/Users/heiniu/Documents/TG/h5gamesIpad/src/play.js');
	reactHotLoader.register(_default, 'default', '/Users/heiniu/Documents/TG/h5gamesIpad/src/play.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.72df2e6e49e8c5484f0f.hot-update.js.map