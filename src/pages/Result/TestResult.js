import React, { useState, useEffect } from "react";
import ResultLine from "../../components/Chart/ResultLine";
import ResultChart from "../../components/Chart/ResultChart";
import StockList from "../../components/Result/StockList";
import { LineChart, BarChart, TopInfo } from "../../components";

import { history } from "../../redux/configStore";
import { Btn, All, ResultWrap, LineChartWrap, BarChartWrap } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as portActions } from "../../redux/modules/port";
import ResultStockLine from "../../components/Chart/ResultStockLine";

const TestResult = () => {
  const dispatch = useDispatch();
  
  const is_login = useSelector(state => state.user.is_login);
  const user = useSelector(state => state.user.user_info);
  const result_list = useSelector((state) => state.port.list);

  const click_save = () => {
    dispatch(portActions.savePortDB());
    history.push("/mypage");
  };

  useEffect(() => {
    if (!result_list) {
      history.replace('/')
    }
  }, [])

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

  useEffect(() => {
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault(); 
    });

    return () => {
      window.removeEventListener('beforeunload', (event) => {
        event.preventDefault(); 
      });
    }
  },[])

  return (
    <ResultWrap>
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
        {is_login ?
          <Btn onClick={click_save}>실험 결과 저장하기</Btn> :
          <Btn onClick={click_save} disabled>실험 결과 저장하기</Btn>
        }
      </All>
    </ResultWrap>
  );
};

export default TestResult;
