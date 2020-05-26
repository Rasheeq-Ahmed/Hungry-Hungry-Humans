export default class InputHandler {

    constructor(human,game) {

        document.addEventListener('keydown', event => {
            
            switch (event.keyCode) {
              case 32:
                human.eat();
                break;
              case 37:
                event.preventDefault();

                human.moveLeft();
                break;
              case 38:
                event.preventDefault();

                human.moveUp();
                break;
              case 39:
                event.preventDefault();

                human.moveRight();
                break;
              case 40:
                event.preventDefault();

                human.moveDown();
                break;
              case 80:
                event.preventDefault();
                game.togglePause();
                break;
            //   case 82:
            //     game.menu();
            //     break;
              case 13:
                game.start();
                break;
            }
        });
        document.addEventListener("keyup", (event) => {
          switch (event.keyCode) {
            case 37:
                event.preventDefault();
              if(human.xspeed < 0) human.stopX();
              break;
            case 38:
              if (human.yspeed < 0) human.stopY();
              break;
            case 39:
                event.preventDefault();

             if (human.xspeed > 0) human.stopX();
              break;
            case 40:
                event.preventDefault();

              if (human.yspeed > 0) human.stopY();
              break;
          }
        });

    }



}