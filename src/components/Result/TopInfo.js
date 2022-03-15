import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Wrap,
  TopBox,
  TopWrap,
  BoxWrap,
  MonthBox,
  MinusYield,
  MinusYieldMoney,
  PlusYield,
  PlusYieldMoney,
  Text,
  Info,
  TextWrap,
  Icon,
  MonthWrap,
  Price,
  YieldWrap,
  MinusYieldIcon,
  PlusYieldIcon,
  IconWrap,
  CalenderIcon,
  InfoWrap,
  BestYear,
  WorstYear,
  BestMonth,
  WorstMonth,
  MiniIcon1,
  MiniIcon2,
  Poket,
  Dollar,
  TextIconWrap,
  InfoText,
  InfoTitle,
} from "../Result/style.js";

import arrow_down from "../../assets/images/page_result/arrow_down.svg";
import arrow_up from "../../assets/images/page_result/arrow_up.svg";
import up from "../../assets/images/page_result/finger_up.svg";
import down from "../../assets/images/page_result/finger_down.svg";
import calender from "../../assets/images/page_result/calendar.svg";
import poket from "../../assets/images/page_result/poket.svg";
import dollar from "../../assets/images/page_result/dollar.svg";
// import mini_up_1 from "../../assets/images/page_result/mini_up_1.svg"
// import mini_up_2 from "../../assets/images/page_result/mini_up_2.svg"

const TopInfo = (props) => {
  const is_login = useSelector(state => state.user.is_login);
  const user = useSelector(state => state.user.user_info);
  //const result_list = useSelector((state) => state.port.list);
  const result_list = props.port_list;

  const finalMoney = Math.floor(result_list.finalMoney / 10000);
  const finalYield = Math.floor(result_list.finalYield);
  const bestMoney = Math.floor(result_list.bestMoney / 10000);
  const worstMoney = Math.floor(result_list.worstMoney / 10000);
  const seedMoney = Math.floor(result_list.seedMoney / 10000);
  const bestMonth = result_list.bestMonth.split("-");
  const worstMonth = result_list.worstMonth.split("-");

  const plus = bestMoney - seedMoney;
  const minus = worstMoney - seedMoney;

  return (
    <React.Fragment>
      <TopWrap>
        {finalYield < 0 ? (
          <Box>
            <YieldWrap>
              <div>
                {is_login ?
                  <Text>{user.nickname} 님의 총 수익은</Text>:
                  <Text>방문자 님의 총 수익은</Text>
                }
                <MinusYield>{finalYield}%</MinusYield>
                <MinusYieldMoney>
                  -{finalMoney.toLocaleString()} 만원
                </MinusYieldMoney>
              </div>
              <MinusYieldIcon src={arrow_down}></MinusYieldIcon>
            </YieldWrap>
          </Box>
        ) : (
          <Box>
            <YieldWrap>
              <div>
                {is_login ?
                  <Text>{user.nickname} 님의 총 수익은</Text>:
                  <Text>방문자 님의 총 수익은</Text>
                }
                <PlusYield>{finalYield}%</PlusYield>
                <PlusYieldMoney>{finalMoney.toLocaleString()} 만원</PlusYieldMoney>
              </div>
              <PlusYieldIcon src={arrow_up}></PlusYieldIcon>
            </YieldWrap>
          </Box>
        )}

        <BoxWrap>
          <TopBox>
            <InfoWrap>
            <TextIconWrap>
              <InfoTitle>투자 기간</InfoTitle>
              <CalenderIcon src={calender}></CalenderIcon>
            </TextIconWrap>
              <InfoText>
                {result_list.startDate} ~ {result_list.endDate}
              </InfoText>
            </InfoWrap>
          </TopBox>
          <TopBox>
            <InfoWrap>
              <TextIconWrap>
                <InfoTitle>초기 자본금</InfoTitle>
                <Poket src={poket}></Poket>
              </TextIconWrap>
              <InfoText>{seedMoney.toLocaleString()} 만원</InfoText>
            </InfoWrap>
          </TopBox>
        </BoxWrap>
      </TopWrap>

      <Wrap>
        <MonthBox>
          <TextWrap>
            <Text>최고의 달</Text>
            <BestYear>{bestMonth[0]}년</BestYear>
          </TextWrap>
          <MonthWrap>
            <Icon src={up}></Icon>
            <BestMonth>{bestMonth[1]}월</BestMonth>
          </MonthWrap>
          <IconWrap>
            <Price>
              {bestMoney.toLocaleString()} 만원{" "}
              { plus > 0 ?
                <span>( +{plus.toLocaleString()} 만원)</span>:
                <span>( {plus.toLocaleString()} 만원)</span>
              }
            </Price>
          </IconWrap>
        </MonthBox>

        <MonthBox>
          <TextWrap>
            <Text>최악의 달</Text>
            <WorstYear>{worstMonth[0]}년</WorstYear>
          </TextWrap>
          <MonthWrap>
            <Icon src={down}></Icon>
            <WorstMonth>{worstMonth[1]}월</WorstMonth>
          </MonthWrap>
          <IconWrap>
            <Price>
              {worstMoney.toLocaleString()} 만원{" "}
              { minus > 0 ?
                <p>( +{minus.toLocaleString()} 만원)</p> :
                <p>( {minus.toLocaleString()} 만원)</p> 
              }
            </Price>
          </IconWrap>
        </MonthBox>
      </Wrap>
    </React.Fragment>
  );
};

export default TopInfo;
