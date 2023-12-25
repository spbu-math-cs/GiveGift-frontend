import React, { useContext } from "react";
import styles from "../../../AccountInfo.module.css";
import { AccContext } from "../../../../../context/AccContext/AccContext";

const ViewNickname = () => {
  const { accInfo } = useContext(AccContext);
  return (
    <span className={styles.acc_nickname}>
      {accInfo.nickname}
      <span className={styles.acc_id}>#{accInfo.id}</span>
    </span>
  );
};

export default ViewNickname;
