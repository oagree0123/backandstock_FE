import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { PortChartWrap, Wrap, TextWrap } from "./style";
import test from '../../test/data';

const PortChart = (props) => {
  const styles = {
    width: "280px",
    height: "200px",
  };

  const months = test[0].months;
  const yieldMoney = test[0].yieldMoney;
  const kospiYieldMoney = test[0].kospiYieldMoney;

  const data = [
    {
      id: "yieldMoney",
      color: "hsl(233, 70%, 50%)",
      data: [],
    },
    {
      id: "kospiYieldMoney",
      color: "hsl(233, 70%, 50%)",
      data: [],
    },
  ];

  months.map((m, i) => {
    let xy = {
      x: m,
      y: yieldMoney[i],
    };
    data[0].data.push(xy);
  });

  months.map((m, i) => {
    let xy = {
      x: m,
      y: kospiYieldMoney[i],
    };
    data[1].data.push(xy);
  });

  return (
    <PortChartWrap>
      <Wrap>
        <div style={styles}>
          <ResponsiveLine
            data={data}
            margin={{ top: 50, bottom: 50, left: 10, right: 30 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            enableGridX={false}
            enableGridY={false}
            enablePoints={false}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[]}
          />

          <TextWrap>
            <span>포토폴리오 이름</span>
            <span>종목명</span>
            <span>종목 개수</span>
            <span>종목별 비율</span>
            <span>최종 수익률</span>
            <span>초기투자금</span>
            <span>투자기간</span>
          </TextWrap>
        </div>
      </Wrap>
    </PortChartWrap>
  );
};

export default PortChart;
