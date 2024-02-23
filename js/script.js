const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const size = 20;

const snake = [
    { x: 200, y: 200 }
    { x: 220, y: 200 }
]

const drawSnake = () => {
    ctx.fillStyle = "#ddd"
    ctx.fillRect(snake[0].x, snake[0].y, size, size);
}

drawSnake()