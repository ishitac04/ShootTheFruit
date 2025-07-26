const correct = document.getElementById("correct");
const gunshot = document.getElementById("gunshot")
const backgroundmusic = document.getElementById("backgroundmusic");

count=0
let goingUp = true;
let minPosition = 200;
let maxPosition = 22000 - 2600;
let col=200
let centre = 10510;
let score = 0;
let stop=0
//let appleInterval = setInterval(moveApple, 50);
currentApple=0
lastDestroyed=0

function generateGrid() {
    let i=0;
    const board = document.getElementById('grid');
    while (i<400) {
    i=i+1
    const square = document.createElement('div')
    board.appendChild(square)
    }
    boxes = document.querySelectorAll('#grid div')
}


function generateCoordinates() {
    let startx = 0 % 20;
    let starty = Math.floor(0 / 20);
    let endx = 45 % 20;
    let endy = Math.floor(45 / 20);
    let xmovement = endx-startx
    let ymovement = endy-starty
    let totalmovementx = xmovement/5
    let totalmovementy = ymovement/5
}

function shootBullet() {
    let newx = startx
}
