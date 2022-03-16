import React from 'react';
import CommunityItem from '../CommunityItem/CommunityItem';
import { CommunityListWrap } from './style';

const CommunityList = (props) => {

  const { community_list } = props;

  return (
    <CommunityListWrap>
      {
        community_list.map((c, i) => {
          return <CommunityItem key={i} {...c} />
        })
      } 
    </CommunityListWrap>
  );
};

export default CommunityList;