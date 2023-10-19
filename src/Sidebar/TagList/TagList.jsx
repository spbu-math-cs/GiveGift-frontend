import React from "react";
import styles from './TagList.module.css'
import { Tag } from "./Tag/Tag";
import { PlusBtn } from "./Tag/PlusBtn";

const TagList = (props) => {
    return (
        <div className={styles.taglist}>
            {
                props.sideBar.tagList.map(tag => <Tag key={tag} deleteTag={props.deleteTag} text={tag}/>)
            }
            {
                (props.sideBar.allTagList.length !== 1) ?
                <PlusBtn allTagList={props.sideBar.allTagList} addTag={props.addTag}/> :
                <></>
            }
        </div>
    )
}

export default TagList