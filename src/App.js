import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Account from "./pages/Account/Account";
import Friends from "./pages/Friends/Friends";
import {FriendContextProvider, IdeasContextProvider, InterestContextProvider, UserContext} from "./context";

function App() {

    const {token, fetchUserInfo, setUserInfo} = useContext(UserContext);

    useEffect(() => {
        token ? fetchUserInfo(token) : setUserInfo({});
    }, [token]); // eslint-disable-line


    const [InterestModalWindowVisibility, setInterestModalWindowVisibility] = useState(false);

    return (
        <BrowserRouter>
            <FriendContextProvider>
                <div className="app-wrapper">
                    <Header/>
                    <Routes>
                        <Route path='/' element={
                            <FriendContextProvider>
                                <InterestContextProvider>
                                    <IdeasContextProvider>
                                        <Main InterestModalWindowVisibility={InterestModalWindowVisibility}
                                              setInterestModalWindowVisibility={setInterestModalWindowVisibility}
                                        />
                                    </IdeasContextProvider>
                                </InterestContextProvider>
                            </FriendContextProvider>
                        }/>
                        <Route path='login' element={<Login/>}/>
                        <Route path='signup' element={<SignUp/>}/>

                        {token ?
                            <>

                                <Route path='friends' element={
                                    <FriendContextProvider>
                                        <IdeasContextProvider>
                                            <Friends/>
                                        </IdeasContextProvider>
                                    </FriendContextProvider>}
                                />
                                <Route path='account/:id' element={
                                    <FriendContextProvider>
                                        <InterestContextProvider>
                                            <IdeasContextProvider>
                                                <Account InterestModalWindowVisibility={InterestModalWindowVisibility}
                                                         setInterestModalWindowVisibility={setInterestModalWindowVisibility}
                                                />
                                            </IdeasContextProvider>
                                        </InterestContextProvider>
                                    </FriendContextProvider>}
                                />
                            </> : <></>
                        }
                        <Route
                            path="*"
                            element={<Navigate to="/" replace/>}
                        />
                    </Routes>
                </div>
            </FriendContextProvider>
        </BrowserRouter>
    );
}

export default App;
