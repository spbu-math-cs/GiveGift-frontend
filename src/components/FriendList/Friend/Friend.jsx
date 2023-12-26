import React, { useContext } from "react";
import styles from "./Friend.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FriendContext } from "../../../context/FriendContext/FriendContext";
import { IdeasContext } from "../../../context/IdeasContext/IdeasContext";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import { avatarSrc } from "../../../utils/avatarSrc";

const Friend = ({ friend_id, nickname, avatar }) => {
  const navigate = useNavigate();

  const { removeFriend } = useContext(FriendContext);
  const { generateIdeas } = useContext(IdeasContext);
  const { token } = useContext(AuthContext);

  return (
    <div className={styles.friend}>
      <div className={styles.friend_info}>
        <img
          className={styles.friend_icon}
          src={avatarSrc(avatar)}
          alt="user"
        />

        <div style={{ display: "grid" }}>
          <span
            className={styles.friend_nickname}
            onClick={() => navigate(`/account/${friend_id}`)}
          >
            {nickname}
          </span>
          <span
            className={styles.friend_action}
            onClick={() =>
              generateIdeas({
                friend_id: friend_id,
                token: token,
              }) && navigate("/")
            }
          >
            Подобрать подарок
          </span>
        </div>
      </div>

      <IconButton
        onClick={() => {
          removeFriend(token, friend_id);
        }}
      >
        <CloseRoundedIcon fontSize={"large"} style={{ color: "#a6a6a6" }} />
      </IconButton>
    </div>
  );
};

export default Friend;
