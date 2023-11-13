import React from 'react';
import './Login.css';
import LoginWindow from "./LoginWindow/LoginWindow";

function Login(props) {

    return (
        <div className="login">
            <div className="title">Вход</div>
            <LoginWindow setToken={props.setToken}/>
        </div>
    );
}

export default Login;