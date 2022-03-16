import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Box, Wrap, Toptitle } from "./style"
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css";
import CommunityTop from "./CommunityTop";

const Slide = () => {
    const top_list = useSelector((state) => state.community.list)
    console.log(top_list);
    // const num = top_list[0].stockNames

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerPadding: '0px'
    };
    return (
        <Wrap>
            <Toptitle>KOSPI 수익률 TOP5</Toptitle>
            <Slider {...settings}>
                {(top_list?.map((a, i) => {
                    return (
                        <CommunityTop
                            key={i}
                            stock_num={i + 1}
                            stock_name={a.option[i]}
                            stock_codes={a.closes[i]}
                            stock_ratio={a.results[i]}
                        />
                    )
                }))}
            </Slider>

        </Wrap>
    );
}



export default Slide