import React from "react";
import {
  ListWrap,
  StockTitle,
  Minus,
  Plus,
  Money,
  CardList,
  StockTitleWrap,
  MoneyWrap,
  MoneyTitle,
  MoneyText,
} from "./style.js";

const StockItem = (props) => {
  const yieldmoneys = Math.floor(props.stock_yieldmoneys.slice(-1)[0]);
  const profit_money = Number(yieldmoneys) - Number(props.seedmoney);
  const stock_name = props.stock_name.length


  return (
    <div>
      <ListWrap>

        <CardList>
          <StockTitleWrap>
            <StockTitle>{props.stock_name}</StockTitle>
            <StockTitle>({props.stock_codes})</StockTitle>
          </StockTitleWrap>
          <MoneyWrap>
            <MoneyWrap>
              {profit_money < 0 ? (
                <MoneyText>
                  <MoneyTitle>손실금 :</MoneyTitle>
                  <Minus> {profit_money.toLocaleString()}</Minus>
                </MoneyText>
              ) : (
                <MoneyText>
                  <MoneyTitle>이익금 :</MoneyTitle>
                  <Plus> +{profit_money.toLocaleString()}</Plus>
                </MoneyText>
              )}
            </MoneyWrap>
            <MoneyTitle>최종 자산 :</MoneyTitle>
            <Money>{yieldmoneys.toLocaleString()}</Money>
          </MoneyWrap>
        </CardList>



      </ListWrap>
    </div>
  );
};



export default StockItem;
