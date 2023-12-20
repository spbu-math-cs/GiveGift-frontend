import React, { useState } from "react";
import styles from "../FriendList.module.css";
import SearchBar from "../../UI/SearchBar/SearchBar";
import ActiveButton from "../../UI/Button/ActiveButton/ActiveButton";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import AddFriendModal from "../AddUserFriend/AddFriendModal/AddFriendModal";
import AddUserFriendForm from "../AddUserFriend/AddUserFriendForm/AddUserFriendForm";

const FriendSearch = ({ searchQuery, setSearchQuery }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [FriendModalWindowVisibility, setFriendModalWindowVisibility] =
    useState(false);

  return (
    <>
      <div className={styles.friend_search}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <ActiveButton
          className={styles.add_friend_btn}
          onClick={() => {
            setFriendModalWindowVisibility(true);
            setShowAlert(false);
          }}
        >
          <PersonAddRoundedIcon
            fontSize={"large"}
            style={{ marginRight: "5px" }}
          />
        </ActiveButton>
      </div>
      <AddFriendModal
        visible={FriendModalWindowVisibility}
        setVisible={setFriendModalWindowVisibility}
      >
        <AddUserFriendForm showAlert={showAlert} setShowAlert={setShowAlert} />
      </AddFriendModal>
    </>
  );
};

export default FriendSearch;
