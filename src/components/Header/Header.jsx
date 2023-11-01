import React, {useState} from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import default_user_logo from '../../assets/user.svg'
import AccMenuModal from "./AccMenuDropDown/AccMenuModal/AccMenuModal";
import AccMenuList from "./AccMenuDropDown/AccMenuList/AccMenuList";

const Header = () => {

    const [accountModalWindowVisibility, setAccountModalWindowVisibility] = useState(false);

    return (
        <div className={styles.header}>
            <NavLink className={styles.logo} to='/'>ДариДары</NavLink>

            <div className={styles.account_settings}>
                <img onClick={() => setAccountModalWindowVisibility(!accountModalWindowVisibility)} className={styles.account_icon}
                     src={default_user_logo} alt="user"/>
                <AccMenuModal visible={accountModalWindowVisibility}
                              setVisible={setAccountModalWindowVisibility}>
                    <AccMenuList/>
                </AccMenuModal>
            </div>
        </div>
    );
};


export default Header;