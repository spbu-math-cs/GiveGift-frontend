import styles from "./MiniFriend.module.css";
import React, { useContext } from "react";
import { AuthContext } from "../../../../../../context/AuthContext/AuthContext";
import { NavLink } from "react-router-dom";
import { IdeasContext } from "../../../../../../context/IdeasContext/IdeasContext";
import { UserContext } from "../../../../../../context/UserContext/UserContext";
import { avatarSrc } from "../../../../../../utils/avatarSrc";

const MiniFriend = ({ friend_id, nickname, avatar, setVisible }) => {
  const { token } = useContext(AuthContext);
  const { generateIdeas } = useContext(IdeasContext);
  const { setIsNewUser } = useContext(UserContext);

  return (
    <div className={styles.mini_friend}>
      <div className={styles.mini_friend_info}>
        <img
          className={styles.mini_friend_icon}
          src={avatarSrc(avatar)}
          alt="user"
        />

        <span>
          <NavLink
            to={`/account/${friend_id}`}
            className={styles.mini_friend_nickname}
          >
            {nickname}
          </NavLink>
        </span>
      </div>

      <button
        className={styles.mini_friend_action}
        onClick={() => {
          generateIdeas({
            friend_id: friend_id,
            token: token,
          }) &&
            setVisible(false) &&
            setIsNewUser(false);
        }}
      >
        Выбрать
      </button>
    </div>
  );
};

export default MiniFriend;
