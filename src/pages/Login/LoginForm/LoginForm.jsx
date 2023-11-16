import React, {useState} from 'react';
import styles from './LoginForm.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import {useFetching} from "../../../hooks/useFetching";
import UserService from "../../../API/UserService";
import {Alert, ThemeProvider} from "@mui/material";
import {redTheme} from "../../../components/UI/muiThemes/themes";
import PasswordInput from "../../../components/UI/Input/PasswordInput/PasswordInput";
import EmailInput from "../../../components/UI/Input/EmailInput/EmailInput";
import LoginButton from "../../../components/UI/Button/LoginButton/LoginButton";

function LoginForm(props) {
    const navigate = useNavigate()

    const [loginUser, , loginError] = useFetching(async (email, password) => {
        const response = await UserService.login(email, password);
        props.setToken(response.data['access_token']);
        navigate('/');
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (

        <form className={styles.loginForm}>

            <span className={styles.loginHeader}>Вход</span>

            {(loginError) ?
                <ThemeProvider theme={redTheme}><Alert severity="error" style={{borderRadius: '10px'}}>
                    {loginError.data}
                </Alert></ThemeProvider> : <></>}

            <ThemeProvider theme={redTheme}>
                <EmailInput email={email} setEmail={setEmail}/>
                <PasswordInput password={password} setPassword={setPassword}/>
            </ThemeProvider>

            <LoginButton loginUser={loginUser} email={email} setEmail={setEmail}
                         password={password} setPassword={setPassword}/>


            <span className={styles.signup_suggestion}>Еще нет аккаунта? <NavLink end to={'/signup'}
                                                                                  className={styles.signup_link}>Зарегистрироваться</NavLink>
            </span>
        </form>
    );
}

export default LoginForm;