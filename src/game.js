"use strict"
import { Core } from './core'
import Boot from './boot'
import Start from './start'
import Play from './play'

const { preload,loadAssets,preloadHomageAssets, preloadTutorialAssets, preloadBeeDieAssets } = Core

export let bestScore = 0;
export let score = 0;
export let availableCircle = 4;

let boot = null;

export default class Game extends Core {

    constructor(canvas) {
        super(canvas)
        
        const scale = window.devicePixelRatio;

        // Set the canvas full screen
        canvas.width = window.innerWidth * scale;
        canvas.height = window.innerHeight * scale;

        canvas.style.width = window.innerWidth + 'px'
        canvas.style.height = document.body.clientHeight + 'px'

        //this.boot = new Boot()
        boot = new Boot();
        this.start = new Start()
        this.play = new Play()

        this.init()
    }

    async init() {

        // Display the boot state
        //boot.display()
        // During the boot state preload assets
        await preload()
        await this.loadHomePageAssets()

        // Sleep until the visibility duration of the boot state
        await sleep(boot.VISIBILITY_DURATION)
        // Hide the boot state
        //boot.hide()
        // Wait the end of the animation
        await sleep(boot.HIDE_ANIMATION_DURATION)
        // Show the start menu
        this.start.show(this.play.run.bind(this.play))

        setTimeout(this.loadHomePageAssetsFinished, 3000);
        setTimeout(this.loadBeeDieAssetsFinished, 6000);
    }

    async loadHomePageAssets()
    {
        loadAssets();
        preloadHomageAssets(function(progress){
            //console.log("=============preload" + progress);
            boot.drawLoadingProcess(parseInt(progress*100));

            if(progress > 0.98)
            {
                //preloadTutorialAssets(function(progress){},function(){});
            }
        }, function(){
            //console.log('============all content loaded!');

            boot.display();

        })
    }

    async loadHomePageAssetsFinished()
    {
        preloadTutorialAssets(function(progress){},function(){});
    }


    async loadBeeDieAssetsFinished()
    {
        preloadBeeDieAssets(function(progress){},function(){});
    }

}

/**
 * Suspends the execution until the time-out interval elapses
 * @param {integer} ms Milliseconds to sleep
 */
async function sleep(ms) {
    return new Promise(async (resolve) => {
        await setTimeout(resolve, ms);
    })
}