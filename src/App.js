import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Account from "./pages/Account/Account";
import Friends from "./pages/Friends/Friends";
import {AuthContext, IdeasContextProvider, InterestContextProvider, UserContext} from "./context";

function App() {

    const {fetchUserInfo, setUserInfo} = useContext(UserContext);
    const {token, setToken, removeToken} = useContext(AuthContext);

    useEffect(() => {
        token ? fetchUserInfo(token, setToken, removeToken) : setUserInfo({});
    }, [token]); // eslint-disable-line


    const [InterestModalWindowVisibility, setInterestModalWindowVisibility] = useState(false);


    // TODO: для каждой страницы сделать отдельный провайдер для красоты
    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>

                <Routes>
                    <Route path='/' element={
                        <InterestContextProvider>
                            <IdeasContextProvider>
                                <Main InterestModalWindowVisibility={InterestModalWindowVisibility}
                                      setInterestModalWindowVisibility={setInterestModalWindowVisibility}
                                />
                            </IdeasContextProvider>
                        </InterestContextProvider>
                    }/>

                    {token ?
                        <>
                            <Route path='friends' element={
                                <IdeasContextProvider>
                                    <Friends/>
                                </IdeasContextProvider>}
                            />
                            <Route path='account/:id' element={
                                <InterestContextProvider>
                                    <IdeasContextProvider>
                                        <Account InterestModalWindowVisibility={InterestModalWindowVisibility}
                                                 setInterestModalWindowVisibility={setInterestModalWindowVisibility}
                                        />
                                    </IdeasContextProvider>
                                </InterestContextProvider>
                            }
                            />
                        </> :
                        <>
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
