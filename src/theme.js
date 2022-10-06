import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      light: "#436ae372a5f5",
      main: "#36ae37",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      contrastText: "#fff",
    },
    green: "#36ae37",
    red: "#ff0000",
    gray: {
      light: "#f8f8fa",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
        fullWidth: true,
      },
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "0.9rem",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          //background: "none",
        },
      },
    },
  },
});

export default theme;
