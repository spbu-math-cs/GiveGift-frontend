import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Account from "./pages/Account/Account";
import useToken from "./hooks/useToken";

function App() {
    const {token, removeToken, setToken} = useToken();

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header removeToken={removeToken} token={token}/>
                <Routes>
                    <Route exact path='' element={<Main/>}/>
                    <Route exact path='login' element={<Login setToken={setToken}/>}/>
                    <Route exact path='signup' element={<SignUp setToken={setToken}/>}/>
                    <Route exact path='account' element={<Account/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
