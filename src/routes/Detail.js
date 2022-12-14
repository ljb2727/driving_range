import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Divider, Box, styled } from "@mui/material";
import FullScreenDialog from "components/detail/FullScreenDialog";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

import Drawer from "components/detail/Drawer";

export default function Detail() {
  const [fullDialogShow, setFullDialog] = useState(false);
  const openFullDialog = () => {
    setFullDialog(true);
  };

  const closeFullDialog = () => {
    console.log("closeFullDialog");
    setFullDialog(false);
  };

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
          {target.?????????.map((e, i) => {
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
            <strong>????????????</strong>
          </dt>
          <dd>{target.????????????}</dd>
        </dl>
        <dl>
          <dt>
            <strong>????????????</strong>
          </dt>
          <dd>
            {target.??????} <br /> {target.??????}
          </dd>
        </dl>
        <dl>
          <dt>
            <strong>????????????</strong>
          </dt>
          <dd>{target.????????????}</dd>
        </dl>
        <Divider />
        <dl>
          <dt>
            <strong>????????????</strong>
          </dt>
          <dd>
            <Box className="price_box">
              <strong>?????????</strong>
              <div dangerouslySetInnerHTML={{ __html: target.????????? }}></div>
            </Box>

            <Box className="price_box">
              <strong>
                <strong>XGOLF ?????????</strong>
              </strong>
              <div dangerouslySetInnerHTML={{ __html: target.????????? }}></div>
            </Box>
            <p>??? ??????????????? ????????? ???????????? ????????? ??? ????????????.</p>
          </dd>
        </dl>
        {target.????????????.length !== 0 && (
          <dl>
            <dt>
              <strong>????????????</strong>
            </dt>
            <dd>{target.????????????}</dd>
          </dl>
        )}

        <Divider />
        <dl>
          <dt>
            <strong>????????? ???</strong>
          </dt>
          <dd>{target.??????}</dd>
        </dl>

        <Divider />

        <Box className="btn_box">
          <Drawer target={target} open={openFullDialog} />
        </Box>
      </DetailBox>
      <FullScreenDialog
        target={target}
        show={fullDialogShow}
        open={openFullDialog}
        close={closeFullDialog}
      />
    </>
  );
}
