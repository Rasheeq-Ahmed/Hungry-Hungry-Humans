export default class InputHandler {

    constructor(human,game) {

        document.addEventListener('keydown', event => {
            
            switch (event.keyCode) {
              case 32:
                human.eat();
                break;
              case 37:
                human.moveLeft();
                break;
              case 38:
                human.moveUp();
                break;
              case 39:
                human.moveRight();
                break;
              case 40:
                human.moveDown();
                break;
              case 80:
                game.togglePause();
                break;
            }
        });
        document.addEventListener("keyup", (event) => {
          switch (event.keyCode) {
            case 37:
              if(human.xspeed < 0) human.stopX();
              break;
            case 38:
              if (human.yspeed < 0) human.stopY();
              break;
            case 39:
             if (human.xspeed > 0) human.stopX();
              break;
            case 40:
              if (human.yspeed > 0) human.stopY();
              break;
          }
        });

    }



}