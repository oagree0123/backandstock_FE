import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PortCardList from "../../components/PortCardList/PortCardList";
import { actionCreators as portActions } from '../../redux/modules/port';
import Chart from "../Mypage/Chart";
import MypageLine from "../Mypage/MypageLine";
import { Wrap, Btn, Text, MypageWrap, ChartWrap, ChartTitle } from "./style";

const Mypage = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user_info);
  const myport = useSelector(state => state.port.port_list);

  useEffect(() => {
    if(!user) {
      return;
    }
    dispatch(portActions.getMyPortDB(user.user_id));
  }, [])

  return (
    <MypageWrap>
      <PortCardList />
      <ChartTitle>자산 비교 결과</ChartTitle>
      <ChartWrap />
      {/* <Wrap>
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

      <MypageLine></MypageLine> */}
    </MypageWrap>
  );
};

export default Mypage;
