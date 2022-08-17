import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Ship extends React.Component{
    constructor(props){
        super(props)
     
    }
    render(){
        return(
            <div> Hello World</div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Ship />);