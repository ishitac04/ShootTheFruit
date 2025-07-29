let count=0
let goingUp = true;
let minPosition = 200;
let maxPosition = 22000 - 2600;
let col=200;
let centre = 10510;
let score = 0;
let stop=0;
let currentApple=0;
let lastDestroyed=0;
let position = 0;
let bullets = 10;
let gameStarted = false;
let boxes = [];
const appleBoxes = [5, 204, 205, 206, 404, 405, 406, 407, 408, 409, 410, 603, 604, 605, 606, 607, 608, 609, 610, 611, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2203, 2204, 2205, 802, 805, 806, 1001, 1201, 1401, 1411, 1601, 1611, 1801, 1811, 2002, 2010, 2203, 2204, 2205, 2206, 2209, 2404, 2405, 2407, 2408];

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

const targetBoxes = [0, 200, 200, 1, 1, 2000, 1800, 1600, 1400, 1200, 6, 7, 8, 9, 10, 208, 408, 608, 607, 807, 806, 1006, 1005, 1205, 1204, 1404, 1403, 1603, 1602, 1601, 1599, 1598, 1597, 1397, 1396, 1196, 1195, 995, 994, 794, 793, 593, 592, 392, 192]
    

function generateTarget(c) {
    for (let n = 0; n < targetBoxes.length; n++) {
        boxes[c-targetBoxes[n]].classList.add("target");
        boxes[c+targetBoxes[n]].classList.add("target");
      }
}

function clearTarget(c) {
    for (let n = 0; n < targetBoxes.length; n++) {
        boxes[c-targetBoxes[n]].classList.remove("target");
        boxes[c+targetBoxes[n]].classList.remove("target");
    }
    console.log("removed target")
}

generateGrid();
generateTarget(10045);