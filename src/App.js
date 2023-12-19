import React, {useContext, useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import {UserContext} from "./context/UserContext/UserContext";
import {AuthContext} from "./context/AuthContext/AuthContext";
import AppRouter from "./components/AppRouter";

function App() {
    const {fetchUserInfo, setUserInfo} = useContext(UserContext);
    const {token, setToken, removeToken} = useContext(AuthContext);

    useEffect(() => {
        const updateInfo = async () => {
            token ? await fetchUserInfo(token, setToken, removeToken) : setUserInfo({});
        }
        updateInfo().catch(console.error);
    }, [token]); // eslint-disable-line

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
