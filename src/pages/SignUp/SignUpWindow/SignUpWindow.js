import React, {useState} from 'react';
import './SignUpWindow.css';
import {NavLink, useNavigate} from "react-router-dom";
import {useFetching} from "../../../hooks/useFetching";
import UserService from "../../../API/UserService";
import SignUpButton from "../SignUpButton/SignUpButton";

function SignUpWindow(props) {
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
        <form className="signUpWindow">

            {(signUpError) ? <div>{signUpError.data}</div> : <></>}

            <div type="title">Имя пользователя</div>
            <input value={nickname} onChange={e => setNickname(e.target.value)}/>

            <div type="title">Адрес электронной почты</div>
            <input value={email} onChange={e => setEmail(e.target.value)}/>

            <div type="title">Пароль</div>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            <SignUpButton onClick={(e) => {
                e.preventDefault();
                signUpUser(nickname, email, password)
            }}>Создать аккаунт</SignUpButton>

            <div>
                <span>Уже есть аккаунт?</span>
                <NavLink className="navLink" to='/login'>Войти</NavLink>
            </div>
        </form>
    );
}

export default SignUpWindow;