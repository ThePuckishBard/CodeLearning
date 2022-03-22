var fieldXmax = 600;
var fieldYmax = 400;
var platformA = fieldYmax / 2;
var platformB = fieldYmax / 2;
var ballX = 300;
var ballY = 200;
var ballAngle = 180;
var fail = false;
const platACordX = 20;
const platBCordX = 580;
const ballRadius = 6;
const platSize = 80;
const maxAngleDiff = 60;
const stepSize = 1;
const stepDelay = 9;
var canvas = document.getElementById('game-field');
var context = canvas.getContext("2d");
context.scale(0.5, 0.375);
context.beginPath();
context.arc(600, 400, 10, 0, 2 * Math.PI);
context.stroke();
moveBall();
setTimeout(moveBall, stepDelay);
redraw();

document.addEventListener("keydown", keyPress);

function redraw() {
    context.clearRect(0, 0, fieldXmax, fieldYmax);
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(platACordX, platformA - platSize / 2);
    context.lineTo(platACordX, platformA + platSize / 2);
    context.stroke();
    context.beginPath();
    context.moveTo(300, 0);
    context.lineTo(300, 400);
    context.stroke();
    context.beginPath();
    context.moveTo(platBCordX, platformB - platSize / 2);
    context.lineTo(platBCordX, platformB + platSize / 2);
    context.stroke();
    if(!fail){
    context.beginPath();
    context.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    context.stroke();
    }
}

function keyPress(event) {
    console.log(event.key);
    if (event.key === 'w' || event.key === 'W') {
        platformA = platformA - 5;
    }
    if (event.key === 's' || event.key === 'S') {
        platformA = platformA + 5;
    }
    if (event.key === 'ArrowDown') {
        platformB = platformB + 5;
    }
    if (event.key === 'ArrowUp') {
        platformB = platformB - 5;
    }
    if (platformA - platSize / 2 < 0) {
        platformA = platSize / 2;
    }
    if (platformB - platSize / 2 < 0) {
        platformB = platSize / 2;
    }
    if (platformA + platSize / 2 > fieldYmax) {
        platformA = fieldYmax - platSize / 2;
    }
    if (platformB + platSize / 2 > fieldYmax) {
        platformB = fieldYmax - platSize / 2;
    }
    console.log(platformA);
    redraw();
}

function moveBall() {
    ballX = ballX + Math.cos(ballAngle * Math.PI / 180) * stepSize;
    ballY = ballY + Math.sin(ballAngle * Math.PI / 180) * stepSize;
    if (fail) {
        redraw();
        return;
    }
    console.log(ballX);
    console.log(Math.abs(platBCordX - ballX + ballRadius));
    if (ballX + ballRadius - 1 >= platBCordX) {
        if (ballY < platformB + platSize / 2 && ballY > platformB - platSize / 2) {
            console.log("Hey, listen!");
            ballAngle = 180 - ballAngle - (platformB - ballY) / platSize * maxAngleDiff;
        } else {
            console.log('GAME OVER');
            fail = true;
        }
    }
    if (ballX - ballRadius + 1 <= platACordX) {
        if (ballY < platformA + platSize / 2 && ballY > platformA - platSize / 2) {
            console.log('Watchout!');
            ballAngle = 180 - ballAngle - (platformA - ballY) / platSize * maxAngleDiff;
        } else {
            console.log('GAME OVER');
            fail = true;
        }
    }
    if (ballY - ballRadius <= 1) {
        ballAngle = 360 - ballAngle;
    }
    if (ballY + ballRadius >= fieldYmax - 1) {
        ballAngle = 360 - ballAngle;
    }
    setTimeout(moveBall, stepDelay);
    redraw();
}



