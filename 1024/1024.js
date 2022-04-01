console.log('hello');


window.addEventListener("load", init);
function init() {
    addNumber(Math.floor((Math.random() * 16) + 1));
}


function addNumber(number) {
    var tile = document.getElementById('tile' + number);

    tile.innerHTML = '2';
    
}

function keyPress() {
    if (event.key === 'ArrowDown') {
        console.log('hello');
    }
}

function redraw(){
    
}
