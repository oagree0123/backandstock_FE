import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { All, LineChartWrap, BarChartWrap, DetailTitle } from './style';
import BarChart from '../BarChart/BarChart';
import LineChart from '../LineChart/LineChart';
import TopInfo from '../Result/TopInfo';
import StockList from '../Result/StockList';

const DetailResult = (props) => {

  const { result_list } = props;

  const start_date = dayjs(result_list.startDate);
  const end_date = dayjs(result_list.endDate);

  const diff_date = end_date.diff(start_date, "month");

  // 수익금
  const months = result_list.months;
  const monthYieldMoney = result_list.monthYieldMoney;
  const kospiYieldMoney = result_list.kospiYieldMoney;
  const kosdaqYieldMoney = result_list.kosdaqYieldMoney;

  // 수익률
  // 월
  const monthYield = result_list.monthYield;
  const kospiYield = result_list.kospiYield;
  const kosdaqYield = result_list.kosdaqYield;
  
  // 년
  const years = result_list.years;
  const yearYield = result_list.yearYield;
  const kospiYearYield = result_list.kospiYearYield;
  const kosdaqYearYield = result_list.kosdaqYearYield;

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
    let month = {
      //x: `${months[i].substring(2)}&${i}`,
      x: `${months[i].substring(2)}`,
      y: parseInt(m / 10000),
    };
    data[0].data.push(month);

    let kospi = {
      x: `${months[i].substring(2)}`,
      y: parseInt(kospiYieldMoney[i] / 10000),
    };
    data[1].data.push(kospi);

    if(kosdaqYieldMoney[i]) {
      let kosdaq = {
        x: `${months[i].substring(2)}`,
        y: parseInt(kosdaqYieldMoney[i] / 10000),
      };
      data[2].data.push(kosdaq);
    }
    else {
      let kosdaq = {
        x: `${months[i].substring(2)}`,
        y: 0,
      };
      data[2].data.push(kosdaq);
    }
  });

  if(diff_date < 38) {
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
  }
  else {
    yearYield.map((m, i) => {
      let xy = {
        years: years[i],
        "내 자산": Math.floor(yearYield[i]),
        "KOSPI": Math.floor(kospiYearYield[i]),
        "KOSDAQ": Math.floor(kosdaqYearYield[i]),
      }
      bar_data.push(xy);
    })
  }

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
            primary_month={parseInt(months[0].substring(2).split("-")[1])}
          />
        </LineChartWrap>

        { diff_date < 38 ? 
          <>
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
                indexBy="months"
              />
            </BarChartWrap>
          </>:
          <>
            <DetailTitle>전년 대비 수익률</DetailTitle>
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
                indexBy="years"
              />
            </BarChartWrap>
          </>
        }
        <DetailTitle>종목별 수익금</DetailTitle>
        {
          props.type === "test" ?
            <StockList
              result_list={result_list}
            ></StockList> :
            <StockList
              type="detail"
              ratio_list={props.stock_ratio}
              result_list={result_list}
            ></StockList>
        }
      </All>
    </>
  );
};

export default DetailResult;