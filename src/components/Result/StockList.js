import React from "react";
import StockItem from "./StockItem.js";
import {
  StockWrap,
  Lists,
  ListTitle,
  CardList,
  StockTitleWrap,
  ListWrap,
  Empty
} from "../Result/style";

const StockList = (props) => {
  const stock_name = props.stockNames;
  const stock_codes = props.stockCodes;
  const stock_yieldmoneys = props.stockYieldMoneys;
  const seedmoney = props.seedMoney;
  console.log(stock_name);
  const count = 5 - stock_name.length
  console.log(count);
  const test = [

    <CardList>
      <StockTitleWrap>
        <span>종목이 없습니다.</span>
      </StockTitleWrap>
    </CardList>

  ]



  return (
    <StockWrap>
      <ListTitle>종목별 최종 수익금</ListTitle>

      <Lists>


        {(stock_name?.map((a, i) => {
          return (
            <StockItem
              key={i}
              stock_name={a}
              stock_codes={stock_codes[i]}
              stock_yieldmoneys={stock_yieldmoneys[i]}
              stock_num={i}
              seedmoney={seedmoney}
            />
          )
        }))}

        <ListWrap>
          <CardList>
            <Empty>
              종목이 없습니다.
            </Empty>
          </CardList>
        </ListWrap>
      </Lists>

    </StockWrap>
  );
};

export default StockList;
