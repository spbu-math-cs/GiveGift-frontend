import React from "react";
import ActiveButton from "../ActiveButton/ActiveButton";
import styles from "./FriendActionButton.module.css";

const FriendActionButton = ({ children, ...props }) => {
  return (
    <ActiveButton {...props} className={styles.friend_btn}>
      <div className={styles.friend_btn_content}>{children}</div>
    </ActiveButton>
  );
};

export default FriendActionButton;
