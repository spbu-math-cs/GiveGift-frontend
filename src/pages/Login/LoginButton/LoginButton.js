import React from 'react';
import './LoginButton.css'

const LoginButton = (props) => {
    return (
        <button {...props} className='active_btn'>Войти</button>
    );
};

export default LoginButton;