import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import useScrollTrigger from "@mui/material/useScrollTrigger";

import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useNavigate } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar elevation={2}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => navigate(-1)}
            >
              <ArrowBackIosNewRoundedIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: "flex",
                flexGrow: "1",
                justifyContent: "center",
                mr: "24px",
              }}
            >
              골프연습장 검색
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar sx={{ minHeight: "48px" }} />
    </React.Fragment>
  );
}
