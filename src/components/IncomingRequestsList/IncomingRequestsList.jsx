import React from 'react';
import UserRequest from "../UserRequest/UserRequest";
import {Fade, IconButton, Menu, MenuItem, ThemeProvider} from "@mui/material";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import {redTheme} from "../UI/muiThemes/themes";


const IncomingRequestsList = ({incomingRequests}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {
                (incomingRequests).map(curr_user =>
                    <UserRequest key={curr_user.id} user={curr_user}>
                        <IconButton id="more_user_request_btn"
                                    aria-controls={open ? 'more_user_request_menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}>
                            <MoreHorizRoundedIcon fontSize={'small'} style={{color: '#a6a6a6'}}/>
                        </IconButton>
                    </UserRequest>
                )
            }

            <ThemeProvider theme={redTheme}>
                <Menu
                    id="more_user_request_menu"
                    anchorEl={anchorEl}
                    open={open}
                    TransitionComponent={Fade}
                    onClose={handleClose}
                    PaperProps={{
                        sx: {borderRadius: '15px'}
                    }}
                    MenuListProps={{
                        'aria-labelledby': `more_user_request_btn`,
                    }}
                >
                    <MenuItem onClick={handleClose}>Принять</MenuItem>
                    <MenuItem onClick={handleClose}>Отклонить</MenuItem>
                </Menu>
            </ThemeProvider>
        </>

    );
};

export default IncomingRequestsList;