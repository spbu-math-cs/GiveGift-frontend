import React from 'react';
import './LoginButton.css'

const LoginButton = (props) => {
    return (
        <button className='active_btn' onClick={ props.login }>Войти</button>
    );
};

export default LoginButton;