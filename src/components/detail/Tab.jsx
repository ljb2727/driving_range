import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setTime } from "store";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

let current;
export default function BasicTabs() {
  const { id } = useParams();
  const { driveBox } = useSelector((state) => state);
  console.log(driveBox);
  current = driveBox[driveBox.findIndex((e) => String(e.id) === String(id))];
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  // *dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTime({ id: id, listId: 1, time: 60 }));
  });

  return (
    <Box sx={{ width: "100%" }}>
      <CardMedia component="img" image={current.이미지} />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          {current.타석.map((e, i) => {
            return <Tab label={`${e.층수}층`} key={i} />;
          })}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DriveBox value={value} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DriveBox value={value} />
      </TabPanel>
    </Box>
  );
}

//컴포넌트
const Item = styled(Card)(({ theme }) => ({
  textAlign: "center",
  overflow: "hidden",
  color: theme.palette.text.secondary,
  position: "relative",
  ".card_content": {
    padding: "1rem",
    lineHeight: "1.4",
    minHeight: "3em",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  ".time": {},
}));
const StyleOption = styled(Box)`
  position: absolute;
  font-size: 0.3rem;
  text-align: right;
  background: #000;
  color: #fff;
  top: 0;
  right: 5px;
  height: 1rem;
  padding: 0 1em;
  border-radius: 3px 3px 0 0;
`;

function DriveBox({ value }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} rowSpacing={2}>
        {current.타석[value].리스트.map((e, i) => {
          return (
            <Grid
              item
              xs={4}
              key={e.id}
              sx={{ filter: e.남은시간 === null && "grayscale(1)" }}
            >
              <Box sx={{ position: "relative", paddingTop: "1rem" }}>
                <StyleOption className="option">{e.옵션}</StyleOption>
                <Item>
                  <AppBar
                    position="relative"
                    elevation={0}
                    sx={{ padding: "0.5em" }}
                  >
                    {e.id}
                  </AppBar>
                  <CardContent className="card_content">
                    <Box className="time">
                      {e.남은시간 === null ? (
                        <Box>{e.상태}</Box>
                      ) : (
                        <Box>
                          {e.남은시간}분 남음 <br /> {e.남은시간}
                        </Box>
                      )}
                    </Box>
                  </CardContent>
                </Item>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
