import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Account from "./pages/Account/Account";

function App() {

    // TODO: Наверное, тут будут хранится данные user'а в виде object

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Routes>
                    <Route exact path='' element={<Main/>}/>
                    <Route exact path='login' element={<Login/>}/>
                    <Route exact path='signup' element={<SignUp/>}/>
                    <Route exact path='account' element={<Account/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
