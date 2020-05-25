import Food from './food'
import InputHandler from './input';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600



let food = new Food(GAME_WIDTH,GAME_HEIGHT);

food.draw(ctx);

let lastTime = 0;



new InputHandler(food);

//images

let imgBurger = document.getElementById("img_burger");







function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, 800, 600);
       
    food.update(deltaTime)

    food.draw(ctx)
    ctx.drawImage(imgBurger, 200, 200, 100, 100);


    requestAnimationFrame(gameLoop)

}


gameLoop();