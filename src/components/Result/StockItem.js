import React from "react";
import { ListWrap, StockTitle, Minus, Plus, Money } from "./style.js";

const StockItem = (props) => {
  const yieldmoneys = Math.floor(props.stock_yieldmoneys.slice(-1)[0]);
  const profit_money = Number(yieldmoneys) - Number(props.seedmoney);

  return (
    <div>
      <ListWrap>
        <StockTitle>
          {props.stock_num + 1} . {props.stock_name}({props.stock_codes})
        </StockTitle>
        <Money>{yieldmoneys.toLocaleString()}</Money>
        {profit_money < 0 ? (
          <Minus>{profit_money.toLocaleString()}</Minus>
        ) : (
          <Plus> +{profit_money.toLocaleString()}</Plus>
        )}
      </ListWrap>
    </div>
  );
};

export default StockItem;
