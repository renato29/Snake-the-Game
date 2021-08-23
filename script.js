let canvas = document.getElementById('snake');
let context = canvas.getContext("2d");
let box = 32; 
let snake = [];

snake[0]={
    x: 8 * box ,
    y: 8 * box
}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect (0, 0, 16 * box, 16 * box);
}

function createSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box ,box )
        
    }
}

function startGame() {
    criarBG();
    createSnake();

    let snakeX=snake[0].x;
    let snakeY=snake[0].y;

    if (direction == 'right') snake+=box;
    if (direction == 'left') snake+=box;
    if (direction == 'up') snake+=box;
    if (direction == 'down') snake+=box;
        
    snake.pop();
    let newHead = { 
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let game = setInterval(startGame,100)