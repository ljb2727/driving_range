import React, { useState } from "react";

import Hangul from "hangul-js";
import { matchSorter } from "match-sorter";

import { TextField, Box, Autocomplete } from "@mui/material";

import Snackbar from "components/common/Snackbar";
import { useSelector } from "react-redux";

export default function Search() {
  const { golfzone } = useSelector((state) => state);

  const [snack, setSnack] = useState(false); //스낵 노출

  const filterOptions = (options, { inputValue }) => {
    //console.log(Hangul.disassemble(inputValue));
    console.log({ inputValue });
    return matchSorter(options, Hangul.disassemble(inputValue).join(""), {
      keys: ["초성"],
    });
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
        <Autocomplete
          onChange={(event, newValue) => {
            console.log(newValue);
          }}
          disablePortal
          id="combo-box-demo"
          options={golfzone}
          fullWidth={true}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField {...params} label="연습장 검색" />
          )}
          noOptionsText="검색된 연습장이 없습니다."
        />
      </Box>
      {snack && <Snackbar text="입력한 골프장이 없습니다." />}
    </>
  );
}
