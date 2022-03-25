import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { LineChartWrap } from "./style";

const LineChart = (props) => {

  const { margin, width, height } = props;

  return (
    <LineChartWrap>
      <ResponsiveLine
        data={props.line_data}
        width={width}
        height={height}
        margin={margin}
        colors={["#0075FF", "#A183F8", "#49DDCB"]}
        keys={["내 자산", "KOSPI", "KOSDAQ"]}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 8,
          tickRotation: 60,
          legendOffset: 36,
          legendPosition: "middle",
          format: (v) => `${v}`,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 14,
          tickRotation: 0,
          legendOffset: -40,
          legendPosition: "middle",
          format: (v) => `${v.toLocaleString("ko-KR")} 만원`,
        }}
        enableGridX={false}
        // enableGridY={false}
        enablePoints={false}
        pointSize={6}
        pointColor="#fff"
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
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
                fontWeight: 400,
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
              fontWeight: 600
            }
          }
        }}
      />
    </LineChartWrap>
  );
};

LineChart.defaultProps = {
  width: 880,
  height: 300,
  margin: {
    top: 32,
    right: 120,
    bottom: 64,
    left: 100
  },
  line_data: [],
}

export default LineChart;
