export default class Human {

    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.width = 20;
        this.height = 20;

        this.position = {
          x: game.gameWidth / 2 - this.width /2,
          y: game.gameHeight - this.height -50
        };


        this.maxSpeed = 5;

        this.xspeed = 0;
        this.yspeed = 0;
    }

    moveLeft() {
        this.xspeed = -this.maxSpeed;
    }

    moveRight() {
        this.xspeed = this.maxSpeed;
    }

    moveUp() {
        this.yspeed = -this.maxSpeed;
    }

     moveDown() {
        this.yspeed = this.maxSpeed;
    }

    eat() {
        if (this.width != 0 || this.height != 0) {
            this.width -= 10;
            this.height -= 10;
        }

        if (this.width == 0 && this.height == 0) {
            alert("GAME OVER/NEXT LEVEL");
        }
        
    }
    stopX (){
        this.xspeed = 0;
    }
    stopY() {
        this.yspeed = 0;
    }
    draw(ctx) {
        // ctx.fillStyle = '#f00'
        // ctx.fillRect(this.position.x, this.position.y, this.width,this.height)
        ctx.font = "20px Arial"
        ctx.fillText("👅", this.position.x, this.position.y)
    }

    update (deltaTime) {
        this.position.x += this.xspeed;
        this.position.y += this.yspeed;


        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth) 
        this.position.x = this.gameWidth - this.width;

        if (this.position.y < 0) this.position.y = 0;
        if (this.position.y + this.height > this.gameHeight)
          this.position.y = this.gameHeight - this.height;


    }


}