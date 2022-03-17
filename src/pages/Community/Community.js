import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { history } from '../../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';

import { CommunityWrap, Text } from "./style";
import { actionCreators as communityActions } from '../../redux/modules/community';
import Map from '../../components/Community/Map'
import { CommunityList, Slide } from '../../components';

const Community = () => {
  const dispatch = useDispatch();

  // console.log(top_list);

  const top_list = useSelector((state) => state.community.top_five_list)
  const community_list = useSelector(state => state.community.list);

  useEffect(() => {
    dispatch(communityActions.getTopFiveDB())
  }, [])

  useEffect(() => {
    dispatch(communityActions.getPostDB());
  }, [])

  return (

    <CommunityWrap>
      {
        top_list &&
        <Slide top_list={top_list} />
      }
      <CommunityList></CommunityList>


    </CommunityWrap>
  );
};

export default Community;