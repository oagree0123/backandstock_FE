import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Toptitle, CardWrap, Text, Wrap } from "./style";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css";
import CommunitySlideCard from "../CommunityTop/CommunitySlideCard";
import Next from "../../assets/images/Next.svg";

const Slide = (props) => {

  // const top_list = useSelector((state) => state.community.top_five_list)

  const { top_list } = props;

  const Title = [
    "KOSPI 수익률 TOP5",
    "KOSDAQ 수익률 TOP5",
    "거래량 TOP5",
    "거래대금 TOP5",
    "거래대금 TOP5",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    // centerPadding: '0px'
  };
  return (
    <Wrap>
      <Slider {...settings}>
        {top_list.map((n, k) => {
          return [...Array(5)].map((a, i) => {
            return (
              <CardWrap>
                {i === 0 ? <Toptitle>{Title[k]}</Toptitle> : null}
                {k > 1 ? null : i === 4 ? (
                  <Text>전월 대비 수익률(%)</Text>
                ) : null}

                <CommunitySlideCard
                  num={i + 1}
                  stock_name={n.stockNames[i]}
                  stock_num={n.stockCodes[i]}
                  kospi_results={n.results[i]}
                  volume_results={top_list[2].results[i]}
                  transaction_results={top_list[3].results[i]}
                  toptitle={Title[k]}
                />
              </CardWrap>
            );
          });
        })}
      </Slider>
    </Wrap>
  );
};

export default Slide;
