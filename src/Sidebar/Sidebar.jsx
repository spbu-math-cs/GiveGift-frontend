import React from "react";
import styles from './Sidebar.module.css';
import SearchSettings from "./SearchSettings/SearchSettings";
import ActiveButton from "../UI/Button/ActiveButton/ActiveButton";


const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_content}>
                <ActiveButton className={styles.sidebar_btn} onClick={() => alert()}>Выдай идею!</ActiveButton>
                <SearchSettings/>
                <ActiveButton className={styles.sidebar_btn} onClick={() => alert()}>Сохранить</ActiveButton>
            </div>
        </div>
    )
}

export default Sidebar