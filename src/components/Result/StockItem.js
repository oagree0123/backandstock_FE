import React from "react";
import {
  ListWrap,
  StockTitle,
  CardList,
  StockTitleWrap,
  MoneyWrap,
  Ratio,
  Profit
} from "./style.js";


const StockItem = (props) => {
  const yieldmoneys = Math.floor(props.stock_yieldmoneys.slice(-1)[0]);
  const profit_money = Number(yieldmoneys) - Number(props.seedmoney);
  // const stock_name = props.stock_name.length


  const init_money = Math.floor(props.init_money / 100 * props.stock_ratio)



  return (
    <div>
      <ListWrap>

        <CardList>
          <StockTitleWrap>
            <StockTitle>{props.stock_name}</StockTitle>
            <Ratio>{props.stock_ratio}% <span> /100%</span></Ratio>
            {/* <StockTitle>({props.stock_codes})</StockTitle> */}
          </StockTitleWrap>
          <MoneyWrap>
            <span>자본:</span>
            <span>{props.seedmoney.toLocaleString()}원</span>
          </MoneyWrap>
          <MoneyWrap>
            {profit_money < 0 ? (
              <>
                <span> 손익:</span>
                <span><Profit> {profit_money.toLocaleString()}원</Profit></span>
              </>
            ) : (
              <>
                <span> 손익:</span>
                <span><Profit>+{profit_money.toLocaleString()}원</Profit></span>
              </>
            )}
          </MoneyWrap>
          <MoneyWrap>
            <span>최종:</span>
            <Profit>{yieldmoneys.toLocaleString()}원</Profit>
          </MoneyWrap>
        </CardList>
      </ListWrap>
    </div>
  );
};



export default StockItem;
