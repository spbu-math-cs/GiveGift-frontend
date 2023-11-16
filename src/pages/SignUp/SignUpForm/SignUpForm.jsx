import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useFetching} from "../../../hooks/useFetching";
import UserService from "../../../API/UserService";
import {Alert, OutlinedInput, ThemeProvider} from "@mui/material";
import {redTheme} from "../../../components/UI/muiThemes/themes";
import styles from './SignUpForm.module.css'
import EmailInput from "../../../components/UI/Input/EmailInput/EmailInput";
import PasswordInput from "../../../components/UI/Input/PasswordInput/PasswordInput";
import SignUpButton from "../../../components/UI/Button/SignUpButton/SignUpButton";


function SignUpForm(props) {
    const navigate = useNavigate()

    const [signUpUser, , signUpError] = useFetching(async (nickname, email, password) => {
        const response = await UserService.signUp(nickname, email, password);
        props.setToken(response.data['access_token']);
        navigate('/');
    })

    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className={styles.signUpForm}>

            <span className={styles.signUpHeader}>Регистрация</span>

            {(signUpError) ?
                <ThemeProvider theme={redTheme}><Alert severity="error" style={{borderRadius: '10px'}}>
                    {signUpError.data}
                </Alert></ThemeProvider> : <></>}

            <ThemeProvider theme={redTheme}>
                <OutlinedInput
                    placeholder={'Логин'}
                    type={'email'} name={'email'}
                    value={nickname}
                    autoComplete='text'
                    sx={{width: '100%'}}
                    style={{borderRadius: "10px"}}
                    onChange={e => setNickname(e.target.value)}
                    required/>
                <EmailInput email={email} setEmail={setEmail}/>
                <PasswordInput password={password} setPassword={setPassword}/>
            </ThemeProvider>

            <SignUpButton signUpUser={signUpUser}
                          password={password} email={email} nickname={nickname}
                          setPassword={setPassword} setEmail={setEmail} setNickname={setNickname}/>

            <span className={styles.login_suggestion}>Уже есть аккаунт? <NavLink end to={'/login'}
                                                                                 className={styles.login_link}>Войти</NavLink>
            </span>
        </form>
    );
}

export default SignUpForm;