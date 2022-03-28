import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css";
import bug from "../../assets/images/banner_bug.svg"
import survey from "../../assets/images/banner_survey.svg"
import ranking from "../../assets/images/banner_ranking.svg"
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
    };

    return (
        <Wrap>
            <Slider {...settings}>
                <Card src={bug}></Card>
                <Card src={survey}></Card>
                <Card src={ranking}></Card>
            </Slider>
        </Wrap>
    );
};

export default Slide;
