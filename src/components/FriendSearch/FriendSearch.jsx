import React from 'react';
import styles from "../FriendList/FriendList.module.css";
import SearchBar from "../UI/SearchBar/SearchBar";
import ActiveButton from "../UI/Button/ActiveButton/ActiveButton";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";

const FriendSearch = ({searchQuery, setSearchQuery}) => {
    return (
        <div className={styles.friend_search}>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

            <ActiveButton className={styles.add_friend_btn} onClick={() => {alert('Кого ты там добавлять собрался ебень')}}>
                <PersonAddRoundedIcon fontSize={'large'} style={{marginRight: '5px'}}/>
            </ActiveButton>
        </div>
    );
};

export default FriendSearch;