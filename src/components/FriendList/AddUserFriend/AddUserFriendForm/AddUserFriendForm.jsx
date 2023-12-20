import React, { useContext, useState } from "react";
import styles from "./AddUserFriendForm.module.css";
import TextField from "@mui/material/TextField";
import CheckBtn from "../../../UI/Button/CheckBtn/CheckBtn";
import { Alert, FormGroup, ThemeProvider } from "@mui/material";
import { redTheme } from "../../../UI/muiThemes/themes";
import { FriendContext } from "../../../../context/FriendContext/FriendContext";
import { AuthContext } from "../../../../context/AuthContext/AuthContext";

const AddUserFriendForm = ({ showAlert, setShowAlert }) => {
  const [friendID, setFriendID] = useState("");
  const { token } = useContext(AuthContext);
  const { sendFriendRequest, sendRequestError, isSendRequestLoading } =
    useContext(FriendContext);

  const addNewUserFriend = (e) => {
    e.preventDefault();
    if (friendID) {
      sendFriendRequest(token, friendID);
      setFriendID("");
      setShowAlert(true);
    }
  };

  return (
    <form className={styles.add_friend_form}>
      <ThemeProvider theme={redTheme}>
        {showAlert && !isSendRequestLoading ? (
          sendRequestError ? (
            <Alert severity="error">{sendRequestError.data}</Alert>
          ) : (
            <Alert severity="success">
              Заявка в друзья успешно отправлена!
            </Alert>
          )
        ) : (
          <></>
        )}

        <FormGroup row>
          <TextField
            sx={{ width: 300, "& fieldset": { borderRadius: "15px 0 0 15px" } }}
            label="Укажите ID друга..."
            value={friendID}
            onChange={(e) => setFriendID(e.currentTarget.value)}
          />
          <CheckBtn onClick={addNewUserFriend} />
        </FormGroup>
      </ThemeProvider>
    </form>
  );
};

export default AddUserFriendForm;
