import React, {useEffect, useState} from "react";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountPageSideBarContent from "../../components/Sidebar/AccountPageSideBarContent/AccountPageSideBarContent";
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import UserService from "../../API/UserService";
import FriendService from "../../API/FriendService";


function Account({token, userInfo}) {
    const params = useParams()
    const [accInfo, setAccInfo] = useState({})

    const [fetchAccInfo, isAccInfoLoading, accInfoError] = useFetching(async (token, id) => {
        const response = await UserService.getUserInfo(token, id);
        setAccInfo(response.data)
    })

    // TODO: ctrl c + ctrl v написано мб надо контекст использовать для списка друзей и токена

    const [myFriends, setMyFriends] = useState([])
    const [myIncomingRequests, setMyIncomingRequests] = useState([]);
    const [myOutgoingRequests, setMyOutgoingRequests] = useState([]);

    const [fetchFriendLists, ,] = useFetching(async (token) => {
        const response = await FriendService.getAllFriendLists(token);
        setMyFriends(response.data['friends']);
        setMyIncomingRequests(response.data['incoming_requests']);
        setMyOutgoingRequests(response.data['outgoing_requests']);
    })

    const [sendFriendRequest, ,] = useFetching(async (token, id) => {
        await FriendService.sendFriendRequest(token, id);
        await fetchFriendLists(token);
        await fetchAccInfo(token, id);
    })

    const [revokeFriendRequest, ,] = useFetching(async (token, id) => {
        await FriendService.revokeFriendRequest(token, id);
        await fetchFriendLists(token);
        await fetchAccInfo(token, id);
    })

    const [removeFriend, ,] = useFetching(async (token, id) => {
        await FriendService.removeFriend(token, id);
        await fetchFriendLists(token);
        await fetchAccInfo(token, id);
    })

    const [acceptFriendRequest, ,] = useFetching(async (token, id) => {
        await FriendService.acceptFriendRequest(token, id);
        await fetchFriendLists(token);
        await fetchAccInfo(token, id);
    })

    const [rejectFriendRequest, ,] = useFetching(async (token, id) => {
        await FriendService.rejectFriendRequest(token, id);
        await fetchFriendLists(token);
        await fetchAccInfo(token, id);
    })


    useEffect(() => {
        fetchAccInfo(token, params.id);
        fetchFriendLists(token);
    }, [params]);

    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Друзья'}>
                {!accInfoError && (isAccInfoLoading || Object.keys(accInfo).length === 0) ?
                    <></> :
                    <AccountPageSideBarContent
                        userFriends={accInfo.friends}
                        myFriends={myFriends}
                        myID={userInfo.id}
                    />
                }
            </Sidebar>


            <AccountInfo isAccInfoLoading={!accInfoError && (isAccInfoLoading || Object.keys(accInfo).length === 0)}
                         token={token}
                         accInfo={accInfo}
                         accInfoError={accInfoError}
                         sendFriendRequest={sendFriendRequest}
                         revokeFriendRequest={revokeFriendRequest}
                         myFriends={myFriends}
                         acceptFriendRequest={acceptFriendRequest}
                         rejectFriendRequest={rejectFriendRequest}
                         myOutgoingRequests={myOutgoingRequests}
                         myIncomingRequests={myIncomingRequests}
                         removeFriend={removeFriend}
                         myID={userInfo.id}
            />

        </div>
    );
}

export default Account;