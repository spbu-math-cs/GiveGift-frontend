import React from 'react';
import styles from "./SelectFriendTextBtn.module.css";
import friend from "../../../../assets/friend.png";

const SelectFriendTextBtn = ({isIdeasLoading}) => {

    const rootClasses = [styles.select_friend_text_btn]

    if (!isIdeasLoading) {
        rootClasses.push('active_btn');
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => rootClasses.includes('active_btn') && alert('TODO')}>
            <img src={friend} alt={"friend"}/>
            <span>Выбрать друга...</span>
        </div>
    );
};

export default SelectFriendTextBtn;