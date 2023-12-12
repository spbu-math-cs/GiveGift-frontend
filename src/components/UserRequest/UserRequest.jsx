import React from 'react';
import styles from './UserRequest.module.css'
import user_icon from '../../assets/user.svg'
import {NavLink} from "react-router-dom";

const UserRequest = ({user, children}) => {
    return (
        <div className={styles.user_request}>
            <NavLink to={`/account/${user.id}`} className={styles.user}>
                <img src={user_icon} alt={'user'}/>
                <div className={styles.user_info}>
                    {user.nickname}
                </div>
            </NavLink>
            {children}
        </div>
    );
};

export default UserRequest;