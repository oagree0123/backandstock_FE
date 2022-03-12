import React from "react";
import { useSelector } from "react-redux";
import {
    Box, Wrap, TopBox, TopWrap, BoxWrap, MonthBox, MinusYield, MinusYieldMoney,
    PlusYield, PlusYieldMoney, Text, Info, TextWrap, Icon, MonthWrap, Price,
    YieldWrap, MinusYieldIcon, PlusYieldIcon, IconWrap, CalenderIcon, InfoWrap,
    BestYear, WorstYear, BestMonth, WorstMonth, MiniIcon1, MiniIcon2, Poket, Dollar
} from '../Result/style.js';

import arrow_down from "../../assets/images/page_result/arrow_down.svg"
import arrow_up from "../../assets/images/page_result/arrow_up.svg"
import up from "../../assets/images/page_result/finger_up.svg"
import down from "../../assets/images/page_result/finger_down.svg"
import calender from "../../assets/images/page_result/calendar.svg"
import poket from "../../assets/images/page_result/poket.svg"
import dollar from "../../assets/images/page_result/dollar.svg"
// import mini_up_1 from "../../assets/images/page_result/mini_up_1.svg"
// import mini_up_2 from "../../assets/images/page_result/mini_up_2.svg"


const TopInfo = () => {
  // window.addEventListener('beforeunload', (event) => {
  //     event.preventDefault();
  //     event.returnValue = '';
  //     window.location.replace("/")
  // })

  const result_list = useSelector((state) => state.port.list);
  console.log(result_list);

  const finalMoney = Math.floor(result_list.finalMoney);
  const finalYield = Math.floor(result_list.finalYield);
  const bestMoney = Math.floor(result_list.bestMoney);
  const worstMoney = Math.floor(result_list.worstMoney);
  const seedMoney = Number(result_list.seedMoney);
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
                <Text>슈퍼개미님의 총 수익은</Text>
                <MinusYield>{finalYield}%</MinusYield>
                <MinusYieldMoney>
                  -{finalMoney.toLocaleString()}원
                </MinusYieldMoney>
              </div>
              <MinusYieldIcon></MinusYieldIcon>
            </YieldWrap>
          </Box>
        ) : (
          <Box>
            <YieldWrap>
              <div>
                <Text>슈퍼개미님의 총 수익은</Text>
                <PlusYield>{finalYield}%</PlusYield>
                <PlusYieldMoney>{finalMoney.toLocaleString()}원</PlusYieldMoney>
              </div>
              <PlusYieldIcon></PlusYieldIcon>
            </YieldWrap>
          </Box>
        )}


                    (
                        <Box>
                            <YieldWrap>
                                <div>
                                    <Text>슈퍼개미님의 총 수익은</Text>
                                    <MinusYield>{finalYield}%</MinusYield>
                                    <MinusYieldMoney>-{finalMoney.toLocaleString()}원</MinusYieldMoney>
                                </div>
                                <MinusYieldIcon src={arrow_down}>
                                </MinusYieldIcon>
                            </YieldWrap>
                        </Box>
                    )
                    :
                    (
                        <Box>
                            <YieldWrap>
                                <div>
                                    <Text>슈퍼개미님의 총 수익은</Text>
                                    <PlusYield>{finalYield}%</PlusYield>
                                    <PlusYieldMoney>{finalMoney.toLocaleString()}원</PlusYieldMoney>
                                </div>
                                <PlusYieldIcon src={arrow_up}></PlusYieldIcon>
                            </YieldWrap>
                        </Box>
                    )
                }

                <BoxWrap>
                    <TopBox>
                        <CalenderIcon src={calender}></CalenderIcon>
                        <InfoWrap>
                            <Text>투자 기간</Text>
                            <Info>{result_list.startDate} ~ {result_list.endDate}</Info>
                        </InfoWrap>

                    </TopBox>
                    <TopBox>
                        <Poket src={poket}></Poket>
                        <InfoWrap>
                            <Text>초기 자본금</Text>
                            <Info>{seedMoney.toLocaleString()}</Info>
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
                        <BestMonth>{bestMonth[1]}월</BestMonth>
                    </MonthWrap>
                    <IconWrap>
                        <Icon src={up}></Icon>
                        {/* <MiniIcon1 src={mini_up_2}></MiniIcon1>
                        <MiniIcon2 src={mini_up_1}></MiniIcon2> */}
                        <Price>{bestMoney.toLocaleString()}원 <span>(+{plus.toLocaleString()}원)</span></Price>
                    </IconWrap>


                </MonthBox>
                <MonthBox>
                    <TextWrap>
                        <Text>최악의 달</Text>
                        <WorstYear>{worstMonth[0]}년</WorstYear>
                    </TextWrap>
                    <MonthWrap>
                        <WorstMonth>{worstMonth[1]}월</WorstMonth>
                    </MonthWrap>
                    <IconWrap>
                        <Icon src={down}></Icon>
                        <Price>{worstMoney.toLocaleString()}원 <p>( {minus.toLocaleString()}원)</p></Price>
                    </IconWrap>

                </MonthBox>
            </Wrap>
        </React.Fragment>
    );
};

export default TopInfo;
