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
    redraw();
    //putNumber(Math.floor(Math.random() * 15), 2);
}


function putNumber(tileNumber, value) {
    var tile = document.getElementById('tile' + tileNumber);
    //console.log('tile' + tileNumber);
    tile.setAttribute('class', 'tile');
    if (!value) {
        tile.innerHTML = '';
    } else {
        tile.innerHTML = value;
        tile.classList.add('num' + value);
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

/*function shiftNumbers(dir, spin) {
    var t, changed = false;
    for (var i = 0; i < 4; i++) {
        t = spin < 0 ? 3 : 0;
        for (var j = spin < 0 ? 2 : 1; spin < 0?(j > -1):(j < 4);) {
            if (field[dir?j:i][dir?i:j]) {
                if (!field[dir?t:i][dir?i:t]) {
                    changed = true;
                    field[dir?t:i][dir?i:t] = field[dir?j:i][dir?i:j];
                    field[dir?j:i][dir?i:j] = 0;
                    j = j + spin;
                } else if (field[dir?j:i][dir?i:j] === field[dir?t:i][dir?i:t]) {
                    changed = true;
                    field[dir?t:i][dir?i:t] *= 2;
                    field[dir?j:i][dir?i:j] = 0;
                    j = j + spin
                    t = t + spin;
                } else {
                    t = t + spin;
                    if (j === t) {
                        j = j + spin;
                    }
                }
            } else {
                j = j + spin;
            }
        }
    }
    return changed;
}

function keyPress(event) {
    var t, changed = false;
    console.log('hello');
    if (event.key === 'ArrowLeft') {//move tiles to the left
        changed = shiftNumbers(0,1);
    }
    if (event.key === 'ArrowRight') {//move tiles to the right
        changed = shiftNumbers(0,-1);
    }
    if (event.key === 'ArrowDown') {
        changed = shiftNumbers(1,-1);
    }
    if (event.key === 'ArrowUp') {//move tiles to the left
        changed = shiftNumbers(1,1);
    }
    if (changed) {
        addNewNumber(2);
        redraw();
    }
}*/