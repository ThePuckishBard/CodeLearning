const gridSize = 15;
const stepsDelay = 250;
var grid = new Array(gridSize);
for (var j = 0; j < grid.length; j++) {
    grid[j] = new Array(gridSize);
}
//console.log(grid);
var direction = 0, nextDirection = 0;

document.addEventListener("keydown", keyPressed);

var headX = 5, headY = 5, tailX = 5, tailY = 7;
grid[5][5] = 3;
grid[5][6] = 2;
grid[5][7] = 1;

grid[10][5] = -1;
grid[14][14] = -1;


console.log('hello');

var canvas = document.getElementById('game-field');
var context = canvas.getContext("2d");
//context.fillRect(0,0,gridSize, gridSizeH);
redraw();
setTimeout(move, stepsDelay);

//https://www.w3schools.com/tags/canvas_fillrect.asp

function redraw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var cellH = canvas.height / gridSize, cellW = canvas.width / gridSize;
    for (var x = 0; x < grid.length; x++) {
        for (var y = 0; y < grid[x].length; y++) {
            if (grid[x][y]) {
                if (grid[x][y] > 0) {
                    context.fillStyle = "rgba(0,128,0,1)";
                    context.fillRect(x * cellW + 1, y * cellH + 1, cellW, cellH);
                } else if (grid[x][y] === -1) {
                    context.fillStyle = "rgba(255,0,0,1)";
                    context.fillRect(x * cellW + 1, y * cellH + 1, cellW, cellH);
                }
            }
        }
    }
}

function keyPressed(event) {
    if (event.key === 'ArrowUp') {
        if (direction % 2 !== 0) {
            nextDirection = 0;
        }
    }
    if (event.key === 'ArrowRight') {
        if (direction % 2 === 0) {
            nextDirection = 1;
        }
    }
    if (event.key === 'ArrowDown') {
        if (direction % 2 !== 0) {
            nextDirection = 2;
        }
    }
    if (event.key === 'ArrowLeft') {
        if (direction % 2 === 0) {
            nextDirection = 3;
        }
    }
    console.log(event.key);
}

function move() {
    var fail = false;
    direction = nextDirection;
    if (direction === 0) {
        if (headY === 0) {
            fail = true;
        } else if (grid[headX][headY - 1] === -1) {
            grid[headX][headY - 1] = grid[headX][headY] + 1;
            randomDot();
        } else if (grid[headX][headY - 1]) {
            fail = true;
        } else {
            moveSnake(headX, headY, headX, headY - 1);
        }
        headY = headY - 1;
    }
    if (direction === 1) {
        if (headX === gridSize - 1) {
            fail = true;
        }else if (grid[headX + 1][headY] === -1) {
            grid[headX + 1][headY] = grid[headX][headY] + 1;
            randomDot();
        } else if (grid[headX + 1][headY]) {
            fail = true;
        } else {
            moveSnake(headX, headY, headX + 1, headY);
        }
        headX = headX + 1;
    }
    if (direction === 2) {
        if (headY === gridSize - 1) {
            fail = true;
        }else if (grid[headX][headY + 1] === -1) {
            grid[headX][headY + 1] = grid[headX][headY] + 1;
            randomDot();
        } else if (grid[headX][headY + 1]) {
            fail = true;
        } else {
            moveSnake(headX, headY, headX, headY + 1);
        }
        headY = headY + 1;
    }
    if (direction === 3) {
        if (headX === 0) {
            fail = true;
        }else if (grid[headX - 1][headY] === -1) {
            grid[headX - 1][headY] = grid[headX][headY] + 1;
            randomDot();
        } else if (grid[headX - 1][headY]) {
            fail = true;
        } else {
            moveSnake(headX, headY, headX - 1, headY);
        }
        headX = headX - 1;
    }
    redraw();
    if (!fail) {
        setTimeout(move, stepsDelay);
    }
}

function moveSnake(xOld, yOld, x, y) {
    //console.log('xOld = ' + xOld +  ' yOld = ' + yOld + ' x = ' + x + ' y = ' + y);
    var n = grid[xOld][yOld];
    grid[x][y] = n;
    if (n === 1) {
        grid[xOld][yOld] = 0;
    } else {
        if (xOld > 0 && grid[xOld - 1][yOld] === n - 1) {
            moveSnake(xOld - 1, yOld, xOld, yOld);
        }
        if (yOld > 0 && grid[xOld][yOld - 1] === n - 1) {
            moveSnake(xOld, yOld - 1, xOld, yOld);
        }
        if (xOld + 1 < gridSize && grid[xOld + 1][yOld] === n - 1) {
            moveSnake(xOld + 1, yOld, xOld, yOld);
        }
        if (yOld + 1 < gridSize && grid[xOld][yOld + 1] === n - 1) {
            moveSnake(xOld, yOld + 1, xOld, yOld);
        }
    }
}

function randomDot() {
    var x = Math.floor(Math.random() * gridSize);
    var y = Math.floor(Math.random() * gridSize);
    console.log('x = ' + x + ' y = ' + y + ' grid value = ' + grid[x][y]);
    if (!grid[x][y]) {
        grid[x][y] = -1;
    } else {
        randomDot();
    }
}
