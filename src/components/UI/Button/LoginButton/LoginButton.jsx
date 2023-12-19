import React from 'react';
import styles from "./LoginButton.module.css";
import ActiveButton from "../ActiveButton/ActiveButton";
import {useNavigate} from "react-router-dom";

const LoginButton = ({loginUser, email, password, setEmail, setPassword}) => {
    const navigate = useNavigate();
    return (
        <ActiveButton className={styles.loginBtn} onClick={(e) => {
            e.preventDefault();
            loginUser(email, password);

            navigate('/');

            setPassword('');
            setEmail('');
        }}>Войти</ActiveButton>
    );
};

export default LoginButton;