import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {redTheme} from "../muiThemes/themes";
import {FormGroup, ThemeProvider} from "@mui/material";
import CheckBtn from "../Button/CheckBtn/CheckBtn";
import {useContext} from "react";
import {InterestContext} from "../../../context/InterestContext/InterestContext";

export const AutoCompleteSearch = ({selectedInterests, setSelectedInterests, onClick}) => {
    const {optionInterests} = useContext(InterestContext);

    return (
        <ThemeProvider theme={redTheme}>
            <FormGroup row>
                <Autocomplete
                    multiple
                    freeSolo
                    id="select_interest"
                    value={selectedInterests}

                    onChange={(event, newValue) =>
                        setSelectedInterests(newValue)
                    }

                    options={optionInterests.sort()}
                    sx={{width: 300, '& fieldset': { borderRadius: '15px 0 0 15px' }}}
                    renderInput={(params) => <TextField {...params} label="Укажите интересы..."/>}
                />
                <CheckBtn onClick={onClick}/>
            </FormGroup>
        </ThemeProvider>
    );
}