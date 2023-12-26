import React, { useContext, useState } from "react";
import styles from "./AdminEditInterestForm.module.css";
import TextField from "@mui/material/TextField";
import { FormGroup, ThemeProvider } from "@mui/material";
import { adminTheme } from "../../../UI/muiThemes/themes";
import AdminCheckBtn from "../../Button/AdminCheckBtn/AdminCheckBtn";
import Autocomplete from "@mui/material/Autocomplete";
import AdminDeleteBtn from "../../Button/AdminDeleteBtn/AdminDeleteBtn";
import { InterestContext } from "../../../../context/InterestContext/InterestContext";
import { AuthContext } from "../../../../context/AuthContext/AuthContext";

const AdminEditInterestForm = ({ setVisible }) => {
  const [newInterest, setNewInterest] = useState("");
  const [deletedInterests, setDeletedInterests] = useState([]);

  const { token } = useContext(AuthContext);
  const { allInterests, addInterest, addInterestError } =
    useContext(InterestContext);

  return (
    <form className={styles.add_interest_form}>
      <ThemeProvider theme={adminTheme}>
        <FormGroup row>
          <TextField
            id="select_interest"
            label="Добавить интерес..."
            value={newInterest}
            onChange={(event) => setNewInterest(event.target.value)}
            sx={{ width: 300, "& fieldset": { borderRadius: "15px 0 0 15px" } }}
          />
          <AdminCheckBtn
            onClick={(e) => {
              e.preventDefault();
              addInterest(newInterest, token);
            }}
          />
        </FormGroup>

        <FormGroup row>
          <Autocomplete
            multiple
            freeSolo
            id="select_interest"
            value={deletedInterests}
            onChange={(event, newValue) => setDeletedInterests(newValue)}
            options={allInterests}
            sx={{ width: 300, "& fieldset": { borderRadius: "15px 0 0 15px" } }}
            renderInput={(params) => (
              <TextField {...params} label="Удалить интересы..." />
            )}
          />
          <AdminDeleteBtn onClick={() => alert("ok")} />
        </FormGroup>
      </ThemeProvider>
    </form>
  );
};

export default AdminEditInterestForm;
