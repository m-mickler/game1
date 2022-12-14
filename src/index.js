import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Ghost } from './components/ghost.js';
import { MovePacMan }  from './components/pacman.js';
import {useState } from 'react';
import { Login } from './components/login.js';
import { ScoreTracker } from './components/Score.js';
import { Instructions } from './components/Instructions.js'

let started = false;
let isRunning = null;
let createPacman = null;

function App(){

    const [isActive, setIsActive] = useState(false);

    let jump = 35;
    let speed = 1100;
    let newPac = 700;

    function Start() {
        if (!started) {
            setTimeout(() => { isRunning = setInterval(() => {MovePacMan();}, jump); return;}, speed)
            createPacman = setInterval(PacMan, newPac);
            started = true;
            setIsActive(!isActive);
        }
    }
    
    //pause game
    function Pause() {
        clearInterval(isRunning);
        clearInterval(createPacman);
        started = false;
        setIsActive(!isActive);
    }

    let pacmanCount = 0;
    const [PacmanArr, setPacmanArr] = useState([])

    function PacMan(){
        const pm = <div key={pacmanCount} className="pacman" style={{left: `${Math.random() * 480 + 10}px`}}></div>
        setPacmanArr(current => [...current, pm])
        pacmanCount++
    }

    return(
        <div>
            <div className='header'>
                <h1> Attack on Ghost </h1>
            </div>
            <div className='buttons'>
                <button className="start" onClick={Start}>Start</button>
                <button className="pause" onClick={Pause}>Pause</button>
            </div>
            <div className="board">
                <Ghost />
                {PacmanArr}
            </div>
            <ScoreTracker
            isActive={isActive}
            setIsActive={setIsActive}
            />
            <Login/>
            <Instructions/>
        </div>
    )
};

export {started, isRunning, createPacman }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
