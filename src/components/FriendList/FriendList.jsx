import React, {useState} from 'react';
import styles from './FriendList.module.css'
import Friend from "./Friend/Friend";
import {useFriendSearch} from "../../hooks/useFriendSearch";
import FriendSearch from "../FriendSearch/FriendSearch";

const FriendList = ({removeFriend, friendList, sendFriendRequest, token}) => {


    const [searchQuery, setSearchQuery] = useState('');

    const searchResults = useFriendSearch(friendList, searchQuery);

    return (
        <div className={`${styles.friend_list_wrapper}`}>
            <div className={`${styles.friend_list_wrapper_bubble} slider`}>
                <div className={styles.friend_list_wrapper_content}>

                    <FriendSearch sendFriendRequest={sendFriendRequest} token={token}
                                  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

                    <div className={styles.friend_list}>
                        {(searchResults)
                            ? searchResults.map(friend =>
                                <Friend key={friend.id} token={token} removeFriend={removeFriend} nickname={friend.nickname} friend_id={friend.id}/>
                            )
                            : <span>Друзей нет, по чему ты там искать собрался</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendList;