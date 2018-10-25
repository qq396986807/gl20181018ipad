"use strict"
import { canvas, Core, halfCanvasHeight, halfCanvasWidth, scale ,beeDiePageAssetsPath} from './core'
const { drawRect, drawImage, drawText, drawCircle, drawLine, sleep, drawBlock,drawImage2 } = Core;
import $ from  'jquery';

/**
 * Credits page class
 */
export default class Play {

	CIRCLE_RADIUS = 10;
	CIRCLE_DIAMETER = this.CIRCLE_RADIUS * 2
	LINE_WIDTH = 3;
	BLOCK_MARGIN = 1
	SPEED = 4//游戏速度

	framesPerSecond = 60;
	startAnimationEnded = false;
	lastAddedTime = 0;
	lastBlockCollisionTime = 0;
	restartLabelTime = 0;
	restart = false;

	listenersApplied = false;
	lastCoordinateX = 0;
	distanceToX = 0;
	swipeDirection = '';

	score = 0
	end = false
	pause = false
	newBestScore = false
	bestScore = 0
	blocked = false
	circles = []
	cols = []
	points = []
	blocks = []
	lines = []
	finish = 0;//终点的线y值
	hitBlock = null
	restartOpacity = 0
	reverseOpacity = false
	dieBeeFlag = false;
	dieBeeFlag2 = true;
	finishFlag = false;
	gameOver;
	timeSecondInt;//倒计时定时器
	timeSecond = 15;

	availableCircle = {
		x: 0,
		y: 0,
		value: 4
	}

	finishGame() {
		if(this.finishFlag){
			this.finish = this.finish + this.SPEED * scale;
			if(this.finish>1841){
				this.end = true;
				this.restart = true
				document.removeEventListener("visibilitychange", this.onTabFocusOff)
				return this.showStartScreen(this.run.bind(this));
			}
			drawImage(
				0,
				this.finish,
				'static/assets/finishLine.png',
				canvas.width,
				canvas.width / 8.486
			)
		}
	}
	draw() {
		//绘制背景
		drawImage(
            0,
            0,
            'static/assets/bg.png',
			canvas.width,
			canvas.height
		)
		
		

		// Falling blocks
		//创建障碍方块
		for (const block of this.blocks) {

			if(block.value > 0) {
				// drawBlock(block.x, block.y, block.size, block.color)
				drawImage(block.x,block.y,block.color[0], block.size, block.size)

				drawText(
					block.x + ((block.size / 2) - (block.value > 9 ? (10 * scale) : (6 * scale))),
					block.y + (block.size / 2) + (7 * scale),
					22 * scale,
					block.color[1],
					'Montserrat-Regular',
					block.value
				)
			}
		}

		// for(const line of this.lines) {
		// 	drawLine(line.xStart, line.yStart, line.xEnd, line.yEnd, line.lineWidth, line.color)
		// }

		// Falling points
		for (const point of this.points) {

			// drawCircle(
			// 	point.x,
			// 	point.y,
			// 	this.CIRCLE_RADIUS * scale,
			// 	`rgb(255, 204, 0)`
			// )
			// console.log('ppppp='+point.y);
			// console.log('bbbb='+this.blocks[0].y);
			// console.log('bbbb22222222='+this.blocks[1].y);
			drawImage(
				point.x,
				point.y,
				'static/assets/count.png',
				250,
				250
			)

			drawText(
				point.x + 52 * scale,
				point.y + 75 * scale,
				40 * scale,
				'black',
				'Montserrat-Regular',
				point.value
			)
		}

		if (this.end === true) {
			
			drawImage(
				0,
				0,
				'static/assets/bg.png',
				canvas.width,
				canvas.height
			)

			if(this.finishFlag){
				//绘制首页头顶
				drawImage(
					0,
					0,
					'static/assets/finishTitle.png',
					canvas.width,
					canvas.width / 4.518
				)
			}else{
				clearInterval(this.gameOver);
				//绘制首页头顶
				drawImage(
					0,
					0,
					'static/assets/finishTitle-lose.png',
					canvas.width,
					canvas.width / 4.518
				)
			}
			$(".beeBox").fadeIn(500)

		} else {
			// if(this.dieBeeFlag2){
					// Current player available points
				drawText(
					this.availableCircle.x + 88,
					this.availableCircle.y + 30,
					30 * scale,
					'#ffd29a',
					'Montserrat-Regular',
					this.availableCircle.value
				)
				//标记蜜蜂头
				let bee = 0;
				
				// Current player available points line
				for (const circle of this.circles) {
					// drawCircle(
					// 	circle.x,
					// 	circle.y,
					// 	this.CIRCLE_RADIUS * scale,
					// 	`rgb(255, 204, 0)`
					// )
					if(bee == 0){
						drawImage(
							circle.x - 50,
							circle.y - 50,
							'static/assets/bee.png',
							300,
							300
						)
						drawImage(
							circle.x + 86,
							circle.y + 200,
							'static/assets/ball.png',
							30,
							30
						)
						bee++;
					}else{
						drawImage(
							circle.x + 86,
							circle.y + 200,
							'static/assets/ball.png',
							30,
							30
						)
					}
					//创建分数的背景
				drawImage(
					0,
					0,
					'/static/assets/ipad-title.png',
					canvas.width,
					canvas.width / 10.172
				)

				drawText(
					halfCanvasWidth - (115 * scale),
					45 * scale,
					35 * scale,
					'white',
					'Montserrat-Regular',
					'剩余时间: '+this.timeSecond + " 秒"
				)
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
			}
		// }
	
	
	}

	getBlockColor(blockValue) {

		const currentPoints = this.availableCircle.value;

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

		if(blockValue>9){
			let arr = [
			'static/assets/fk2.png',
			'white'
			]
			return arr;
		}else{
			let arr = [
				'static/assets/fk1.png',
				'black'
				]
				return arr;
		}
	}

	addLines() {

		if (this.blocked || this.end || this.pause) {
			return false
		}

		const blockSize = (canvas.width / 5)
		const numberOfLine = (Math.random() * 3) + 1
		const lineHeight = Math.floor(Math.random() * (blockSize * 2)) + blockSize
		const key = Math.floor(Math.random() * ((this.blocks.length - 1) - (this.blocks.length - 5) + 1) + (this.blocks.length - 5));
		const randomBlock = this.blocks[key]


		for(let i = 0; i < numberOfLine; i++) {

			const x = (randomBlock.x + blockSize) - (this.LINE_WIDTH / 2)
			
			this.lines.push({
				xStart: x,
				yStart: (randomBlock.y + blockSize) - (4 * scale),
				xEnd: x,
				yEnd: (randomBlock.y + blockSize) + lineHeight,
				lineWidth: this.LINE_WIDTH * scale,
				color: 'white'
			})
		}
	}

	updateLines() {
		if(this.end || this.pause || this.blocked) {
			return false
		}
		
		for(const line of this.lines) {
			line.yStart += this.SPEED * scale
			line.yEnd += this.SPEED * scale
		}
	}

	addBlocks() {

		if (this.blocked || this.end || this.pause) {
			return false
		}

		const margin = (this.BLOCK_MARGIN * scale)
		const blockSize = (canvas.width / 8)

		for (let i = 0; i < 8; i++) {

			let x;

			if (i === 0) {
				x = margin
			} else {
				x = margin + (blockSize * i)
			}

			const value = Math.floor(Math.random() * (this.availableCircle.value * 2)) + 1

			this.blocks.push({
				x: x,
				y: -(blockSize * 1),
				size: blockSize - (margin * 2),
				value: value,
				color: this.getBlockColor(value)
			})
		}

		this.addLines();

	}

	updateBlocks() {

		if(this.end || this.pause) {
			return false
		}

		// First check for collision
		for (const block of this.blocks) {

			const blockBottomPosition = block.y + block.size
			const blockMargin = this.BLOCK_MARGIN * scale
			const playerX = this.circles[0].x;
			const playerY = this.circles[0].y;

			if (blockBottomPosition >= (playerY - (this.CIRCLE_DIAMETER + 1))
				&& blockBottomPosition <= (playerY + this.CIRCLE_DIAMETER)
			) {
				// console.log(
				// 	playerX > (block.x - blockMargin)
				// 	&& playerX < ((block.x - blockMargin) + (block.size + blockMargin))
				// )
				// console.log('a='+playerX);
				// console.log('b='+(block.x - blockMargin));
				// console.log('c='+((block.x - blockMargin) + (block.size + blockMargin)));
				// Collision X
				if (playerX >= (block.x - blockMargin)
					&& playerX <= ((block.x - blockMargin) + (block.size + blockMargin))
				) {
	
					if (block.value > 0) {
						this.blocked = true
						this.hitBlock = block
					} else {
						this.blocked = false
						this.hitBlock = null
					}

				}
			}
		}

		// Update blocks position and handle blocks to remove
		if (!this.blocked) {

			this.blocks = this.blocks.reduce((previous, block, key) => {

				// Remove the block from the array when outside of canvas
				if (block.y >= canvas.height) {
					return previous;
				}

				// Remove the block from the array if value is 0
				if (block.value === 0) {
					return previous
				}

				let { y, ...props } = block

				return previous.concat([{
					y: y += (this.SPEED * scale),
					...props
				}])

			}, []);
		}
	}

	updateCircles() {

		// Value was not set yet
		if(this.lastCoordinateX === 0 || this.circles.length === 0) {
			return false;
		}

		if(this.lastCoordinateX >= 0 + this.CIRCLE_RADIUS && this.lastCoordinateX <= canvas.width - this.CIRCLE_RADIUS) {

			const playerX = this.circles[0].x + this.CIRCLE_RADIUS;
			const playerY = this.circles[0].y;

			let lineCollision = this.lines.some((line) => {
				return playerY >= line.yStart && playerY <= line.yEnd
				&& playerX >= line.xStart && playerX <= line.xStart + (this.LINE_WIDTH * scale)
			})

			if(!lineCollision) {
				this.circles[0].x = this.lastCoordinateX
				this.availableCircle.x = this.lastCoordinateX - 10
			}
		}

		for(var i = 1; i < this.circles.length; i++) {

			const circle = this.circles[i],
				prev = this.circles[i - 1],
				distance = Math.sqrt((circle.x - prev.x) * (circle.x - prev.x)),
				speed = Math.abs(circle.x - prev.x) / (2 * scale);
				circle.y = prev.y + (this.CIRCLE_DIAMETER * scale);
			
			if(distance < speed) {
				circle.x = prev.x;
			}
			else if(circle.x > prev.x && (circle.x - speed) >= 0) {
				circle.x -= speed;
			}
			else if(circle.x < prev.x && (circle.x - speed) <= canvas.width) {
				circle.x += speed;
			}     
		}
	}

	/**
	 * Called every 500ms when player was colliding with a block
	 * 当玩家与一个块碰撞时，每500毫秒调用一个
	 */
	handleBlockCollision() {
		if (this.hitBlock !== null && this.hitBlock.value > 0 && this.availableCircle.value > 0) {
			this.hitBlock.value -= 1
			this.hitBlock.color = this.getBlockColor(this.hitBlock.value)
			this.availableCircle.value -= 1

			if(this.availableCircle.value === 0 && !this.end) {
				this.end = true
				window.cancelAnimationFrame(this.play_animation)

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
				canvas.removeEventListener("touchmove", this.onTouch);
				this.restart = true
				document.removeEventListener("visibilitychange", this.onTabFocusOff)
				return this.showStartScreen(this.run.bind(this));
				//canvas.addEventListener("touchstart", this.onTouch);

				if(this.bestScore === 0 || this.score * 10 > this.bestScore) {
					this.newBestScore = true
					this.bestScore = this.score
				}


				window.requestAnimationFrame(this.restartLabelAnimation)
			}

			this.circles.pop()
  
		}
	}

	/**
	 * Add points on hidden the top of the canvas
	 */
	addPoints() {

		if (this.blocked || this.end || this.pause) {
			return false
		}

		const numberOfPoints = Math.floor(Math.random() * 3) + 1

		for (var i = 0; i < numberOfPoints; i++) {
			this.points.push({
				x: this.cols[i],
				y: 100,
				value: Math.floor(Math.random() * 5) + 1
			})
		}
	}

	/**
	 * Update points y position and remove points with 
	 * y position upper than canvas height
	 */
	updatePoints() {

		if (this.blocked || this.end || this.pause) {
			return false
		}

		this.points = this.points.reduce((previous, point) => {

			// Check if the points y position are upper than canvas height
			if (point.y < (halfCanvasHeight * 2)) {

				// Collision with points点碰撞的事件
				if (point.y > (this.availableCircle.y - 40) && point.y < this.availableCircle.y + 40
					&& point.x > (this.availableCircle.x - 120) && point.x < this.availableCircle.x + 80
				) {

					// Adding points as circles on the screen
					for (let i = 0; i < point.value; i++) {
						const lastCircle = this.circles[this.circles.length - 1];

						this.circles.push({
							x: lastCircle.x,
							y: lastCircle.y + (20 * scale) 
						})
					}

					this.availableCircle.value += point.value;
					this.score += point.value;

					return previous
				} else {

					if (!this.blocked) {

						let { y, ...props } = point;

						return previous.concat([{
							y: y + (this.SPEED * scale),
							...props
						}])
					}
					return previous
				}
			}
			return previous
		}, [])
	}

	/**
	 * When user leave the tab pause the game
	 * 当用户离开标签暂停游戏
	 */
	onTabFocusOff = () => {
		if(document.visibilityState === 'hidden') {
			this.pause = true;
		} else {
			this.pause = false;
		}
	}

	/**
	 * When user swipe on the screen during the game
	 * 当用户在游戏过程中在屏幕上滑动时
	 */
	onTouch = async ({ changedTouches }) => {
		const touch = changedTouches[0];

		// Called when the game was ended and touch the screen
		if(this.end) {
			// Remove all listeners and interval before showing the start screen
			this.restart = true
			canvas.removeEventListener("touchstart", this.onTouch)
			document.removeEventListener("visibilitychange", this.onTabFocusOff)
			return this.showStartScreen(this.run.bind(this))
		}

		// First touch
		if (this.lastCoordinateX === 0) {
			this.lastCoordinateX = Math.abs(halfCanvasWidth - touch.pageX) * scale
			return false
		}

		this.distanceToX = Math.abs(this.lastCoordinateX - touch.pageX) * scale
		this.swipeDirection = (this.lastCoordinateX > touch.pageX ? 'left' : 'right');
		this.lastCoordinateX = touch.pageX * scale
	}

	applyListeners() {
		this.listenersApplied = true;
		canvas.addEventListener("touchmove", this.onTouch, false);
		document.addEventListener("visibilitychange", this.onTabFocusOff);
	}

	restartLabelAnimation = (timestamp) => {

		if(!this.end || this.restart) {
			return false
		}

		if(!this.restartLabelTime || this.restartLabelTime - this.restartLabelTime <= 100) {
			this.restartLabelTime = timestamp;

			const opacity = parseFloat(this.restartOpacity.toFixed(2));

			if(opacity <= 1 && !this.reverseOpacity) {
				this.restartOpacity += 0.04
				if(opacity === 1) {
					this.reverseOpacity = !this.reverseOpacity
				}
			} else if(opacity >= 0 && this.reverseOpacity) {
				this.restartOpacity -= 0.04
				if(opacity === 0) {
					this.reverseOpacity = !this.reverseOpacity
				}
			}

			this.draw()
			window.requestAnimationFrame(this.restartLabelAnimation)
		}
	}

	/**
	 * Animation of circles before be able to play
	 * 动画的圆形才能播放
	 */
	beforePlayAnimation = () => {

		const startYPosition = halfCanvasHeight + (canvas.height / 6);

		if (this.circles[0].y > (startYPosition - (50 * scale))) {

			this.availableCircle.y -= (6 * scale)
			this.circles.map((circle, key) => {
				circle.y -= (5 * scale) - ((2 * scale) * key)
			})

			this.draw()

			window.requestAnimationFrame(this.beforePlayAnimation)
		} else {
			this.startAnimationEnded = true
			this.applyListeners()
			window.cancelAnimationFrame(this.before_play_animation)
		}
	}

	/**
	 * Animation during the game session
	 * 游戏过程中的动画
	 * @param {number} timestamp 
	 */
	playAnimation = (timestamp) => {

		if(this.startAnimationEnded === false || this.pause === true) {
			return window.requestAnimationFrame(this.playAnimation)
		}

		if (!this.end) {

			if(!this.lastAddedTime && ! this.lastBlockCollisionTime) {
				this.lastAddedTime = this.lastBlockCollisionTime =  timestamp
				this.addPoints();
				this.addBlocks();
			} else {

				if(timestamp - this.lastAddedTime >= 2000) {
					// Each 1,5s add points and blocks
					this.addBlocks();
					this.addPoints();
					this.lastAddedTime = timestamp;
	
				} else if(timestamp - this.lastBlockCollisionTime >= 100) {
					// Each 100ms handle block collision
					if(this.blocked) {
					   this.handleBlockCollision() 
					}
					this.lastBlockCollisionTime = timestamp
				}
			}

			this.updateCircles()
			this.updateBlocks()
			this.updatePoints()
			this.updateLines()
			this.draw()
			this.finishGame()
			

			window.requestAnimationFrame(this.playAnimation)
		} else {
			this.draw()
		}
	}


	/**
	 * Run the game
	 */
	async run(showStartScreen) {

		this.showStartScreen = showStartScreen

		// Reset values
		this.startAnimationEnded = false
		this.listenersApplied = false
		this.lastAddedTime = 0
		this.lastBlockCollisionTime = 0
		this.restartLabelTime = 0
		this.restart = false;
		this.availableCircle.x = halfCanvasWidth - (3 * scale)
		this.availableCircle.y = (halfCanvasHeight + (canvas.height / 6)) - 20
		this.availableCircle.value = 4
		this.restartOpacity = 0
		this.reverseOpacity = false
		this.blocks = []
		this.points = []
		this.circles = []
		this.cols = []
		this.pause = false
		this.blocked = false
		this.hitBlock = null
		this.end = false
		this.finish = 0;
		this.finishFlag = false;
		this.lastCoordinateX = 0
		//分数重置
		this.score = 0;
		this.dieBeeFlag = false;
		this.dieBeeFlag2 = true;
		this.timeSecond = 15;
		this.gameOver = setTimeout(function(){
			this.finishFlag = true;
			//this.end = true;
			// console.log(this.end)
		}.bind(this),15000)

		clearInterval(this.timeSecondInt);
		this.timeSecondInt = setInterval(function(){
			if(this.timeSecond == 0){
				clearInterval(this.timeSecondInt);
			}else{
				this.timeSecond = parseInt(this.timeSecond) - 1;
			}
		}.bind(this),1200)

		const defaultX = halfCanvasWidth
		const defaultY = halfCanvasHeight + (canvas.height / 6)

		for (let i = 0; i < this.availableCircle.value; i++) {
			this.circles.push({ x: defaultX, y: defaultY })
		}

		if(localStorage.key('bestScore') !== null) {
			const bestScore = localStorage.getItem('bestScore');
			if(bestScore) {
				this.bestScore = parseInt(bestScore);
			} else {
				this.bestScore = 0;
			}
		} else {
			this.bestScore = 0;
		}

		// Initialization of columns for points position
		const oneColWith = halfCanvasWidth / 2;
		for(let i = 1; i <= 5; i++) {
			this.cols.push(oneColWith * i)
		}

		// Draw the circle of the start screen
		this.draw()

		this.before_play_animation = window.requestAnimationFrame(this.beforePlayAnimation)
		this.play_animation = window.requestAnimationFrame(this.playAnimation)
	}
}