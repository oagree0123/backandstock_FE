import React, { useEffect } from "react";
import StockItem from "./StockItem.js";
import {
  StockWrap,
  Lists,
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
  const stock_ratio = test.ratioList
  const init_money = test.init_money

  return (
    <StockWrap>
      <Lists>
        {props.type === "detail" ?
          (stock_name?.map((a, i) => {
            return (
              <StockItem
                key={i}
                stock_name={a}
                stock_codes={stock_codes[i]}
                stock_yieldmoneys={stock_yieldmoneys[i]}
                stock_num={i}
                seedmoney={seedmoney}
                init_money={init_money}
                stock_rate={props.stock_ratio}
              />
            )
          })) :
          (stock_name?.map((a, i) => {
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
          })) 
        }

        {[...Array(count)].map((n, index) => {
          return (
              <EmptyList key={index}>
                <Empty>
                  실험한 종목이 <br />
                  {count}개 뿐이에요
                </Empty>
              </EmptyList>
          )
        })}

      </Lists>

    </StockWrap>
  );
};

export default StockList;
