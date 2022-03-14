import React from 'react';
import { Bar } from "@nivo/bar";
import { BarChartWrap } from './styles';
import { data } from './data';

const BarChart = (props) => {

  const { width, height } = props

  const months = data[0].portBacktestingCal.months;
  const keys = ["포트1", "포트2"];
  const bar_data = [
    /* {
      "months": "2021-01",
      "포트1": 30,
      "포트2": 50,
    },
    {
      "months": "2021-02",
      "포트1": 70,
      "포트2": 20,
    },
    {
      "months": "2021-03",
      "포트1": 100,
      "포트2": -80,
    } */
  ]

  months.map((m, i) => {
    let _data = {

    };
  
    _data = {months: m}
    data.map((d, j) => {
      let key = `포트${j+1}`;
      let value = d.portBacktestingCal.monthYield[i]
      _data[key] = value
    })
    bar_data.push(_data);
  })

  return (
    <BarChartWrap>
      <Bar
            groupMode="grouped"
            data={bar_data}
            keys={keys}
            indexBy="months"
            axisLeft={{
                // legend: "수익률",
                legendPosition: "middle",
                legendOffset: -40
            }}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                // legend: '연도',
                legendOffset: 36,
                legendPosition: 'middle',
            }}
            width={width}
            height={height}
            margin={{ top: 32, right: 36, bottom: 24, left: 36 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={["#A183F8", "#0075FF", "#49DDCB"]}
          defs={[
              {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: '#38bcb2',
                  size: 4,
                  padding: 1,
                  stagger: true
              },
              {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: '#eed312',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
              }
          ]}
          fill={[
              {
                  match: {
                      id: 'fries'
                  },
                  id: 'dots'
              },
              {
                  match: {
                      id: 'sandwich'
                  },
                  id: 'lines'
              }
          ]}
          borderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
          axisTop={null}
          axisRight={null}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
          legends={[
              {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 50,
                  translateY: -250,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: 'left-to-right',
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
        />
    </BarChartWrap>
  );
};

BarChart.defaultProps = {
  width: 880,
  height: 350,
};

export default BarChart;