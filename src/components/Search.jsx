import React, { useState } from "react";
import search from "hangul-chosung-search";

import {
  TextField,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  InputAdornment,
  Button,
} from "@mui/material";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

import Alert from "components/Alert";
import Snackbar from "components/Snackbar";
import { useSelector, useDispatch } from "react-redux";
import { changeInput } from "store/golfzone";

export default function Search() {
  const { golfzone } = useSelector((state) => state);
  const dispatch = useDispatch();

  let copyList = [...golfzone];
  const [list, setList] = useState(copyList); //복사된 골프장 리스트
  const [value, setValue] = useState(""); //검색창 벨류
  const [snack, setSnack] = useState(false);

  /* 
  인풋창에 검색된 초성이 있는 값만 리스트에 리턴 한다
  */
  const onChangeInput = (event) => {
    setValue(event.target.value);
    copyList = copyList.filter((item, i) => {
      return search(item.label, event.target.value);
    });
    setList(copyList);
  };

  /*
  골프장 리스트중 직접 누른것은 인풋벨류에 저장하고 
  리스트는 리셋하여 안보이게 함
  */
  const onList = (label) => {
    setValue(label); //인풋창에 현재값 입력
    setList([]); //리스트 삭제
  };

  //검색버튼
  const onSearch = (event) => {
    console.log("검색버튼");

    setSnack(false);
    setTimeout(() => {
      setSnack(true);
    }, 10);
  };

  return (
    <>
      <Box
        component="form"
        sx={{ m: 2 }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField
          size="small"
          value={value}
          fullWidth
          InputProps={{
            endAdornment: (
              <>
                {value ? (
                  <InputAdornment
                    position="end"
                    onClick={() => {
                      setList(copyList);
                      setValue("");
                    }}
                  >
                    <HighlightOffRoundedIcon />
                  </InputAdornment>
                ) : null}
              </>
            ),
          }}
          onChange={(e) => onChangeInput(e)}
        ></TextField>
        <Button
          variant="contained"
          disableElevation
          fullWidth
          color="green"
          size="large"
          sx={{ mt: 1 }}
          onClick={() => onSearch()}
        >
          search
        </Button>
        <List dense>
          {list.map((e, i) => {
            return (
              <ListItem
                disablePadding
                key={e.value}
                onClick={() => onList(e.label)}
              >
                <ListItemButton>
                  <ListItemText primary={e.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
      {snack && <Snackbar text="입력한 골프장이 없습니다." />}
    </>
  );
}
