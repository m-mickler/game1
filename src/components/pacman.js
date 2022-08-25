import {useState, useEffect } from 'react';

// let pacmanArr = [];
// let pacmanCount = 0;

// function PacMan(){
//     // let board = document.querySelector(".board")
//     // board.append(<div className="pacman" style={{left: `${Math.random() * 480 + 10}px`}}></div>)
//     const [PacmanArr, setPacmanArr] = useState([])
//     setPacmanArr(current => [...current, pacmanCount])
//     pacmanCount++
//     console.log("PacMan is called")
//     return PacmanArr
// }

const movePacMan = () => {
    var posTop = document.querySelector('.pacman').offsetTop;
    document.querySelector('.pacman').style.top = (posTop+15)+"px";
    if (document.querySelector('.pacman').style.top >= 585 + "px"){
        document.querySelector('.pacman').remove();
    }
}

function PacManPosition() {
    return(console.log(document.querySelector('.pacman').style.top))
}

export { /*PacMan*/ movePacMan, PacManPosition };