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
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { styled } from "@mui/system";

export default function MyDrawer({ anchor = "bottom", open }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
        title="쿠폰 사용"
        align="center"
        titleTypographyProps={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
      />
      <CardContent>
        <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 1 }}>
          쿠폰번호 입력
        </Typography>
        <Box component="form" autoComplete="off">
          <TextField variant="outlined" size="small" fullWidth={true} />
        </Box>
      </CardContent>
      <CardActions sx={{ mx: 1 }}>
        <Button onClick={toggleDrawer(anchor, false)} variant="outlined">
          취소
        </Button>
        <Button onClick={toggleDrawer(anchor, false)}>쿠폰 등록</Button>
      </CardActions>
    </Card>
  );

  return (
    <div>
      <Button
        variant="outlined"
        endIcon={<ArrowRightIcon />}
        size="small"
        onClick={toggleDrawer("bottom", true)}
        sx={{
          "& .MuiButton-endIcon": {
            marginLeft: "0",
          },
        }}
      >
        사용
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
