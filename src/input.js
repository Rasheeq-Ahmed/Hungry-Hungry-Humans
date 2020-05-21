export default class InputHandler {

    constructor(food) {

        document.addEventListener('keydown', event => {
            
            switch (event.keyCode) {
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
        })

    }



}