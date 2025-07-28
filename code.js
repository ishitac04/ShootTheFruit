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
let gameStarted = false;

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
    boxes[i+5].classList.add("black");
    boxes[i+205].classList.add("lbrown");
    boxes[i+204].classList.add("black");
    boxes[i+206].classList.add("black");
    boxes[i+406].classList.add("black");
    boxes[i+405].classList.add("brown");
    boxes[i+605].classList.add("brown");
    boxes[i+404].classList.add("black");
    boxes[i+407].classList.add("black");
    boxes[i+607].classList.add("lgreen");
    boxes[i+608].classList.add("lgreen");
    boxes[i+609].classList.add("lgreen");
    boxes[i+809].classList.add("lgreen");
    boxes[i+610].classList.add("lgreen");
    boxes[i+810].classList.add("lgreen");
    boxes[i+408].classList.add("black");
    boxes[i+807].classList.add("green");
    boxes[i+808].classList.add("green");
    boxes[i+1009].classList.add("green");
    boxes[i+1010].classList.add("green");
    boxes[i+1011].classList.add("green");
    boxes[i+811].classList.add("green");
    boxes[i+409].classList.add("black");
    boxes[i+410].classList.add("black");
    boxes[i+611].classList.add("black");
    boxes[i+812].classList.add("black");
    boxes[i+1012].classList.add("black");
    boxes[i+1212].classList.add("black");
    boxes[i+1211].classList.add("black");
    boxes[i+1210].classList.add("black");
    boxes[i+1209].classList.add("black");
    boxes[i+1008].classList.add("black");
    boxes[i+1007].classList.add("black");
    boxes[i+606].classList.add("black");
    boxes[i+604].classList.add("black");
    boxes[i+603].classList.add("black");
    boxes[i+803].classList.add("red");
    boxes[i+804].classList.add("red");
    boxes[i+1002].classList.add("red");
    boxes[i+1003].classList.add("red");
    boxes[i+1004].classList.add("lred");
    boxes[i+1005].classList.add("lred");
    boxes[i+1006].classList.add("lred");
    boxes[i+1203].classList.add("lred");
    boxes[i+1204].classList.add("lred");
    boxes[i+1205].classList.add("lred");
    boxes[i+1206].classList.add("lred");
    boxes[i+1405].classList.add("lred");
    boxes[i+1404].classList.add("lred");
    boxes[i+1403].classList.add("lred");
    boxes[i+1202].classList.add("red");
    boxes[i+1402].classList.add("red");
    boxes[i+1406].classList.add("red");
    boxes[i+1407].classList.add("red");
    boxes[i+1207].classList.add("red");
    boxes[i+1208].classList.add("red");
    boxes[i+1408].classList.add("red");
    boxes[i+1409].classList.add("red");
    boxes[i+1410].classList.add("red");
    boxes[i+1610].classList.add("red");
    for (let n=1; n<9; n++) {
        boxes[i+1610-n].classList.add("red");
    }
    for (let n=0; n<9; n++) {
        boxes[i+1810-n].classList.add("red");
    }
    for (let n=0; n<7; n++) {
        boxes[i+2009-n].classList.add("red");
    }
    boxes[i+2208].classList.add("red");
    boxes[i+2207].classList.add("red");
    boxes[i+2205].classList.add("red");
    boxes[i+2204].classList.add("red");
    boxes[i+802].classList.add("black");
    boxes[i+1001].classList.add("black");
    boxes[i+1201].classList.add("black");
    boxes[i+1401].classList.add("black");
    boxes[i+1601].classList.add("black");
    boxes[i+1801].classList.add("black");
    boxes[i+2002].classList.add("black");
    boxes[i+2203].classList.add("black");
    boxes[i+2404].classList.add("black");
    boxes[i+2405].classList.add("black");
    boxes[i+2206].classList.add("black");
    boxes[i+2407].classList.add("black");
    boxes[i+2408].classList.add("black");
    boxes[i+2209].classList.add("black");
    boxes[i+2010].classList.add("black");
    boxes[i+806].classList.add("black");
    boxes[i+805].classList.add("black");
    boxes[i+1411].classList.add("black");
    boxes[i+1611].classList.add("black");
    boxes[i+1811].classList.add("black");
}

function clearApple() {
    boxes.forEach(box => {
        ["red","black","green","lred","lbrown","brown","lgreen"].forEach(c => {
          box.classList.remove(c);
        });
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
        boxes[c-targetBoxes[n]].classList.add("target");
        boxes[c+targetBoxes[n]].classList.add("target");
      }
}

function clearTarget() {
    boxes.forEach(box => {
        if (box.classList.contains("target")) {
            box.classList.remove("target");
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

function keyPress(event) {
    clearTarget();
    switch (event.key) {
        case 'ArrowUp':
            centre = centre - 600;
            break;
        case 'ArrowDown':
            centre = centre + 600;
            break;
        case 'ArrowLeft':
            centre = centre - 3;
            break;
        case 'ArrowRight':
            centre = centre + 3;
            break;
        case 'Enter':
            console.log("enter pressed");
            gunshot.play();
            bullets = bullets - 1;
            bulletsLeft.textContent = "Bullets left: " + bullets;

            if (bullets == 0) {
                alert("Out of bullets! Your final score is " + score);
                location.reload();
            }

            if ((boxes[centre].classList.contains("red") || boxes[centre].classList.contains("lred"))) {
                clearApple();
                score=score+1;
                scoreText.textContent = "Score: " + score;
                centre = 2500;
                lastDestroyed = currentApple;
                setGame(); 
            }
            break;
    }

    moveApple()
    generateTarget(centre);
}

function setGame() {
    position = ApplePosition();
    generateApple(position);

    if (appleInterval) {
        clearInterval(appleInterval);
    }
    appleInterval = setInterval(moveApple, 50);

    generateTarget(centre);
}

function startGame() {
    generateGrid();
    setGame();
    document.addEventListener('keydown', keyPress);
}

function spaceStart(event) {
    switch (event.key) {
    case ' ':
        document.removeEventListener('keydown', spaceStart);
        gameStarted = true;
        startGame();
        backgroundmusic.play();
    }
}

document.addEventListener('keydown', spaceStart)