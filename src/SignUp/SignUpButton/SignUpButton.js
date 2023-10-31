import React from 'react';
import './SignUpButton.css'

let signup = () => {
    window.location.assign('http://localhost:3000/')
}

const SignUpButton = () => {
    return (
        <button className='active_btn' onClick={ signup }>Создать аккаунт</button>
    );
};

export default SignUpButton;