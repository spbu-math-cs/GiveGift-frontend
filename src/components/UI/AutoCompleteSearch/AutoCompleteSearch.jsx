import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {redTheme} from "../muiThemes/themes";
import {ThemeProvider} from "@mui/material";

export const AutoCompleteSearch = ({userInterest, setUserInterest, optionInterests}) => {
    return (
        <ThemeProvider theme={redTheme}>
            <Autocomplete
                id="select_interest"

                value={userInterest || null}
                onChange={(event, newValue) =>
                    setUserInterest(newValue)
                }

                options={optionInterests.sort()}
                sx={{width: 300}}
                renderInput={(params) => <TextField {...params} label="Добавить предпочтение"/>}
            />
        </ThemeProvider>
    );
}