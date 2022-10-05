import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import { openDialog, closeDialog, toggleDialog } from "store/golfzone";

import Tab from "components/detail/Tab";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ target }) {
  const dispatch = useDispatch();
  const { showDialog } = useSelector((state) => state);

  const handleClickOpen = () => {
    dispatch(openDialog());
  };

  const handleClose = () => {
    dispatch(closeDialog());
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={showDialog}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {target.label}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Tab />
      </Dialog>
    </div>
  );
}
