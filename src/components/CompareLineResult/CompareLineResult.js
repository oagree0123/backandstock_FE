import React from 'react';
import LineChart from '../LineChart/LineChart';
import { LineChartWarp } from './style';

const CompareLineResult = (props) => {
  const { port_list } = props;

  const compare_idx = props.compare_idx.sort();

  const months = [];
  const keys = [];
  const months_length = [];
  let length_idx = 0;

  let data = [];

  port_list.map((p, i) => {
    months_length.push(p.portBacktestingCal.months.length);
  });

  length_idx = months_length.findIndex((c, i) => {
    return c === Math.min(...months_length);
  });

  // 2개 비교시
  /* if (port_list.length === 2) {
    port_list.map((p, i) => {
      months_length.push(p.portBacktestingCal.months.length);
    });

    length_idx = months_length.findIndex((c, i) => {
      return c === Math.min(...months_length);
    });
  } else {
    // 3개 비교시
    port_list.map((p, i) => {
      months_length.push(p.portBacktestingCal.months.length);
    });

    length_idx = months_length.findIndex((c, i) => {
      return (
        c !== Math.min(...months_length) && c !== Math.max(...months_length)
      );
    });
  } */

  port_list[length_idx]?.portBacktestingCal.months.map((m, i) => {
    months.push(`${i + 1} 개월`);
  });

  compare_idx.map((p, i) => {
    keys.push(`자산 실험 ${p}`);
  });

  keys.map((k, i) => {
    let _data = {
      id: k,
      data: [],
    }

    data.push(_data);
  })

  console.log(data);

  data.map((d, i) => {
    months.map((m, j) => {
      let xy = {};

      if(port_list[i]?.portBacktestingCal.monthYield[j]) {
        xy = {
          x: m,
          y: Math.floor(port_list[i]?.portBacktestingCal.monthYield[j]),
        }
      }
      else {
        xy = {
          x: m,
          y: 0,
        }
      }

      d.data.push(xy);
    })
  })

  return (
    <LineChartWarp>
      <LineChart 
        width={880}
        height={350}
        margin={{
          top: 32,
          right: 100,
          bottom: 72,
          left: 84,
        }}
        translateX={95}
        translateY={0}
        keys={keys}
        line_data={data}
        symbol_size={6}
        legend_fsize={11}
        legend_space={-4}
        legend_anchor="top-right"
        tick_font={12}
        compare="compare"
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
      />
    </LineChartWarp>
  );
};

export default CompareLineResult;