import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  Paper,
  Stack,
  Typography,
  Divider,
  Grid,
  styled,
} from "@mui/material";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Link,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import Dialog from "components/common/Dialog";
import { openDialog, closeDialog } from "store";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: "0px !important",
  ":not(:first-of-type)": {
    borderTop: `0.5em solid ${theme.palette.gray.light}`,
  },

  "& h1": {
    fontWeight: "bold",
    fontSize: "1rem",
    textAlign: "left",
    padding: theme.spacing(2),
  },
}));

function StyleRadio({ radio }) {
  return (
    <FormControl>
      <RadioGroup defaultValue="0" name="radio-buttons-group">
        {radio.map((radio, index) => (
          <FormControlLabel
            value={index}
            control={<Radio />}
            label={radio.상품명}
            key={index}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default function Pay() {
  const { id = "골프장", floor = "층수", box = "타석" } = useParams();
  const { golfzone } = useSelector((state) => state);

  const current = golfzone[golfzone.findIndex((e) => e.id === id)];

  const dispatch = useDispatch();
  const handleClickOpen = (index) => {
    if (index === 0) {
      let action = {
        title: "개인정보 제3자 제공 동의",
        text: `<div class="new_gray_box" style="display: block;">
							<table>
								<colgroup>
									<col style="width:30%">
									<col style="width:auto">
								</colgroup>
								<tbody><tr>
									<th>개인정보를 제공받는 자</th>
									<td>쇼골프 김포공항점, NHN KCP</td>
								</tr>
								<tr>
									<th>제공받는 자의 이용목적</th>
									<td>
										(골프연습장) 예약 확인 및 안내 <br>
										(NHN KCP) 골프연습장 타석 이용금액 결제
									</td>
								</tr>
								<tr>
									<th>제공하는 개인정보 항목</th>
									<td>
										(골프연습장), 연락처, 타석 예약 정보, 결제 금액 <br>
										(NHN KCP) 이름, 결제금액, 카드사, 카드번호, 이메일
									</td>
								</tr>
								<tr>
									<th>제공정보의 보유 및 이용기간</th>
									<td>
										(골프연습장, NHN KCP) 서비스 제공 및 관계법령에 따른 보존기간
									</td>
								</tr>
								<tr>
									<th>동의를 거부할 권리 및 동의를 거부할 경우의 불이익</th>
									<td>
										귀하는 개인정보 제3자 제공에 거부할 수 있는 권리가 있으며, 거부할 경우 상품서비스 수행이 필수적인 정보제공이 이루어지지 않으므로, 골프연습장 예약 서비스 이용이 불가능함을 알려 드립니다.
									</td>
								</tr>
							</tbody></table>
						</div>`,
      };
      dispatch(openDialog(action));
    } else if (index === 1) {
      let action = {
        title: "예약 규정에 대한 동의",
        text: `<div class="new_gray_box" style="display: block;">
							<ul>
								<li><span class="">임박 취소(예약 시간 15분 내) 및 미내장의 경우 이용 정책에 따른 패널티가 발생 합니다</span></li>
								<li><span class="">연습장 현장 상황에 따라 타석 이용 시작 시간이 변경될 수 있습니다.</span></li>
								<li><span class="">골프연습장별 최초의 정회원 인증이 필요하며, 미인증 시 일일타석 예약만 가능합니다. </span></li>
								<li><span class="">예약 취소 가능 일시를 확인하였으며, 예약 규정사항에 동의 합니다.</span></li>
								<li><span class="">해당 골프연습장 취소 가능 시한 : 2022.10.05(수)&nbsp;19:46까지(이후 취소 불가)</span></li>
								<li><span class="">단, 예약 후 다음 대기자가 있을 경우 예약취소가 불가합니다.</span></li>
							</ul>
						</div>`,
      };
      dispatch(openDialog(action));
    }
  };

  const handleClose = () => {
    dispatch(closeDialog());
  };

  return (
    <>
      <p>{`id :${id}`}</p>
      <p>{`타석 :${box}`}</p>
      <p>{`층수 :${floor}`}</p>
      <Box sx={{ width: "100%" }}>
        <Item>
          <Typography component="h1">예약정보</Typography>
          <dl>
            <dt>연습장</dt>
            <dd>{current.label}</dd>
          </dl>
          <dl>
            <dt>타석번호</dt>
            <dd>{`${floor}층 ${box}번`}</dd>
          </dl>
          <dl>
            <dt>입장시간</dt>
            <dd>ff</dd>
          </dl>
          <dl>
            <dt>잔여시간</dt>
            <dd>282</dd>
          </dl>

          <Typography component="p" color="green" align="left">
            취소 가능기한 2022.10.05(수) 19:46
          </Typography>
          <Typography component="p" color="red" align="left">
            ※ 단, 예약 후 다음 대기자가 있을 경우 예약취소가 불가합니다.
          </Typography>
        </Item>

        <Item>
          <Typography component="h1">상품선택</Typography>
          <StyleRadio radio={current.상품} />
          <Divider />
          <Typography component="h1">할인정보</Typography>
          <Box>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Box>쿠폰</Box>
              </Grid>
              <Grid item>
                <Box>사용</Box>
              </Grid>
            </Grid>
          </Box>
        </Item>

        <Item>
          <Typography component="h1">결제금액</Typography>
          <Grid container justifyContent="space-between">
            <Grid item>1</Grid>
            <Grid item>1</Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid item>1</Grid>
            <Grid item>1</Grid>
          </Grid>
          <Box
            sx={{
              backgroundColor: "gray.light",
              p: 2,
              mt: 2,
              borderRadius: 2,
            }}
          >
            <Grid container justifyContent="space-between">
              <Grid item>
                <strong>최종 결제 금액</strong>
              </Grid>
              <Grid item>
                <strong>0원</strong>
              </Grid>
            </Grid>
          </Box>
        </Item>

        <Item>
          <Typography align="left">
            본인은
            <Link onClick={() => handleClickOpen(0)}>
              개인정보 제3자 제공 동의
            </Link>
            ,
            <Link onClick={() => handleClickOpen(1)}>
              예약 규정에 대한 동의
            </Link>{" "}
            내용을 확인하였으며, 결제 진행에 동의합니다.
          </Typography>
          <Dialog />
        </Item>
      </Box>
    </>
  );
}
