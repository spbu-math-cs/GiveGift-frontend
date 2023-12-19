import {createContext, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import FriendService from "../API/FriendService";
import IdeaService from "../API/IdeaService";
import InterestService from "../API/InterestService";
import UserService from "../API/UserService";
import {isTokenError} from "../utils/checkers";
import useToken from "../hooks/useToken";

export const FriendContext = createContext(null);

export const IdeasContext = createContext(null);

export const InterestContext = createContext(null);

export const UserContext = createContext(null);

export const FriendContextProvider = ({children}) => {
    const [friends, setFriends] = useState([]);

    const [incomingRequests, setIncomingRequests] = useState([]);
    const [outgoingRequests, setOutgoingRequests] = useState([]);

    const [fetchFriendLists, ,] = useFetching(async (token) => {
        const response = await FriendService.getAllFriendLists(token);
        setFriends(response.data['friends']);
        setIncomingRequests(response.data['incoming_requests']);
        setOutgoingRequests(response.data['outgoing_requests']);
    })

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

    return <FriendContext.Provider value={
        {
            friends,
            incomingRequests, setIncomingRequests,
            outgoingRequests, setOutgoingRequests,
            fetchFriendLists,
            sendFriendRequest, isSendRequestLoading, sendRequestError,
            revokeFriendRequest, revokeRequestError,
            acceptFriendRequest, acceptFriendRequestError,
            rejectFriendRequest, rejectFriendRequestError,
            removeFriend, removeFriendError
        }
    }>
        {children}
    </FriendContext.Provider>
}

export const IdeasContextProvider = ({children}) => {
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

    return (<IdeasContext.Provider value={
        {
            ideas,
            generateIdeas, isIdeasLoading, ideaError
        }
    }>
        {children}
    </IdeasContext.Provider>);
}

export const InterestContextProvider = ({children}) => {
    const [allInterests, setAllInterests] = useState([])

    const [fetchInterests, ,] = useFetching(async () => {
        const response = await InterestService.getAll();
        setAllInterests(response.data && response.data['all_interests']);
    })

    return (<InterestContext.Provider value={
        {allInterests, fetchInterests}
    }>
        {children}
    </InterestContext.Provider>);
}

export const UserContextProvider = ({children}) => {
    const {token, removeToken, setToken} = useToken();

    const [userInfo, setUserInfo] = useState({})

    const myID = userInfo.id;

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

    const [changeUserInfo, isChangeUserInfoLoading, changeUserInfoError, setChangeUserInfoError] = useFetching(async (token, accInfo) => {
        await UserService.changeUserInfo(token, accInfo);
        setUserInfo(accInfo);
    })

    const [signUpUser, , signUpError] = useFetching(async (nickname, email, password) => {
        const response = await UserService.signUp(nickname, email, password);
        setToken(response.data['access_token']);
    })

    const [loginUser, , loginError] = useFetching(async (email, password) => {
        const response = await UserService.login(email, password);
        setToken(response.data['access_token']);
    })

    const [logout, ,] = useFetching(async (token) => {
        await UserService.logout(token)
    })

    return (<UserContext.Provider value={
        {
            token, removeToken, setToken,
            userInfo, setUserInfo, myID,
            fetchUserInfo,
            changeUserInfo, isChangeUserInfoLoading, changeUserInfoError,
            setChangeUserInfoError,
            signUpUser, signUpError,
            loginUser, loginError,
            logout
        }
    }>
        {children}
    </UserContext.Provider>)
}