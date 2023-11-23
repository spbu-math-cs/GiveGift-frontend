import React, {useState} from 'react';
import styles from './FriendList.module.css'
import Friend from "./Friend/Friend";
import SearchBar from "../UI/SearchBar/SearchBar";

const FriendList = () => {

    const [friendList, setFriendList] = useState([
        {
            id: 1,
            nickname: 'Иван Иванов',
        }, {
            id: 2,
            nickname: 'Иван Иванов',
        }, {
            id: 3,
            nickname: 'Иван Иванов',
        }, {
            id: 4,
            nickname: 'Иван Иванов',
        }, {
            id: 5,
            nickname: 'Иван Иванов',
        }, {
            id: 6,
            nickname: 'Иван Иванов',
        }, {
            id: 7,
            nickname: 'Иван Иванов',
        }, {
            id: 8,
            nickname: 'Иван Иванов',
        },
    ])

    return (
        <div className={`${styles.friend_list_wrapper}`}>
            <div className={`${styles.friend_list_wrapper_bubble} slider`}>
                <div className={styles.friend_list_wrapper_content}>
                    <SearchBar/>

                    <div className={styles.friend_list}>
                        {friendList.map(friend =>
                            <Friend key={friend.id} nickname={friend.nickname} friend_id={friend.id}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendList;