import React from "react";
import styles from "./GettingStarted.module.css";
import hello from "../../../assets/mascot_hello.png";

const GettingStarted = () => {
  return (
    <div className="slider fadein" style={{ display: "grid" }}>
      <div className={styles.getting_started}>
        <img src={hello} alt="getting started" />
        <div className={styles.hello_text}>
          <span className={styles.main}>Привет!</span>

          <span className={styles.secondary}>
            Меня зовут Дарик, и я идеально знаю, чем порадовать друзей
          </span>
          <span className={styles.secondary}>
            Укажи интересы друга и бюджет подарка и скорее жми на кнопочку!
          </span>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
