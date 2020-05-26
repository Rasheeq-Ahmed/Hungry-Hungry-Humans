export default class Human {

    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.width = 300;
        this.height = 20;

        this.position = {
          x: game.gameWidth / 2 - this.width /2,
          y: game.gameHeight - this.height -50
        };


        this.maxSpeed = 5;
        this.VmaxSpeed = 2;

        this.speed = 0;
        this.vspeed = 0;
    }

    moveLeft() {
        this.position.x -= 10;
    }

    moveRight() {
        this.position.x += 10;
    }

    moveUp() {
        this.position.y -= 10;
    }

     moveDown() {
        this.position.y += 10;
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



    draw(ctx) {
        ctx.fillStyle = '#f00'
        ctx.fillRect(this.position.x, this.position.y, this.width,this.height)
    }

    update (deltaTime) {

        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth) 
        this.position.x = this.gameWidth- this.width;

        if (this.position.y < 0) this.position.y = 0;
        if (this.position.y + this.height > this.gameHeight)
          this.position.y = this.gameHeight - this.height;


    }


}