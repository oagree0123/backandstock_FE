import React, { useState, useEffect } from "react";
import TopInfo from "../../components/Result/TopInfo";
import ResultLine from "../../components/Chart/ResultLine";
import ResultChart from "../../components/Chart/ResultChart";
import StockList from "../../components/Result/StockList";

import { history } from "../../redux/configStore";
import { Btn, All, ResultWrap, LineChartWrap, BarChartWrap } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as portActions } from "../../redux/modules/port";
import ResultStockLine from "../../components/Chart/ResultStockLine";
import LineChart from "../../components/LineChart/LineChart";
import BarChart from "../../components/BarChart/BarChart";

const TestResult = () => {
  const dispatch = useDispatch();
  
  const [chart_min, setChartMin] = useState(0);
  
  const result_list = useSelector((state) => state.port.list);
  
  const click_save = () => {
    dispatch(portActions.savePortDB());
    history.push("/");
  };

  useEffect(() => {
    if(!result_list) {
      history.replace('/')
    }
  }, [])
  
  // 수익금
  const months = result_list.months;
  const monthYieldMoney = result_list.monthYieldMoney;
  const kospiYieldMoney = result_list.kospiYieldMoney;
  const kosdaqYieldMoney = result_list.kosdaqYieldMoney;
  const Worst_money = Math.floor(result_list.worstMoney);

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
      y: parseInt(m),
    };
    data[0].data.push(xy);
  });

  kospiYieldMoney.map((m, i) => {
    let xy = {
      x: months[i].substring(2),
      y: parseInt(m),
    };
    data[1].data.push(xy);
  });

  kosdaqYieldMoney.map((m, i) => {
    let xy = {
      x: months[i].substring(2),
      y: parseInt(m),
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

  useEffect(() => {
    let _worst = String(Worst_money).split("");
    _worst = _worst.map((v, i) => {
      return i !== 0 ? (v = 0) : v;
    });
    _worst = _worst.join("");
    setChartMin(_worst);
  }, [chart_min, Worst_money]);

  return (
    <ResultWrap>
      <All>
        <TopInfo></TopInfo>
        <LineChartWrap>
          <LineChart line_data={data} />
        </LineChartWrap>
        <BarChartWrap>
          <BarChart 
            width={880}
            height={300}
            margin={{
              top: 32, 
              right: 130, 
              bottom: 64, 
              left: 112
            }}
            translateX={120}
            translateY={38}
            bar_data={bar_data} 
          />
        </BarChartWrap>
        {/* <span>수익률</span>
        <ResultChart></ResultChart>
        <span>수익금</span>
        <ResultLine></ResultLine>

        
        <ResultStockLine></ResultStockLine>*/}
        <StockList {...result_list}></StockList>
        <Btn onClick={click_save}>저장하기</Btn> 
      </All>
    </ResultWrap>
  );
};

export default TestResult;
