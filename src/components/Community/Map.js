import React from 'react';
import Slide from '../CommunitySlide/Slide';

const Map = (props) => {

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