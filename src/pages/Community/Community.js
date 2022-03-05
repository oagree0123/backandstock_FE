import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { BoxWrap, Box, Container, Modalinner, Close, InputWrap, Input, Btn } from "./style";

const Community = () => {
  const history = useHistory();

  let [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => history.push("/")}>메인으로 이동</button>
      <h3>포토폴리오</h3>

      <BoxWrap>
        <Box onClick={() => setModalOpen(!modalOpen)}>포토폴리오_1</Box>
        <Box onClick={() => setModalOpen(!modalOpen)}>포토폴리오_2</Box>
        <Box onClick={() => setModalOpen(!modalOpen)}>포토폴리오_3</Box>

        {modalOpen === true ? (
          <Container>
            <Modalinner>
              <Close onClick={closeModal}> X </Close>
              <h1>모달창</h1>
              <InputWrap>
                <Input></Input>
                <Btn>댓글등록</Btn>
              </InputWrap>
            </Modalinner>
          </Container>
        ) : null}
      </BoxWrap>
    </div>
  );
};



export default Community;
