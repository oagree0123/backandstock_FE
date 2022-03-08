import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BackTestList from '../BackTestList/BackTestList';
import MonthPicker from '../MonthPicker/MonthPicker';
import StockSearch from '../StockSearch/StockSearch';
import { FormBottom, FormInput, FormLeft, FormRight, FormTitle, FormTop, FormWrap, MoneyWrap, Won, BackTextBtn } from './style';

import { actionCreators as testformActions } from '../../redux/modules/testform';
import { actionCreators as portActions } from '../../redux/modules/port';

const BackTestForm = () => {
  const dispatch = useDispatch();
  const date = useSelector(state => state.testform);

  const [init_money, setInitMoney] = useState('');

  return (
    <FormWrap>
      <FormTop>
        <FormLeft>
          <FormTitle>실험 기간</FormTitle>
          <MonthPicker type="start" />
          <MonthPicker type="end" />
        </FormLeft>
        <FormRight>
          <FormTitle>실험 금액</FormTitle>
          <MoneyWrap>
            <FormInput
              type="number"
              placeholder='금액을 입력해 주세요'
              onChange={(e)=> {
                setInitMoney(e.target.value)
                dispatch(testformActions.setMoney(e.target.value));
              }}
              value={init_money}
            />
            <Won>원</Won>
          </MoneyWrap>
        </FormRight>
      </FormTop>
      <FormBottom>
        <StockSearch />
      </FormBottom>
      <BackTestList />
      <BackTextBtn 
        onClick={() => {
          dispatch(portActions.getResultDB());
        }}
      >실험 시작하기</BackTextBtn>
    </FormWrap>
  );
};

export default BackTestForm;