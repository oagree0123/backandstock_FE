import React from 'react';
import { useSelector } from 'react-redux';
import { Toptitle } from './style'
import CommunitySlideCard from '../CommunityTop/CommunitySlideCard'
import Slide from '../CommunitySlide/Slide';


const Map = (props) => {

    // const top_list = useSelector((state) => state.community.top_five_list)
    // const num = top_list[0].stockNames

    const { top_list } = props;


    return (

        <div>
            <Slide
                top_list={top_list}

            ></Slide>

        </div>






    );
};

export default Map;