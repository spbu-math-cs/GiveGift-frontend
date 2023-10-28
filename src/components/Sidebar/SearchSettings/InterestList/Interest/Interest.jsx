import React from "react";
import styles from './Interest.module.css'
import x_btn from '../../../../../assets/x_btn.png'

export const Interest = ({text}) => {
    return (
        <div className={styles.interest}>
            <div className={styles.interest_content}>
                <span>{text}</span>
                <img className={styles.xBtn} src={x_btn} alt="x"/>
            </div>
        </div>
    )
}
