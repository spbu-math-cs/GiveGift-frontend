import React from "react";
import delete_btn from "../../../../assets/x_btn.png";
import styles from "./AdminDeleteBtn.module.css";
import AdminActiveButton from "../AdminActiveButton/AdminActiveButton";

const AdminDeleteBtn = (props) => {
  return (
    <AdminActiveButton {...props} className={styles.adminDeleteBtn}>
      <img src={delete_btn} alt="delete" />
    </AdminActiveButton>
  );
};

export default AdminDeleteBtn;
