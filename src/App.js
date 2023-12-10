import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
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

function App() {
    const {token, removeToken, setToken} = useToken();

    const [userInfo, setUserInfo] = useState({})

    const [fetchUserInfo, ,] = useFetching(async (token) => {
        const response = await UserService.getUserInfo(token, 0);
        setUserInfo(response.data);
    })

    const [logout, ,] = useFetching(async (token) => {
        await UserService.logout(token)
    })

    useEffect(() => {
        token ? fetchUserInfo(token) : setUserInfo({});
    }, [token]);

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

    const [friends, setFriends] = useState([]);

    // TODO: Not found page error component
    // TODO: Страница аккаунта и страница с друзьями только для залогиненных пользователей
    // TODO: Запрещать незалогиненным пользователям переходить на страницу с друзьями
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header logout={logout} userInfo={userInfo} removeToken={removeToken} token={token}/>
                <Routes>
                    <Route exact path='' element={<Main token={token} ideas={ideas}
                                                        friends={friends}
                                                        generateIdeas={generateIdeas}
                                                        isIdeasLoading={isIdeasLoading}
                                                        ideaError={ideaError}/>}/>
                    <Route exact path='login' element={<Login setToken={setToken}/>}/>
                    <Route exact path='signup' element={<SignUp setToken={setToken}/>}/>
                    <Route exact path='friends' element={<Friends token={token} friends={friends}
                                                                  setFriends={setFriends}
                                                                  generateIdeas={generateIdeas}/>}/>
                    <Route exact path='account/:id' element={<Account token={token}/>}/>
                    <Route path='*' element={<div>Test</div>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
