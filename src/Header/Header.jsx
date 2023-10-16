import React from "react";
import styles from './Header.module.css';

const Header = () => {
    return <header className={styles.header}>
        <span className={styles.logo}>ДариДары</span>
    </header>
};

export default Header;