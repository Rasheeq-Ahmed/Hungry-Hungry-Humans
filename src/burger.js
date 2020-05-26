export default class Burger {

    constructor(game) {
        this.image = document.getElementById('img_burger');

        this.gameWidth = game.gameWidth;

        this.gameHeight = game.gameHeight;

        this.game = game;


        this.position = {x: 10, y:10}

        this.speed = {x: 2, y: 2}

        this.size = 50;
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



        let bottomOfBurger = this.position.y + this.size;
        let topSideHuman = this.game.human.position.y;
        let bottomSideHuman = this.game.human.position.y - this.game.human.height;

        let leftSideHuman = this.game.human.position.x;
        let rightSideHuman = this.game.human.position.x + this.game.human.width;

        if(bottomOfBurger >= topSideHuman
            && this.position.x >= leftSideHuman

            && this.position.x  + this.size <= rightSideHuman

            ) {
            this.speed.y = -this.speed.y
            this.position.y = this.game.human.position.y - this.size;
        }


    }







}