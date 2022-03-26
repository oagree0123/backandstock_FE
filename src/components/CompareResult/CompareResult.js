import React, { useEffect, useState } from "react";
import BarChart from "../BarChart/BarChart";
import { BarChartWarp, CompareChartWarp } from "./style";

const CompareResult = (props) => {
  const { port_list } = props;

  const compare_idx = props.compare_idx.sort();

  const months = [];
  const keys = [];
  const months_length = [];
  let length_idx = 0;


  let bar_data = [[], [], []];

  // 2개 비교시
  if (port_list.length === 2) {
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
  }

  port_list[length_idx]?.portBacktestingCal.months.map((m, i) => {
    months.push(`${i + 1} 개월`);
  });

  compare_idx.map((p, i) => {
    keys.push(`자산 실험 ${p}`);
  });

  months.map((m, i) => {
    let _data = {};

    _data = { months: m };
    port_list.map((d, j) => {
      let key = `자산 실험 ${compare_idx[j]}`;
      let value = d?.portBacktestingCal.monthYield[i];
      _data[key] = Math.floor(value);
    });
    if (i <= 40) {
      bar_data[0].push(_data);
    } else if (i > 35 && i <= 72) {
      bar_data[1].push(_data);
    } else if (i > 72 && i <= 108) {
      bar_data[2].push(_data);
    }
  });

  return (
    <CompareChartWarp>
      {bar_data.length > 0 &&
        bar_data.map((b, i) => {
          return (
            <BarChartWarp key={i}>
              <BarChart
                width={880}
                height={350}
                margin={{
                  top: 32,
                  right: 80,
                  bottom: 72,
                  left: 84,
                }}
                translateX={70}
                translateY={0}
                keys={keys}
                bar_data={b}
                symbol_size={10}
                legend_fsize={12}
                legend_space={-2}
                legend_anchor="top-right"
                tick_font={12}
              />
              </BarChartWarp>
          );
        })}
    </CompareChartWarp>
  );
};

export default CompareResult;
