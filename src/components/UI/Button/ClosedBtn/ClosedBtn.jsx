import React from 'react';
import closed_btn from "../../../../assets/closed_btn.png";
import styles from "./ClosedBtn.module.css"

const ClosedBtn = ({onClick}) => {
    return (
        <button onClick={onClick} className={styles.closedBtn}>
            <img src={closed_btn} alt="close"/>
        </button>
    );
};

export default ClosedBtn;