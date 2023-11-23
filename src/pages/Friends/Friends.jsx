import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import '../../App.css'
import FriendList from "../../components/FriendList/FriendList";

const Friends = () => {
    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Заявки в друзья'}/>
            <FriendList/>
        </div>
    );
};

export default Friends;