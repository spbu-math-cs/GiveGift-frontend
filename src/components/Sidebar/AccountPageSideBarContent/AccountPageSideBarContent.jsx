import React, {useState} from 'react';
import user_icon from '../../../assets/user.svg'
import styles from './AccountPageSideBarContent.module.css'
import SearchBar from "../../UI/SearchBar/SearchBar";
import {useFriendSearch} from "../../../hooks/useFriendSearch";

const AccountPageSideBarContent = () => {
    const [friends, setFriends] = useState([
        {id: 1, nickname: 'Иван Иванов'},
        {id: 2, nickname: 'Иван Иванов'},
        {id: 3, nickname: 'Иван Иванов'},
        {id: 4, nickname: 'Иван Иванов'},
        {id: 5, nickname: 'Иван Иванов'},
        {id: 6, nickname: 'Иван Иванов'},
        {id: 7, nickname: 'Иван Иванов'},
        {id: 8, nickname: 'Иван Иванов'},
        {id: 9, nickname: 'Иван Иванов'},
        {id: 10, nickname: 'Иван Иванов'},
    ])

    const [searchQuery, setSearchQuery] = useState('');

    const searchResults = useFriendSearch(friends, searchQuery);


    // Если автор профиля и пользователь не в друзьях, вместо "Подобрать подарок" выводить "Добавить в друзья"
    return (
        <div>
            <div className={styles.acc_friendlist}>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} size={"small"}/>
                <div className={styles.user_friendlist}>
                    {searchResults.map(friend =>
                        <div className={styles.friend}>
                            <img src={user_icon} alt={'friend'}/>
                            <div className={styles.friend_info}>
                                <div className={styles.friend_nickname} key={friend.id}>{friend.nickname}</div>
                                <span className={styles.friend_suggestion}>Подобрать подарок</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default AccountPageSideBarContent;