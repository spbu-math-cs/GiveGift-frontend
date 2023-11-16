import React from 'react';
import styles from './SignUp.module.css'
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import '../../App.css'

function SignUp({setToken}) {
    return (
        <div className={`${styles.signUp} app-wrapper-content slider`}>
            <SignUpForm setToken={setToken}/>
        </div>
    );
}

export default SignUp;