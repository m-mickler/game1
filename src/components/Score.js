import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { stopped } from './pacman.js'
import { globalUsername } from './login.js'

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

    if (stopped && globalUsername) {   
        axios.get(`http://localhost:3000/api/players/${globalUsername}`).then((response) =>{
                if ( score > response.data.highscore) {
                    axios.patch(`http://localhost:3000/api/players/${globalUsername}`, {highscore: score})
                    localStorage.setItem('highscore', score);
            }
        })
    } else if (stopped && !globalUsername) {
        axios.get(`http://localhost:3000/api/players/${localStorage.getItem('username')}`).then((response) =>{
            if ( score > response.data.highscore) {
                axios.patch(`http://localhost:3000/api/players/${localStorage.getItem('username')}`, {highscore: score})
                localStorage.setItem('highscore', score);
        }
    })
    }

    return(<div className="score">Score: {score}</div>)
}

export {ScoreTracker}