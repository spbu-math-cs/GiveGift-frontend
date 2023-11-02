import React from 'react';
import styles from './MarketButton.module.css'
import ActiveButton from "../ActiveButton/ActiveButton";
import {openInNewTab} from "../../../../utils/pages"
import shopping_cart from '../../../../assets/shopping_cart.png'


const MarketButton = ({url}) => {
    return (
        <ActiveButton className={styles.market_button} onClick={() => openInNewTab(url)}>
            <div className={styles.market_button_content}>
                <img src={shopping_cart} alt=""/>
                <span>Яндекс.Маркет</span>
            </div>
        </ActiveButton>
    );
};

export default MarketButton;