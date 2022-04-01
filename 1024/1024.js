console.log('hello');
var field = new Array (4);
for(var j = 0; j < 4; j++){
    field[j] = new Array(4);
}

window.addEventListener("load", init);
//redraw();
window.addEventListener("keydown", keyPress);
function init() {
    field[0][0] = 2;
    redraw();
    //putNumber(Math.floor(Math.random() * 15), 2);
}


function putNumber(tileNumber, value) {
    var tile = document.getElementById('tile' + tileNumber);
    console.log('tile' + tileNumber);
    if (!value) {
        tile.innerHTML = '' ;         
    }else{    
        tile.innerHTML = value;
    }
}

function keyPress(event) {
   // if (event === 'ArrowDown') { 
   //}not working
        console.log('hello');
        addNewNumber(2);
    redraw();
}

function redraw() {
   for(var i = 0; i < 4; i++){
       for(var j = 0; j < 4; j++){
           putNumber('' + i + j, field[i][j]);
       }
   }
}


function addNewNumber(number){
    
    //every time you call NewNumber a new number only apears in an empty cell
}