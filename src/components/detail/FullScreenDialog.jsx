import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import Tab from "components/detail/Tab";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ target, show, open, close }) {
  return (
    <div>
      <Dialog fullScreen open={show} TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative" }} elevation={0}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {target.label}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => close()}
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
