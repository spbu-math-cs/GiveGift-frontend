import React from 'react';
import './SignUpButton.css'

const SignUpButton = (props) => {
    return (
        <button {...props} className='active_btn'>Создать аккаунт</button>
    );
};

export default SignUpButton;