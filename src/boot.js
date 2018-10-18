"use strict"

import { canvas, Core, halfCanvasHeight, halfCanvasWidth, scale } from './core'
const { drawRect, drawImage, drawText, drawCircle , loadImg} = Core;
import $ from  'jquery';

/**
 * Credits page class
 */
export default class Boot {

    VISIBILITY_DURATION = 1500
    HIDE_ANIMATION_DURATION = 1000

    VOODOO_LOGO_HEIGHT = 85
    VOODOO_LOGO_WIDTH = 300
    BENTO_LOGO_HEIGHT = 85
    BENTO_LOGO_WIDTH = 150

    LIGHT_FONT_SIZE = 33
    BOLD_FONT_SIZE = 48
    CIRCLE_RADIUS = 10

    framesPerSecond = 60
    bestScore = 0;

    blackBlock = {
        x: 0,
        y: 0
    }

    whiteBlock = {
        x: 0,
        y: (canvas.height/2)
    }

    constructor() {
        console.log(window.btoa('http://localhost:3000/'));
        var arr = [];
        var n = 0;//帧数
        for(var i=0;i<75;i++){
            var pathOne = 'static/assets/page/'+i+'.png';
            arr.push(pathOne); 
        }
        loadImg(arr,74);

        function drawAni(){
            drawImage(
                0,
                0,
                arr[n],
                canvas.width,
                canvas.height
            )
            n++;
        }

        var ani = setInterval(function(){
            if(n>74){
                clearInterval(ani);
                drawImage(
                    0,
                    0,
                    'static/assets/bg.png',
                    canvas.width,
                    canvas.height
                )
        
                //绘制首页头顶
                drawImage(
                    0,
                    0,
                    'static/assets/p1-t1.png',
                    canvas.width,
                    canvas.width / 1.953
                )
                $(".beeBox").fadeIn(1000);
            }else{
                drawAni();
            }
            console.log(n)
        },1000/20)

        var arr2 = [];
            for(var i=1;i<210;i++){
                var pathOne = 'static/assets/course/'+i+'.png';
                arr2.push(pathOne); 
            }
            loadImg(arr2,208);


        // this.voodooLogo = {
        //     x: halfCanvasWidth - ((this.VOODOO_LOGO_WIDTH * scale) / 2),
        //     y: (halfCanvasHeight / 2) - ((this.VOODOO_LOGO_HEIGHT * scale) / 2)
        // }

        // this.bentoLogo = {
        //     x: halfCanvasWidth - ((this.BENTO_LOGO_WIDTH * scale) / 2),
        //     y: ((halfCanvasHeight / 2) * 3) - ((this.BENTO_LOGO_HEIGHT * scale) / 2)
        // }

    }

    /**
     * Display the boot state the first time
     */
    display() {

        // Preload fonts because preload seems not working on chrome :'(
        drawText(0, -200, 1, 'black', 'Montserrat-Thin', 'a')
        drawText(0, -200, 1, 'black', 'Montserrat-Regular', 'a')


        if(localStorage.key('bestScore') !== null) {
            this.bestScore = localStorage.getItem('bestScore')
        }

        this.draw()
        return Promise.resolve()
    }

    /**
     * Hide the boot state with animation
     */
    hide() {
        this.hide_animation = window.requestAnimationFrame(this.hideAnimation)
    }

    hideAnimation = (timestamp) => {

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
    }

    draw() {
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
    }

    drawStartScreen() {
        
        // drawText(
        //     halfCanvasWidth - (50*scale), 
        //     halfCanvasHeight - (55*scale) - (canvas.height/4), 
        //     this.LIGHT_FONT_SIZE * scale, 
        //     'white', 
        //     'Montserrat-Thin', 
        //     'Snake'
        // )
        // drawText(halfCanvasWidth - (35*scale), 
        //     halfCanvasHeight - (canvas.height/4), 
        //     this.BOLD_FONT_SIZE * scale, 
        //     'white', 
        //     'Montserrat-Regular', 
        //     'VS'
        // )
        // drawText(halfCanvasWidth - (45*scale), 
        //     halfCanvasHeight + (45 * scale) - (canvas.height/4), 
        //     this.LIGHT_FONT_SIZE * scale, 
        //     'white', 
        //     'Montserrat-Thin', 
        //     'Block'
        // )

        // drawText(
        //     halfCanvasWidth - (4*scale), 
        //     (halfCanvasHeight + canvas.height/6) - (20*scale),
        //      14 * scale, 
        //      'white', 
        //      'Montserrat-Regular', 
        //      '4')

        // // drawCircle(
        // //     halfCanvasWidth, 
        // //     halfCanvasHeight + canvas.height/6, 
        // //     this.CIRCLE_RADIUS * scale, 
        // //     `rgb(255, 204, 0)`
        // // );
        // drawImage(
        //     halfCanvasWidth,
        //     halfCanvasHeight + canvas.height/6,
        //     'static/assets/bee.png',
        //     50,
        //     50
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
    }
}