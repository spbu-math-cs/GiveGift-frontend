import React from 'react';
import styles from './Login.module.css'
import LoginForm from "../../components/LoginForm/LoginForm";
import '../../App.css'

function Login({setToken}) {
    return (
        <div className={`${styles.login} app-wrapper-content slider`}>
            <LoginForm setToken={setToken}/>
        </div>
    );
}

export default Login;