import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BackTestItem from '../BackTestItem/BackTestItem';

import { ListTitle, TestListWrap, ListWrap, ListTop, TopStockName, TopStockRate, TopStockPrice } from './style';

const BackTestList = (props) => {
  const stock_list = useSelector(state => state.testform.stockList);
  const code_list = useSelector(state => state.testform.codeList);
  const ratio_list = useSelector(state => state.testform.ratioList);

  useEffect(() => {
    console.log(stock_list);
  }, [])

  return (
    <TestListWrap>
      <ListTitle>실험 자산 목록</ListTitle>
      <ListWrap>
        <ListTop>
          <TopStockName>종목명</TopStockName>
          <TopStockRate>자산 비율</TopStockRate>
          <TopStockPrice>실험 금액</TopStockPrice>
        </ListTop>
        {
          stock_list?.map((s, i) => {
            return (
              <BackTestItem 
                key={i}
                stock_name={s}
                stock_code={code_list[i]}
                stock_ratio={ratio_list[i]}
                stock_num={i}
              />
            );
          })
        }
      </ListWrap>
    </TestListWrap>
  );
};

export default BackTestList;