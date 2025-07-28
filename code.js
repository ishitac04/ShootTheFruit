const correct = document.getElementById("correct");
const gunshot = document.getElementById("gunshot")
const backgroundmusic = document.getElementById("backgroundmusic");

let count=0
let goingUp = true;
let minPosition = 200;
let maxPosition = 22000 - 2600;
let col=200;
let centre = 10510;
let score = 0;
let stop=0;
let appleInterval = setInterval(moveApple, 50);
let currentApple=0;
let lastDestroyed=0;
let position = 0;
let bullets = 10;
let bulletsLeft = document.getElementById('bullets');
let scoreText = document.getElementById('score')

function generateGrid() {
    let i=0;
    const board = document.getElementById('grid');
    while (i<22000) {
    i=i+1
    const square = document.createElement('div')
    board.appendChild(square)
    }
    boxes = document.querySelectorAll('#grid div')
    
}

function generateApple(i) {
    boxes[i+5].className = 'black';
    boxes[i+205].className = 'lbrown';
    boxes[i+204].className = 'black';
    boxes[i+206].className = 'black';
    boxes[i+406].className = 'black';
    boxes[i+405].className = 'brown';
    boxes[i+605].className = 'brown';
    boxes[i+404].className = 'black';
    boxes[i+407].className = 'black';
    boxes[i+607].className = 'lgreen';
    boxes[i+608].className = 'lgreen';
    boxes[i+609].className = 'lgreen';
    boxes[i+809].className = 'lgreen';
    boxes[i+610].className = 'lgreen';
    boxes[i+810].className = 'lgreen';
    boxes[i+408].className = 'black';
    boxes[i+807].className = 'green';
    boxes[i+808].className = 'green';
    boxes[i+1009].className = 'green';
    boxes[i+1010].className = 'green';
    boxes[i+1011].className = 'green';
    boxes[i+811].className = 'green';
    boxes[i+409].className = 'black';
    boxes[i+410].className = 'black';
    boxes[i+611].className = 'black';
    boxes[i+812].className = 'black';
    boxes[i+1012].className = 'black';
    boxes[i+1212].className = 'black';
    boxes[i+1211].className = 'black';
    boxes[i+1210].className = 'black';
    boxes[i+1209].className = 'black';
    boxes[i+1008].className = 'black';
    boxes[i+1007].className = 'black';
    boxes[i+606].className = 'black';
    boxes[i+604].className = 'black';
    boxes[i+603].className = 'black';
    boxes[i+803].className = 'red';
    boxes[i+804].className = 'red';
    boxes[i+1002].className = 'red';
    boxes[i+1003].className = 'red';
    boxes[i+1004].className = 'lred';
    boxes[i+1005].className = 'lred';
    boxes[i+1006].className = 'lred';
    boxes[i+1203].className = 'lred';
    boxes[i+1204].className = 'lred';
    boxes[i+1205].className = 'lred';
    boxes[i+1206].className = 'lred';
    boxes[i+1405].className = 'lred';
    boxes[i+1404].className = 'lred';
    boxes[i+1403].className = 'lred';
    boxes[i+1202].className = 'red';
    boxes[i+1402].className = 'red';
    boxes[i+1406].className = 'red';
    boxes[i+1407].className = 'red';
    boxes[i+1207].className = 'red';
    boxes[i+1208].className = 'red';
    boxes[i+1408].className = 'red';
    boxes[i+1409].className = 'red';
    boxes[i+1410].className = 'red';
    boxes[i+1610].className = 'red';
    for (let n=1; n<9; n++) {
        boxes[i+1610-n].className = 'red';
    }
    for (let n=0; n<9; n++) {
        boxes[i+1810-n].className = 'red';
    }
    for (let n=0; n<7; n++) {
        boxes[i+2009-n].className = 'red';
    }
    boxes[i+2208].className = 'red';
    boxes[i+2207].className = 'red';
    boxes[i+2205].className = 'red';
    boxes[i+2204].className = 'red';
    boxes[i+802].className = 'black';
    boxes[i+1001].className = 'black';
    boxes[i+1201].className = 'black';
    boxes[i+1401].className = 'black';
    boxes[i+1601].className = 'black';
    boxes[i+1801].className = 'black';
    boxes[i+2002].className = 'black';
    boxes[i+2203].className = 'black';
    boxes[i+2404].className = 'black';
    boxes[i+2405].className = 'black';
    boxes[i+2206].className = 'black';
    boxes[i+2407].className = 'black';
    boxes[i+2408].className = 'black';
    boxes[i+2209].className = 'black';
    boxes[i+2010].className = 'black';
    boxes[i+806].className = 'black';
    boxes[i+805].className = 'black';
    boxes[i+1411].className = 'black';
    boxes[i+1611].className = 'black';
    boxes[i+1811].className = 'black';
}

function clearApple() {
    boxes.forEach(box => {
        if (box.className=="red" || box.className=="black" || box.className=="green" || box.className=="lred" || box.className=="lbrown" || box.className=="brown" || box.className=="lgreen") {
        box.textContent = " ";
        box.className = '';
        }
        });
}

function ApplePosition() {
    currentApple = currentApple + 1;
    let position=Math.floor(Math.random()*(22000-2600));
    return position;
}

function moveApple() {
    clearApple();
    if (goingUp) {
        position -= 203;
        if (position <= minPosition) {
            goingUp = false;
        }
        console.log("going up");
    } else {
        position += 197;
        if (position >= maxPosition) {
            goingUp = true;
        }
        console.log("going down");
    }


    generateApple(position);
}

function generateTarget(c) {
    const targetBoxes = [0, 200, 200, 1, 1, 2000, 1800, 1600, 1400, 1200, 6, 7, 8, 9, 10, 208, 408, 608, 607, 807, 806, 1006, 1005, 1205, 1204, 1404, 1403, 1603, 1602, 1601, 1599, 1598, 1597, 1397, 1396, 1196, 1195, 995, 994, 794, 793, 593, 592, 392, 192]
    for (let n = 0; n < targetBoxes.length; n++) {
        boxes[c-targetBoxes[n]].className = "target";
        boxes[c+targetBoxes[n]].className = "target";
      }
}

function clearTarget() {
    boxes.forEach(box => {
        if (box.className === 'target') {
            box.className = '';
        }
    });
}

function shootBullet() {
    let startx = 17045 % col;
    let starty = Math.floor(17045 / col);
    let endx = centre % col;
    let endy = Math.floor(centre / col)
    console.log(startx,starty, endx, endy)
    boxes[17045].className = "brown";
}

function setGame() {
    position = ApplePosition();
    generateApple(position);
    appleInterval = setInterval(moveApple, 50);
    shootBullet();


document.addEventListener('keydown', (event) => { 
    clearTarget();
    switch (event.key) {
        case 'ArrowUp':
            currentDirection = 'up';
            centre = centre - 600;
            if (lastDestroyed==currentApple) {
                console.log("not creating it")
            } else {
            generateApple(position);
            }
            break;
        case 'ArrowDown':
            currentDirection = 'down';
            centre = centre + 600;
            if (lastDestroyed==currentApple) {
                console.log("not creating it")
            } else {
            generateApple(position);
            }
            break;
        case 'ArrowLeft':
            currentDirection = 'left';
            centre = centre - 3;
            if (lastDestroyed==currentApple) {
                console.log("not creating it")
            } else {
            generateApple(position);
            }
            break;
        case 'ArrowRight':
            currentDirection = 'right';
            centre = centre + 3;
            if (lastDestroyed==currentApple) {
                console.log("not creating it")
            } else {
            generateApple(position);
            }
            break;
        case 'Enter':
            currentDirection = 'enter';
            console.log("enter pressed");
            gunshot.play();
            bullets=bullets-1;
            bulletsLeft.textContent = "Bullets left: " + bullets;
            if (bullets==0) {
                alert("Out of bullets! Your final score is "+ score)
                location.reload();
            }

            if (boxes[centre].className == "red" || boxes[centre].className == "lred" || boxes[centre].className == "lgreen" || boxes[centre].className == "green" || boxes[centre].className == "black" || boxes[centre].className == "brown" || boxes[centre].className == "lbrown") {
                clearApple();
                score = score + 1;
                scoreText.textContent = "Score: " + score;
                console.log(score);
                clearInterval(appleInterval);
                centre=2500;
                lastDestroyed=currentApple;
                setGame();
                console.log(currentApple, currentApple)
                break;
            }

            break;
    }
    generateTarget(centre);
}); 
}

generateGrid();
setGame()