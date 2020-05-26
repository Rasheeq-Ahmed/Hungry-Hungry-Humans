export default class Mouth {
    constructor(game, position) {
            this.image = document.getElementById("img_mouth");

            this.game = game;

            this.position = position;

            // this.speed = { x: 2, y: 2 };

            this.width = 52;
            this.height = 24;
    }

    update() {

    }


    draw(ctx) {
        ctx.drawImage(
          this.image,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );

    }





}