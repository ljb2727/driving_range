import React from "react";
import { useSelector } from "react-redux";
import { Box, List, ListItem, Stack, styled, Chip } from "@mui/material";

const CusBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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

export default function ResultList() {
  const golfzone = useSelector((state) => state.golfzone);

  return (
    <>
      <List>
        {golfzone.map((item, i) => {
          return (
            <ListItem key={item.value}>
              <CusBox>
                {item.할인가 && <Box className="banner">할인가</Box>}
                <strong>{item.label}</strong>
                <Box className="location">{item.주소}</Box>
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
