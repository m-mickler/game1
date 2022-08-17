import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ship from './components/ship';
import Asteroid from './components/asteroid';

function App(){
    return(
        <div>
            <h1> Enjoy the game </h1>
            <div className="board">
                <Ship />
                <Asteroid />
            </div>
        </div>
    )
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// ReactDOM.render(<Ship />, document.getElementById("root"));
