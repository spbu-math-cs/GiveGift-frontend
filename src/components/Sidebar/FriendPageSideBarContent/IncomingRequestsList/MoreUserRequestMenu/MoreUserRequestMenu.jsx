import React from 'react';
import {redTheme} from "../../../../UI/muiThemes/themes";
import {Fade, Menu, MenuItem, ThemeProvider} from "@mui/material";
import styles from "./MoreUserRequestMenu.module.css";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const MoreUserRequestMenu = ({user_id, anchorEl, open, handleClose}) => {
    return (
        <ThemeProvider theme={redTheme}>
            <Menu
                id="more_user_request_menu"
                anchorEl={anchorEl}
                open={open}
                TransitionComponent={Fade}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        borderRadius: '15px',
                        marginTop: '5px',
                        color: '#666666',
                    }
                }}

                MenuListProps={{
                    'aria-labelledby': `more_user_request_btn`,
                }}
            >
                <MenuItem className={styles.request_more_item} onClick={() => {handleClose(true, user_id)}}>
                    <CheckRoundedIcon fontSize={'small'}/>
                    <span>Принять</span>
                </MenuItem>
                <MenuItem className={styles.request_more_item} onClick={() => handleClose(false, user_id)}>
                    <CloseRoundedIcon fontSize={'small'}/>
                    <span>Отклонить</span>
                </MenuItem>
            </Menu>
        </ThemeProvider>
    );
};

export default MoreUserRequestMenu;