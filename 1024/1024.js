console.log('hello');
var field = new Array(4);
for (var j = 0; j < 4; j++) {
    field[j] = new Array(4);
}
window.addEventListener("load", init);
//redraw();
window.addEventListener("keydown", keyPress);
function init() {
    field[0][3] = 2;
    /*field[0][2] = 4;
    field[0][1] = 2;
    field[0][0] = 2;
    field[1][3] = 2;
    field[1][2] = 4;
    field[1][1] = 2;
    field[1][0] = 2;
    field[2][3] = 2;
    field[2][2] = 4;
    field[2][1] = 2;
    field[2][0] = 2;
    field[3][3] = 2;
    field[3][2] = 4;
    field[3][1] = 2;
    field[3][0] = 2;*/
    redraw();
    //putNumber(Math.floor(Math.random() * 15), 2);
}


function putNumber(tileNumber, value) {
    var tile = document.getElementById('tile' + tileNumber);
    //console.log('tile' + tileNumber);
    if (!value) {
        tile.innerHTML = '';
    } else {
        tile.innerHTML = value;
    }
}

function keyPress(event) {
    var t;
    console.log('hello');
    if (event.key === 'ArrowLeft') {//move tiles to the left
        for (var i = 0; i < 4; i++) {
            t = 0;
            for (var j = 1; j < 4 && t < 4; ) {
                if (field[i][j]) {
                    if (!field[i][t]) {
                        field[i][t] = field[i][j];
                        field[i][j] = 0;
                        j++;
                    } else if (field[i][j] === field[i][t]) {
                        field[i][t] = field[i][t] * 2;
                        field[i][j] = 0;
                        j++;
                        t++;
                    } else {
                        t++;
                        if (t >= j){
                            j++;
                        }
                    }
                } else {
                    j++;
                }
            }
        }
    }
    if (event.key === 'ArrowRight') {//move tiles to the left
        for (var i = 0; i < 4; i++) {
            t = 0;
            for (var j = 1; j < 4 && t < 4; ) {
                if (field[i][j]) {
                    if (!field[i][t]) {
                        field[i][t] = field[i][j];
                        field[i][j] = 0;
                        j++;
                    } else if (field[i][j] === field[i][t]) {
                        field[i][t] = field[i][t] * 2;
                        field[i][j] = 0;
                        j++;
                        t++;
                    } else {
                        t++;
                        if (t >= j){
                            j++;
                        }
                    }
                } else {
                    j++;
                }
            }
        }
    }
addNewNumber(2);
        redraw();
}

function redraw() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            putNumber('' + i + j, field[i][j]);
        }
    }
}


function addNewNumber(number) {
    var count = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (!field[i][j]) {
                count++;

            }
        }
    }
    if (count === 0) {
        return;
    }
    var randomNumber = Math.floor(Math.random() * (count - 1));
    //  console.log(randomNumber + ' ' + count);
    count = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (!field[i][j]) {
                if (count === randomNumber) {
                    field[i][j] = number;
                    return;
                }
                count++;
            }
        }
    }    //every time you call NewNumber a new number only apears in an empty cell
}