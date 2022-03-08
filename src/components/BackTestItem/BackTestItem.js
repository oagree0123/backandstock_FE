import React from 'react';
import { useSelector } from 'react-redux';
import { CloseBtn, StockItemWrap, StockName, StockPrice, StockRate } from './style';

const BackTestItem = (props) => {
  const init_money = useSelector(state => state.testform.init_money);

  return (
    <StockItemWrap>
      <StockName>{props.stock_num + 1 }. {props.stock_name}</StockName>
      <StockRate>{props.stock_ratio}%</StockRate>
      <StockPrice>
        {Math.floor(init_money / 100 * props.stock_ratio)} 원
      </StockPrice>
      <CloseBtn >x</CloseBtn>
    </StockItemWrap>
  );
};

export default BackTestItem;
