import React from 'react';
import './SignUp.css';
import SignUpWindow from "./SignUpWindow/SignUpWindow";

function SignUp() {

    return (
        <div className="signup">
            <div className="title">Регистрация</div>
            <SignUpWindow />
        </div>
    );
}

export default SignUp;