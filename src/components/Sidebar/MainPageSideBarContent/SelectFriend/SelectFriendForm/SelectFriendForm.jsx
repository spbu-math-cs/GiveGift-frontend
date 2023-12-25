import SearchBar from "../../../../UI/SearchBar/SearchBar";
import styles from "./SelectFriendForm.module.css";
import React, { useContext, useState } from "react";
import { useFriendSearch } from "../../../../../hooks/useFriendSearch";
import MiniFriend from "./MiniFriend/MiniFriend";
import { FriendContext } from "../../../../../context/FriendContext/FriendContext";

const SelectFriendForm = ({ setVisible }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const { friends } = useContext(FriendContext);

  const searchResults = useFriendSearch(friends, searchQuery);

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className={`${styles.mini_friend_list} slider`}>
        {searchResults.map((friend) => (
          <MiniFriend
            key={friend.id}
            friend_id={friend.id}
            nickname={friend.nickname}
            avatar={friend.avatar}
            setVisible={setVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectFriendForm;
