import React, {useContext} from 'react';
import styles from "./SelectFriendTextBtn.module.css";
import friend from "../../../../assets/friend.png";
import {IdeasContext} from "../../../../context";

const SelectFriendTextBtn = ({setVisible, isLoggedIn}) => {

    const {isIdeasLoading} = useContext(IdeasContext)
    const rootClasses = [styles.select_friend_text_btn]

    if (!isIdeasLoading) {
        rootClasses.push('active_btn');
    }

    return (
        <div className={rootClasses.join(' ')}
             onClick={() => {
                 isLoggedIn
                     ? rootClasses.includes('active_btn') && setVisible(true)
                     : alert('Сначала войдите в аккаунт!')
             }}>
            <img src={friend} alt={"friend"}/>
            <span>Выбрать друга...</span>
        </div>
    );
};

export default SelectFriendTextBtn;