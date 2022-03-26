import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Card,
    Wrap
} from "./style";

const Slide = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerPadding: '0px'
    };

    return (
        <Wrap>
            <Slider {...settings}>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </Slider>
        </Wrap>
    );
};

export default Slide;
