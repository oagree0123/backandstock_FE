import React from 'react';
import { MyPortWrap, Port, PortfolioWrap, PortChartWrap } from './style';

const Portfolio = (props) => {
  return (
    <PortfolioWrap>
      <MyPortWrap>
        <Port />
        <Port />
        <Port />
      </MyPortWrap>
      <PortChartWrap>

      </PortChartWrap>
    </PortfolioWrap>
  );
};

export default Portfolio;