import styles from "./MiniFriend.module.css";
import default_user_logo from "../../../../../assets/user.svg";
import React, {useContext} from "react";
import {UserContext} from "../../../../../context";

const MiniFriend = ({friend_id, nickname, generateIdeas, setIsNewUser, setVisible}) => {
    const {token} = useContext(UserContext);

    return (
        <div className={styles.mini_friend}>
            <div className={styles.mini_friend_info}>
                <img
                    className={styles.mini_friend_icon}
                    src={default_user_logo} alt="user"/>

                <span>
                    <span className={styles.mini_friend_nickname} onClick={() => {
                        alert('Друг')
                    }}>{nickname}</span>

                    <span className={styles.mini_friend_id}>#{friend_id}</span>
                </span>
            </div>

            <button className={styles.mini_friend_action}
                    onClick={() => {
                        generateIdeas({
                            friend_id: friend_id,
                            token: token
                        }) && setVisible(false) && setIsNewUser(false)
                      }}>
                Выбрать
            </button>
        </div>
    );
};

export default MiniFriend;