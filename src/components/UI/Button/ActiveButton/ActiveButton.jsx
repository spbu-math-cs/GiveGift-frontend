import React from "react";
import styles from "./ActiveButton.module.css";

const ActiveButton = ({ children, className, btnRef, ...props }) => {
  return (
    <button
      ref={btnRef}
      {...props}
      className={styles.active_btn + " " + className}
    >
      {children}
    </button>
  );
};

export default ActiveButton;
