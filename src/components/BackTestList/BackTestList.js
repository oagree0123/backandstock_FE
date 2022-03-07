import React from 'react';
import BackTestItem from '../BackTestItem/BackTestItem';

import { ListTitle, TestListWrap, ListWrap, ListTop, TopStockName, TopStockRate, TopStockPrice } from './style';

const BackTestList = (props) => {
  return (
    <TestListWrap>
      <ListTitle>실험 자산 목록</ListTitle>
      <ListWrap>
        <ListTop>
          <TopStockName>종목명</TopStockName>
          <TopStockRate>자산 비율</TopStockRate>
          <TopStockPrice>실험 금액</TopStockPrice>
        </ListTop>
        <BackTestItem />

      </ListWrap>
    </TestListWrap>
  );
};

export default BackTestList;