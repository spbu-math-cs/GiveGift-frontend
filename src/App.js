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
import IdeaService from "./API/IdeaService";
import {isTokenError} from "./utils/checkers";
import InterestService from "./API/InterestService";
import {FriendContextProvider} from "./context";

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

    // TODO: баг с отправкой и последующим обновлением данных аккаунта: несвоевременное обновление
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

    const [ideas, setIdeas] = useState([])

    const [generateIdeas, isIdeasLoading, ideaError] = useFetching(async ({
                                                                              userIdeaProperties,
                                                                              friend_id,
                                                                              token
                                                                          }) => {
        const response = await
            ((friend_id && token)
                ? IdeaService.getIdeasForFriend(token, friend_id)
                : IdeaService.getIdeas(userIdeaProperties));
        setIdeas(response.data);
    })

    const [allInterests, setAllInterests] = useState([])

    const [fetchInterests, ,] = useFetching(async () => {
        const response = await InterestService.getAll();
        setAllInterests(response.data && response.data['all_interests']);
    })

    const [InterestModalWindowVisibility, setInterestModalWindowVisibility] = useState(false);

    return (
        <BrowserRouter>
            <FriendContextProvider>
                <div className="app-wrapper">
                    <Header logout={logout}
                            userInfo={userInfo}
                            removeToken={removeToken} token={token}/>

                    <Routes>
                        <Route path='/' element={
                            <FriendContextProvider>
                                <Main token={token} ideas={ideas}
                                      generateIdeas={generateIdeas}
                                      isIdeasLoading={isIdeasLoading}
                                      ideaError={ideaError}
                                      allInterests={allInterests}
                                      fetchInterests={fetchInterests}
                                      InterestModalWindowVisibility={InterestModalWindowVisibility}
                                      setInterestModalWindowVisibility={setInterestModalWindowVisibility}
                                />
                            </FriendContextProvider>
                        }/>
                        <Route path='login' element={<Login setToken={setToken}/>}/>
                        <Route path='signup' element={<SignUp setToken={setToken}/>}/>

                        {token ?
                            <>

                                <Route path='friends' element={
                                    <FriendContextProvider>
                                        <Friends token={token}
                                                 generateIdeas={generateIdeas}
                                                 fetchUserInfo={fetchUserInfo}
                                        /></FriendContextProvider>}
                                />
                                <Route path='account/:id' element={
                                    <FriendContextProvider>
                                        <Account userInfo={userInfo}
                                                 generateIdeas={generateIdeas}
                                                 token={token}
                                                 fetchUserInfo={fetchUserInfo}
                                                 allInterests={allInterests}
                                                 fetchInterests={fetchInterests}
                                                 InterestModalWindowVisibility={InterestModalWindowVisibility}
                                                 setInterestModalWindowVisibility={setInterestModalWindowVisibility}

                                                 setUserInfo={setUserInfo}
                                                 setUserAccInfo={setUserAccInfo}
                                                 userInfoError={userInfoError}
                                                 isSetUserInfoLoading={isSetUserInfoLoading}
                                                 setUserInfoError={setUserInfoError}
                                        /></FriendContextProvider>}
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
