import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { history } from '../../redux/configStore';
import { useDispatch } from 'react-redux';
import { actionCreators as communityActions } from "../../redux/modules/community";

import { CommunityWrap, BoxWrap, Box, Container, Modalinner, Close, InputWrap, Input, Btn } from "./style";
import { useSelector } from 'react-redux';
import { CommunityList } from '../../components';


const Community = () => {
  const dispatch = useDispatch();

  const community_list = useSelector(state => state.community.list);

  useEffect(() => {
    dispatch(communityActions.getPostDB());
  }, [])

  return (
    <CommunityWrap>
      <CommunityList community_list={community_list} />
    </CommunityWrap>
  );
};

export default Community;