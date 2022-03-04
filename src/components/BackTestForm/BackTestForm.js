import React from 'react';
import { useSelector } from 'react-redux';
import BackTestInput from '../BackTestInput/BackTestInput';
import MonthPicker from '../MonthPicker/MonthPicker';

const BackTestForm = () => {
  const date = useSelector(state => state.tesform);
  console.log(date);

  return (
    <>
      <MonthPicker type="start" />
      <MonthPicker type="end" />
      <BackTestInput />
      <button>실험 시작하기</button>
    </>
  );
};

export default BackTestForm;