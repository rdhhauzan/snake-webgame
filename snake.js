var scoreDisplayElem = document.querySelector('.scoreboard');
var hiscoreDisplayElem = document.querySelector('.hi');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var paused = false;
var grid = 16;
var count = 0;

function resetSnake() {
    var snake = {
        x: 160,
        y: 160,
        dx: grid,
        dy: 0,
        cells: [],
        maxCells: 4, // Length of snake, Grow when eating apple
    };
    return snake;
}