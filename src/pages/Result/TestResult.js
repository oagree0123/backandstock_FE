import React from "react";
import TopInfo from "../../components/Result/TopInfo";
import ResultLine from "../../components/Chart/ResultLine";
import ResultChart from "../../components/Chart/ResultChart";
import StockList from "../../components/Result/StockList";

import { history } from '../../redux/configStore';
import { Btn, All, ResultWrap } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as portActions } from "../../redux/modules/port";
import ResultStockLine from "../../components/Chart/ResultStockLine";

import test from '../../assets/images/page_result/arrow_down.svg'

const TestResult = () => {
  const dispatch = useDispatch();

  // window.addEventListener('beforeunload', (event) => {
  //     event.preventDefault();
  //     event.returnValue = '';
  //     window.location.replace("/")
  // })

  const result_list = useSelector((state) => state.port.list);

  const click_save = () => {
    dispatch(portActions.savePortDB());
    history.push("/")
  }

  return (
    <ResultWrap>
      <All>
        <TopInfo></TopInfo>
        <span>수익률</span>
        <ResultChart></ResultChart>
        <span>수익금</span>
        <ResultLine></ResultLine>

        <StockList {...result_list}></StockList>

        <ResultStockLine></ResultStockLine>

        <Btn onClick={click_save}>저장하기</Btn>
      </All>
    </ResultWrap>
  );
};

export default TestResult;
