import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { TextField, ThemeProvider } from "@mui/material";
import { redTheme } from "../muiThemes/themes";

const SearchBar = ({ searchQuery, setSearchQuery, size = "large" }) => {
  return (
    <div>
      <ThemeProvider theme={redTheme}>
        <TextField
          variant="outlined"
          placeholder="Поиск друзей..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size={size}
          sx={{
            width: "fill-available",
            input: {
              "&::placeholder": {
                opacity: 1,
                color: "dimgrey",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <SearchRoundedIcon fontSize={size} style={{ color: "dimgrey" }} />
            ),
            style: {
              borderRadius: "15px",
            },
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default SearchBar;
