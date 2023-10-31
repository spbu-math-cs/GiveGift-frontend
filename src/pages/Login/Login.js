import React from 'react';
import './Login.css';
import LoginWindow from "./LoginWindow/LoginWindow";

function Login() {

    return (
        <div className="login">
            <div className="title">Вход</div>
            <LoginWindow />
        </div>
    );
}

export default Login;