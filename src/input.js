export default class InputHandler {

    constructor(food) {

        document.addEventListener('keydown', event => {
            
            switch (event.keyCode) {
              case 32:
                food.eat();
                break;
              case 37:
                food.moveLeft();
                break;
              case 38:
                food.moveUp();
                break;
              case 39:
                food.moveRight();
                break;
              case 40:
                food.moveDown();
                break;
            }
        });
        document.addEventListener("keyup", (event) => {
          switch (event.keyCode) {
            case 37:
              if(food.xspeed < 0) food.stopX();
              break;
            case 38:
              if (food.yspeed < 0) food.stopY();
              break;
            case 39:
             if (food.xspeed > 0) food.stopX();
              break;
            case 40:
              if (food.yspeed > 0) food.stopY();
              break;
          }
        });

    }



}