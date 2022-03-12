import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components'
// import Chart from '../test/Chart';
// import Bar from '../test/Bar'
import { useDispatch } from 'react-redux';

import { CommunityWrap, BoxWrap, Box, Container, Modalinner, Close, InputWrap, Input, Btn } from "./style";


const Community = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();


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
      <button onClick={() => history.push("/")}>메인으로 이동</button>
      <h3>포토폴리오</h3>

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
      </BoxWrap>
    </CommunityWrap>
  );
};

export default Community;