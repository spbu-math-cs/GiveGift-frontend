import React, {useEffect, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Account from "./pages/Account/Account";
import useToken from "./hooks/useToken";
import {useFetching} from "./hooks/useFetching";
import UserService from "./API/UserService";
import Friends from "./pages/Friends/Friends";
import {isTokenError} from "./utils/checkers";
import {FriendContextProvider, IdeasContextProvider, InterestContextProvider} from "./context";

function App() {
    const {token, removeToken, setToken} = useToken();

    const [userInfo, setUserInfo] = useState({})

    const [fetchUserInfo, ,] = useFetching(async (token) => {
        try {
            const response = await UserService.getUserInfo(token, 0);
            const {access_token, ...userData} = response.data;
            access_token && setToken(access_token);
            setUserInfo(userData);
        } catch (err) {
            isTokenError(err.response) && removeToken()
        }
    })

    const [setUserAccInfo, isSetUserInfoLoading, userInfoError, setUserInfoError] = useFetching(async (token, accInfo) => {
        await UserService.setUserInfo(token, accInfo);
        setUserInfo(accInfo);
    })

    const [logout, ,] = useFetching(async (token) => {
        await UserService.logout(token)
    })

    useEffect(() => {
        token ? fetchUserInfo(token) : setUserInfo({});
    }, [token]); // eslint-disable-line


    const [InterestModalWindowVisibility, setInterestModalWindowVisibility] = useState(false);

    return (
        <BrowserRouter>
            <FriendContextProvider>
                <div className="app-wrapper">
                    <Header logout={logout}
                            userInfo={userInfo}
                            removeToken={removeToken} token={token}
                    />

                    <Routes>
                        <Route path='/' element={
                            <FriendContextProvider>
                                <InterestContextProvider>
                                    <IdeasContextProvider>
                                        <Main token={token}
                                              InterestModalWindowVisibility={InterestModalWindowVisibility}
                                              setInterestModalWindowVisibility={setInterestModalWindowVisibility}
                                        />
                                    </IdeasContextProvider>
                                </InterestContextProvider>
                            </FriendContextProvider>
                        }/>
                        <Route path='login' element={<Login setToken={setToken}/>}/>
                        <Route path='signup' element={<SignUp setToken={setToken}/>}/>

                        {token ?
                            <>

                                <Route path='friends' element={
                                    <FriendContextProvider>
                                        <IdeasContextProvider>
                                            <Friends token={token} fetchUserInfo={fetchUserInfo}/>
                                        </IdeasContextProvider>
                                    </FriendContextProvider>}
                                />
                                <Route path='account/:id' element={
                                    <FriendContextProvider>
                                        <InterestContextProvider>
                                            <IdeasContextProvider>
                                                <Account userInfo={userInfo}
                                                         token={token}
                                                         fetchUserInfo={fetchUserInfo}
                                                         InterestModalWindowVisibility={InterestModalWindowVisibility}
                                                         setInterestModalWindowVisibility={setInterestModalWindowVisibility}

                                                         setUserInfo={setUserInfo}

                                                         setUserAccInfo={setUserAccInfo}
                                                         userInfoError={userInfoError}
                                                         isSetUserInfoLoading={isSetUserInfoLoading}
                                                         setUserInfoError={setUserInfoError}
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
