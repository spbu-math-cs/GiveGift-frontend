import React from 'react';
import styles from './Friend.module.css'
import default_user_logo from "../../../assets/user.svg";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {IconButton} from "@mui/material";
const Friend = ({friend_id, nickname}) => {
    return (
        <div className={styles.friend}>
            <div className={styles.friend_info}>
                <img
                    className={styles.friend_icon}
                    src={default_user_logo} alt="user"/>

                <div style={{display: 'grid'}}>
                    <span className={styles.friend_nickname} onClick={() => {alert('Друг')}}>{nickname}</span>
                    <span className={styles.friend_action} onClick={() => alert('Подобрал те хуев за щеку, проверяй')}>Подобрать подарок</span>
                </div>
            </div>

            <IconButton onClick={() => {alert('Не телки гроб будут тащить а кенты...')}}>
                <CloseRoundedIcon fontSize={'large'} style={{color: '#a6a6a6'}}/>
            </IconButton>

        </div>
    );
};

export default Friend;