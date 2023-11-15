import React, {useState} from 'react';
import './LoginWindow.css';
import {NavLink, useNavigate} from "react-router-dom";
import {useFetching} from "../../../hooks/useFetching";
import UserService from "../../../API/UserService";
import LoginButton from "../LoginButton/LoginButton";

function LoginWindow(props) {
    const navigate = useNavigate()

    const [loginUser, , loginError] = useFetching(async (email, password) => {
        const response = await UserService.login(email, password);
        props.setToken(response.data['access_token']);
        navigate('/');
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className="loginWindow">

            {(loginError) ? <div>{loginError.data}</div> : <></>}

            <div type="title">Логин</div>
            <input name='login' value={email} onChange={e => setEmail(e.target.value)}/>

            <div type="title">Пароль</div>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            <div>
                <span className="text"><input type="checkbox"/>Запомнить меня</span>
                <NavLink className="navLink" onClick={() => {
                    alert('Грустно :(')
                }} to={"/"}>Забыли пароль?</NavLink>
            </div>

            <LoginButton onClick={(e) => {e.preventDefault(); loginUser(email, password);}}>Войти</LoginButton>

            <div>
                <span className="text-to-signup">Еще нет аккаунта?</span>
                <NavLink className="navLink" to='/signup'>Зарегистрироваться</NavLink>
            </div>
        </form>
    );
}

export default LoginWindow;