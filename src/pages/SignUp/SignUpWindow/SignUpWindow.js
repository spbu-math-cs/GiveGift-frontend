import React, {useState} from 'react';
import './SignUpWindow.css';
import {NavLink, useNavigate} from "react-router-dom";
import SignUpButton from "../SignUpButton/SignUpButton";
import axios from "axios";

function SignUpWindow(props) {

    async function signup () {

        let user = {
            nickname: nickname,
            email: email,
            password: password,
            birth_date: '01-01',
            about: '',
            interests: []
        }

        axios.post('http://127.0.0.1:5000/register', user)
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

    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let [flagError, setFlagError] = useState(false)
    let [textError, setTextError] = useState('')

    return (
        <div className="signUpWindow">
            { (flagError) ? <error>{textError}</error> : <></> }

            <div type="title">Имя пользователя</div>
            <input value={nickname} onChange={e => setNickname(e.target.value)}/>

            <div type="title">Адрес электронной почты</div>
            <input value={email} onChange={e => setEmail(e.target.value)}/>

            <div type="title">Пароль</div>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            <SignUpButton signup={ signup } />

            <div>
                <span>Уже есть аккаунт?</span>
                <NavLink className="navLink" to='/login'>Войти</NavLink>
            </div>
        </div>
    );
}

export default SignUpWindow;