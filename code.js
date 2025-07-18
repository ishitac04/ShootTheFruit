function generateGrid() {
    let i=0
    const board = document.getElementById('grid')
    while (i<5500) {
    i=i+1
    const square = document.createElement('div')
    board.appendChild(square)
    }
    boxes = document.querySelectorAll('#grid div')
}

function generateApple() {
    boxes[2750].className = "red";
}

generateGrid();