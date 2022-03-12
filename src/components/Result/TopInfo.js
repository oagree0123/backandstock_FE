import React from 'react';
import { useSelector } from 'react-redux';
import {
    Box, Wrap, TopBox, TopWrap, BoxWrap, MonthBox, MinusYield, MinusYieldMoney,
    PlusYield, PlusYieldMoney, Text, Info, TextWrap, Icon, MonthWrap, Price,
    YieldWrap, MinusYieldIcon, PlusYieldIcon,
    BestYear, WorstYear, BestMonth, WorstMonth
} from '../Result/style.js';


const TopInfo = () => {

    // window.addEventListener('beforeunload', (event) => {
    //     event.preventDefault();
    //     event.returnValue = '';
    //     window.location.replace("/")
    // })

    const result_list = useSelector((state) => state.port.list);
    console.log(result_list);

    const finalMoney = Math.floor(result_list.finalMoney)
    const finalYield = Math.floor(result_list.finalYield)
    const bestMoney = Math.floor(result_list.bestMoney)
    const worstMoney = Math.floor(result_list.worstMoney)
    const seedMoney = Number(result_list.seedMoney)
    const bestMonth = result_list.bestMonth.split('-')
    const worstMonth = result_list.worstMonth.split('-')

    const plus = bestMoney - seedMoney
    const minus = worstMoney - seedMoney

    return (
        <React.Fragment>
            <TopWrap>
                {finalYield < 0 ?

                    (
                        <Box>
                            <YieldWrap>
                                <div>
                                    <Text>슈퍼개미님의 총 수익은</Text>
                                    <MinusYield>{finalYield}%</MinusYield>
                                    <MinusYieldMoney>-{finalMoney.toLocaleString()}원</MinusYieldMoney>
                                </div>
                                <MinusYieldIcon></MinusYieldIcon>
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
                                <PlusYieldIcon></PlusYieldIcon>
                            </YieldWrap>
                        </Box>
                    )
                }

                <BoxWrap>
                    <TopBox>
                        <Icon></Icon>
                        <Text>투자 기간</Text>
                        <Info>{result_list.startDate} ~ {result_list.endDate}</Info>
                    </TopBox>
                    <TopBox>
                        <Text>초기 자본금</Text>
                        <Info>{seedMoney.toLocaleString()}</Info>
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
                        <Icon></Icon>
                        <BestMonth>{bestMonth[1]}월</BestMonth>
                    </MonthWrap>
                    <Price>{bestMoney.toLocaleString()}원 <span>(+{plus.toLocaleString()}원)</span></Price>
                </MonthBox>
                <MonthBox>
                    <TextWrap>
                        <Text>최악의 달</Text>
                        <WorstYear>{worstMonth[0]}년</WorstYear>
                    </TextWrap>
                    <MonthWrap>
                        <Icon></Icon>
                        <WorstMonth>{worstMonth[1]}월</WorstMonth>
                    </MonthWrap>
                    <Price>{worstMonth.toLocaleString()}원 <p>( {minus.toLocaleString()}원)</p></Price>
                </MonthBox>
            </Wrap>
        </React.Fragment>
    );
};


export default TopInfo;