import React, {useContext, useEffect, useState} from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import '../../App.css'
import FriendList from "../../components/FriendList/FriendList";
import FriendPageSideBarContent from "../../components/Sidebar/FriendPageSideBarContent/FriendPageSideBarContent";
import {FriendContext} from "../../context";

const Friends = (props) => {

    const [FriendModalWindowVisibility, setFriendModalWindowVisibility] = useState(false);

    const {fetchFriendLists} = useContext(FriendContext)

    useEffect(() => {
        props.fetchUserInfo(props.token);
        fetchFriendLists(props.token);
    }, []); // eslint-disable-line

    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Заявки в друзья'}>
                <FriendPageSideBarContent
                    token={props.token}
                />
            </Sidebar>

            <FriendList
                FriendModalWindowVisibility={FriendModalWindowVisibility}
                setFriendModalWindowVisibility={setFriendModalWindowVisibility}
                token={props.token}
            />
        </div>
    );
};

export default Friends;