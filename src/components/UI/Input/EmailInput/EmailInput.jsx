import React from "react";
import { OutlinedInput } from "@mui/material";

const EmailInput = ({ email, setEmail }) => {
  return (
    <OutlinedInput
      placeholder={"test@gmail.com"}
      type={"email"}
      name={"email"}
      value={email}
      autoComplete={"username"}
      sx={{ width: "100%" }}
      style={{ borderRadius: "10px" }}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  );
};

export default EmailInput;
