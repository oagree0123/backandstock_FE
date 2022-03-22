import React from 'react';
import { All, LineChartWrap, BarChartWrap, DetailTitle } from './style';
import BarChart from '../BarChart/BarChart';
import LineChart from '../LineChart/LineChart';
import TopInfo from '../Result/TopInfo';
import StockList from '../Result/StockList';

const DetailResult = (props) => {

  const { result_list } = props;
  
  // 수익금
  const months = result_list.months;
  const monthYieldMoney = result_list.monthYieldMoney;
  const kospiYieldMoney = result_list.kospiYieldMoney;
  const kosdaqYieldMoney = result_list.kosdaqYieldMoney;

  // 수익률
  const monthYield = result_list.monthYield
  const kospiYield = result_list.kospiYield
  const kosdaqYield = result_list.kosdaqYield

  const data = [
    {
      id: "내 자산",
      color: "hsl(233, 70%, 50%)",
      data: [],
    },
    {
      id: "KOSPI",
      color: "hsl(233, 70%, 50%)",
      data: [],
    },
    {
      id: "KOSDAQ",
      color: "hsl(233, 70%, 50%)",
      data: [],
    },
  ];

  const bar_data = [];

  // 수익금 데이터
  monthYieldMoney.map((m, i) => {
    let xy = {
      x: months[i].substring(2),
      y: parseInt(m / 10000),
    };
    data[0].data.push(xy);
  });

  kospiYieldMoney.map((m, i) => {
    let xy = {
      x: months[i].substring(2),
      y: parseInt(m / 10000),
    };
    data[1].data.push(xy);
  });

  kosdaqYieldMoney.map((m, i) => {
    let xy = {
      x: months[i].substring(2),
      y: parseInt(m / 10000),
    };
    data[2].data.push(xy);
  });

  // 수익률 데이터
  monthYield.map((m, i) => {
    let xy = {
        months: months[i].substring(2),
        "내 자산": Math.floor(monthYield[i]),
        "KOSPI": Math.floor(kospiYield[i]),
        "KOSDAQ": Math.floor(kosdaqYield[i]),
    }
    bar_data.push(xy);
  })

  return (
    <>
      <All>
        <TopInfo 
          type={props.type}
          port_list={result_list} 
        />
        <DetailTitle>월별 자산</DetailTitle>
        <LineChartWrap>
          <LineChart 
            margin={{
              top: 32, 
              right: 120, 
              bottom: 64, 
              left: 110
            }}
            line_data={data} 
          />
        </LineChartWrap>
        <DetailTitle>전월 대비 수익률</DetailTitle>
        <BarChartWrap>
          <BarChart 
            width={880}
            height={300}
            margin={{
              top: 32, 
              right: 120, 
              bottom: 64, 
              left: 110
            }}
            translateX={120}
            translateY={38}
            bar_data={bar_data} 
            tick_font={12}
          />
        </BarChartWrap>
        <DetailTitle>종목별 수익금</DetailTitle>
        {
          props.type === "test" ?
          <StockList 
            {...result_list}
          ></StockList> :
          <StockList 
            type="detail"
            stock_ratio={props.stock_ratio} 
            {...result_list}
          ></StockList> 
        }
      </All>
    </>
  );
};

export default DetailResult;