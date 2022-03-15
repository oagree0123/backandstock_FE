import React, { useState, useEffect } from "react";
import TopInfo from "../../components/Result/TopInfo";
import { DetailWrap, Btn, All, LineChartWrap, BarChartWrap } from './style';

import StockList from "../../components/Result/StockList";
import { LineChart, BarChart } from "../../components";

import { history } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as portActions } from "../../redux/modules/port";

const Detail = () => {
  const dispatch = useDispatch();
  
  const user = useSelector(state => state.user.user_info);
  const result_list = useSelector((state) => state.port.port_one.portBacktestingCal);

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
    <DetailWrap>
      <All>
        <TopInfo port_list={result_list} />
        <LineChartWrap>
          <LineChart 
            margin={{
              top: 32, 
              right: 120, 
              bottom: 64, 
              left: 100
            }}
            line_data={data} 
          />
        </LineChartWrap>
        <BarChartWrap>
          <BarChart 
            width={880}
            height={300}
            margin={{
              top: 32, 
              right: 120, 
              bottom: 64, 
              left: 100
            }}
            translateX={120}
            translateY={38}
            bar_data={bar_data} 
            tick_font={12}
          />
        </BarChartWrap>
        <StockList {...result_list}></StockList>
      </All>
    </DetailWrap>
  );
};

export default Detail;