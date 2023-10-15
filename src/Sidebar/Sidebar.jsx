import React from "react";
import styles from './Sidebar.module.css';
import TagList from "./TagList/TagList";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <span style={{fontSize: "25px", color: "373737"}}>Предпочтения:</span>
            <TagList />
        </div>
    )
}

export default Sidebar