import React from "react";
import styles from './Interest.module.css'
import x_btn from '../../../../../../../../assets/x_btn.png'

export const Interest = ({children, remove, is_editable}) => {
    return (
        <div className={styles.interest}>
            <div className={styles.interest_content}>
                <span>{children}</span>
                {is_editable &&
                    <img className={styles.xBtn} src={x_btn} onClick={() => remove(children)} alt="x"/>
                }
            </div>
        </div>
    )
}
