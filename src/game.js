
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
        this.human = new Human(this);
        // this.burger = new Burger(this);
        new InputHandler(this.human, this);
        this.gameObjects = [];
        this.gamestate = GAMESTATE.MENU;


    }

    start() {

        let burgers = buildLevel(this, level1)        
        this.gameObjects = [
            ...burgers,
            this.human
        ];
        this.gamestate = GAMESTATE.RUNNING;

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
        if (this.gamestate === GAMESTATE.PAUSED || 
            this.gamestate === GAMESTATE.MENU) 
            return;

        this.gameObjects.forEach((object) => object.update(deltaTime));

        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion)

    }

    draw(ctx) {
        ctx.font = "50px Germania One";
        ctx.fillText(`Score: ${this.score}`, this.gameWidth/ 2, this.gameHeight - 700)
        this.gameObjects.forEach((object) => object.draw(ctx))
        
        if (this.gamestate == GAMESTATE.PAUSED) {
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.9)";
            ctx.fill();

            ctx.font = "30px Arial"
            ctx.fillStyle = "white"

            ctx.textAlign = "center"
            ctx.fillText("The Game Is Paused. To Resume, Press P", this.gameWidth / 2, this.gameHeight/ 2)

        }


         if (this.gamestate === GAMESTATE.MENU) {
           ctx.rect(0, 0, this.gameWidth, this.gameHeight);
           ctx.fillStyle = "rgba(0,0,0,1)";
           ctx.fill();

           ctx.font = "30px Arial";
           ctx.fillStyle = "white";

           ctx.textAlign = "center";
           ctx.fillText(
             "Press ENTER To Start",
             this.gameWidth / 2,
             this.gameHeight / 2
           );
         }



        if (this.gamestate == GAMESTATE.RUNNING) {
            ctx.fillStyle = "black";

        }

    }




}