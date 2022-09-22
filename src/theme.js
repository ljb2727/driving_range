import { createTheme, styled } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      light: "#42a5f5",
      main: "#1976d2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      contrastText: "#fff",
    },
    green: {
      light: "#8fcf42",
      main: "#36ae37",
      contrastText: "#fff",
    },
  },
});

export default theme;
