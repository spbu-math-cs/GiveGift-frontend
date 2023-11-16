import React from 'react';
import styles from './SignUp.module.css'
import SignUpForm from "./SignUpForm/SignUpForm";
import '../../App.css'

function SignUp(props) {

    return (
        <div className={`${styles.signUp} app-wrapper-content slider`}>
            <SignUpForm setToken={props.setToken}/>
        </div>
    );
}

export default SignUp;