import React from "react";
import { Wrap, Num, StockName, StockNum, Box, Result } from "./style";
import { useSelector } from "react-redux";
import Community from "../../pages/Community/Community";

const CommunitySlideCard = (props) => {
  const { top_list } = props;

  const results = Math.floor(props.kospi_results);
  const volume = Math.floor(props.volume_results / 10000);
  const transaction = Math.floor(props.transaction_results / 100000000);
  // const test = Math.floor(props.volume_results / 10000)

  return (
    <Box>
      <Wrap>
        <Num>{props.num}위</Num>
        <StockName>{props.stock_name}</StockName>
        <StockNum>{props.stock_num}</StockNum>
        {results < 1000 ? (
          <Result>{results}%</Result>
        ) : props.toptitle === "거래량 TOP5" ? (
          <Result>{volume.toLocaleString()}주</Result>
        ) : (
          <Result>{transaction.toLocaleString()}억원</Result>
        )}
      </Wrap>
    </Box>
  );
};

export default CommunitySlideCard;
