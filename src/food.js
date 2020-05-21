export default class Food {

    constructor(gameWidth,gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 150;
        this.height = 150;

        this.position = {
          x: gameWidth / 2 - this.width /2,
          y: gameHeight - this.height -50
        };


        this.maxSpeed = 5;
        this.VmaxSpeed = 2;

        this.speed = 0;
        this.vspeed = 0;
    }

    moveLeft() {
        this.position.x -= 50;
    }

    moveRight() {
        this.position.x += 50;
    }

    moveUp() {
        this.position.y -= 50;
    }

     moveDown() {
        this.position.y += 50;
    }




    draw(ctx) {
        ctx.fillStyle = '#f00'
        ctx.fillRect(this.position.x, this.position.y, this.width,this.height)
    }

    update (deltaTime) {
        if (!deltaTime) return;

        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth) 
        this.position.x = this.gameWidth- this.width;

        if (this.position.y < 0) this.position.y = 0;
        if (this.position.y + this.height > this.gameHeight)
          this.position.y = this.gameHeight - this.height;


    }


}