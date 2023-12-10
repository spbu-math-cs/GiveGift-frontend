import React, {useState} from 'react';
import styles from './FriendList.module.css'
import Friend from "./Friend/Friend";
import {useFriendSearch} from "../../hooks/useFriendSearch";
import FriendSearch from "../FriendSearch/FriendSearch";


const FriendList = ({removeFriend, friendList, sendFriendRequest, sendRequestError,
                        isSendRequestLoading, token, generateIdeas,
                        FriendModalWindowVisibility, setFriendModalWindowVisibility}) => {

    const [searchQuery, setSearchQuery] = useState('');

    const searchResults = useFriendSearch(friendList, searchQuery);

    return (
        <div className={`${styles.friend_list_wrapper}`}>
            <div className={`${styles.friend_list_wrapper_bubble} slider`}>
                <div className={styles.friend_list_wrapper_content}>

                    <FriendSearch
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        FriendModalWindowVisibility={FriendModalWindowVisibility}
                        setFriendModalWindowVisibility={setFriendModalWindowVisibility}
                        sendFriendRequest={sendFriendRequest}
                        sendRequestError={sendRequestError}
                        isSendRequestLoading={isSendRequestLoading}
                        token={token}
                    />

                    <div className={styles.friend_list}>
                        {searchResults.map(friend =>
                            <Friend key={friend.id} nickname={friend.nickname} friend_id={friend.id} token={token}
                                    generateIdeas={generateIdeas} removeFriend={removeFriend}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendList;