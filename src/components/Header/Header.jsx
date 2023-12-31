import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import DropDownAccMenu from "../UI/DropDownAccMenu/DropDownAccMenu";
import { Avatar, IconButton } from "@mui/material";
import UserInfo from "./UserInfo/UserInfo";
import { UserContext } from "../../context/UserContext/UserContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { avatarSrc } from "../../utils/avatarSrc";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  const { token } = useContext(AuthContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.header}>
      <NavLink className={styles.logo} to="/">
        ДариДары
      </NavLink>

      <div className={styles.account_settings}>
        <div className={styles.acc_main_info}>
          <IconButton
            id="account-menu-button"
            onClick={(e) => {
              token ? handleClick(e) : navigate("/login");
            }}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              src={avatarSrc(userInfo.avatar)}
              alt="user"
              sx={{ width: 50, height: 50 }}
            />
          </IconButton>

          {token && (
            <DropDownAccMenu
              open={open}
              handleClose={handleClose}
              anchorEl={anchorEl}
            />
          )}

          <UserInfo userInfo={userInfo} />
        </div>
      </div>
    </div>
  );
};

export default Header;
