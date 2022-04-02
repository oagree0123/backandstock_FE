import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
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
  Poket,
  TextIconWrap,
  InfoText,
  InfoTitle,
  SetWrap,
  SpinnerWrap,
} from "./style.js";

import arrow_down from "../../assets/images/page_result/arrow_down.svg";
import arrow_up from "../../assets/images/page_result/arrow_up.svg";
import up from "../../assets/images/page_result/finger_up.svg";
import down from "../../assets/images/page_result/finger_down.svg";
import calender from "../../assets/images/page_result/calendar.svg";
import poket from "../../assets/images/page_result/poket.svg";
import Spinner from "../../shared/Spinner.js";

const TopInfo = (props) => {
  const result_list = props.port_list;

  const [is_loading, setIsLoading] = useState(false);

  const [finalMoney, setfinalMoney] = useState(0)
  const [finalYield, setfinalYield] = useState(0)
  const [bestMoney, setbestMoney] = useState(0)
  const [worstMoney, setworstMoney] = useState(0)
  const [seedMoney, setseedMoney] = useState(0)
  const [bestMonth, setbestMonth] = useState([]);
  const [worstMonth, setworstMonth] = useState([]);

  const [plus, setplus] = useState(0);
  const [minus, setminus] = useState(0);

  useEffect(() => {
    if (!result_list) {
      return;
    }

    setfinalMoney(Math.floor(result_list.finalMoney / 10000));
    setfinalYield(Math.floor(result_list.finalYield));
    setbestMoney(Math.floor(result_list.bestMoney / 10000));
    setworstMoney(Math.floor(result_list.worstMoney / 10000));
    setseedMoney(Math.floor(result_list.seedMoney / 10000));
    setbestMonth(result_list.bestMonth);
    setworstMonth(result_list.worstMonth);

    setplus(bestMoney - seedMoney);
    setminus(worstMoney - seedMoney);

    setIsLoading(true);
  }, [result_list]);

  return (
    <>
      { !is_loading ?
        <SpinnerWrap>
          <Spinner /> 
        </SpinnerWrap> : 
        <>
          <TopWrap>
            {finalYield < 0 ? (
              <Box>
                <YieldWrap>
                  <div>
                    <Text>최종 수익률 및 자산</Text>
                    <MinusYield>{finalYield}%</MinusYield>
                    <MinusYieldMoney>
                      {finalMoney.toLocaleString()} 만원
                    </MinusYieldMoney>
                  </div>
                  <MinusYieldIcon src={arrow_down}></MinusYieldIcon>
                </YieldWrap>
              </Box>
            ) : (
              <Box>
                <YieldWrap>
                  <div>
                    <Text>최종 수익률 및 자산</Text>
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
              <SetWrap>
                <TopBox width="210px" margin_right="10px">
                  <InfoWrap>
                    <TextIconWrap>
                      <InfoTitle>초기 자본금</InfoTitle>
                      <Poket src={poket}></Poket>
                    </TextIconWrap>
                    <InfoText>{seedMoney.toLocaleString()} 만원</InfoText>
                  </InfoWrap>
                </TopBox>
                <TopBox width="180px">
                  <InfoWrap>
                    <TextIconWrap>
                      <InfoTitle>리밸런싱 주기</InfoTitle>
                    </TextIconWrap>
                    <InfoText>{result_list.rebalancingMonth} 개월</InfoText>
                  </InfoWrap>
                </TopBox>
              </SetWrap>
            </BoxWrap>
          </TopWrap>
          {props.type === "Best" ?
            null :
            <Wrap>
              <MonthBox>
                <TextWrap>
                  <Text>최고의 달</Text>
                  <BestYear>{dayjs(bestMonth).format('YYYY')}년</BestYear>
                </TextWrap>
                <MonthWrap>
                  <Icon src={up}></Icon>
                  <BestMonth>{dayjs(bestMonth).format('MM')}월</BestMonth>
                </MonthWrap>
                <IconWrap>
                  <Price>
                    {bestMoney.toLocaleString()} 만원{" "}
                    {(bestMoney - seedMoney) > 0 ?
                      <span>( +{(bestMoney - seedMoney).toLocaleString()} 만원)</span> :
                      <span>( {(bestMoney - seedMoney).toLocaleString()} 만원)</span>
                    }
                  </Price>
                </IconWrap>
              </MonthBox>

              <MonthBox>
                <TextWrap>
                  <Text>최악의 달</Text>
                  <WorstYear>{dayjs(worstMonth).format('YYYY')}년</WorstYear>
                </TextWrap>
                <MonthWrap>
                  <Icon src={down}></Icon>
                  <WorstMonth>{dayjs(worstMonth).format('MM')}월</WorstMonth>
                </MonthWrap>
                <IconWrap>
                  <Price>
                    {worstMoney.toLocaleString()} 만원{" "}
                    {(worstMoney - seedMoney) > 0 ?
                      <p>( +{(worstMoney - seedMoney).toLocaleString()} 만원)</p> :
                      <p>( {(worstMoney - seedMoney).toLocaleString()} 만원)</p>
                    }
                  </Price>
                </IconWrap>
              </MonthBox>
            </Wrap>
          }
        </>
      }
    </>
  );
};

export default TopInfo;
