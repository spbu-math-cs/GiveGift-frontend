import React from 'react';
import styles from "./UserInfo.module.css";

const UserInfo = ({userInfo}) => {
    return (
        <>
            {Object.keys(userInfo).length !== 0
                ?
                <div className={styles.nickname_and_id}>
                    <span className={styles.nickname}>{userInfo.nickname}</span>
                    <span className={styles.id}>ID {userInfo.id}</span>
                </div>
                : <></>
            }
        </>
    );
};

export default UserInfo;