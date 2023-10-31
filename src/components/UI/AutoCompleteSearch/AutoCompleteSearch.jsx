import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {redTheme} from "../../../muiThemes/themes";
import {ThemeProvider} from "@mui/material";

export const AutoCompleteSearch = ({setUserInterest, optionInterests}) => {
    const options = optionInterests.map((option) => {
        const firstLetter = option[0].toUpperCase();
        return {
            fullWord: option,
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

    return (
        <ThemeProvider theme={redTheme}>
            <Autocomplete
                id="grouped-demo"
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.fullWord}
                onChange={(e, option) => setUserInterest(option?.fullWord)}

                sx={{width: 300}}
                renderInput={(params) => <TextField {...params} label="Добавить предпочтение"/>}
            />
        </ThemeProvider>
    );
}