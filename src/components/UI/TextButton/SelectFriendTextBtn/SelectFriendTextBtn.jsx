import React, {useContext} from 'react';
import styles from "./SelectFriendTextBtn.module.css";
import friend from "../../../../assets/friend.png";
import {AuthContext, IdeasContext} from "../../../../context";

const SelectFriendTextBtn = ({setVisible}) => {

    const {isIdeasLoading} = useContext(IdeasContext);
    const {token} = useContext(AuthContext);

    const rootClasses = [styles.select_friend_text_btn]

    if (!isIdeasLoading) {
        rootClasses.push('active_btn');
    }

    return (
        <div className={rootClasses.join(' ')}
             onClick={() => {
                 token
                     ? rootClasses.includes('active_btn') && setVisible(true)
                     : alert('Сначала войдите в аккаунт!')
             }}>
            <img src={friend} alt={"friend"}/>
            <span>Выбрать друга...</span>
        </div>
    );
};

export default SelectFriendTextBtn;