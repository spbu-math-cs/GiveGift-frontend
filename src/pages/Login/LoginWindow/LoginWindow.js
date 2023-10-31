import React from 'react';
import './LoginWindow.css';
import {NavLink} from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";

function LoginWindow() {

    return (
        <div className="overlap">
            <div className="overlap-group">
                <div className="subtitle">Логин</div>
                <input className="rectangle" name='login'/>
                <div className="subtitle">Пароль</div>
                <input className="rectangle" type="password"/>

                <div className="div">
                    <span className="text-wrapper-1"><input type="checkbox"/>Запомнить меня</span>
                    <NavLink className="text-wrapper-2" onClick={() => {alert('Грустно :(')}} to={"/"}>Забыли пароль?</NavLink>
                </div>

                <LoginButton />

                <div className="div">
                    <span className="text-wrapper">Еще нет аккаунта?</span>
                    <NavLink className="text-wrapper-2" to='/signup'>Зарегистрироваться</NavLink>
                </div>
            </div>
        </div>
    );
}

export default LoginWindow;