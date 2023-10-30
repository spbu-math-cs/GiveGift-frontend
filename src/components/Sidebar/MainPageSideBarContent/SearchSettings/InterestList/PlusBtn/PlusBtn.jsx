import React from 'react';
import plus_btn from "../../../../../../assets/plus_btn.png";
import styles from "./PlusBtn.module.css"

const PlusBtn = ({add}) => {
    return (
        <div onClick={() => add('Test')} className={styles.plusBtn}>
            <img src={plus_btn} alt="+"/>
        </div>
    );
};

export default PlusBtn;