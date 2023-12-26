import React from "react";
import plus_btn from "../../../../assets/plus_btn.png";
import styles from "./AdminPlusBtn.module.css";

const AdminPlusBtn = (props) => {
  return (
    <div {...props} className={styles.adminPlusBtn}>
      <img src={plus_btn} alt="+" />
    </div>
  );
};

export default AdminPlusBtn;
