import React from 'react';
import './LoginButton.css'

let login = () => {
    window.location.assign('http://localhost:3000/')
}

const LoginButton = () => {
    return (
        <button className='active_btn' onClick={ login }>Войти</button>
    );
};

export default LoginButton;