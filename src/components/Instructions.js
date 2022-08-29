import React, { useState } from "react";

function Instructions() {

    const [ShowInstructions, setShowInstructions] = useState(false);

    return (
        <div className='instructions-container'>
            <button className='toggle-instructions' 
                onMouseEnter={() => setShowInstructions(true)}
                onMouseLeave={() => setShowInstructions(false)}
            >instructions</button>
            {ShowInstructions && (
              <div>  
                <h3 className='instructions'>Instructions:</h3>
                  <ul>
                    <li>First Sign in if you have an account if not then Sign up.</li>
                    <li>Avoid the attacking Pacman</li>
                    <li>To move use W,A,S,D keys</li>
                    <li>W moves the ghost up.</li>
                    <li>A moves the ghost left.</li>
                    <li>S moves the ghost down.</li>
                    <li>D moves the ghost right.</li>
                  </ul>  
              </div>
            )}
        </div>
    );
}

export  { Instructions };