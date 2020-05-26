
import Human from "./human";
import InputHandler from "./input";
import Burger from "./burger";
import Mouth from './mouth';



export default class Game {

    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth
        this.gameHeight = gameHeight

        this.score = 0;

    }

    start() {
        this.human = new Human(this);
        this.burger = new Burger(this);
        let mouth = new Mouth(this, {x: 20, y: 20})

        let mouths = []

    

        this.gameObjects = [
            this.burger,
            this.human,
            mouth
        ]

        new InputHandler(this.human);
    }


    update(deltaTime) {
      

            this.gameObjects.forEach((object) => object.update(deltaTime));

    }

    draw(ctx) {

            this.gameObjects.forEach((object) => object.draw(ctx))

    }




}