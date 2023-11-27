import React from 'react';
import styles from "../FriendList/FriendList.module.css";
import SearchBar from "../UI/SearchBar/SearchBar";
import ActiveButton from "../UI/Button/ActiveButton/ActiveButton";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import AddFriendModal from "../FriendList/AddUserFriend/AddFriendModal/AddFriendModal";
import AddUserFriendForm from "../FriendList/AddUserFriend/AddUserFriendForm/AddUserFriendForm";

const FriendSearch = (props) => {
    return (
        <>
            <div className={styles.friend_search}>
                <SearchBar searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery}/>

                <ActiveButton className={styles.add_friend_btn} onClick={() => props.setFriendModalWindowVisibility(true)}>
                    <PersonAddRoundedIcon fontSize={'large'} style={{marginRight: '5px'}}/>
                </ActiveButton>
            </div>
            <AddFriendModal visible={props.FriendModalWindowVisibility}
                            setVisible={props.setFriendModalWindowVisibility}>
                <AddUserFriendForm add={props.add}/>
            </AddFriendModal>
        </>
    );
};

export default FriendSearch;