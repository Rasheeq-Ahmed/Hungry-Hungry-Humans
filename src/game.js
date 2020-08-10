
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
        this.health = document.getElementById("health")
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
        // this.health.value -= 10;
        // this.health.max -= 10;

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

    //     menu() {
    //     this.gamestate = GAMESTATE.MENU;
    //     this.health.value = 100;
    // }

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
                this.human.maxSpeed /= 3;
                this.human.width -= 5;
                this.human.height -= 5;
                this.health.value = 100;
                this.start();

            }
            this.health.value -= 0.04;


        if (this.health.value === 0) {
            this.gamestate = GAMESTATE.GAMEOVER;
        }
        if (this.currentLevel === 4) {
            this.gamestate = GAMESTATE.WINNER;
            this.health.value = 100;

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
             "Eat All The Burgers Before Times Up. ",
             this.gameWidth / 2,
             this.gameHeight / 8);
             ctx.fillText(
               "Arrow Keys to Move, P to Pause. ",
               this.gameWidth / 2,
               this.gameHeight / 5
             );




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
             "Game Over! Refresh Page To Try Again",
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
           ctx.fillText("Refresh Page To Play Again", this.gameWidth / 2, this.gameHeight / 1.7);
         }



        if (this.gamestate == GAMESTATE.RUNNING) {
            ctx.fillStyle = "black";

        }

    }




}