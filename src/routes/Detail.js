import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Divider, Box } from "@mui/material";

export default function Detail() {
  const { id } = useParams();
  const { golfzone } = useSelector((state) => state);
  let index = golfzone.findIndex((e) => e.id === id);
  console.log(index);
  let target = golfzone[index];
  return (
    <Box>
      <dl>
        <dt>타석정보</dt>
        <dd>{target.타석정보}</dd>
      </dl>
      <dl>
        <dt>영업시간</dt>
        <dd>
          {target.평일} <br /> {target.주말}
        </dd>
      </dl>
      <dl>
        <dt>전화번호</dt>
        <dd>{target.전화번호}</dd>
      </dl>
      <Divider />
      <dl>
        <dt>이용요금</dt>
        <dd>
          <Box>
            <strong>정상가</strong>
            <div dangerouslySetInnerHTML={{ __html: target.정상가 }}></div>
          </Box>
          <br />
          <br />
          <Box>
            <strong>XGOLF 회원가</strong>
            <div dangerouslySetInnerHTML={{ __html: target.회원가 }}></div>
          </Box>
          <p>※ 이용요금은 연습장 사정으로 변동될 수 있습니다.</p>
        </dd>
      </dl>
      <dl>
        <dt>부대시설</dt>
        <dd>{target.부대시설}</dd>
      </dl>
      <Divider />
      <dl>
        <dt>오시는 길</dt>
        <dd>{target.주소}</dd>
      </dl>
    </Box>
  );
}
