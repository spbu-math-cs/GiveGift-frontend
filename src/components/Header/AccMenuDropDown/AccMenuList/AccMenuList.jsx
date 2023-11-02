import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './AccMenuList.module.css'

const AccMenuList = () => {
    return (
        <div className={styles.acc_menu_list}>
            <NavLink to='/login' className={`${styles.acc_menu_item} ${styles.accent_item}`}><div>Войти</div></NavLink>
            <NavLink end to='/' className={styles.acc_menu_item}><div>Тест</div></NavLink>
            <NavLink end to='/' className={styles.acc_menu_item}><div>Тест</div></NavLink>
            <NavLink end to='/' className={styles.acc_menu_item}><div>Тест</div></NavLink>
            <NavLink end to='/' className={styles.acc_menu_item}><div>Профили</div></NavLink>
        </div>
    );
};

export default AccMenuList;