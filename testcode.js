
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