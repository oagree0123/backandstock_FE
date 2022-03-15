import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CloseBtn, StockItemWrap, StockName, StockPrice, StockRate } from './style';
import { actionCreators as testformActions } from '../../redux/modules/testform';

const BackTestItem = (props) => {
  const dispatch = useDispatch();
  const init_money = useSelector(state => state.testform.init_money);

  const delStock = () => {
    dispatch(testformActions.deleteStock(props.stock_num))
  }

  return (
    <StockItemWrap>
      <StockName>{props.stock_num + 1 }. {props.stock_name} {props.stock_code}</StockName>
      <StockRate>{props.stock_ratio}%</StockRate>
      <StockPrice>
        {Math.floor(init_money / 100 * props.stock_ratio)} 만원
      </StockPrice>
      <CloseBtn onClick={delStock}>x</CloseBtn>
    </StockItemWrap>
  );
};

export default BackTestItem;
