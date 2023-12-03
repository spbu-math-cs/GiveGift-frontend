import React, {useState} from 'react';
import styles from "./AddUserFriendForm.module.css"
import TextField from "@mui/material/TextField";
import CheckBtn from "../../../UI/Button/CheckBtn/CheckBtn";
import {FormGroup, ThemeProvider} from "@mui/material";
import {redTheme} from "../../../UI/muiThemes/themes";


const AddUserFriendForm = ({add}) => {

    const [userFriend, setUserFriend] = useState('');

    const addNewUserFriend = (e) => {
        e.preventDefault();
        if (userFriend) {
            add(userFriend);
            setUserFriend('');
        }
    }

    return (
        <form className={styles.add_friend_form}>
            <ThemeProvider theme={redTheme}>
                <FormGroup row>
                    <TextField sx={{width: 300, '& fieldset': { borderRadius: '15px 0 0 15px' }}} label="Укажите ID друга..."/>
                    <CheckBtn onCLick={addNewUserFriend}/>
                </FormGroup>
            </ThemeProvider>
        </form>
    );
};

export default AddUserFriendForm;


