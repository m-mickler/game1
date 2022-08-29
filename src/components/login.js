import React, { useState, useEffect } from "react";
import  axios  from "axios";

let globalUsername = null;

function Login() {
    // React States
    const [username, setUsername] = useState('');
    const [highscore, setHighscore] = useState('');

    globalUsername = username;

    function Restart(){
        window.location.reload(true);
    }

    // loads information froma previous user
    function handleSubmit(event) {    
        event.preventDefault();
        axios.get(`http://localhost:3000/api/players/${username}`).then((response) =>{
            setHighscore(response.data.highscore)
            localStorage.setItem('username', username);
            localStorage.setItem('highscore', response.data.highscore);
        })
    }

    // creates a new user
    const newSubmit = (event) => {    
        event.preventDefault();
        axios.post(`http://localhost:3000/api/players`, {username: username}).then((response) =>{
        })
    }

    // login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );

    // newUser form
    const renderNewUserForm = (
        <div className="form">
          <form onSubmit={newSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );

    //new game button
    const renderNewGame = (
      <div className="button">
        <form onClick={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
    
    return (
      <div className="app">
        <div className="highscore" >{username ? username : localStorage.getItem('username')} HIGHSCORE: {highscore ? highscore : localStorage.getItem('highscore')}</div>
        <div className="login-form">
          <div className="title">Sign In</div>
          {renderForm}
          <div className="title">Sign Up</div>
          {renderNewUserForm}
        </div>
        <button className="restart" onClick={Restart}>New Game</button>
      </div>
    );
}

export { Login, globalUsername };
