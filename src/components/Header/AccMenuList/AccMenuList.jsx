import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './AccMenuList.module.css'


// TODO: Если пользователь зарегистрирован, то тут чуть другой дропдаун
const AccMenuList = ({setVisible}) => {
    return (
        <div className={styles.acc_menu_list} onClick={() => setVisible(false)}>
            <NavLink to='/login' className={`${styles.acc_menu_item} ${styles.accent_item}`}><div>Войти</div></NavLink>
            <NavLink end to='/' className={styles.acc_menu_item}><div>Профили</div></NavLink>
        </div>
    );
};

export default AccMenuList;