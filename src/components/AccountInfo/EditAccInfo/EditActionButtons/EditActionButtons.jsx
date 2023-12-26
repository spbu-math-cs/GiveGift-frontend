import React, { useContext } from "react";
import styles from "../../AccountInfo.module.css";
import FriendActionButton from "../../../UI/Button/FriendActionButton/FriendActionButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { AuthContext } from "../../../../context/AuthContext/AuthContext";
import { AccContext } from "../../../../context/AccContext/AccContext";
import { UserContext } from "../../../../context/UserContext/UserContext";

const EditActionButtons = ({ setIsEdit }) => {
  const { token } = useContext(AuthContext);
  const { setAccInfo, changeAccInfo } = useContext(AccContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    changeAccInfo(token, setIsEdit, setUserInfo);
  };

  const cancelSubmit = (e) => {
    e.preventDefault();
    setAccInfo(userInfo);
    setIsEdit(false);
  };

  return (
    <div className={styles.edit_action_buttons}>
      <FriendActionButton onClick={cancelSubmit}>
        <CloseRoundedIcon color="white" />
        <span>Отменить</span>
      </FriendActionButton>
      <FriendActionButton onClick={handleSubmit}>
        <SaveRoundedIcon color="white" />
        <span>Сохранить</span>
      </FriendActionButton>
    </div>
  );
};

export default EditActionButtons;
