import React from "react";
import {
  StockTitle,
  CardList,
  StockTitleWrap,
  MoneyWrap,
  Ratio,
  Profit,
} from "./style";

const StockItem = (props) => {
  const yieldmoneys = Math.floor(props.stock_yieldmoneys.slice(-1)[0]);
  const profit_money = Number(yieldmoneys) - Number(props.seedmoney);

  return (
    <CardList>
      <StockTitleWrap>
        <StockTitle>{props.stock_name}</StockTitle>
        { props.stock_ratio ? 
          <Ratio>
            {props.stock_ratio}% <p> / 100%</p>
          </Ratio> :
          <Ratio>
            {props.stock_rate[props.stock_num]}% <p> / 100%</p>
          </Ratio> 
        }
        {/* <StockTitle>({props.stock_codes})</StockTitle> */}
      </StockTitleWrap>
      <MoneyWrap>
        <span>자본:</span>
        <span>{Math.floor(props.seedmoney / 10000).toLocaleString()} 만원</span>
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
              <Profit>
                {profit_money > 0 ?
                  `+${Math.floor(profit_money / 10000).toLocaleString()} 만원`:
                  `${Math.floor(profit_money / 10000).toLocaleString()} 만원`
                }
              </Profit>
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
