import React from 'react';
import PortChart from '../PortChart/PortChart';
import { PortCardWrap, CardInfoWrap, CardTitle, CardInfo } from './style';

const PortCard = () => {
  return (
    <PortCardWrap>
      <PortChart />
      <CardInfoWrap>
        <CardTitle>자산실험</CardTitle>
        <CardInfo>종목 3개: 삼성전자, 코카콜라</CardInfo>
        <CardInfo>총 수익: 2,918,404.6원</CardInfo>
      </CardInfoWrap>
    </PortCardWrap>
  );
};

export default PortCard;