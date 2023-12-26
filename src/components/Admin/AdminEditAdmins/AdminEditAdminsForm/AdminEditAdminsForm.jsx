import React, {useContext, useState} from "react";
import styles from "./AdminEditAdminsForm.module.css";
import {Alert, FormGroup, ThemeProvider} from "@mui/material";
import TextField from "@mui/material/TextField";
import {AuthContext} from "../../../../context/AuthContext/AuthContext";
import {UserContext} from "../../../../context/UserContext/UserContext";
import AdminCheckBtn from "../../Button/AdminCheckBtn/AdminCheckBtn";
import AdminDeleteBtn from "../../Button/AdminDeleteBtn/AdminDeleteBtn";
import {adminTheme} from "../../../UI/muiThemes/themes";

const AdminEditAdminsForm = ({  }) => {

  const [AddID, setAddID] = useState("");
  const [DeleteID, setDeleteID] = useState("");
  const { token } = useContext(AuthContext);
  const { addAdmin, deleteAdmin } = useContext(UserContext);
  const [ShowAddAdmin, setShowAddAdmin] = useState(false);
  const [ShowDeleteAdmin, setShowDeleteAdmin] = useState(false);

  return (
    <form className={styles.add_admin_form}>
      <ThemeProvider theme={adminTheme}>
        {ShowAddAdmin ? (
            <Alert severity="success">
              Администратор добавлен!
            </Alert>
        ) : (
          ShowDeleteAdmin ? (
            <Alert severity="success">
              Администратор удалён!
            </Alert>) : (
          <></>
        ))}

        <FormGroup row>
          <TextField
            sx={{ width: 300, "& fieldset": { borderRadius: "15px 0 0 15px" } }}
            label="Добавить админа..."
            value={AddID}
            onChange={(e) => setAddID(e.currentTarget.value)}
          />
          <AdminCheckBtn
            onClick={(e) => {
              e.preventDefault();
              setAddID("")
              setShowAddAdmin(true);
              setShowDeleteAdmin(false);
              addAdmin(token, AddID)
            }}
          />
        </FormGroup>

      <FormGroup row>
        <TextField
          sx={{ width: 300, "& fieldset": { borderRadius: "15px 0 0 15px" } }}
          label="Удалить админа..."
          value={DeleteID}
          onChange={(e) => setDeleteID(e.currentTarget.value)}
        />
        <AdminDeleteBtn
          onClick={(e) => {
            e.preventDefault();
            setDeleteID("")
            setShowAddAdmin(false);
            setShowDeleteAdmin(true);
            deleteAdmin(token, DeleteID)
          }}
        />
      </FormGroup>
    </ThemeProvider>
    </form>
  );
};

export default AdminEditAdminsForm;
