import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {TextField, ThemeProvider} from "@mui/material";
import {redTheme} from "../muiThemes/themes";

const SearchBar = ({searchQuery, setSearchQuery}) => {
    return (
        <div>
            <ThemeProvider theme={redTheme}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Поиск друзей..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                        endAdornment: (<SearchRoundedIcon fontSize={"large"} style={{color: '#afafaf'}}/>),
                        style: {
                            borderRadius: "15px",
                        }
                    }}
                    size={"medium"}
                /></ThemeProvider>
        </div>
    );
};

export default SearchBar;