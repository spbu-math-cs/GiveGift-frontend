import React from "react";
import styles from './Tag_field.module.css'
import x_btn from '../../../assets/x_btn.png'

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
