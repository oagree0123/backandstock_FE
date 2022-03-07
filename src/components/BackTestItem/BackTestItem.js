import React from 'react';
import { CloseBtn, StockItemWrap, StockName, StockPrice, StockRate } from './style';

const BackTestItem = (props) => {
  return (
    <StockItemWrap>
      <StockName>1. 한화솔루션(009830)</StockName>
      <StockRate>45%</StockRate>
      <StockPrice>
        450,000원
      </StockPrice>
      <CloseBtn >x</CloseBtn>
    </StockItemWrap>
  );
};

export default BackTestItem;
