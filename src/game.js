
import Human from "./human";
import InputHandler from "./input";
import Burger from "./burger";

import {buildLevel, level1, level2, level3} from './levels'

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4,
    WINNER: 5

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
        this.burgers = [];
        this.gamestate = GAMESTATE.MENU;


        this.levels = [level1, level2, level3]
        this.currentLevel = 0;


    }

    start() {

        if (this.gamestate !== GAMESTATE.MENU &&
            this.gamestate !== GAMESTATE.NEWLEVEL) return;

        this.burgers = buildLevel(this, this.levels[this.currentLevel]);        
        this.gameObjects = [
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

    // reset() {
    //     this.human.width = 40;
    //     this.human.height = 40;
    //     this.human.ma
    // }

    update(deltaTime) {

        


        if (this.gamestate === GAMESTATE.PAUSED || 
            this.gamestate === GAMESTATE.MENU ||
            this.gamestate === GAMESTATE.GAMEOVER)
            return;

            if (this.burgers.length === 0 && this.currentLevel < 4) {
                this.currentLevel +=1;
                this.gamestate = GAMESTATE.NEWLEVEL;
                // this.human.maxSpeed /= 4;
                this.human.width -= 5;
                this.human.height -= 5;
                this.start();
            }
        if (this.currentLevel === 4) {
            this.gamestate = GAMESTATE.WINNER
        }


        [...this.gameObjects, ...this.burgers].forEach((object) => object.update(deltaTime));

        this.burgers = this.burgers.filter(burger => !burger.markedForDeletion)
        // console.log(this.gameObjects);

        
    }

    draw(ctx) {
        [...this.gameObjects, ...this.burgers].forEach((object) => object.draw(ctx));
        
        if (this.gamestate == GAMESTATE.PAUSED) {
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.9)";
            ctx.fill();
            
            ctx.font = "30px Arial"
            ctx.fillStyle = "white"
            
            ctx.textAlign = "center"
            ctx.fillText("The Game Is Paused. To Resume, Press P", this.gameWidth / 2, this.gameHeight/ 2)
            
        }
        ctx.font = "50px Germania One";
        ctx.fillText(`Burgers Left: ${this.burgers.length}`, this.gameWidth/ 2, this.gameHeight - 700);
        
        
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

         
         if (this.gamestate === GAMESTATE.GAMEOVER) {
           ctx.rect(0, 0, this.gameWidth, this.gameHeight);
           ctx.fillStyle = "rgba(0,0,0,1)";
           ctx.fill();

           ctx.font = "30px Arial";
           ctx.fillStyle = "white";

           ctx.textAlign = "center";
           ctx.fillText(
             "GAME OVER",
             this.gameWidth / 2,
             this.gameHeight / 2
           );
         }

         if (this.gamestate === GAMESTATE.WINNER) {
           ctx.rect(0, 0, this.gameWidth, this.gameHeight);
           ctx.fillStyle = "rgba(0,0,0,1)";
           ctx.fill();

           ctx.font = "30px Arial";
           ctx.fillStyle = "white";

           ctx.textAlign = "center";
           ctx.fillText("CONGRATS! YOU WON!", this.gameWidth / 2, this.gameHeight / 2);
         }



        if (this.gamestate == GAMESTATE.RUNNING) {
            ctx.fillStyle = "black";

        }

    }




}