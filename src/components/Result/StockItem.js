import React from "react";
import {
  StockTitle,
  CardList,
  StockTitleWrap,
  MoneyWrap,
  Ratio,
  Profit,
  RatioWrap,
  PlusProfit
} from "./style";

const StockItem = (props) => {
  const yieldmoneys = Math.floor(props.stock_yieldmoneys.slice(-1)[0]);
  const ratio_money = (
    props.stock_ratio ?
      (props.seedmoney / 100) * props.stock_ratio :
      (props.seedmoney / 100) * props.stock_rate[props.stock_num]
  )
  const profit_money = Number(yieldmoneys) - Number(ratio_money);

  return (
    <CardList>
      <StockTitleWrap>
        <StockTitle>{props.stock_name}</StockTitle>
        <RatioWrap>
          <span>비중</span>
          {props.stock_ratio ?
            <Ratio>
              {props.stock_ratio}%
            </Ratio> :
            <Ratio>
              {props.stock_rate[props.stock_num]}%
            </Ratio>
          }
        </RatioWrap>
      </StockTitleWrap>

      {/* <StockTitle>({props.stock_codes})</StockTitle> */}

      <MoneyWrap>
        <span>자본:</span>
        <span>{Math.floor(ratio_money / 10000).toLocaleString()} 만원</span>
      </MoneyWrap>
      <MoneyWrap>
        {profit_money < 0 ? (
          <>
            <span> 손익:</span>
            <span>
              <Profit>
                {Math.floor(profit_money / 10000).toLocaleString()} 만원
              </Profit>
            </span>
          </>
        ) : (
          <>
            <span> 손익:</span>
            <span>
              <PlusProfit>
                {profit_money > 0 ?
                  `+${Math.floor(profit_money / 10000).toLocaleString()} 만원` :
                  `${Math.floor(profit_money / 10000).toLocaleString()} 만원`
                }
              </PlusProfit>
            </span>
          </>
        )}
      </MoneyWrap>
      <MoneyWrap>
        <span>최종:</span>
        <Profit>{Math.floor(yieldmoneys / 10000).toLocaleString()} 만원</Profit>
      </MoneyWrap>
    </CardList>
  );
};

export default StockItem;
