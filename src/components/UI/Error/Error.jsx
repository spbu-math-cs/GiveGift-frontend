import React from "react";
import styles from "./Error.module.css";
import error_img from "../../../assets/mascot_error.png";

const Error = ({ errorMsg }) => {
  console.error(errorMsg);
  return (
    <div className="slider fadein" style={{ display: "grid" }}>
      <div className={styles.ideas_error}>
        <img src={error_img} alt="error" />
        <div className={styles.error_text}>
          <span className={styles.main}>Упс... Что-то пошло не так...</span>
          <span className={styles.secondary}>Попробуйте еще раз</span>
        </div>
      </div>
    </div>
  );
};

export default Error;
