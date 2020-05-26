import { detectCollision} from './collision'


export default class Burger {

    constructor(game) {
        this.image = document.getElementById('img_burger');

        this.gameWidth = game.gameWidth;

        this.gameHeight = game.gameHeight;

        this.game = game;


        this.position = {
          x: Math.floor(Math.random() * 700 ),
          y: Math.floor(Math.random() * 500)
        };

        this.speed = {
        //   x: Math.floor(Math.random() * 8),
        //   y: Math.floor(Math.random() * 7),
        x: 0,
        y: 0
        };

        this.size = 50;
        this.markedForDeletion = false;

    }


    draw(ctx) {
        ctx.drawImage(this.image, 
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size);
    }


    update(deltaTime) { 
        this.position.x += this.speed.x;
        
        this.position.y += this.speed.y;

        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }




        if (detectCollision(this, this.game.human))  {

            // this.speed.y = -this.speed.y
            // this.speed.x = -this.speed.x
            // this.position.y = this.game.human.position.y - this.size;
            this.markedForDeletion = true;
            this.game.score+= 1
        }


    }







}