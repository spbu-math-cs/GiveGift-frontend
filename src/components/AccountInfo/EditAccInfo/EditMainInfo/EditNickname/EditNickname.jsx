import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { AccContext } from "../../../../../context/AccContext/AccContext";

const EditNickname = () => {
  const { accInfo, setAccInfo } = useContext(AccContext);
  return (
    <TextField
      label="Имя"
      inputProps={{ style: { fontSize: 25, fontWeight: 700 } }}
      size={"small"}
      value={accInfo.nickname}
      onChange={(event) => {
        setAccInfo((prev) => ({ ...prev, nickname: event.target.value }));
      }}
    />
  );
};

export default EditNickname;
