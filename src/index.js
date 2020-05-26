import Game from "./game";


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 600;
const GAME_HEIGHT = 750



let game = new Game(GAME_WIDTH, GAME_HEIGHT);





let lastTime = 0;




//images


// let background = document.getElementById("img_background");




function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    // ctx.drawImage(background,0,0)
    
    game.update(deltaTime);
    game.draw(ctx);
    


    requestAnimationFrame(gameLoop)

}


requestAnimationFrame(gameLoop);
