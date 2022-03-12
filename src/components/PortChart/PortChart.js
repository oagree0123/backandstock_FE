import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { PortChartWrap, Wrap, TextWrap } from "./style";
import test from "../../test/data";

const PortChart = (props) => {
  const styles = {
    width: "206px",
    height: "142px",
  };

  const months = test[0].months;
  const yieldMoney = test[0].yieldMoney;
  const kospiYieldMoney = test[0].kospiYieldMoney;

  const data = [
    {
      id: "yieldMoney",
      color: "hsl(233, 10%, 10%)",
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
      <ResponsiveLine
        data={data}
        /* margin={{ top: 50, bottom: 50, left: 10, right: 30 }} */
        margin={{ top: 28, bottom: 28, left: 32, right: 32 }}
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
        axisBottom={{
          orient: 'bottom',
          tickSize: 0,
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 0,
        }}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        lineWidth="2"
        colors={['#028ee6', '#0075FF', '#A8D1FF']}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[]}
        theme={{
          background: "#ECF5FF",
          axis: {
            domain: {
              line: {
                  stroke: "#A8D1FF",
                  strokeWidth: 2.5
              }
            },
            ticks: {
              text: {
                  fontSize: 0,
                  fill: "#333333"
              }
            }
          }
        }}
      />
    </PortChartWrap>
  );
};

export default PortChart;
