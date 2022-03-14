import React from "react";
import { useSelector } from "react-redux";
import PortCard from "../PortCard/PortCard";
import { PortCardListWrap, ChartWrap, ChartBtnWrap, CompareBtn, DeleteBtn } from "./style";

const PortCardList = (props) => {
  const port_list = useSelector((state) => state.port.port_list);

  return (
    <PortCardListWrap>
      <ChartWrap>
        {port_list.map((p, i) => {
          return (
            <PortCard
              key={i}
              num={i}
              port_data={p}
              final_money={Math.floor(p.portBacktestingCal.finalMoney / 10000)}
            />
          );
        })}
      </ChartWrap>
    </PortCardListWrap>
  );
};

export default PortCardList;
