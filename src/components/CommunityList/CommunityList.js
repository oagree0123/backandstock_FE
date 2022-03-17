import React from 'react';
import Slide from '../CommunitySlide/Slide';
import CommunityCard from '../CommunityCard/CommunityCard';
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