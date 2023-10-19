import React from "react";
import styles from './Sidebar.module.css';
import TagList from "./TagList/TagList";

const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            <span style={{fontSize: "25px", color: "373737"}}>Предпочтения:</span>
            <TagList sideBar={props.sideBar} addTag={props.addTag} deleteTag={props.deleteTag}/>
        </div>
    )
}

export default Sidebar