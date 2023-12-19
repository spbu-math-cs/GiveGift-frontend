import React, {useContext, useEffect, useState} from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import '../../App.css'
import FriendList from "../../components/FriendList/FriendList";
import FriendPageSideBarContent from "../../components/Sidebar/FriendPageSideBarContent/FriendPageSideBarContent";
import {AuthContext, FriendContext, UserContext} from "../../context";

const Friends = () => {

    const [FriendModalWindowVisibility, setFriendModalWindowVisibility] = useState(false);

    const {fetchFriendLists} = useContext(FriendContext)
    const {fetchUserInfo} = useContext(UserContext);
    const {token, setToken, removeToken} = useContext(AuthContext);

    useEffect(() => {
        fetchUserInfo(token, setToken, removeToken);
        fetchFriendLists(token);
    }, []); // eslint-disable-line

    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Заявки в друзья'}>
                <FriendPageSideBarContent/>
            </Sidebar>

            <FriendList
                FriendModalWindowVisibility={FriendModalWindowVisibility}
                setFriendModalWindowVisibility={setFriendModalWindowVisibility}
            />
        </div>
    );
};

export default Friends;