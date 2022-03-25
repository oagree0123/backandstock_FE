import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { LineChartWrap } from "./style";

const LineChart = (props) => {

  const {
    width,
    height,
    translateX,
    translateY, 
    margin,
    tick_font,
    symbol_size,
    legend_fsize,
    legend_space,
    legend_anchor,
  } = props;

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
          format: ((v) => {
            // 개월 처리
            if(v.split("").slice(-1)[0] === "월") {
              // 36 72 108
              if(props.line_data[0].data.length > 108) {
                if(parseInt(v.split("개월")[0]) % 4 === 1) {
                  return v;
                }
                else {
                  return "";
                }
              }
              else if(props.line_data[0].data.length > 72) {
                if(parseInt(v.split("개월")[0]) % 3 === 1) {
                  return v;
                }
                else {
                  return "";
                }               
              }
              else if(props.line_data[0].data.length > 36) {
                if(parseInt(v.split("개월")[0]) % 2 === 1) {
                  return v;
                }
                else {
                  return "";
                }               
              }
              else {
                return v;
              }
            }
            
            // 년 월 처리
            let arr_month = [];
            for(let i=0; i<12; i++) {
              if(props.primary_month + i > 12) {
                arr_month.push((props.primary_month + i) % 12);
              }
              else {
                arr_month.push(props.primary_month + i);
              }
            }
            let idx = arr_month.findIndex(a => {
              return a === parseInt(v.split("-")[1]);
            })

            if(props.line_data[0].data.length > 108) {
              if(idx % 4 === 0) {
                return v;
              }
              else {
                return "";
              }
            }
            else if(props.line_data[0].data.length > 72) {
              if(idx % 3 === 0) {
                return v;
              }
              else {
                return "";
              }               
            }
            else if(props.line_data[0].data.length > 36) {
              if(idx % 2 === 0) {
                return v;
              }
              else {
                return "";
              }               
            }
            else {
              return v;
            }
          }),
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 14,
          tickRotation: 0,
          legendOffset: -40,
          legendPosition: "middle",
          format: (v) => {
            // 비교 그래프
            if(props.compare === "compare") {
              return `${v}%`
            }
            // 결과 그래프
            else {
              return `${v.toLocaleString("ko-KR")} 만원`
            }
          },
        }}
        markers={props.markers}
        enableGridY={false}
        pointSize={0}
        pointColor="#fff"
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
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
              fontSize: legend_fsize,
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
  translateX: 120,
  translateY: 38,
  line_data: [],
  tick_font: 12,
  symbol_size: 8,
  legend_fsize: 10,
  legend_space: -8,
  legend_anchor: "bottom-right"
}

export default LineChart;
