import React, { useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { BarChartWrap } from "./styles";

const BarChart = (props) => {
  const {
    width,
    height,
    translateX,
    translateY,
    bar_data,
    keys,
    margin,
    tick_font,
    symbol_size,
    legend_fsize,
    legend_space,
    legend_anchor,
  } = props;

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
          format: (v) => `${Math.floor(v)}%`,
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
            },
          },
        ]}
        legends={[
          {
            anchor: legend_anchor,
            direction: "column",
            justify: false,
            translateX: translateX,
            translateY: translateY,
            itemsSpacing: legend_space,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 1,
            itemSize: 10,
            symbolSize: symbol_size,
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
                fontSize: tick_font,
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
              fontFamily: "Noto Sans CJK KR",
              fontSize: legend_fsize,
              fontWeight: 600,
            },
          },
        }}
      />
    </BarChartWrap>
  );
};

BarChart.defaultProps = {
  width: 880,
  height: 350,
  translateX: 120,
  translateY: 38,
  keys: ["내 자산", "KOSPI", "KOSDAQ"],
  margin: {
    top: 33,
    right: 37,
    bottom: 50,
    left: 84,
  },
  tick_font: 12,
  symbol_size: 8,
  legend_fsize: 10,
  legend_space: -8,
  legend_anchor: "bottom-right"
};

export default BarChart;
