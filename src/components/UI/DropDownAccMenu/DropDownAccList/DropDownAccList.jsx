import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "../DropDownAccMenu.module.css";
import {Divider, MenuItem} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import LogoutIcon from "@mui/icons-material/Logout";

const DropDownAccList = ({handleClose, logout, token, removeToken}) => {
    return (
        <>
            <NavLink end to='/' className={styles.acc_menu_item_link}>
                <MenuItem onClick={handleClose} className={styles.acc_menu_item} disableRipple>
                    <PersonIcon/>
                    <span>Профиль</span>
                </MenuItem>
            </NavLink>

            <NavLink end to='/friends' className={styles.acc_menu_item_link}>
                <MenuItem onClick={handleClose} className={styles.acc_menu_item} disableRipple>
                    <PeopleAltRoundedIcon/>
                    <span>Друзья</span>
                </MenuItem>
            </NavLink>

            <Divider sx={{my: 0.5}}/>

            <MenuItem onClick={() => {
                handleClose();
                logout(token);
                removeToken();
            }} disableRipple className={styles.acc_menu_item} style={{color: '#ff6332'}}>
                <LogoutIcon/>
                <span>Выйти</span>
            </MenuItem>
        </>
    );
};

export default DropDownAccList;