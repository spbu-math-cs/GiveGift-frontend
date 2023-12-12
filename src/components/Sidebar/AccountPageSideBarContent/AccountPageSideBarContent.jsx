import React, {useState} from 'react';
import user_icon from '../../../assets/user.svg'
import styles from './AccountPageSideBarContent.module.css'
import SearchBar from "../../UI/SearchBar/SearchBar";
import {useFriendSearch} from "../../../hooks/useFriendSearch";
import {NavLink} from "react-router-dom";

const AccountPageSideBarContent = ({myFriends, userFriends, myID}) => {

    const [searchQuery, setSearchQuery] = useState('');

    const searchResults = useFriendSearch(userFriends, searchQuery);


    // Если автор профиля и пользователь не в друзьях, вместо "Подобрать подарок" выводить "Добавить в друзья"
    return (
        <div>
            <div className={styles.acc_friendlist}>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} size={"small"}/>
                <div className={styles.user_friendlist}>
                    {searchResults.map(friend =>
                        <div key={friend.id} className={styles.friend}>
                            <img src={user_icon} alt={'friend'}/>
                            <div className={styles.friend_info}>
                                <NavLink to={`/account/${friend.id}`} className={styles.friend_nickname}
                                         key={friend.id}>{friend.nickname}</NavLink>
                                {myFriends.findIndex((myFriend, _) => myFriend.id === friend.id) !== -1 || friend.id === myID ?
                                    <span className={styles.friend_suggestion}>Подобрать подарок</span>
                                    : <span className={styles.friend_suggestion}
                                            onClick={() => alert('Когда нить добавлю')}>Добавить в друзья</span>

                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default AccountPageSideBarContent;