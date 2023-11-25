import React from 'react';
import {redTheme} from "../muiThemes/themes";
import {Fade, Menu, ThemeProvider} from "@mui/material";
import DropDownAccList from "./DropDownAccList/DropDownAccList";

const DropDownAccMenu = ({open, handleClose, anchorEl, token, removeToken, logout}) => {
    return (
        <ThemeProvider theme={redTheme}>
            <Menu
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                PaperProps={{
                    sx: {
                        borderRadius: '15px',
                        marginTop: '5px',
                        minWidth: 150,
                        color: '#666666'
                    }
                }}
                MenuListProps={{
                    'aria-labelledby': 'account-menu-button',
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <DropDownAccList handleClose={handleClose} logout={logout} token={token} removeToken={removeToken}/>
            </Menu>
        </ThemeProvider>
    );
};

export default DropDownAccMenu;