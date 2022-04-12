console.log('hello');
var field = new Array(4);
for (var j = 0; j < 4; j++) {
    field[j] = new Array(4);
}
window.addEventListener("load", init);
//redraw();
window.addEventListener("keydown", keyPress);
function init() {
    addNewNumber(2);
    addNewNumber(2);
    addNewNumber(4);
     /*field[0][0] = 2;
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
    var t, changed = false;
    console.log('hello');
    if (event.key === 'ArrowLeft') {//move tiles to the left
        for (var i = 0; i < 4; i++) {
            t = 0;
            for (var j = 1; j < 4 && t < 4; ) {
                if (field[i][j]) {
                    if (!field[i][t]) {
                        changed = true;
                        field[i][t] = field[i][j];
                        field[i][j] = 0;
                        j++;
                    } else if (field[i][j] === field[i][t]) {
                        changed = true;
                        field[i][t] = field[i][t] * 2;
                        field[i][j] = 0;
                        j++;
                        t++;
                    } else {
                        t++;
                        if (t >= j) {
                            j++;
                        }
                    }
                } else {
                    j++;
                }
            }
        }
    }
    if (event.key === 'ArrowRight') {//move tiles to the right
        for (var i = 0; i < 4; i++) {
            t = 3;
            for (var j = 2; j > -1 && t > -1; ) {
                if (field[i][j]) {
                    if (!field[i][t]) {
                        changed = true;
                        field[i][t] = field[i][j];
                        field[i][j] = 0;
                        j--;
                    } else if (field[i][j] === field[i][t]) {
                        changed = true;
                        field[i][t] = field[i][t] * 2;
                        field[i][j] = 0;
                        j--;
                        t--;
                    } else {
                        t--;
                        if (t <= j) {
                            j--;
                        }
                    }
                } else {
                    j--;
                }
            }
        }
    }
  
     if (event.key === 'ArrowDown') {
         for (var i = 0; i < 4; i++) {
            t = 3;
            for (var j = 2; j > -1 && t > -1; ) {
                if (field[j][i]) {
                    if (!field[t][i]) {
                        changed = true;
                        field[t][i] = field[j][i];
                        field[j][i] = 0;
                        j--;
                    } else if (field[j][i] === field[t][i]) {
                        changed = true;
                        field[t][i] = field[t][i] * 2;
                        field[j][i] = 0;
                        j--;
                        t--;
                    } else {
                        t--;
                        if (t <= j) {
                            j--;
                        }
                    }
                } else {
                    j--;
                }
            }
        }
     }
     if (event.key === 'ArrowUp') {//move tiles to the left
        for (var i = 0; i < 4; i++) {
            t = 0;
            for (var j = 1; j < 4 && t < 4; ) {
                if (field[j][i]) {
                    if (!field[t][i]) {
                        changed = true;
                        field[t][i] = field[j][i];
                        field[j][i] = 0;
                        j++;
                    } else if (field[j][i] === field[t][i]) {
                        changed = true;
                        field[t][i] = field[t][i] * 2;
                        field[j][i] = 0;
                        j++;
                        t++;
                    } else {
                        t++;
                        if (t >= j) {
                            j++;
                        }
                    }
                } else {
                    j++;
                }
            }
        }
    }
   if (changed) {
        addNewNumber(2);
        redraw();
    }    
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