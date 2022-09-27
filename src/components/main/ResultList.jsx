import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  List,
  ListItem,
  styled,
  Chip,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { green } from "@mui/material/colors";

import { changeHeart, preload } from "store/golfzone";

const CusBox = styled(Box)`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1rem;
  & .cus_check {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
  }
  & .banner {
    color: #00a101;
    border: 2px solid #00a101;
    border-radius: 3px;
    overflow: hidden;
    padding: 2px 4px;
    font-weight: bold;
    margin-right: auto;
  }
  & strong {
    display: flex;
  }
  & .chip_list {
    display: flex;
    gap: 0.5rem;
  }
`;

const Cs_Sort = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: end;
  & .check {
    margin-left: 1rem;
    font-size: 0.8rem;
  }
  & .select {
    margin-right: 1rem;
  }
`;

export default function ResultList() {
  const { golfzone, myHeart } = useSelector((state) => state);
  const [copyList, setCopyList] = useState([...golfzone]);
  //const [copyHeart, setCopyHeart] = useState(myHeart);
  const [sort, setSort] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    let local = JSON.parse(localStorage.getItem("myHeart"));
    console.log(local);
    if (local !== null && local.length !== 0) {
      dispatch(preload(local));
    }
  }, []);

  //정렬버튼
  const onChange = (event) => {
    let value = event.target.value;
    setSort(value);

    if (value === "distance") {
      copyList.sort((a, b) => {
        if (a.거리 > b.거리) {
          return 1;
        } else if (a.거리 < b.거리) {
          return -1;
        } else {
          return 0;
        }
      });
    } else if (value === "abc") {
      copyList.sort((a, b) => {
        if (a.label > b.label) {
          return 1;
        } else if (a.label < b.label) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  };

  const onChageHeart = (id) => {
    dispatch(changeHeart(id));
    // let list = [...copyHeart];

    // if (copyHeart.includes(id)) {
    //   //넘어온 아이디가 기존 하트 배열에 있으면  기존 하트 삭제
    //   let idx = copyHeart.indexOf(id);
    //   list.splice(idx, 1);
    //   setCopyHeart(list);
    // } else {
    //   //없으면 추가
    //   list.push(id);
    //   setCopyHeart(list);
    // }
  };

  return (
    <>
      {/* 정렬 */}
      {JSON.stringify(myHeart)}
      <Cs_Sort>
        <Box>
          <FormControlLabel
            className="check"
            control={<Checkbox sx={{ padding: 0 }} defaultChecked />}
            label="즐겨찾기"
            size="small"
          />
          <FormControlLabel
            className="check"
            control={<Checkbox sx={{ padding: 0 }} defaultChecked />}
            label="할인가"
            size="small"
          />
        </Box>

        <FormControl
          className="select"
          size="small"
          sx={{ minWidth: 80 }}
          color="common"
        >
          <InputLabel id="select-label">정렬</InputLabel>
          <Select
            labelId="select-label"
            id="simple-select"
            label="정렬"
            value={sort}
            onChange={(e) => onChange(e)}
            sx={{ minWidth: 118 }}
          >
            <MenuItem value={"distance"}>거리순</MenuItem>
            <MenuItem value={"abc"}>가나다순</MenuItem>
          </Select>
        </FormControl>
      </Cs_Sort>

      <List>
        {copyList.map((item, i) => {
          return (
            <ListItem
              key={item.id}
              sx={{ borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <CusBox>
                {/* 즐겨찾기 */}

                <Checkbox
                  className="cus_check"
                  checked={myHeart.includes(item.id)} //즐겨찾기 배열에 있으면 true
                  sx={{
                    "&.Mui-checked": {
                      color: green[500],
                    },
                  }}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite color="green" />}
                  onChange={() => onChageHeart(item.id)}
                />
                {item.할인가 && <Box className="banner">할인가</Box>}
                {`id :${item.id}`}
                <strong>{item.label}</strong>
                <Box className="location">
                  {item.거리}km | {item.주소}
                </Box>
                <Box className="time">{`평일 ${item.평일} | 주말 ${item.주말}`}</Box>
                <Box className="chip_list">
                  {item.옵션.map((option, optionIndex) => {
                    return (
                      <Chip label={option} key={optionIndex} size="small" />
                    );
                  })}
                </Box>
              </CusBox>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
