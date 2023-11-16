import React from 'react';
import styles from './Login.module.css'
import LoginForm from "./LoginForm/LoginForm";
import '../../App.css'

function Login(props) {

    return (
        <div className={`${styles.login} app-wrapper-content slider`}>
            <LoginForm setToken={props.setToken}/>
        </div>
    );
}

export default Login;