import React from "react";
import { useSelector } from "react-redux";
import PortCard from "../PortCard/PortCard";
import { PortCardListWrap, ChartWrap, NoneCard, NoneText } from "./style";

const PortCardList = (props) => {
  const { port_list } = props;

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
        {port_list.length !== 3 &&
          [...Array(3-port_list.length)].map((a, i) => {
            return (
              <NoneCard key={i}>
                <NoneText>
                  저장한 <br />
                  실험결과가 <br />
                  없습니다
                </NoneText>
              </NoneCard>
          );
        })}
      </ChartWrap>
    </PortCardListWrap>
  );
};

export default PortCardList;
