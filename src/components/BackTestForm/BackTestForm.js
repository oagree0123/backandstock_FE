import React from 'react';
import { useSelector } from 'react-redux';
import MonthPicker from '../MonthPicker/MonthPicker';
import StockSearch from '../StockSearch/StockSearch';

const BackTestForm = () => {
  const date = useSelector(state => state.tesform);
  console.log(date);

  return (
    <>
      <MonthPicker type="start" />
      <MonthPicker type="end" />
      <StockSearch />
      <button>실험 시작하기</button>
    </>
  );
};

export default BackTestForm;