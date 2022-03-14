import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BarChart } from "../../components";
import PortCardList from "../../components/PortCardList/PortCardList";
import { actionCreators as portActions } from '../../redux/modules/port';

import { MypageWrap, ChartWrap, ChartTitle, MypageInfoWrap, MypageTitle, RankWrap, BestRankWrap, WorstRankWrap, WrapLeft, WrapRight, FirstWrap, RankTitle, RankCont, RankRatio, RankMoney, FirstRank, FirstTitle, FirstRatio, FirstMoney, OtherWrap, OtherRank, OtherRatio, OtherMoney, OtherCont, MypageHead, ChartBtnWrap, CompareBtn, DeleteBtn } from "./style";

const Mypage = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user_info);
  const port_list = useSelector(state => state.port.port_list);

  const [check_compare, setCheckCompare] = useState(false);

  const click_compare = () => {

  }

  const click_delete = () => {

  }

  useEffect(() => {
    if(!user) {
      return;
    }
    dispatch(portActions.getMyPortDB(user.user_id));
  }, [])

  return (
    <MypageWrap>
      <MypageHead>
        실험한 자산들을 <br />
        비교해볼까요?
      </MypageHead>
      <ChartBtnWrap>
        <CompareBtn
          onClick={() => {
            click_compare()
            setCheckCompare(true);
          }}
        >
          비교하기
        </CompareBtn>
        <DeleteBtn
          onClick={click_delete}
        >
          삭제하기
        </DeleteBtn>
      </ChartBtnWrap>
      <PortCardList />
      
      <ChartTitle>자산 비교 결과</ChartTitle>
      <ChartWrap>
        {!check_compare ?
          null :
          <BarChart port_list={port_list} />
        }
      </ChartWrap>

      
      <MypageInfoWrap>
        <MypageTitle>최종 수익률 순위</MypageTitle>
        <RankWrap>
          <RankCont>
            <RankTitle>1위. 자산 실험1</RankTitle>
            <RankRatio>+50%</RankRatio>
            <RankMoney>1000000원</RankMoney>
          </RankCont>
          <RankCont>
            <RankTitle>2위. 자산 실험2</RankTitle>
            <RankRatio>+50%</RankRatio>
            <RankMoney>1000000원</RankMoney>
          </RankCont>
          <RankCont>
            <RankTitle>3위. 자산 실험3</RankTitle>
            <RankRatio>+50%</RankRatio>
            <RankMoney>1000000원</RankMoney>
          </RankCont>
        </RankWrap>
        <MypageTitle>최고 수익률 순위</MypageTitle>
        <BestRankWrap>
          <WrapLeft>
            <FirstWrap>
              <FirstRank>1위</FirstRank>
              <FirstTitle>자산 실험1</FirstTitle>
              <FirstRatio>+50%</FirstRatio>
              <FirstMoney>2,918,404.6원</FirstMoney>
            </FirstWrap>
          </WrapLeft>
          <WrapRight>
            <OtherWrap>
              <OtherRank>2위 자산 실험 2</OtherRank>
              <OtherCont>
                <OtherRatio>+50%</OtherRatio>
                <OtherMoney>2,918,404.6원</OtherMoney>
              </OtherCont>
            </OtherWrap>
            <OtherWrap>
              <OtherRank>3위 자산 실험 3</OtherRank>
              <OtherCont>
                <OtherRatio>+50%</OtherRatio>
                <OtherMoney>2,918,404.6원</OtherMoney>
              </OtherCont>
            </OtherWrap>
          </WrapRight>
        </BestRankWrap>
        <MypageTitle>최저 수익률 순위</MypageTitle>
        <WorstRankWrap>
          <WrapLeft>
            <FirstWrap>

            </FirstWrap>
          </WrapLeft>
          <WrapRight>
            <OtherWrap>

            </OtherWrap>
            <OtherWrap>
              
            </OtherWrap>
          </WrapRight>
        </WorstRankWrap>
      </MypageInfoWrap>
    </MypageWrap>
  );
};

export default Mypage;

