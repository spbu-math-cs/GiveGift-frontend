import React, {useContext} from 'react';
import {IconButton} from "@mui/material";
import UserRequest from "../UserRequest/UserRequest";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {FriendContext, UserContext} from "../../context";


const OutgoingRequestsList = () => {
    const {outgoingRequests, revokeFriendRequest} = useContext(FriendContext)
    const {token} = useContext(UserContext);

    return (
        <>
            {(outgoingRequests) ?
                (outgoingRequests).map(curr_user =>
                    <UserRequest key={curr_user.id} user={curr_user}>
                        <IconButton onClick={() => {
                            revokeFriendRequest(token, curr_user.id);
                        }}>
                            <CloseRoundedIcon fontSize={'small'} style={{color: '#a6a6a6'}}/>
                        </IconButton>
                    </UserRequest>
                )
                : <span>Заявок нема</span>
            }
        </>
    );
};

export default OutgoingRequestsList;