import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink className={styles.logo} to=''>ДариДары</NavLink>
            <NavLink className={styles.text_wrapper} to='/login'>Лучший сервис для поиска подарков</NavLink>
        </div>
    );
};

export default Header;