import React from 'react';
import './SignUpButton.css'

const SignUpButton = (props) => {
    return (
        <button className='active_btn' onClick={ props.signup }>Создать аккаунт</button>
    );
};

export default SignUpButton;