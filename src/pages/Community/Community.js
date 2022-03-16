import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { CommunityWrap, BoxWrap, Box, Container, Modalinner, Close, InputWrap, Input, Btn, Title } from "./style";
import Slide from '../../components/Community/Slide';
import CommunityList from '../../components/Community/CommunityList'
import { actionCreators as communityActions } from '../../redux/modules/community';


const Community = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  // const top_list = useSelector((state) => state.community.list)
  // console.log(top_list);

  useEffect(() =>
    dispatch(communityActions.getTopFiveDB())
  )

  // useEffect(() =>
  //   dispatch(communityActions.getPostDB())
  // )





  let [modalOpen, setModalOpen] = useState(false);
  const [comment_text, setCommentText] = useState();

  const closeModal = () => {
    setModalOpen(false);
  };

  const onChange = (e) => {
    setCommentText(e.target.value);
  };

  // const addcomment = () => {
  //     dispatch(
  //       commentActions.addCommentFB(
  //         userId,
  //         productId,
  //         comment_title,
  //         comment_text,
  //         fileInput.current.files[0]
  //       )
  //     );
  //   };


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