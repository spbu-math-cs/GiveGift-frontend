import React from 'react';
import styles from './Idea.module.css'
import MarketButton from "../../UI/Button/MarketButton/MarketButton";

const Idea = ({title, children, img_src, url}) => {
    return (
        <div className={styles.idea}>
            <div className={styles.ideaContent}>
                <img src={img_src} alt={title}/>
                <span className={styles.title}>{title}</span>
                <span className={styles.description}>{children}</span>

                <MarketButton url={url}>
                    Яндекс.Маркет
                </MarketButton>
            </div>
        </div>
    );
};

export default Idea;