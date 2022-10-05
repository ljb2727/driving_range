import * as React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";

import { toggleDialog } from "store/golfzone";
import { useDispatch } from "react-redux";

export default function MyDrawer({ target, anchor = "bottom" }) {
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const dialog = () => {
    dispatch(toggleDialog());
  };

  const toggleDrawer = (anchor, open) => (event) => {
    console.log("toggleDrawer");
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Card
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
        overflow: "hidden",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <CardHeader
        action={
          <IconButton
            onClick={toggleDrawer(anchor, false)}
            sx={{ position: "absolute", top: "0px", right: "0px" }}
          >
            <CloseIcon sx={{ color: "#7f7f7f" }} />
          </IconButton>
        }
        title="타석 예약"
        align="center"
        titleTypographyProps={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
      />
      <CardContent>
        <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
          {target.label} 예약
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>골프연습장 회원 구분</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">회원(기간/쿠폰)</Button>
        <Button onClick={() => dialog()}>일일고객</Button>
      </CardActions>
    </Card>
  );

  return (
    <div>
      <Button
        fullWidth
        variant="contained"
        size="large"
        onClick={toggleDrawer("bottom", true)}
      >
        <strong>타석 예약</strong>
      </Button>
      <NewDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </NewDrawer>
    </div>
  );
}

const NewDrawer = styled(Drawer)`
  & .MuiPaper-root {
    background: #fff;
    border-radius: 10px 10px 0 0;
  }
`;
