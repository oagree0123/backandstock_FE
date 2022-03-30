import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css";
import bug from "../../assets/images/banner_bug.svg";
import survey from "../../assets/images/banner_survey.svg";
import ranking from "../../assets/images/banner_ranking.svg";
import { Card, CardLink, Wrap } from "./style";

const Slide = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
		autoplaySpeed : 5000,
  };

  return (
    <Wrap>
      <Slider {...settings}>
        <CardLink target='_blank' href="https://docs.google.com/forms/d/1UbMnKzM9fC6Wp_tuzpZ5_IdqC4o5zfuzdIOcnDqzIK8/viewform?edit_requested=true">
          <Card src={bug} />
        </CardLink>

        <CardLink target='_blank' href="https://docs.google.com/forms/d/1AM411fsh0aGXFYL3JygTiYlmO2z766eGEEVwk23ABlI/viewform?edit_requested=true">
          <Card src={survey} />
        </CardLink>

        <CardLink target='_blank' href="https://docs.google.com/forms/d/1p6y0AgdW80phMLgN9vfQ_hWu2IIxJQ_vIX9yQQtpcJU/viewform?edit_requested=true">
          <Card src={ranking} />
        </CardLink>
      </Slider>
    </Wrap>
  );
};

export default Slide;
