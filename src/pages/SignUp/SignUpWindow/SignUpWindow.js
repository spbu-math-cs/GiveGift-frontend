import React from 'react';
import './SignUpWindow.css';
import {NavLink} from "react-router-dom";
import SignUpButton from "../SignUpButton/SignUpButton";

function SignUpWindow() {

    return (
        <div className="overlap">
            <div className="overlap-group">
                <div className="subtitle">Имя пользователя</div>
                <input className="rectangle"/>
                <div className="subtitle">Адрес электронной почты</div>
                <input className="rectangle"/>
                <div className="subtitle">Пароль</div>
                <input className="rectangle" type="password"/>

                <SignUpButton />

                <div className="div">
                    <span className="text-wrapper">Уже есть аккаунт?</span>
                    <NavLink className="text-wrapper-2" to='/login'>Войти</NavLink>
                </div>
            </div>
        </div>
    );
}

export default SignUpWindow;