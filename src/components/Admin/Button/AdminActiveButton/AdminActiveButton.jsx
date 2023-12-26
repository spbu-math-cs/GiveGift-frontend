import React from "react";
import styles from "./AdminActiveButton.module.css";

const AdminActiveButton = ({ children, className, btnRef, ...props }) => {
  return (
    <button
      ref={btnRef}
      {...props}
      className={styles.admin_active_btn + " " + className}
    >
      {children}
    </button>
  );
};

export default AdminActiveButton;
