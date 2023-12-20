import React, { useContext, useState } from "react";
import FriendActionButton from "../FriendActionButton/FriendActionButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import MoreUserRequestMenu from "../../../Sidebar/FriendPageSideBarContent/IncomingRequestsList/MoreUserRequestMenu/MoreUserRequestMenu";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import styles from "./ViewAccActionBtn.module.css";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import PersonRemoveRoundedIcon from "@mui/icons-material/PersonRemoveRounded";
import { useNavigate } from "react-router-dom";
import { FriendContext } from "../../../../context/FriendContext/FriendContext";
import { IdeasContext } from "../../../../context/IdeasContext/IdeasContext";
import { UserContext } from "../../../../context/UserContext/UserContext";
import { AuthContext } from "../../../../context/AuthContext/AuthContext";
import { AccContext } from "../../../../context/AccContext/AccContext";

const ViewAccActionBtn = ({ setIsEdit }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const {
    outgoingRequests,
    revokeFriendRequest,
    incomingRequests,
    sendFriendRequest,
    removeFriend,
    acceptFriendRequest,
    rejectFriendRequest,
    friends,
  } = useContext(FriendContext);

  const { generateIdeas } = useContext(IdeasContext);
  const { myID } = useContext(UserContext);
  const { token } = useContext(AuthContext);
  const { accInfo } = useContext(AccContext);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (isAccepted, user_id) => {
    setAnchorEl(null);
    isAccepted
      ? acceptFriendRequest(token, user_id)
      : rejectFriendRequest(token, user_id);
  };

  return (
    <>
      {accInfo.id === myID ? (
        <FriendActionButton
          onClick={() => {
            setIsEdit(true);
          }}
        >
          <EditRoundedIcon color="white" />
          <span>Изменить профиль</span>
        </FriendActionButton>
      ) : friends.findIndex((myFriend, _) => myFriend.id === accInfo.id) ===
        -1 ? (
        outgoingRequests.findIndex(
          (myFriend, _) => myFriend.id === accInfo.id,
        ) !== -1 ? (
          <FriendActionButton
            onClick={() => revokeFriendRequest(token, accInfo.id)}
          >
            <CancelRoundedIcon color="white" />
            <span>Отозвать заявку</span>
          </FriendActionButton>
        ) : incomingRequests.findIndex(
            (myFriend, _) => myFriend.id === accInfo.id,
          ) !== -1 ? (
          <>
            <FriendActionButton onClick={handleClick}>
              <PeopleOutlineRoundedIcon color="white" />
              <span>Ответить на заявку</span>
            </FriendActionButton>
            <MoreUserRequestMenu
              user_id={accInfo.id}
              open={open}
              handleClose={handleClose}
              anchorEl={anchorEl}
            />
          </>
        ) : (
          <FriendActionButton
            onClick={() => sendFriendRequest(token, accInfo.id)}
          >
            <PersonAddRoundedIcon color="white" />
            <span>Добавить в друзья</span>
          </FriendActionButton>
        )
      ) : (
        <div className={styles.friend_main_activities}>
          <FriendActionButton
            onClick={() =>
              generateIdeas({
                friend_id: accInfo.id,
                token: token,
              }) && navigate("/")
            }
          >
            <CardGiftcardRoundedIcon color="white" />
            <span>Подобрать подарок</span>
          </FriendActionButton>

          <FriendActionButton onClick={() => removeFriend(token, accInfo.id)}>
            <PersonRemoveRoundedIcon color="white" />
          </FriendActionButton>
        </div>
      )}
    </>
  );
};

export default ViewAccActionBtn;
