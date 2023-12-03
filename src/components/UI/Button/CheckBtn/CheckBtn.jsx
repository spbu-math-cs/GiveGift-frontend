import React from 'react';
import check_btn from "../../../../assets/check_btn.png";
import styles from "./CheckBtn.module.css"
import ActiveButton from "../ActiveButton/ActiveButton";

const CheckBtn = (props) => {
    return (
        <ActiveButton {...props} className={styles.checkBtn}>
            <img src={check_btn} alt="ok"/>
        </ActiveButton>
    );
};

export default CheckBtn;