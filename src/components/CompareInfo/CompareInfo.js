import React, { useEffect, useState } from "react";
import moment from "moment";
import arrowup from "../../assets/images/page_result/arrow_up.svg";
import arrowdown from "../../assets/images/page_result/arrow_down.svg";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  BestBox,
  BestDate,
  BestInfo,
  BestName,
  BestRatio,
  BestTitle,
  BestWrap,
  CompareBottom,
  CompareInfoWrap,
  CompareTop,
  BestRatioWrap,
  WorstRatioWrap,
  WorstRatio,
  RankWrap,
  RankBox,
  RankTitle,
  RankTop,
  RankRatio,
  RankMoney,
  RankMid,
  RankDate,
  RankBottom,
  RankStock,
  NoneRankBox,
} from "./style";
import { useSelector } from "react-redux";

const CompareInfo = (props) => {
  const compare_item = props.port_list;

  const best_data = props.portfolioHighYield;
  const worst_data = props.portfolioLowYield;
  const rank_data = props.portfolioRanks;

  const [high_id, setHighId] = useState(0);
  const [low_id, setLowId] = useState(0);

  const [rank_idx, setRankIdx] = useState([]);

  useEffect(() => {
    if (compare_item && best_data && worst_data) {
      let high = compare_item.findIndex((p) => {
        return p.portId === best_data.portId;
      });

      let low = compare_item.findIndex((p) => {
        return p.portId === worst_data.portId;
      });

      setHighId(high + 1);
      setLowId(low + 1);
    }

    if (rank_data) {
      setRankIdx([]);
      rank_data.map((r, i) => {
        let idx = compare_item.findIndex((p) => {
          return p.portId === r.portId;
        });
        console.log(idx);
        
        setRankIdx((prev) => [...prev, idx + 1]);
      });
    }
  }, [compare_item, rank_data, best_data, worst_data]);

  return (
    <>
      {best_data && (
        <CompareInfoWrap>
          <CompareTop>
            <BestWrap>
              <BestTitle>최고 수익률</BestTitle>
              <BestBox>
                <BestName>
                  자산 <br />
                  실험 {high_id}
                </BestName>
                <BestInfo>
                  <BestDate>
                    {moment(best_data.highYieldDate).format("YYYY")}년{" "}
                    {moment(best_data.highYieldDate).format("MM")}월
                  </BestDate>
                  <BestRatioWrap>
                    <ArrowUpIcon src={arrowup} alt="down" />
                    <BestRatio>{Math.floor(best_data.highYield)}%</BestRatio>
                  </BestRatioWrap>
                </BestInfo>
              </BestBox>
            </BestWrap>

            <BestWrap>
              <BestTitle>최저 수익률</BestTitle>
              <BestBox>
                <BestName>
                  자산 <br />
                  실험 {low_id}
                </BestName>
                <BestInfo>
                  <BestDate>
                    {moment(worst_data.lowYieldDate).format("YYYY")}년{" "}
                    {moment(worst_data.lowYieldDate).format("MM")}월
                  </BestDate>
                  <WorstRatioWrap>
                    <ArrowDownIcon src={arrowdown} alt="down" />
                    <WorstRatio>{Math.floor(worst_data.lowYield)}%</WorstRatio>
                  </WorstRatioWrap>
                </BestInfo>
              </BestBox>
            </BestWrap>
          </CompareTop>

          <CompareBottom>
            <BestTitle>최종 수익률 순위</BestTitle>
            <RankWrap>
              {rank_data.map((r, i) => {
                return (
                  <RankBox key={i}>
                    <RankTop>
                      <RankTitle>
                        {i + 1}위 자산 실험 {rank_idx[i]}
                      </RankTitle>
                      <RankRatio>{Math.floor(r.finalYield)}%</RankRatio>
                      <RankMoney>
                        {Math.floor(r.finalMoney / 10000)} 만원
                      </RankMoney>
                    </RankTop>
                    <RankMid>
                      <RankDate>투자기간</RankDate>
                      <RankDate>
                        {moment(r.startDate).format("YYYY")}년{" "}
                        {moment(r.startDate).format("MM")}월 ~{" "}
                        {moment(r.endDate).format("YYYY")}년{" "}
                        {moment(r.endDate).format("MM")}월
                      </RankDate>
                    </RankMid>
                    <RankBottom>
                      <RankStock>투자 종목 및 비율</RankStock>
                      {r.stockName.map((s, i) => {
                        return (
                          <RankStock key={i}>
                            {s} {r.stockRatio[i]}% / 100%
                          </RankStock>
                        );
                      })}
                    </RankBottom>
                  </RankBox>
                );
              })}
              {[...Array(3 - rank_data.length)].map((a, i) => {
                return (
                  <NoneRankBox key={i}>
                    비교한 실험이 <br />
                    2개뿐 이에요
                  </NoneRankBox>
                );
              })}
            </RankWrap>
          </CompareBottom>
        </CompareInfoWrap>
      )}
    </>
  );
};

export default CompareInfo;
