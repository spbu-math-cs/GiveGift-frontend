import React, { useContext, useEffect } from "react";
import styles from "../AccountInfo.module.css";
import { Alert } from "@mui/material";
import FriendActionButton from "../../UI/Button/FriendActionButton/FriendActionButton";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { InterestContext } from "../../../context/InterestContext/InterestContext";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import { UserContext } from "../../../context/UserContext/UserContext";
import { AccContext } from "../../../context/AccContext/AccContext";
import EditMainInfo from "./EditMainInfo/EditMainInfo";
import EditOtherInfo from "./EditOtherInfo/EditOtherInfo";

const EditAccInfo = ({ setIsEdit }) => {
  const { fetchInterests } = useContext(InterestContext);
  const { token } = useContext(AuthContext);
  const { isChangeUserInfoLoading, changeUserInfoError, changeUserInfo } =
    useContext(UserContext);
  const { accInfo } = useContext(AccContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeUserInfo(token, accInfo, setIsEdit);
  };

  useEffect(() => {
    const fetchInfo = async () => {
      await fetchInterests();
    };

    fetchInfo().catch(console.error);
  }, []); // eslint-disable-line

  return (
    <div className={`${styles.acc_info_content} fast_fadein`}>
      {!isChangeUserInfoLoading && changeUserInfoError && (
        <Alert severity="error">{changeUserInfoError.data}</Alert>
      )}

      <EditMainInfo />

      <EditOtherInfo />

      <div className={styles.form_submit_button}>
        <FriendActionButton onClick={handleSubmit}>
          <SaveRoundedIcon color="white" />
          <span>Сохранить</span>
        </FriendActionButton>
      </div>
    </div>
  );
};

export default EditAccInfo;
