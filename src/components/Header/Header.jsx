import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import default_user_logo from '../../assets/user.svg'
import DropDownAccMenu from "../UI/DropDownAccMenu/DropDownAccMenu";
import {Avatar, IconButton} from "@mui/material";

const Header = ({token, logout, removeToken, userInfo}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
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
                                onClick={handleClick}
                                size="small"
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar src={default_user_logo}
                                alt="user"
                                sx={{width: 50, height: 50}}/>
                    </IconButton>

                    <DropDownAccMenu open={open} handleClose={handleClose} anchorEl={anchorEl} logout={logout}
                                     token={token} removeToken={removeToken}/>

                    {Object.keys(userInfo).length !== 0
                        ?
                        <div className={styles.nickname_and_id}>
                            <span className={styles.nickname}>{userInfo.nickname}</span>
                            <span className={styles.id}>ID {userInfo.id}</span>
                        </div>
                        : <></>
                    }
                </div>


            </div>
        </div>
    );
};

export default Header;