import React, { useState } from "react";
import search from "hangul-chosung-search";

import {
  TextField,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const golf = [
  { label: "쇼골프여의도점", value: 1 },
  { label: "쇼골프김포공항점", value: 2 },
  { label: "대성골프클럽", value: 3 },
  { label: "엠스퀘어골프클럽", value: 4 },
  { label: "조광골프연습장", value: 5 },
  { label: "제이제이골프클럽", value: 6 },
  { label: "그랜드골프클럽", value: 7 },
  { label: "abc test ", value: 8 },
];

const onClick = (num) => {
  console.log(num);
};

export default function Search() {
  const [list, setList] = useState(golf);
  const [value, setValue] = useState("");

  let copyList = [...golf];
  const onChange = (event) => {
    setValue(event.target.value);

    copyList = copyList.filter((item, i) => {
      //ChosungSearch.isSearch(e.target.value, e.label)
      return search(item.label, event.target.value);
    });
    setList(copyList);
  };

  return (
    <>
      <Box component="form">
        <TextField
          size="small"
          value={value}
          onChange={(e) => onChange(e)}
        ></TextField>
        <List dense>
          {list.map((e, i) => {
            return (
              <ListItem disablePadding key={e.value} onClick={() => onClick(i)}>
                <ListItemButton>
                  <ListItemText primary={e.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
}
