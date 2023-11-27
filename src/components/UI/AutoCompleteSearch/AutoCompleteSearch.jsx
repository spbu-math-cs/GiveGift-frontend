import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {redTheme} from "../muiThemes/themes";
import {FormGroup, ThemeProvider} from "@mui/material";
import CheckBtn from "../Button/CheckBtn/CheckBtn";

export const AutoCompleteSearch = ({userInterest, setUserInterest, optionInterests, onClick}) => {
    return (
        <ThemeProvider theme={redTheme}>
            <FormGroup row>
                <Autocomplete
                    multiple
                    freeSolo
                    id="select_interest"

                    value={userInterest || null}
                    onChange={(event, newValue) =>
                        setUserInterest(newValue)
                    }

                    options={optionInterests.sort()}
                    sx={{width: 300, '& fieldset': { borderRadius: '15px 0 0 15px' }}}
                    renderInput={(params) => <TextField {...params} label="Укажите интересы..."/>}
                />
                <CheckBtn onCLick={onClick}/>
            </FormGroup>
        </ThemeProvider>
    );
}