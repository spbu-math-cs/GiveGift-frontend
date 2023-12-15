import React, {useState} from 'react';
import user_icon from '../../../assets/user.svg'
import styles from './AccountPageSideBarContent.module.css'
import SearchBar from "../../UI/SearchBar/SearchBar";
import {useFriendSearch} from "../../../hooks/useFriendSearch";
import {NavLink, useNavigate} from "react-router-dom";

const AccountPageSideBarContent = ({myFriends, generateIdeas, userFriends, myID, isAccInfoLoading, token, sendFriendRequest}) => {

    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState('');
    const searchResults = useFriendSearch(userFriends, searchQuery);

    return (
        <div>
            <div className={`${styles.acc_friendlist}`}>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} size={"small"}/>
                {!isAccInfoLoading && <div className={styles.user_friendlist}>
                    {searchResults.map(friend =>
                        <div key={friend.id} className={`${styles.friend}`}>
                            <img src={user_icon} alt={'friend'}/>
                            <div className={styles.friend_info}>
                                <NavLink to={`/account/${friend.id}`} className={styles.friend_nickname}
                                         key={friend.id}>{friend.nickname}</NavLink>
                                {myFriends.findIndex((myFriend, _) => myFriend.id === friend.id) !== -1 || friend.id === myID ?
                                    <span className={styles.friend_suggestion} onClick={() => generateIdeas({
                                        friend_id: friend.id,
                                        token: token
                                    }) && navigate('/')}>Подобрать подарок</span>
                                    : <span className={styles.friend_suggestion}
                                            onClick={() => sendFriendRequest(token, friend.id)}>Добавить в друзья</span>
                                }
                            </div>
                        </div>
                    )}
                </div>}
            </div>
        </div>
    );
};
export default AccountPageSideBarContent;