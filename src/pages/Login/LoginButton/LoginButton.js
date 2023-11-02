import React from 'react';
import './LoginButton.css'
import {NavLink} from "react-router-dom";


// TODO: НЕЛЬЗЯ ТАК
const login = () => {
    // TODO наверняка перейдет в utils, но пока пусть тут побудет
}

const LoginButton = () => {
    return (
        <NavLink end to={'/'}><button className='active_btn'>Войти</button></NavLink>
    );
};

export default LoginButton;