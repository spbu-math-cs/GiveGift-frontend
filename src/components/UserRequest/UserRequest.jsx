import React from "react";
import styles from "./UserRequest.module.css";
import { NavLink } from "react-router-dom";
import { avatarSrc } from "../../utils/avatarSrc";

const UserRequest = ({ user, children }) => {
  return (
    <div className={styles.user_request}>
      <NavLink to={`/account/${user.id}`} className={styles.user}>
        <img src={avatarSrc(user.avatar)} alt={"user"} />
        <div className={styles.user_info}>{user.nickname}</div>
      </NavLink>
      {children}
    </div>
  );
};

export default UserRequest;
