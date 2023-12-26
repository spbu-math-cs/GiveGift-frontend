import React, { useContext, useEffect } from "react";
import styles from "../AccountInfo.module.css";
import { Alert } from "@mui/material";
import { InterestContext } from "../../../context/InterestContext/InterestContext";
import { AccContext } from "../../../context/AccContext/AccContext";
import EditMainInfo from "./EditMainInfo/EditMainInfo";
import EditOtherInfo from "./EditOtherInfo/EditOtherInfo";
import EditActionButtons from "./EditActionButtons/EditActionButtons";

const EditAccInfo = ({ setIsEdit }) => {
  const { fetchInterests } = useContext(InterestContext);
  const { isChangeAccInfoLoading, changeAccInfoError } = useContext(AccContext);

  useEffect(() => {
    const fetchInfo = async () => {
      await fetchInterests();
    };

    fetchInfo().catch(console.error);
  }, []); // eslint-disable-line

  return (
    <div className={`${styles.acc_info_content} fast_fadein`}>
      {!isChangeAccInfoLoading && changeAccInfoError && (
        <Alert severity="error">{changeAccInfoError.data}</Alert>
      )}

      <EditMainInfo />

      <EditOtherInfo />

      <EditActionButtons setIsEdit={setIsEdit} />
    </div>
  );
};

export default EditAccInfo;
