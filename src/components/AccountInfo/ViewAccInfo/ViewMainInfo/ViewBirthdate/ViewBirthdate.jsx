import React, { useContext, useState } from "react";
import styles from "../../../AccountInfo.module.css";
import {
  get_prettified_age,
  get_prettified_birthday,
} from "../../../../../utils/ages";
import { IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { AccContext } from "../../../../../context/AccContext/AccContext";

const ViewBirthdate = () => {
  const { accInfo } = useContext(AccContext);
  const [showFullAge, setFullAge] = useState(false);
  return (
    <>
      {accInfo.birth_date && (
        <span className={styles.acc_age}>
          {showFullAge
            ? get_prettified_birthday(accInfo.birth_date)
            : get_prettified_age(accInfo.birth_date)}
          <IconButton size={"small"} onClick={() => setFullAge(!showFullAge)}>
            <InfoOutlinedIcon />
          </IconButton>
        </span>
      )}
    </>
  );
};

export default ViewBirthdate;