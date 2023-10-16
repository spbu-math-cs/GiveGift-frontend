import React from "react";
import styles from './Tag_field.module.css'
import plus_btn from "../../../assets/plus_btn.png";

export const PlusBtn = (props) => {
    let newTag = React.createRef()

    let addTag = () => {
        if (newTag.current.value !== props.allTagList[0])
            props.addTag(newTag.current.value)
    }

    return (
        <div className={styles.tag}>
            {<select ref={newTag}>
                {props.allTagList.map(tag => <option key={tag}>{tag}</option>)}
            </select>}
            <img className={styles.plusBtn} onClick={ addTag } src={plus_btn} alt="+"/>
        </div>
    )
}