import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
<<<<<<< HEAD
=======

>>>>>>> c89386062fadfcf0f098d753fe25f0931b00e69f
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { openDialog, closeDialog, toggleDialog } from "store";

import Tab from "components/detail/Tab";
=======
import { openDialog, closeDialog, toggleDialog } from "store/golfzone";
>>>>>>> c89386062fadfcf0f098d753fe25f0931b00e69f
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

<<<<<<< HEAD
export default function FullScreenDialog({ target }) {
=======
export default function FullScreenDialog() {
>>>>>>> c89386062fadfcf0f098d753fe25f0931b00e69f
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
<<<<<<< HEAD
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {target.label}
            </Typography>
=======
>>>>>>> c89386062fadfcf0f098d753fe25f0931b00e69f
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
<<<<<<< HEAD
          </Toolbar>
        </AppBar>
        <Tab />
=======
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
          </Toolbar>
        </AppBar>
        list
>>>>>>> c89386062fadfcf0f098d753fe25f0931b00e69f
      </Dialog>
    </div>
  );
}
