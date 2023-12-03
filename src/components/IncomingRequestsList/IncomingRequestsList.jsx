import React, {useState} from 'react';
import UserRequest from "../UserRequest/UserRequest";
import {IconButton} from "@mui/material";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import MoreUserRequestMenu from "./MoreUserRequestMenu/MoreUserRequestMenu";

const IncomingRequestsList = ({incomingRequests, rejectFriendRequest, acceptFriendRequest, token}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [selectedUserID, setSelectedUserID] = useState();
    const handleClick = (event, user_id) => {
        setSelectedUserID(user_id);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (isAccepted, user_id) => {
        setAnchorEl(null);
        (isAccepted) ? acceptFriendRequest(token, user_id) : rejectFriendRequest(token, user_id);
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
                                    onClick={(e) => handleClick(e, curr_user.id)}>
                            <MoreHorizRoundedIcon fontSize={'small'} style={{color: '#a6a6a6'}}/>
                        </IconButton>
                    </UserRequest>
                )
            }

            <MoreUserRequestMenu user_id={selectedUserID}
                                 open={open} handleClose={handleClose} anchorEl={anchorEl}
                                 rejectFriendRequest={rejectFriendRequest} acceptFriendRequest={acceptFriendRequest}/>
        </>
    );
};

export default IncomingRequestsList;