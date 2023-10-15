import React from "react";
import styles from './Tag.module.css'
import x_btn from '../../../assets/x_btn.png'
import plus_btn from "../../../assets/plus_btn.png";

export const Tag = (props) => {
    return (
        <div className={styles.tag}>
            <span>{props.text}</span>
            <img onClick={() => alert('Салам')} className={styles.xBtn} src={x_btn} alt="x"/>
        </div>
    )
}

export const PlusBtn = () => {
    return <img onClick={() => alert('Алейкум')} className={styles.plusBtn} src={plus_btn} alt="+"/>
}
