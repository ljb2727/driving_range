import React from "react";
import Hangul from "hangul-js";
import { matchSorter } from "match-sorter";
import { TextField, Box, Autocomplete, Button } from "@mui/material";

import { useSelector } from "react-redux";

export default function Search() {
  const { golfzone } = useSelector((state) => state);

  const filterOptions = (options, { inputValue }) => {
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
          disablePortal
          id="combo-box-demo"
          options={golfzone}
          fullWidth={true}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              label="연습장 검색"
              color="green"
              size="small"
            />
          )}
          noOptionsText="검색된 연습장이 없습니다."
          getOptionLabel={(option) => option.label}
        />
      </Box>
    </>
  );
}
