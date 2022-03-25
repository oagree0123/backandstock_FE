import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { PortChartWrap } from "./style";

const PortChart = (props) => {
  const months = props.port_data.months;
  const yieldMoney = props.port_data.monthYieldMoney;
  const kospiYieldMoney = props.port_data.kospiYieldMoney;
  const kosdaqYieldMoney = props.port_data.kosdaqYieldMoney;

  const data = [
    {
      id: "내자산",
      color: "hsl(233, 10%, 10%)",
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

  months.map((m, i) => {
    let my_yield = {
      x: m,
      y: yieldMoney[i],
    };

    let kospi_yield = {
      x: m,
      y: kospiYieldMoney[i],
    };


    let kosdaq_yield = {}

    if(kosdaqYieldMoney[i]) {
      kosdaq_yield = {
        x: m,
        y: kosdaqYieldMoney[i],
      };
    }
    else {
      kosdaq_yield = {
        x: m,
        y: 0,
      };
    }

    data[0].data.push(my_yield);
    data[1].data.push(kospi_yield);
    data[2].data.push(kosdaq_yield);
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
        lineWidth={2}
        colors={["#0075FF", "#A183F8", "#49DDCB"]}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[]}
        isInteractive={false}
        theme={{
          background: "#fff",
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
