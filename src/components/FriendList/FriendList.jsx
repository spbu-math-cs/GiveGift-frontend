import React, {useContext, useState} from 'react';
import styles from './FriendList.module.css'
import Friend from "./Friend/Friend";
import {useFriendSearch} from "../../hooks/useFriendSearch";
import FriendSearch from "./FriendSearch/FriendSearch";
import {FriendContext} from "../../context/FriendContext/FriendContext";

const FriendList = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const {friends} = useContext(FriendContext);

    const searchResults = useFriendSearch(friends, searchQuery);

    return (
        <div className={`${styles.friend_list_wrapper}`}>
            <div className={`${styles.friend_list_wrapper_bubble} slider`}>
                <div className={`${styles.friend_list_wrapper_content} fast_fadein`}>

                    <FriendSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

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