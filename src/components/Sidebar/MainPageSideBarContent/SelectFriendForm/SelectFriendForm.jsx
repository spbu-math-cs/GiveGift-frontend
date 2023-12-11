import SearchBar from "../../../UI/SearchBar/SearchBar";
import styles from './SelectFriendForm.module.css'
import React, {useState} from "react";
import {useFriendSearch} from "../../../../hooks/useFriendSearch";
import MiniFriend from "./MiniFriend/MiniFriend";

const SelectFriendForm = ({friendList, token, generateIdeas, setIsNewUser, setVisible}) => {

    const [searchQuery, setSearchQuery] = useState('');

    const searchResults = useFriendSearch(friendList, searchQuery);

    return (
        <div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

            <div className={styles.mini_friend_list}>
                {searchResults.map(friend =>
                    <MiniFriend key={friend.id}
                                friend_id={friend.id}
                                nickname={friend.nickname}
                                token={token}
                                generateIdeas={generateIdeas}
                                setIsNewUser={setIsNewUser}
                                setVisible={setVisible}/>
                )}
            </div>
        </div>
    );
};

export default SelectFriendForm;