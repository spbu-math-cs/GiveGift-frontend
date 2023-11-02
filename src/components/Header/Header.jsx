import React, {useRef, useState} from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import default_user_logo from '../../assets/user.svg'
import DropDownAccMenu from "../UI/DropDownAccMenu/DropDownAccMenu";
import AccMenuList from "./AccMenuList/AccMenuList";
import {useClickOutside} from "../../hooks/useClickOutside";

const Header = () => {

    const [accountModalWindowVisibility, setAccountModalWindowVisibility] = useState(false);
    const accMenuRef = useRef(null)

    useClickOutside(accMenuRef, () => setAccountModalWindowVisibility(false))

    return (
        <div className={styles.header}>
            <NavLink className={styles.logo} to='/'>ДариДары</NavLink>

            <div ref={accMenuRef} className={styles.account_settings}>
                <img onClick={() => setAccountModalWindowVisibility(!accountModalWindowVisibility)}
                     className={styles.account_icon}
                     src={default_user_logo} alt="user"/>
                <DropDownAccMenu visible={accountModalWindowVisibility}>
                    <AccMenuList setVisible={setAccountModalWindowVisibility}/>
                </DropDownAccMenu>
            </div>
        </div>
    );
};


export default Header;