import { useState, useEffect } from 'react';
import { started, isRunning, createPacman } from "../index.js"
import sound from './audio/ghost_dies.mp3'

let stopped = false;

const MovePacMan = () => {

    function Stop() {
        clearInterval(isRunning);
        clearInterval(createPacman);
        started = false; 
    }

    var posTop = document.querySelector('.pacman').offsetTop;
    document.querySelector('.pacman').style.top = (posTop+25)+"px";
    if (document.querySelector('.pacman').style.top >= 650 + "px"){
        document.querySelector('.pacman').remove();
    }

    let mySound = new Audio(sound);

    DeleteGhostOnFail();

    function DeleteGhostOnFail() {
        const el1 = document.querySelector('.ghost');
        const el2 = document.querySelector('.pacman');
        
        if (elementsOverlap(el1, el2) === true) {
            mySound.play()
            document.querySelector('.ghost').classList.add('blink_me');
            stopped = true;
            setTimeout(() => {document.querySelector('.ghost').remove();}, 2000)
            Stop();
        }

        function elementsOverlap(el1, el2) {
            const domRect1 = el1.getBoundingClientRect();
            const domRect2 = el2.getBoundingClientRect();
            return !(
              domRect1.top > domRect2.bottom ||
              domRect1.right < domRect2.left ||
              domRect1.bottom < domRect2.top ||
              domRect1.left > domRect2.right
            );
        }
    };
}

export {MovePacMan, stopped};