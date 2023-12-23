import React from "react";
import styles from "./Idea.module.css";
import MarketButton from "../../UI/Button/MarketButton/MarketButton";

// <span className={styles.description}>{children}</span>
const Idea = ({ title, img_link, market_link }) => {
  return (
    <div className={styles.idea}>
      <div className={styles.ideaContent}>
        <img src={img_link} alt={title} />
        <span className={styles.title}>{title}</span>

        <MarketButton market_link={market_link}>Wildberries</MarketButton>
      </div>
    </div>
  );
};

export default Idea;
