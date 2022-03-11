import React, { useEffect } from "react";
import Line from "../../components/Line";
import { Box, Btn } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ResultChart from "./ResultChart";
import { actionCreators as portActions } from "../../redux/modules/port";

import styled from 'styled-components';

const TestResult = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // window.addEventListener('beforeunload', (event) => {
  //     event.preventDefault();
  //     event.returnValue = '';
  //     window.location.replace("/")
  // })

  const result_list = useSelector((state) => state.port.list);
  console.log(result_list);

  return (
    <ResultWrap>
      <Box></Box>
      {/* <ResultChart result_list={result_list}></ResultChart>
      <Line result_list={result_list}></Line> */}

      {/* <Btn onClick={() => { dispatch(portActions.getPortfolioDB()) }}>저장하기</Btn> */}
      <Btn onClick={() =>{
        dispatch(portActions.savePortDB());
        history.push("/");
      }}>저장하기</Btn>
    </ResultWrap>
  );
};

const ResultWrap = styled.div`
  padding: 44px 0px 56px 56px;
  background-color: var(--secondary-color);
`;

export default TestResult;
