import { createTheme } from "@mui/material";

export const redTheme = createTheme({
  palette: {
    primary: {
      main: "#ff6332",
    },
    secondary: {
      main: "#ffa68a",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontWeightRegular: 500,
  },
});

export const adminTheme = createTheme({
  palette: {
    primary: {
      main: "#9370D8",
    },
    secondary: {
      main: "#ffa68a",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontWeightRegular: 500,
  },
});
