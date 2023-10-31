import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Main from "./Main/Main";
import Account from "./Account/Account";

function App() {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Routes>
                    <Route exact path='' element={<Main/>} />
                    <Route exact path='login' element={<Login/>} />
                    <Route exact path='signup' element={<SignUp/>} />
                    <Route exact path='account' element={<Account/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
