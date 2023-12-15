import React, {useEffect, useState} from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import '../../App.css'
import FriendList from "../../components/FriendList/FriendList";
import FriendPageSideBarContent from "../../components/Sidebar/FriendPageSideBarContent/FriendPageSideBarContent";

const Friends = (props) => {

    const [FriendModalWindowVisibility, setFriendModalWindowVisibility] = useState(false);

    useEffect(() => {
        props.fetchUserInfo(props.token);
        props.fetchFriendLists(props.token);
    }, []); // eslint-disable-line

    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Заявки в друзья'}>
                <FriendPageSideBarContent
                    incomingRequests={props.incomingRequests}
                    outgoingRequests={props.outgoingRequests}

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