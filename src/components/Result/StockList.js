import React from "react";
import StockItem from "./StockItem.js";
import {
  StockWrap,
  Lists,
  ListTitle,
  CardList,
  ListWrap,
  Empty,
  EmptyList
} from "../Result/style";
import { useSelector } from "react-redux";

const StockList = (props) => {
  const stock_name = props.stockNames;
  const stock_codes = props.stockCodes;
  const stock_yieldmoneys = props.stockYieldMoneys;
  const seedmoney = props.seedMoney;
  const count = 5 - stock_name.length

  const test = useSelector((state) => state.testform)
  console.log(test);

  const stock_ratio = test.ratioList
  const init_money = test.init_money

  return (
    <StockWrap>
      <ListTitle>종목별 수익금</ListTitle>
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
              stock_ratio={stock_ratio[i]}
              init_money={init_money}
            />
          )
        }))}

        {[...Array(count)].map((n, index) => {
          return (
            <ListWrap>
              <EmptyList>
                <Empty>
                  <span> 종목이</span>
                  <span>없습니다.</span>
                </Empty>
              </EmptyList>
            </ListWrap>
          )
        })}

      </Lists>

    </StockWrap>
  );
};

export default StockList;
