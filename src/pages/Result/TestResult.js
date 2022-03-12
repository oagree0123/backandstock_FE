import React from 'react';
import TopInfo from '../../components/Result/TopInfo'
import ResultLine from '../../components/Chart/ResultLine'
import ResultChart from '../../components/Chart/ResultChart';
import StockList from '../../components/Result/StockList'

import { Btn, All } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as portActions } from '../../redux/modules/port'
import { useHistory } from 'react-router-dom';
import ResultStockLine from '../../components/Chart/ResultStockLine';

// import { Container } from '@nivo/core';

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

    return (
        <All>
            <TopInfo></TopInfo>
            <span>수익률</span>
            <ResultChart></ResultChart>
            <span>수익금</span>
            <ResultLine></ResultLine>

            <StockList {...result_list}></StockList>

            <ResultStockLine></ResultStockLine>

            {/* <Btn onClick={() => { dispatch(portActions.getPortfolioDB()) }}>저장하기</Btn> */}
            <Btn onClick={() => history.push('/mypage')}>저장하기</Btn>
        </All>
    );
};

const ResultWrap = styled.div`
  padding: 44px 0px 56px 56px;
  background-color: var(--secondary-color);
`;

export default TestResult;
