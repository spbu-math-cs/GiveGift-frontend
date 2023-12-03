import React, {useState} from 'react';
import styles from './FriendList.module.css'
import Friend from "./Friend/Friend";
import {useFriendSearch} from "../../hooks/useFriendSearch";
import FriendSearch from "../FriendSearch/FriendSearch";


const FriendList = ({removeFriend, friendList, sendFriendRequest, token, FriendModalWindowVisibility, setFriendModalWindowVisibility}) => {

    const [searchQuery, setSearchQuery] = useState('');

    const searchResults = useFriendSearch(friendList, searchQuery);

    const addUserFriend = (newFriend) => {
        alert('Ok')
    }

    // TODO: Удаление друга будет происходить посредством api
    return (
        <div className={`${styles.friend_list_wrapper}`}>
            <div className={`${styles.friend_list_wrapper_bubble} slider`}>
                <div className={styles.friend_list_wrapper_content}>

                    <FriendSearch
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        FriendModalWindowVisibility={FriendModalWindowVisibility}
                        setFriendModalWindowVisibility={setFriendModalWindowVisibility}
                        add={addUserFriend}
                    />

                    <div className={styles.friend_list}>
                        {searchResults.map(friend =>
                            <Friend key={friend.id} nickname={friend.nickname} friend_id={friend.id}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendList;