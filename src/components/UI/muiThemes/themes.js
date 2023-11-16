import {createTheme} from "@mui/material";

export const redTheme = createTheme({
    palette: {
        primary: {
            main: '#ff6332',
        },
        secondary: {
            main: '#ffa68a',
        },
    },
    typography: {
        fontFamily: "Montserrat, sans-serif",
        fontWeightRegular: 500,
    }
});