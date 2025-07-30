const correct = document.getElementById("correct");
const gunshot = document.getElementById("gunshot")
const backgroundmusic = document.getElementById("backgroundmusic");

let count=0
let goingUp = true;
let minPosition = 200;
let maxPosition = 22000 - 3800;
let col=200;
let centre = 10510;
let score = 0;
let score2=0;
let stop=0;
let appleInterval = setInterval(moveApple, 50);
let currentApple=0;
let lastDestroyed=0;
let position = 0;
let bullets = 10;
let bulletsLeft = document.getElementById('bullets');
let scoreText = document.getElementById('score')
let gameStarted = false;
const appleBoxes = [];
const strawberryBoxes = [];
let strawberryPosition = ApplePosition();
const targetBoxes = [0, 200, 200, 1, 1, 2000, 1800, 1600, 1400, 1200, 6, 7, 8, 9, 10, 208, 408, 608, 607, 807, 806, 1006, 1005, 1205, 1204, 1404, 1403, 1603, 1602, 1601, 1599, 1598, 1597, 1397, 1396, 1196, 1195, 995, 994, 794, 793, 593, 592, 392, 192]
currentStrawberry = 0;
let strawberryGoingUp = true;
let centre2 = 11010;

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

    createArray();
}

function generateStrawberry(s) {
    strawberryBoxes.length=0
    const blacksquares=[7,8,206, 209, 405, 404, 403, 410, 411,412,613,602, 801, 803,804,805,810,811,812,814,1001,1006,1009,1014,1200,1215,1400,1415,1600,1615,1800,1815,2000,2015,2201,2401,2602,2802,3003,3204,3405,3606,3607,3608,3609,3410,3211,3012,2813,2613,2414,2214]
    const greensquares=[806,807,808,809,207,208,406,407,408,409,603,604,605,606,607,608,609,610,611,612]
    const redsquares=[802,813,1002,1003,1004,1005,1007,1008,1010,1011,1012,1013,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1611,1612,1613,1614,1801,1802,1803,1804,1805,1806,1807,1808,1809,1810,1811,1812,1813,1814,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2202,2203,2204,2205,2206,2207,2208,2209,2210,2211,2212,2213,2402,2403,2404,2405,2406,2407,2408,2409,2410,2411,2412,2413,2603,2604,2605,2606,2607,2608,2609,2610,2611,2612,2803,2804,2805,2806,2807,2808,2809,2810,2811,2812,3004,3005,3006,3007,3008,3009,3010,3011,3205,3206,3207,3208,3209,3210,3406,3407,3408,3409];
    for (i=0;i<blacksquares.length;i++) {
        a=s+blacksquares[i]
        boxes[a].classList.add("sblack")
        strawberryBoxes.push(a)
    }
    for (i=0;i<greensquares.length;i++) {
        a=s+greensquares[i]
        boxes[a].classList.add("sgreen")
        strawberryBoxes.push(a)
    }
    for (i=0;i<redsquares.length;i++) {
        a=s+redsquares[i]
        if (i%4 == 0) {
            boxes[a].classList.add("slred")
            strawberryBoxes.push(a)
        } else {
            boxes[a].classList.add("sred")
            strawberryBoxes.push(a)
        }
        
    }
}

function clearStrawberry() {
    const strawberryColors = ["sred","slred","sblack","sgreen"];
    for (let b=0; b < strawberryBoxes.length; b++) {
        let pos = strawberryBoxes[b];
        strawberryColors.forEach(color => boxes[pos].classList.remove(color));
    }
}

function createArray() {
    appleBoxes.length = 0;
    for (let a=0; a<22000; a++) {
        if (boxes[a].classList.contains("red") || boxes[a].classList.contains("lred") || boxes[a].classList.contains("brown") || boxes[a].classList.contains("lbrown") || boxes[a].classList.contains("green") || boxes[a].classList.contains("lgreen") || boxes[a].classList.contains("black")) {
            appleBoxes.push(a);
        }
    }
}

function clearApple() {
    const appleColors = ["red","lred","brown","lbrown","green","lgreen","black"];
    for (let b=0; b < appleBoxes.length; b++) {
        let applePos=appleBoxes[b];
        appleColors.forEach(color => {
            boxes[applePos].classList.remove(color); 
        });
    }
}

function ApplePosition() {
    clearApple();
    clearStrawberry();
    currentApple = currentApple + 1;
    let position=Math.floor(Math.random()*(22000-2600));
    return position;
}

function moveApple() {
    clearApple();
    if (goingUp) {
        position -= 204;
        if (position <= minPosition) {
            goingUp = false;
        }
    } else {
        position += 196;
        if (position >= maxPosition) {
            goingUp = true;
        }
    }

    generateApple(position);

    clearStrawberry();

    if (strawberryGoingUp) {
        strawberryPosition -= 196;
    if (strawberryPosition <= minPosition) {
        strawberryGoingUp = false;
    }
    } else {
    strawberryPosition += 204;
    if (strawberryPosition >= maxPosition) {
        strawberryGoingUp = true;
    }
}

    generateStrawberry(strawberryPosition);

}

function generateTarget(c) {
    for (let n = 0; n < targetBoxes.length; n++) {
        boxes[c-targetBoxes[n]].classList.add("target");
        boxes[c+targetBoxes[n]].classList.add("target");
      }
}

function generateTarget2(c) {
    for (let n = 0; n < targetBoxes.length; n++) {
        boxes[c-targetBoxes[n]].classList.add("target2");
        boxes[c+targetBoxes[n]].classList.add("target2");
    }
}

function clearTarget() {
    for (let n = 0; n < targetBoxes.length; n++) {
        if (boxes[centre - targetBoxes[n]]) {
            boxes[centre - targetBoxes[n]].classList.remove("target");
        }
        if (boxes[centre + targetBoxes[n]]) {
            boxes[centre + targetBoxes[n]].classList.remove("target");
        }
    }
    console.log("removed target");
}

function clearTarget2() {
    for (let n = 0; n < targetBoxes.length; n++) {
        if (boxes[centre2 - targetBoxes[n]]) {
            boxes[centre2 - targetBoxes[n]].classList.remove("target2");
        }
        if (boxes[centre2 + targetBoxes[n]]) {
            boxes[centre2 + targetBoxes[n]].classList.remove("target2");
        }
    }
}

function keyPress(event) {
    clearTarget();
    clearTarget2();
    switch (event.key) {
        case 'ArrowUp':
            centre = centre - 800;
            break;
        case 'ArrowDown':
            centre = centre + 800;
            break;
        case 'ArrowLeft':
            centre = centre - 4;
            break;
        case 'ArrowRight':
            centre = centre + 4;
            break;
        case 'Enter':
            gunshot.play();
            bulletsLeft.textContent = "Score (2) " + score2;
            for (d=0; d<13; d++) {
                const positions = [398, 399, 400, 401, 402, 198, 199, 200, 201, 202, 1, 2, 0];
                if ((boxes[centre+positions[d]].classList.contains("red") || boxes[centre+positions[d]].classList.contains("sblack") || boxes[centre+positions[d]].classList.contains("sred") || boxes[centre+positions[d]].classList.contains("slred") || boxes[centre+positions[d]].classList.contains("sgreen") || boxes[centre+positions[d]].classList.contains("lred") || boxes[centre+positions[d]].classList.contains("black") || boxes[centre+positions[d]].classList.contains("green") || boxes[centre+positions[d]].classList.contains("lgreen") || boxes[centre+positions[d]].classList.contains("brown") || boxes[centre+positions[d]].classList.contains("lbrown"))) {
                    clearApple();
                    clearStrawberry();
                    score=score+1;
                    scoreText.textContent = "Score: " + score;
                    centre = 2500;
                    lastDestroyed = currentApple;
                    setGame();
                    break;
                } else if ((boxes[centre-positions[d]].classList.contains("red") || boxes[centre-positions[d]].classList.contains("sblack") || boxes[centre-positions[d]].classList.contains("sred") || boxes[centre-positions[d]].classList.contains("slred") || boxes[centre-positions[d]].classList.contains("sgreen") || boxes[centre-positions[d]].classList.contains("lred") || boxes[centre-positions[d]].classList.contains("black") || boxes[centre-positions[d]].classList.contains("green") || boxes[centre-positions[d]].classList.contains("lgreen") || boxes[centre-positions[d]].classList.contains("brown") || boxes[centre-positions[d]].classList.contains("lbrown"))) {
                clearApple();
                score=score+1;
                scoreText.textContent = "Score: " + score;
                centre = 2500;
                lastDestroyed = currentApple;
                setGame(); 
                break;
            }
            break;
        }

        case 'w':
            centre2 = centre2 - 800;
            break;
        case 's':
            centre2 = centre2 + 800;
            break;
        case 'a':
            centre2 = centre2 - 4;
            break;
        case 'd':
            centre2 = centre2 + 4;
            break;
        case ' ':
            gunshot.play();
    for (d=0; d<13; d++) {
        const positions = [398, 399, 400, 401, 402, 198, 199, 200, 201, 202, 1, 2, 0];
        if ((boxes[centre2+positions[d]].classList.contains("red") || boxes[centre2+positions[d]].classList.contains("sblack") || boxes[centre2+positions[d]].classList.contains("sred") || boxes[centre2+positions[d]].classList.contains("slred") || boxes[centre2+positions[d]].classList.contains("sgreen") || boxes[centre2+positions[d]].classList.contains("lred") || boxes[centre2+positions[d]].classList.contains("black") || boxes[centre2+positions[d]].classList.contains("green") || boxes[centre2+positions[d]].classList.contains("lgreen") || boxes[centre2+positions[d]].classList.contains("brown") || boxes[centre2+positions[d]].classList.contains("lbrown"))) {
            clearApple();
            clearStrawberry();
            score2=score2+1;
            bulletsLeft.textContent = "Score: " + score2;
            centre2 = 2500;
            lastDestroyed = currentApple;
            setGame();
            break;
        } else if ((boxes[centre2-positions[d]].classList.contains("red") || boxes[centre2-positions[d]].classList.contains("sblack") || boxes[centre2-positions[d]].classList.contains("sred") || boxes[centre2-positions[d]].classList.contains("slred") || boxes[centre2-positions[d]].classList.contains("sgreen") || boxes[centre2-positions[d]].classList.contains("lred") || boxes[centre2-positions[d]].classList.contains("black") || boxes[centre2-positions[d]].classList.contains("green") || boxes[centre2-positions[d]].classList.contains("lgreen") || boxes[centre2-positions[d]].classList.contains("brown") || boxes[centre2-positions[d]].classList.contains("lbrown"))) {
        clearApple();
        score2=score2+1;
        bulletsLeft.textContent = "Score: " + score2;
        centre2 = 2500;
        lastDestroyed = currentApple;
        setGame(); 
        break;
    }
    break;
        }
    }

    moveApple()
    if (centre < 400 || centre >= 21600) {
        console.log("Hello")
        centre = Math.floor(boxes.length / 2);
    }
    generateTarget(centre);
    generateTarget2(centre2);
}

function setGame() {
    position = ApplePosition();
    strawberryPosition = ApplePosition();
    generateApple(position);
    generateStrawberry(strawberryPosition);
    console.log(generateStrawberry)
    if (appleInterval) {
        clearInterval(appleInterval);
    }
    appleInterval = setInterval(moveApple, 50);

    generateTarget(centre);
}

function startGame() {
    bulletsLeft.textContent = "Bullets left: " + bullets;
    scoreText.textContent = "Score: " + score;
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

document.addEventListener('keydown', spaceStart);