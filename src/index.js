import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Ship extends React.Component{
    constructor(){
        super()    
    }
    render(){
        return(
            <div className="ship"></div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Ship />);