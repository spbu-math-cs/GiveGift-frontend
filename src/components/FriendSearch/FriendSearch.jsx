import React, {useState} from 'react';
import styles from "../FriendList/FriendList.module.css";
import SearchBar from "../UI/SearchBar/SearchBar";
import ActiveButton from "../UI/Button/ActiveButton/ActiveButton";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";

const FriendSearch = ({searchQuery, setSearchQuery, sendFriendRequest, token}) => {

    const [friendID, setFriendID] = useState(3);

    return (
        <div className={styles.friend_search}>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

            <ActiveButton className={styles.add_friend_btn} onClick={() => {
                sendFriendRequest(token, friendID);
            }}>
                <PersonAddRoundedIcon fontSize={'large'} style={{marginRight: '5px'}}/>
            </ActiveButton>
        </div>
    );
};
// TODO: пока тест
export default FriendSearch;