import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { stopped } from './pacman.js'
import { globalUsername } from './login.js'

console.log("stopped at the top of score", stopped)
const ScoreTracker = ({isActive}) => {

    const [score, setScore] = useState(0);
    useEffect(() => {
        let interval = null;
        if (isActive && stopped === false) {
            interval = setInterval(() => {
                setScore(score => score + 100);
            }, 100);
        } else if (!isActive && score !== false) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, score]);

    if(stopped === true) {   
        axios.get(`http://localhost:3000/api/players/${globalUsername}`).then((response) =>{
                if ( score > response.data.highscore) {
                    axios.patch(`http://localhost:3000/api/players/${globalUsername}`, {highscore: score})
                    localStorage.setItem('highscore', score);
            }
        })
    }

    return(<div className="score">Score: {score}</div>)
}

export {ScoreTracker}