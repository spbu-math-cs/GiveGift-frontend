import React from "react";
import styles from "./UserInfo.module.css";
import { isObjectEmpty } from "../../../utils/checkers";

const UserInfo = ({ userInfo }) => {
  return (
    <>
      {!isObjectEmpty(userInfo) ? (
        <div className={styles.nickname_and_id}>
          <span className={styles.nickname}>{userInfo.nickname}</span>
          <span className={styles.id}>ID {userInfo.id}</span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserInfo;
