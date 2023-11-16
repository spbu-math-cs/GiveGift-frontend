import React from 'react';
import styles from "./LoginButton.module.css";
import ActiveButton from "../ActiveButton/ActiveButton";

const LoginButton = ({loginUser, email, password, setEmail, setPassword}) => {
    return (
        <ActiveButton className={styles.loginBtn} onClick={(e) => {
            e.preventDefault();
            loginUser(email, password);

            setPassword('');
            setEmail('');
        }}>Войти</ActiveButton>
    );
};

export default LoginButton;