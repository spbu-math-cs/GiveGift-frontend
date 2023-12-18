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
import FriendService from "./API/FriendService";
import {isTokenError} from "./utils/checkers";
import InterestService from "./API/InterestService";

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

    const [friends, setFriends] = useState([]);

    const [incomingRequests, setIncomingRequests] = useState([]);
    const [outgoingRequests, setOutgoingRequests] = useState([]);

    const [fetchFriendLists, ,] = useFetching(async (token) => {
        const response = await FriendService.getAllFriendLists(token);
        setFriends(response.data['friends']);
        setIncomingRequests(response.data['incoming_requests']);
        setOutgoingRequests(response.data['outgoing_requests']);
    })


    // TODO: так-то это все в хук отдельный можно все впихнуть
    const [sendFriendRequest, isSendRequestLoading, sendRequestError] = useFetching(async (token, friend_id) => {
        await FriendService.sendFriendRequest(token, friend_id);
        await fetchFriendLists(token);
    })

    const [revokeFriendRequest, , revokeRequestError] = useFetching(async (token, friend_id) => {
        await FriendService.revokeFriendRequest(token, friend_id);
        await fetchFriendLists(token);
    })

    const [acceptFriendRequest, , acceptFriendRequestError] = useFetching(async (token, friend_id) => {
        await FriendService.acceptFriendRequest(token, friend_id);
        await fetchFriendLists(token);
    })

    const [rejectFriendRequest, , rejectFriendRequestError] = useFetching(async (token, friend_id) => {
        await FriendService.rejectFriendRequest(token, friend_id);
        await fetchFriendLists(token);
    })

    const [removeFriend, , removeFriendError] = useFetching(async (token, friend_id) => {
        await FriendService.removeFriend(token, friend_id);
        await fetchFriendLists(token);
    })

    const [allInterests, setAllInterests] = useState([])

    const [fetchInterests, ,] = useFetching(async () => {
        const response = await InterestService.getAll();
        setAllInterests(response.data && response.data['all_interests']);
    })

    const [InterestModalWindowVisibility, setInterestModalWindowVisibility] = useState(false);

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header logout={logout}
                        userInfo={userInfo}
                        removeToken={removeToken} token={token}/>

                <Routes>
                    <Route path='/' element={
                        <Main token={token} ideas={ideas}
                              generateIdeas={generateIdeas}
                              isIdeasLoading={isIdeasLoading}
                              ideaError={ideaError}
                              userInfo={userInfo}
                              fetchUserInfo={fetchUserInfo}
                              allInterests={allInterests}
                              fetchInterests={fetchInterests}
                              InterestModalWindowVisibility={InterestModalWindowVisibility}
                              setInterestModalWindowVisibility={setInterestModalWindowVisibility}
                        />
                    }/>
                    <Route path='login' element={<Login setToken={setToken}/>}/>
                    <Route path='signup' element={<SignUp setToken={setToken}/>}/>

                    {token ?
                        <>
                            <Route path='friends' element={
                                <Friends token={token}
                                         friends={friends}
                                         generateIdeas={generateIdeas}
                                         incomingRequests={incomingRequests}
                                         outgoingRequests={outgoingRequests}
                                         sendFriendRequest={sendFriendRequest}
                                         isSendRequestLoading={isSendRequestLoading}
                                         sendRequestError={sendRequestError}
                                         revokeFriendRequest={revokeFriendRequest}
                                         revokeRequestError={revokeRequestError}
                                         acceptFriendRequest={acceptFriendRequest}
                                         acceptFriendRequestError={acceptFriendRequestError}
                                         rejectFriendRequest={rejectFriendRequest}
                                         rejectFriendRequestError={rejectFriendRequestError}
                                         removeFriend={removeFriend}
                                         removeFriendError={removeFriendError}
                                         fetchFriendLists={fetchFriendLists}
                                         fetchUserInfo={fetchUserInfo}
                                />}
                            />
                            <Route path='account/:id' element={
                                <Account userInfo={userInfo}
                                         generateIdeas={generateIdeas}
                                         token={token}
                                         sendFriendRequest={sendFriendRequest}
                                         isSendRequestLoading={isSendRequestLoading}
                                         revokeFriendRequest={revokeFriendRequest}
                                         acceptFriendRequest={acceptFriendRequest}
                                         rejectFriendRequest={rejectFriendRequest}
                                         removeFriend={removeFriend}
                                         fetchFriendLists={fetchFriendLists}
                                         myFriends={friends}
                                         myIncomingRequests={incomingRequests}
                                         myOutgoingRequests={outgoingRequests}
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
                                />}
                            />
                        </> : <></>
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
