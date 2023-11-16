import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './AccMenuList.module.css'


// TODO: Если пользователь зарегистрирован, то тут чуть другой дропдаун
const AccMenuList = ({token, removeToken, setVisible, logout}) => {
    return (
        <div className={styles.acc_menu_list} onClick={() => setVisible(false)}>
            {token
                ?
                <>
                    <NavLink end to='/' className={styles.acc_menu_item}>
                        <div>Аккаунт</div>
                    </NavLink>
                    <NavLink end to='/' className={styles.acc_menu_item}>
                        <div>Друзья</div>
                    </NavLink>
                    <NavLink end to='/' className={styles.acc_menu_item}>
                        <div>Профили</div>
                    </NavLink>
                    <div onClick={() => {
                        logout(token);
                        removeToken();
                    }} className={`${styles.acc_menu_item} ${styles.accent_item}`}>
                        <div>Выход</div>
                    </div>
                </>
                :
                <>
                    <NavLink to='/login' className={`${styles.acc_menu_item} ${styles.accent_item}`}>
                        <div>Войти</div>
                    </NavLink>
                    <NavLink end to='/' className={styles.acc_menu_item}>
                        <div>Профили</div>
                    </NavLink>
                </>
            }
        </div>
    );
};

export default AccMenuList;