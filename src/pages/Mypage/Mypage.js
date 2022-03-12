import React from "react";
import Chart from "../Mypage/Chart";
import MypageLine from "../Mypage/MypageLine";
import { Wrap, Btn, Text, MypageWrap } from "../Mypage/style";

const Mypage = () => {
  return (
    <MypageWrap>
      <Wrap>
        <Chart></Chart>
        <Chart></Chart>
        <Chart></Chart>
      </Wrap>

      <Btn>비교하기</Btn>
      <Text>
        <span>포토폴리오 순위(최종 수익률)</span>
        <span>포토폴리오 순위(최고 수익률)</span>
        <span>포토폴리오 순위(최저 수익률)</span>
      </Text>

      <MypageLine></MypageLine>
    </MypageWrap>
  );
};

export default Mypage;
