import React from "react";
import check_btn from "../../../../assets/check_btn.png";
import styles from "./AdminCheckBtn.module.css";
import AdminActiveButton from "../AdminActiveButton/AdminActiveButton";

const AdminCheckBtn = (props) => {
  return (
    <AdminActiveButton {...props} className={styles.adminCheckBtn}>
      <img src={check_btn} alt="ok" />
    </AdminActiveButton>
  );
};

export default AdminCheckBtn;
