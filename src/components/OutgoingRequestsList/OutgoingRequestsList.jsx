import React from 'react';
import {IconButton} from "@mui/material";
import UserRequest from "../UserRequest/UserRequest";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";


const OutgoingRequestsList = ({outgoingRequests}) => {
    return (
        <>
            {
                (outgoingRequests).map(curr_user =>
                    <UserRequest key={curr_user.id} user={curr_user}>
                        <IconButton>
                            <CloseRoundedIcon fontSize={'small'} style={{color: '#a6a6a6'}}/>
                        </IconButton>
                    </UserRequest>
                )
            }
        </>
    );
};

export default OutgoingRequestsList;