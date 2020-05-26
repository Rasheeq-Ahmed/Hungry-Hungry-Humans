
import Human from "./human";
import InputHandler from "./input";
import Burger from "./burger";

import {buildLevel, level1} from './levels'

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {

    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth
        this.gameHeight = gameHeight

        this.score = 0;

    }

    start() {

        this.gamestate = GAMESTATE.RUNNING;
        this.human = new Human(this);

        
        this.burger = new Burger(this);
        // let SCORE = 0;
        // let LEVEL = 1;
        // const MAX_LEVEL = 5
        let burgers = buildLevel(this, level1)

        // for (let i= 0; i < 5; i++) {
        //     burgers.push(new Burger(this))
        // }

        
        this.gameObjects = [
            ...burgers,
            this.human,
            
        ]

        new InputHandler(this.human, this);
    }


    // showGameStats(text, textX, textY, label) {
    //     ctx.fillStyle = '#FFF';
    //     ctx.font = "20px Arial";
    //     ctx.fillText(text, textX, textY)

    // }

    togglePause() {
        if (this.gamestate == GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        }
    }

    update(deltaTime) {
        if (this.gamestate == GAMESTATE.PAUSED) return;

        this.gameObjects.forEach((object) => object.update(deltaTime));

        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion)

    }

    draw(ctx) {

        this.gameObjects.forEach((object) => object.draw(ctx))

    }




}