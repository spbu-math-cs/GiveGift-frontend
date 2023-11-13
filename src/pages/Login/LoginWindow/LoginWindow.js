import React, {useState} from 'react';
import './LoginWindow.css';
import {NavLink, useNavigate} from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import axios from "axios";

function LoginWindow(props) {

    async function login () {
        let user = {
            email: email,
            password: password
        }

        axios.post('http://127.0.0.1:5000/login', user)
            .then((response) => {
                if (response.data.response === '200') {
                    props.setToken(response.data.access_token)
                    navigate('/', {})
                }
                else
                    setFlagError(response.data.response !== '200')

                setTextError(response.data.message)
            })
    }

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let [flagError, setFlagError] = useState(false)
    let [textError, setTextError] = useState('')

    return (
        <div className="loginWindow">
            { (flagError) ? <error>{textError}</error> : <></> }

            <div type="title">Логин</div>
            <input name='login' value={email} onChange={e => setEmail(e.target.value)}/>

            <div type="title">Пароль</div>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            <div>
                <span className="text"><input type="checkbox"/>Запомнить меня</span>
                <NavLink className="navLink" onClick={() => {alert('Грустно :(')}} to={"/"}>Забыли пароль?</NavLink>
            </div>

            <LoginButton login = { login }/>

            <div>
                <span className="text-to-signup">Еще нет аккаунта?</span>
                <NavLink className="navLink" to='/signup'>Зарегистрироваться</NavLink>
            </div>
        </div>
    );
}

export default LoginWindow;