import React, { useEffect } from "react";
import BarChart from "../BarChart/BarChart";
import CompareInfo from "../CompareInfo/CompareInfo";

const CompareResult = (props) => {
  const { port_list } = props;

  const compare_idx = props.compare_idx.sort();

  const months = [];
  const keys = [];
  const bar_data = [];

  port_list[0]?.portBacktestingCal.months.map((m, i) => {
    months.push(`${i+1} 개월`);
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
    bar_data.push(_data);
  });

  useEffect(() => {

  }, []);

  return (
    <>
      {!port_list ? null : (
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
          bar_data={bar_data}
          symbol_size={10}
          legend_fsize={12}
          legend_space={-2}
          legend_anchor="top-right"
          tick_font={12}
        />
      )}
    </>
  );
};

export default CompareResult;
