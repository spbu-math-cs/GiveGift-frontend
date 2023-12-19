import React, {useContext, useEffect} from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import '../../App.css'
import FriendList from "../../components/FriendList/FriendList";
import FriendPageSideBarContent from "../../components/Sidebar/FriendPageSideBarContent/FriendPageSideBarContent";
import {FriendContext} from "../../context/FriendContext/FriendContext";
import {UserContext} from "../../context/UserContext/UserContext";
import {AuthContext} from "../../context/AuthContext/AuthContext";

const Friends = () => {
    const {fetchFriendLists} = useContext(FriendContext)
    const {fetchUserInfo} = useContext(UserContext);
    const {token, setToken, removeToken} = useContext(AuthContext);

    useEffect(() => {
        const fetchInfo = async () => {
            await fetchUserInfo(token, setToken, removeToken);
            await fetchFriendLists(token);
        }
        fetchInfo().catch(console.error)
    }, []); // eslint-disable-line

    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Заявки в друзья'}>
                <FriendPageSideBarContent/>
            </Sidebar>

            <FriendList/>
        </div>
    );
};

export default Friends;