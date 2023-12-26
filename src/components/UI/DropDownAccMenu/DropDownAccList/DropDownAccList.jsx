import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "../DropDownAccMenu.module.css";
import { Divider, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from "../../../../context/AuthContext/AuthContext";
import {UserContext} from "../../../../context/UserContext/UserContext";

const DropDownAccList = ({ handleClose, setVisible }) => {
  const { userInfo } = useContext(UserContext);
  const { token, removeToken, logout } = useContext(AuthContext);

  return (
    <>
      <NavLink end to="/account/0" className={styles.acc_menu_item_link}>
        <MenuItem
          onClick={handleClose}
          className={styles.acc_menu_item}
          disableRipple
        >
          <PersonIcon />
          <span>Профиль</span>
        </MenuItem>
      </NavLink>

      <NavLink end to="/friends" className={styles.acc_menu_item_link}>
        <MenuItem
          onClick={handleClose}
          className={styles.acc_menu_item}
          disableRipple
        >
          <PeopleAltRoundedIcon />
          <span>Друзья</span>
        </MenuItem>
      </NavLink>

      {
        (userInfo.is_admin === true)
          ? <div onClick={() => setVisible(true)} className={styles.acc_menu_item_admin}>
              <MenuItem
                onClick={handleClose}
                className={styles.acc_menu_item}
                disableRipple
              >
                <SettingsIcon />
                <span>Админ</span>
              </MenuItem>
            </div>
          : <></>
      }

      <Divider sx={{ my: 0.5 }} />

      <NavLink to={"/"} style={{ textDecoration: "none" }}>
        <MenuItem
          onClick={() => {
            handleClose();
            logout(token);
            removeToken();
          }}
          disableRipple
          className={styles.acc_menu_item}
          style={{ color: "#ff6332" }}
        >
          <LogoutIcon />
          <span>Выйти</span>
        </MenuItem>
      </NavLink>
    </>
  );
};

export default DropDownAccList;
