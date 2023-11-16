import React, {useRef, useState} from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import default_user_logo from '../../assets/user.svg'
import DropDownAccMenu from "../UI/DropDownAccMenu/DropDownAccMenu";
import AccMenuList from "./AccMenuList/AccMenuList";
import {useClickOutside} from "../../hooks/useClickOutside";

const Header = ({token, logout, removeToken, userInfo}) => {

    const [accountModalWindowVisibility, setAccountModalWindowVisibility] = useState(false);
    const accMenuRef = useRef(null)

    useClickOutside(accMenuRef, () => setAccountModalWindowVisibility(false))

    // TODO: Если у пользователя собственный profilepic, отображать его
    return (
        <div className={styles.header}>
            <NavLink className={styles.logo} to='/'>ДариДары</NavLink>

            <div ref={accMenuRef} className={styles.account_settings}>
                <div className={styles.acc_main_info}>
                    <img onClick={() => setAccountModalWindowVisibility(!accountModalWindowVisibility)}
                         className={styles.account_icon}
                         src={default_user_logo} alt="user"/>

                    {Object.keys(userInfo).length !== 0
                        ? <div>Пользователь зареган</div>
                        : <></>
                    }
                </div>

                <DropDownAccMenu visible={accountModalWindowVisibility}>
                    <AccMenuList token={token} logout={logout} removeToken={removeToken}
                                 setVisible={setAccountModalWindowVisibility}/>
                </DropDownAccMenu>
            </div>
        </div>
    );
};


export default Header;