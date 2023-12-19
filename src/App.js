import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Account from "./pages/Account/Account";
import Friends from "./pages/Friends/Friends";
import {UserContext} from "./context/UserContext/UserContext";
import {AuthContext} from "./context/AuthContext/AuthContext";

function App() {
    const {fetchUserInfo, setUserInfo} = useContext(UserContext);
    const {token, setToken, removeToken} = useContext(AuthContext);

    useEffect(() => {
        token ? fetchUserInfo(token, setToken, removeToken) : setUserInfo({});
    }, [token]); // eslint-disable-line

    const [InterestModalWindowVisibility, setInterestModalWindowVisibility] = useState(false);

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>

                <Routes>
                    <Route path='/' element={
                        <Main InterestModalWindowVisibility={InterestModalWindowVisibility}
                              setInterestModalWindowVisibility={setInterestModalWindowVisibility}
                        />
                    }/>

                    {token
                        ? <>
                            <Route path='friends' element={<Friends/>}
                            />
                            <Route path='account/:id' element={
                                <Account InterestModalWindowVisibility={InterestModalWindowVisibility}
                                         setInterestModalWindowVisibility={setInterestModalWindowVisibility}
                                />
                            }
                            />
                        </>
                        : <>
                            <Route path='login' element={<Login/>}/>
                            <Route path='signup' element={<SignUp/>}/>
                        </>
                    }
                    <Route
                        path="*"
                        element={<Navigate to="/" replace/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
