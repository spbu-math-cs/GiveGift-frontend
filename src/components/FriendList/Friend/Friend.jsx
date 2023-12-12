import React from 'react';
import styles from './Friend.module.css'
import default_user_logo from "../../../assets/user.svg";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Friend = ({friend_id, token, generateIdeas, removeFriend, nickname}) => {
    const navigate = useNavigate()

    return (
        <div className={styles.friend}>
            <div className={styles.friend_info}>
                <img
                    className={styles.friend_icon}
                    src={default_user_logo} alt="user"/>

                <div style={{display: 'grid'}}>
                    <span className={styles.friend_nickname} onClick={() => navigate(`/account/${friend_id}`)}>{nickname}</span>
                    <span className={styles.friend_action} onClick={() => generateIdeas({
                        friend_id: friend_id,
                        token: token
                    }) && navigate('/')}>Подобрать подарок</span>
                </div>
            </div>

            <IconButton onClick={() => {
                removeFriend(token, friend_id)
            }}>
                <CloseRoundedIcon fontSize={'large'} style={{color: '#a6a6a6'}}/>
            </IconButton>
        </div>
    );
};

export default Friend;