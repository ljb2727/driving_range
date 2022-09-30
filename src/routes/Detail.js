import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Divider, Box, styled, Button, Skeleton } from "@mui/material";
import FullScreenDialog from "components/detail/FullScreenDialog";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

import Drawer from "components/detail/Drawer";

export default function Detail() {
  const { id } = useParams();
  const { golfzone } = useSelector((state) => state);
  let index = golfzone.findIndex((e) => e.id === id);
  let target = golfzone[index];

  const DetailBox = styled(Box)`
    & * {
      margin: 0;
      padding: 0;
    }
    & .price_box:not(:first-of-type) {
      margin-top: 10px;
    }
    & dl {
      display: flex;
      text-align: left;
      margin: 1rem;
    }
    & dt {
      flex-shrink: 0;
      flex-basis: 6em;
      font-weight: bold;

      & strong {
        position: relative;
        padding-left: 0.5em;
      }
      & strong:after {
        position: absolute;
        content: " ";
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 0.2em;
        height: 0.2em;
        background: #000;
        border-radius: 100%;
        overflow: hidden;
      }
    }
    & dd {
      flex-grow: 1;
    }
    & .mySwiper {
      & img {
        width: 100%;
        height: 62vw;
      }
    }
    & .btn_box {
      margin: 1rem;
    }
  `;

  return (
    <>
      <DetailBox>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          onImagesReady={() => {
            console.log("ready");
          }}
        >
          {target.이미지.map((e, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={e} alt={i} className="swiper-lazy" />
                <div className="swiper-lazy-preloader"></div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <dl>
          <dt>
            <strong>타석정보</strong>
          </dt>
          <dd>{target.타석정보}</dd>
        </dl>
        <dl>
          <dt>
            <strong>영업시간</strong>
          </dt>
          <dd>
            {target.평일} <br /> {target.주말}
          </dd>
        </dl>
        <dl>
          <dt>
            <strong>전화번호</strong>
          </dt>
          <dd>{target.전화번호}</dd>
        </dl>
        <Divider />
        <dl>
          <dt>
            <strong>이용요금</strong>
          </dt>
          <dd>
            <Box className="price_box">
              <strong>정상가</strong>
              <div dangerouslySetInnerHTML={{ __html: target.정상가 }}></div>
            </Box>

            <Box className="price_box">
              <strong>
                <strong>XGOLF 회원가</strong>
              </strong>
              <div dangerouslySetInnerHTML={{ __html: target.회원가 }}></div>
            </Box>
            <p>※ 이용요금은 연습장 사정으로 변동될 수 있습니다.</p>
          </dd>
        </dl>
        {target.부대시설.length !== 0 && (
          <dl>
            <dt>
              <strong>부대시설</strong>
            </dt>
            <dd>{target.부대시설}</dd>
          </dl>
        )}

        <Divider />
        <dl>
          <dt>
            <strong>오시는 길</strong>
          </dt>
          <dd>{target.주소}</dd>
        </dl>

        <Divider />

        <Box className="btn_box">
          <Drawer target={target} />
        </Box>
      </DetailBox>
      <FullScreenDialog />
    </>
  );
}
