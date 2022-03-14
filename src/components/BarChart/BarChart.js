import React, { useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { BarChartWrap } from "./styles";

const BarChart = (props) => {
  const { width, height, translateX, translateY, bar_data, keys, margin, port_list } = props;

  /* const months = [];
  const keys = [];
  const bar_data = [];

  useEffect(() => {
    port_list[0].portBacktestingCal.months.map(m => {
      months.push(m);
    })

    port_list.map((p, i) => {
      keys.push(`자산 실험 ${i + 1}`)
    });
  
    months.map((m, i) => {
      let _data = {};
  
      _data = { months: m };
      port_list.map((d, j) => {
        let key = `자산 실험 ${j + 1}`;
        let value = d.portBacktestingCal.monthYield[i];
        _data[key] = value;
      });
      bar_data.push(_data);
    });
  }, []) */


  return (
    <BarChartWrap>
      <ResponsiveBar
        groupMode="grouped"
        data={bar_data}
        keys={keys}
        indexBy="months"
        colors={["#0075FF", "#A183F8", "#49DDCB"]}
        width={width}
        height={height}
        minValue="auto"
        maxValue="auto"
        axisTop={null}
        axisRight={null}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 16,
          tickRotation: 0,
          legendOffset: -40,
          legendPosition: "middle",
          format: (v) => `${Math.abs(v)}%`
        }}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 14,
          tickRotation: 60,
          legendOffset: 36,
          legendPosition: "middle",
        }}
        padding={0.1}
        margin={margin}
        enableGridX={true}
        enableGridY={false}
        pointSize={20}
        pointColor={{ theme: "background" }}
        enableLabel={false}
        useMesh={true}
        markers={[
          {
            axis: "y",
            value: 0,
            lineStyle: { 
              stroke: "rgba(58, 149, 255, 1)", 
              strokeWidth: 1,
            }
          }
        ]}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 38,
            itemsSpacing: -8,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 1,
            itemSize: 10,
            symbolSize: 8,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, 1)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "#A8D1FF",
                strokeWidth: 2.5,
              },
            },
            ticks: {
              text: {
                fontFamily: "Noto Sans CJK KR",
                fontSize: 12,
                fontWeight: 600,
                fill: "#000",
              },
              line: {
                strokeWidth: 0,
              },
            },
          },
          legends: {
            text: {
              fontSize: 10,
              fontWeight: 600,
            }
          }
        }}
      />
    </BarChartWrap>
  );
};

BarChart.defaultProps = {
  width: 880,
  height: 350,
  translateX: 24,
  translateY: -240,
  keys: [
    "내 자산",
    "KOSPI",
    "KOSDAQ",
  ],
  margin: {
    top: 33,
    right: 37,
    bottom: 50,
    left: 84,
  },
};

export default BarChart;
