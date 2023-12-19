import React from 'react';
import styles from './SignUpButton.module.css'
import ActiveButton from "../ActiveButton/ActiveButton";
import {useNavigate} from "react-router-dom";

const SignUpButton = ({nickname, email, password, setNickname, setEmail, setPassword, signUpUser}) => {
    const navigate = useNavigate();
    return (
        <ActiveButton className={styles.signUpBtn} onClick={(e) => {
            e.preventDefault();

            signUpUser(nickname, email, password);
            navigate('/');

            setNickname('');
            setEmail('');
            setPassword('');
        }}>Создать аккаунт</ActiveButton>
    );
};

export default SignUpButton;