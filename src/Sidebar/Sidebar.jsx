import React from "react";
import styles from './Sidebar.module.css';
import Tag from "./Tag/Tag";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            Предпочтения:
            <Tag />
        </div>
    )
}

export default Sidebar