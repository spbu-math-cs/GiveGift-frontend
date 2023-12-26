import React, {useContext} from "react";
import styles from "../../../AccountInfo.module.css";
import { TextField } from "@mui/material";
import { AccContext } from "../../../../../context/AccContext/AccContext";

const EditAbout = () => {
  const { accInfo, setAccInfo } = useContext(AccContext);

  return (
    <div className={styles.acc_info_part}>
      <span className={styles.info_part_header}>О себе</span>

      <TextField
        value={accInfo.about}
        onChange={(event) => {
          setAccInfo((prev) => ({ ...prev, about: event.target.value }));
        }}
        multiline
        rows={2}
        inputProps={{ className: "slider" }}
      />
    </div>
  );
};

export default EditAbout;
