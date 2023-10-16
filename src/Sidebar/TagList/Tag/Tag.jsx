import React from "react";
import styles from './Tag.module.css'
import x_btn from '../../../assets/x_btn.png'
import plus_btn from "../../../assets/plus_btn.png";

export const Tag = (props) => {
    let deleteTag = () => {
        props.deleteTag(props.text)
    }

    return (
        <div className={styles.tag}>
            <span>{props.text}</span>
            <img onClick={ deleteTag } className={styles.xBtn} src={x_btn} alt="x"/>
        </div>
    )
}

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
