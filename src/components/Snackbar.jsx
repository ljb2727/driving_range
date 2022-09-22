import React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyApp({ text = "알림" }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant, text) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(text, { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant("error", text)}>
        Show success snackbar
      </Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack({ text }) {
  console.log(text);
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <MyApp text={text} />
    </SnackbarProvider>
  );
}
