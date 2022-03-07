import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BackTestList from '../BackTestList/BackTestList';
import MonthPicker from '../MonthPicker/MonthPicker';
import StockSearch from '../StockSearch/StockSearch';
import { FormBottom, FormInput, FormLeft, FormRight, FormTitle, FormTop, FormWrap } from './style';

const BackTestForm = () => {
  const date = useSelector(state => state.testform);

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
          <FormInput
            type="number"
            placeholder='금액을 입력해 주세요'
          />
        </FormRight>
      </FormTop>
      <FormBottom>
        <StockSearch />
      </FormBottom>
      <BackTestList />
    </FormWrap>
  );
};

export default BackTestForm;