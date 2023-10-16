import React from "react";
import styles from './TagList.module.css'
import {Tag, PlusBtn} from "./Tag/Tag";

const TagList = (props) => {
    if (props.sideBar.allTagList.length !== 1)
        return (
            <div className={styles.taglist}>
                {
                    props.sideBar.tagList.map(tag => <Tag deleteTag={props.deleteTag} text={tag}/>)
                }
                <PlusBtn allTagList={props.sideBar.allTagList} addTag={props.addTag}/>
            </div>
        )
    else
        return (
            <div className={styles.taglist}>
                {
                    props.sideBar.tagList.map(tag => <Tag deleteTag={props.deleteTag} text={tag}/>)
                }
            </div>
        )
}

export default TagList