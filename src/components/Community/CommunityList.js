import React from 'react';
import Slide from './Slide';
import CommunityCard from './CommunityCard';
import { CommmunityListWrap, CommmunityList, } from './style';

const CommunityList = () => {
    return (
        <CommmunityListWrap>

            <CommmunityList>
                <CommunityCard></CommunityCard>
            </CommmunityList>
        </CommmunityListWrap>
    );
};

export default CommunityList;