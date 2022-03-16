import React from 'react';
import { Toptitle, Box } from './style';
import { useSelector } from 'react-redux';
import Community from '../../pages/Community/Community';

const CommunityTop = (props) => {



    return (
        <>
            <Box>
                <span>{props.stock_num}</span>
            </Box>
        </>



    );
};



export default CommunityTop;