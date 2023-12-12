import React, {useEffect, useState} from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import '../../App.css'
import FriendList from "../../components/FriendList/FriendList";
import FriendPageSideBarContent from "../../components/Sidebar/FriendPageSideBarContent/FriendPageSideBarContent";

const Friends = (props) => {

    const [FriendModalWindowVisibility, setFriendModalWindowVisibility] = useState(false);

    useEffect(() => {
        props.fetchFriendLists(props.token);
    }, []);

    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Заявки в друзья'}>
                <FriendPageSideBarContent
                    incomingRequests={props.incomingRequests}
                    setIncomingRequests={props.setIncomingRequests}
                    outgoingRequests={props.outgoingRequests}
                    setOutgoingRequests={props.setOutgoingRequests}

                    revokeFriendRequest={props.revokeFriendRequest}
                    token={props.token}

                    acceptFriendRequest={props.acceptFriendRequest}
                    rejectFriendRequest={props.rejectFriendRequest}
                />
            </Sidebar>

            <FriendList
                FriendModalWindowVisibility={FriendModalWindowVisibility}
                setFriendModalWindowVisibility={setFriendModalWindowVisibility}
                friendList={props.friends}
                sendFriendRequest={props.sendFriendRequest}
                isSendRequestLoading={props.isSendRequestLoading}
                sendRequestError={props.sendRequestError}

                removeFriend={props.removeFriend}
                generateIdeas={props.generateIdeas}
                token={props.token}
            />
        </div>
    );
};

export default Friends;