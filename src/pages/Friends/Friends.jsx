import React, {useEffect, useState} from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import '../../App.css'
import FriendList from "../../components/FriendList/FriendList";
import FriendPageSideBarContent from "../../components/Sidebar/FriendPageSideBarContent/FriendPageSideBarContent";
import FriendService from "../../API/FriendService";
import {useFetching} from "../../hooks/useFetching";

const Friends = ({token}) => {


    const [friends, setFriends] = useState([]);
    const [incomingRequests, setIncomingRequests] = useState([]);
    const [outgoingRequests, setOutgoingRequests] = useState([]);

    const [fetchFriendLists, ,] = useFetching(async (token) => {
        const response = await FriendService.getAllFriendLists(token);
        setFriends(response.data['friends']);
        setIncomingRequests(response.data['incoming_requests']);
        setOutgoingRequests(response.data['outgoing_requests']);
    })

    useEffect(() => {
        fetchFriendLists(token);
    }, []);

    // todo: мб сократить можно
    // todo: обрабатывать ошибку нужно
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

    const [FriendModalWindowVisibility, setFriendModalWindowVisibility] = useState(false);

    // TODO: tab - новая компонента
    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Заявки в друзья'}>
                <FriendPageSideBarContent
                    incomingRequests={incomingRequests}
                    setIncomingRequests={setIncomingRequests}
                    outgoingRequests={outgoingRequests}
                    setOutgoingRequests={setOutgoingRequests}

                    revokeFriendRequest={revokeFriendRequest}
                    token={token}

                    acceptFriendRequest={acceptFriendRequest}
                    rejectFriendRequest={rejectFriendRequest}
                />
            </Sidebar>

            <FriendList
                FriendModalWindowVisibility={FriendModalWindowVisibility}
                setFriendModalWindowVisibility={setFriendModalWindowVisibility}
                friendList={friends}
                sendFriendRequest={sendFriendRequest}
                isSendRequestLoading={isSendRequestLoading}
                sendRequestError={sendRequestError}

                removeFriend={removeFriend}
                token={token}
            />
        </div>
    );
};

export default Friends;