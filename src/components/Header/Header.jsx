import React from "react";
import styles from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import default_user_logo from '../../assets/user.svg'
import DropDownAccMenu from "../UI/DropDownAccMenu/DropDownAccMenu";
import {Avatar, IconButton} from "@mui/material";
import UserInfo from "./UserInfo/UserInfo";
import {isObjectEmpty} from "../../utils/checkers";

const Header = ({token, logout, removeToken, userInfo}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // TODO: Если у пользователя собственный profilepic, отображать его
    return (
        <div className={styles.header}>
            <NavLink className={styles.logo} to='/'>ДариДары</NavLink>

            <div className={styles.account_settings}>
                <div className={styles.acc_main_info}>
                    <IconButton id="account-menu-button"
                                onClick={(e) => {!isObjectEmpty(userInfo) ? handleClick(e) : navigate('/login')}}
                                size="small"
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar src={default_user_logo}
                                alt="user"
                                sx={{width: 50, height: 50}}/>
                    </IconButton>

                    {!isObjectEmpty(userInfo)
                        ? <DropDownAccMenu open={open} handleClose={handleClose} anchorEl={anchorEl} logout={logout}
                                           token={token} removeToken={removeToken}/>
                        : <></>
                    }

                    <UserInfo userInfo={userInfo}/>
                </div>
            </div>
        </div>
    );
};

export default Header;