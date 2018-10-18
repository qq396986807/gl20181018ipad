
import { Component } from 'react'
import Head from 'next/head'
import Game from '../src/game'
import $ from  'jquery'

export default class extends Component {

    componentDidMount() {
        // Client-side
        if(typeof window !== 'undefined') {

            window.requestAnimFrame = window.requestAnimationFrame 
                || window.webkitRequestAnimationFrame 
                || window.mozRequestAnimationFrame 
                || window.oRequestAnimationFrame 
                || window.msRequestAnimationFrame 
                || function(requestID) {
                    window.setTimeout(requestID, 1000 / 60);
                };

            window.cancelAnimationFrame = window.cancelAnimationFrame
                || window.mozCancelAnimationFrame
                || function(requestID){clearTimeout(requestID)};
                 
            
            const game = new Game(this.canvas)
        }
        //点击排行榜
        $(".rank,.rank2").click(function(){
            $(".mask").fadeIn(500);
            $(".rankBox").fadeIn(500);
        })

        //点击遮罩消失
        $(".mask").click(function(){
            $(".mask").fadeOut(500);
            $(".rankBox").fadeOut(500);
        })
    }

    render() {
        return (
            <div className="gameContainer">
                <Head>
                    <title>黄蜂大作战</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="preload" href="/static/fonts/Montserrat-Light.ttf" as="font" />
                    <link rel="preload" href="/static/fonts/Montserrat-Thin.ttf" as="font" />
                </Head>
                <canvas
                    ref={c => this.canvas = c}
                    height="450"
                    width="600"
                />
                <div className='mask'></div>
                <div className='rankBox'>
                    <img className='off' src='/static/assets/off.png' alt='' />
                    <p className='rankTitle'>排行榜</p>
                    <p className='rankExplain'>排行榜说明排行榜说明排行榜说明排行榜说明排行榜说明排行榜说明</p>
                    <p className='myScore'>我的得分：10000</p>
                    <div className='rankList'>
                        <p>name:10000</p>
                        <p>name:10000</p>
                        <p>name:10000</p>
                        <p>name:10000</p>
                        <p>name:10000</p>
                        <p>name:10000</p>
                        <p>name:10000</p>
                        <p>name:10000</p>
                        <p>name:10000</p>
                        <p>name:10000</p>
                    </div>
                </div>
                <div className='beeBox'>
                    <div className='play'></div>
                    <div className='rank'></div>
                    <div className='rule'></div>
                </div>
                <div className='palyAgainBox'>
                    <div className='frendScore'>
                        <p>name:10000</p>
                        <p>name:10000</p>
                        <p>name:10000</p>
                        <p>name:10000</p>
                        <p>name:10000</p>
                        <p>name:10000</p>
                    </div>
                    <div className='playAgainBg'>
                        <div className='playAgain'></div>
                        <div className='rank2'></div>
                        <div className='rule2'></div>
                    </div>
                </div>
                <style jsx global>
                    {`
                        html, body {
                            height: 100vh;
                            margin: 0;
                            overflow: hidden;
                            background-color: black;
                        }
                        p{
                            margin: 0;
                            padding: 0;
                        }
                        .off{
                            position: absolute;
                            right: -10%;
                            top: 0;
                            width: 13%;
                            margin-top: -18%;
                        }
                        .beeBox{
                            position: absolute;
                            width: 80%;
                            height: 99.75vw;
                            left: 10%;
                            top:19%;
                            background-image: url(/static/assets/p1-t2.png);
                            background-repeat: no-repeat;
                            background-size: 100% auto;
                            display:none;
                        }
                        .palyAgainBox{
                            width:80%;
                            height:100vw;
                            position: absolute;
                            left: 10%;
                            top: 32%;
                            border: 1px solid white;
                            display:none;
                        }
                        .frendScore{
                            width: 100%;
                            height: 17vw;
                            position: relative;
                            overflow-y: auto;
                            color: white;
                            text-align: center;
                        }
                        .playAgainBg{
                            width: 100%;
                            height: 44.42vw;
                            position: absolute;
                            background-image: url(/static/assets/playAgain.png);
                            background-repeat: no-repeat;
                            background-size: 100% auto;
                        }
                        .playAgainBg div{
                            margin-left: 15%;
                            width: 70%;
                            border: 1px solid white;
                        }
                        .beeBox div{
                            margin-left: 10%;
                            width: 80%;
                            border: 1px solid white;
                        }
                        .play{
                            margin-top: 81%;
                            height:14%
                        }
                        .playAgain{
                            margin-top: 12%;
                            height: 28%;
                        }
                        .rank{
                            margin-top: 2%;
                            height:9%
                        }
                        .rank2{
                            margin-top: 6%;
                            height: 18%;
                        }
                        .rule{
                            margin-top: 3%;
                            height: 10%;
                        }
                        .rule2{
                            margin-top: 2%;
                            height: 17%;
                        }
                        .mask{
                            width: 100%;
                            height: 100%;
                            position: fixed;
                            left: 0;
                            top: 0;
                            z-index: 100;
                            background-image: url(/static/assets/bg.png);
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            display: none;
                        }
                        .rankList{
                            width:90%;
                            height: 80%;
                            overflow: auto;
                        }
                        .rankList p{
                            margin-top: 5%;
                            color: #edb97b;
                            width: 100%;
                            text-align: center;
                            font-size: 16px;
                            padding: 5px 0;
                        }
                        .myScore{
                            color:#edb97b;
                            width: 100%;
                            text-align: center;
                            font-size: 16px;
                        }
                        .rankBox{
                            width: 80%;
                            height: 80%;
                            position: absolute;
                            z-index: 10001;
                            left: 10%;
                            top:10%;
                            display:none;
                        }
                        .rankTitle{
                            color: #fbe0b2;
                            width: 100%;
                            text-align: center;
                        }
                        .rankExplain{
                            color:#edb97b;
                            width: 100%;
                            text-align: center;
                            font-size: 13px;
                        }
                        .gameContainer {
                            height: 100vh;
                        }

                        @font-face {
                            font-family: "Montserrat-Regular";
                            src: url("/static/fonts/Montserrat-Regular.ttf") format("truetype")
                        }
                        @font-face {
                            font-family: "Montserrat-Light";
                            src: url("/static/fonts/Montserrat-Light.ttf") format("truetype")
                        }
                        @font-face {
                            font-family: "Montserrat-Thin";
                            src: url("/static/fonts/Montserrat-Thin.ttf") format("truetype")
                        }
                    `}
                </style>
            </div>
        )
    }
}