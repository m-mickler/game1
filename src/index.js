import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Ghost, GhostPosition } from './components/ghost';
import { PacMan, movePacMan, PacManPosition } from './components/pacman';
import {useState, useEffect } from 'react';
console.log(GhostPosition)
console.log(PacManPosition)
// let started = false;
// let isRunning = null;
// let createPacman = null;
//start game

// function Start() {
//     if (!started) {
//         isRunning = setInterval(movePacMan, 500);
//         createPacman = setInterval(PacMan, 2000);
//         started = true;
//     }
// }

//pause game
// function Pause() {
//     clearInterval(isRunning);
//     clearInterval(createPacman);
//     started = false;
// }

//destroy ghost


function App(){
    let started = false;
    let isRunning = null;
    let createPacman = null;
    console.log("started", started)
    function Start() {
        console.log("started")
        if (!started) {
            setTimeout(() => {isRunning = setInterval(movePacMan, 100);}, 2100)
            createPacman = setInterval(PacMan, 2000);
            started = true;
        }
    }
    
    //pause game
    function Pause() {
        console.log("paused")
        clearInterval(isRunning);
        clearInterval(createPacman);
        started = false;
    }

    let pacmanCount = 0;
    const [PacmanArr, setPacmanArr] = useState([])

    function PacMan(){
        const pm = <div key={pacmanCount} className="pacman" style={{left: `${Math.random() * 480 + 10}px`}}></div>
        setPacmanArr(current => [...current, pm])
        pacmanCount++
        console.log("PacMan is called")
    }
    return(
        <div>
            <h1> Attack on Ghost </h1>
            <button className="start" onClick={Start}>Start</button>
            <button className="pause" onClick={Pause}>Pause</button>
            <div className="board">
                <Ghost />
                {PacmanArr}
            </div>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
