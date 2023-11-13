import React from 'react';
import './SignUp.css';
import SignUpWindow from "./SignUpWindow/SignUpWindow";

function SignUp(props) {

    return (
        <div className="signup">
            <div className="title">Регистрация</div>
            <SignUpWindow setToken={props.setToken}/>
        </div>
    );
}

export default SignUp;