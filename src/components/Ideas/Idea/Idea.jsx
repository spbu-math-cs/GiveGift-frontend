import React from 'react';
import styles from './Idea.module.css'
import MarketButton from "../../UI/Button/MarketButton/MarketButton";

const Idea = ({title, children, img_link, market_link}) => {
    return (
        <div className={styles.idea}>
            <div className={styles.ideaContent}>
                <img src={img_link} alt={title}/>
                <span className={styles.title}>{title}</span>
                <span className={styles.description}>{children}</span>

                <MarketButton market_link={market_link}>
                    Купить на Wildberries
                </MarketButton>
            </div>
        </div>
    );
};

export default Idea;