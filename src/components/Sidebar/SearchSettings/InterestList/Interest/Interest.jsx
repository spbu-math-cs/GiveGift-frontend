import React from "react";
import styles from './Interest.module.css'
import x_btn from '../../../../../assets/x_btn.png'

export const Interest = ({children}) => {
    return (
        <div className={styles.interest}>
            <div className={styles.interest_content}>
                <span>{children}</span>
                <img className={styles.xBtn} src={x_btn} alt="x"/>
            </div>
        </div>
    )
}
