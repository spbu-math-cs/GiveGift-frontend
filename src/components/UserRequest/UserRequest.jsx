import React from 'react';
import styles from './UserRequest.module.css'
import user_icon from '../../assets/user.svg'

const UserRequest = ({user, children}) => {
    return (
        <div className={styles.user_request}>
            <div className={styles.user}>
                <img src={user_icon} alt={'user'}/>
                <div className={styles.user_info}>
                    {user.nickname}
                </div>
            </div>
            {children}
        </div>
    );
};

export default UserRequest;