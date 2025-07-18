function generateGrid() {
    let i=0
    const board = document.getElementById('grid')
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

generateGrid();
generateApple(2750);