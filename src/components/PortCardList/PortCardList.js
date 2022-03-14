import React from 'react';
import { useSelector } from 'react-redux';
import PortCard from '../PortCard/PortCard';
import { PortCardListWrap, ChartWrap, CompareBtn } from './style';

const PortCardList = (props) => {
  const port_list = useSelector(state => state.port)

  return (
    <PortCardListWrap>
      <ChartWrap>
        {[...Array(3)].map((a, i) => {
          return <PortCard key={i} num={i}/>
        })}
      </ChartWrap>
      <CompareBtn>비교하기</CompareBtn>
    </PortCardListWrap>
  );
};

export default PortCardList;