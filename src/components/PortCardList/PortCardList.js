import React from 'react';
import { useSelector } from 'react-redux';
import PortCard from '../PortCard/PortCard';
import { PortCardListWrap, ChartWrap } from './style';

const PortCardList = (props) => {
  const port_list = useSelector(state => state.port)

  return (
    <PortCardListWrap>
      <ChartWrap>
        <PortCard />
        <PortCard />
        <PortCard />
      </ChartWrap>
    </PortCardListWrap>
  );
};

export default PortCardList;