import React from 'react';
import styles from './SignUpButton.module.css'
import ActiveButton from "../ActiveButton/ActiveButton";

const SignUpButton = ({nickname, email, password, setNickname, setEmail, setPassword, signUpUser}) => {
    return (
        <ActiveButton className={styles.signUpBtn} onClick={(e) => {
            e.preventDefault();

            signUpUser(nickname, email, password);

            setNickname('');
            setEmail('');
            setPassword('');
        }}>Создать аккаунт</ActiveButton>
    );
};

export default SignUpButton;