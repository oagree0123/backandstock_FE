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

// export const Wrap = styled.div`
//   position: relative ;
//   width: 928px;
//   padding: 0px 0px 70px;

// .slick-next:before {
//     content:none;
// }
//   .slick-next {
//     width: 55px;
//     height: 55px;
//     position: absolute;
//     top: 55%;
//     transform: translate(50%, -50%);
//     background: url("data:image/svg+xml,%3Csvg width='50' height='34' viewBox='0 0 25 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.3065 21.2869C24.7176 20.0888 24.7176 17.9112 23.3065 16.7131L5.44168 1.54507C3.4929 -0.109533 0.500002 1.27551 0.500002 3.83197L0.500003 34.168C0.500003 36.7245 3.4929 38.1095 5.44168 36.4549L23.3065 21.2869Z' fill='%230075FF'/%3E%3C/svg%3E") 50% 50% no-repeat;
//     content: none;
//   }
// `

export default Slide;
