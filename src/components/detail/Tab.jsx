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
import { useNavigate, useParams } from "react-router-dom";
import { setTime, closeDialog } from "store";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Snackbar from "components/common/Snackbar";

import moment from "moment";
import "moment/locale/ko";
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

  return (
    <Box sx={{ width: "100%" }}>
      {moment().format("YYYY-MM-DD HH:mm:ss")}
      <CardMedia component="img" image={current.이미지} />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        {/* 탭메뉴 */}
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          {current.타석.map((e, i) => {
            return <Tab label={`${e.층수}층`} key={i} />;
          })}
        </Tabs>
      </Box>

      {/* 탭컨텐츠     */}
      {current.타석.map((e, i) => {
        return (
          <TabPanel value={value} index={i} key={i}>
            <DriveBox value={value} id={id} />
          </TabPanel>
        );
      })}
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

function DriveBox({ value, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSnack, setSnack] = React.useState(false);

  // *타석클릭
  const onBooking = (time, floor, box) => {
    if (time === null && !showSnack) {
      setSnack(true);
      setTimeout(() => {
        setSnack(false);
      }, 1000);
    } else if (time !== null) {
      dispatch(closeDialog());
      navigate(`/pay/${id}/${floor}/${box}`);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      {showSnack && <Snackbar>예약이 불가한 타석 입니다.</Snackbar>}

      <Grid container spacing={1} rowSpacing={2}>
        {current.타석[value].리스트.map((e, i) => {
          return (
            <Grid
              item
              xs={4}
              key={e.id}
              sx={{ filter: e.남은시간 === null && "grayscale(1)" }}
              onClick={() =>
                onBooking(e.남은시간, current.타석[value].층수, e.id)
              }
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
