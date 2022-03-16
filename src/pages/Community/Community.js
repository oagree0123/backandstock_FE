import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { history } from '../../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';

import { CommunityWrap, BoxWrap, Box, Container, Modalinner, Close, InputWrap, Input, Btn, Title } from "./style";
import { actionCreators as communityActions } from '../../redux/modules/community';

import { CommunityList, Slide } from '../../components';

const Community = () => {
  const dispatch = useDispatch();

  // const top_list = useSelector((state) => state.community.list)
  // console.log(top_list);

  const community_list = useSelector(state => state.community.list);
  
  useEffect(() => {
    dispatch(communityActions.getTopFiveDB())
  }, [])

  useEffect(() => {
    dispatch(communityActions.getPostDB());
  }, [])

  return (
    <CommunityWrap>
      <Title>
        포토폴리오 자랑하고<br />
        사람들과 소통해보세요!
      </Title>
      <Slide></Slide>
      <CommunityList></CommunityList>

      {/* 
      <BoxWrap>
        <Box onClick={() => setModalOpen(!modalOpen)}>포토폴리오_1</Box>
        <Box onClick={() => setModalOpen(!modalOpen)}>포토폴리오_2</Box>
        <Box onClick={() => setModalOpen(!modalOpen)}>포토폴리오_3</Box>

        {
          modalOpen === true
            ? <Container>
              <Modalinner>
                <Close onClick={closeModal}> X </Close>
                <h1>모달창</h1>
                <InputWrap>
                  <Input onChange={onChange}></Input>
                  <Btn>댓글등록</Btn>
                </InputWrap>

              </Modalinner>
            </Container>
            : null
        }
      </BoxWrap> */}
    </CommunityWrap>
  );
};

export default Community;