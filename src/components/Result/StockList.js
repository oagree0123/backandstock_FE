import React, { useEffect, useState } from "react";
import StockItem from "./StockItem.js";
import {
  StockWrap,
  Lists,
  Empty,
  EmptyList,
} from "../Result/style";
import { useSelector } from "react-redux";

const StockList = (props) => {
  const { result_list, ratio_list } = props

  const [stock_name, setStockName] = useState([]);
  const [stock_codes, setStockCodes] = useState([]);
  const [stock_yieldmoneys, setStockYieldMoneys] = useState([]);
  const [seedmoney, setSeedMoney] = useState(0);

  const [stock_ratio, setStockRatio] = useState([]);
  const [stock_rate, setStockRate] = useState([]);
  const [init_money, setInitMoney] = useState(0);
  const test = useSelector((state) => state.testform);

  let count = 5 - result_list.stockNames.length;
  console.log(count)
  console.log(result_list.stockNames)


  useEffect(() => {
    if (!result_list) {
      return;
    }

    setStockName(result_list.stockNames);
    setStockCodes(result_list.stockCodes);
    setStockYieldMoneys(result_list.stockYieldMoneys);
    setSeedMoney(result_list.seedMoney);

    if (!test) {
      return;
    }
    setStockRate(test.ratioList);
    setInitMoney(test.init_money);

    if (!ratio_list) {
      return;
    }
    setStockRatio(ratio_list);
  }, [result_list, ratio_list]);

  return (
    <StockWrap>
      {result_list &&
        <Lists>
          {props.type === "detail"
            ? stock_name.map((a, i) => {
              return (
                <StockItem
                  key={i}
                  stock_name={a}
                  stock_codes={stock_codes[i]}
                  stock_yieldmoneys={stock_yieldmoneys[i]}
                  stock_num={i}
                  seedmoney={seedmoney}
                  init_money={init_money}
                  stock_ratio={stock_ratio[i]}
                />
              );
            })
            : stock_name.map((a, i) => {
              return (
                <StockItem
                  key={i}
                  stock_name={a}
                  stock_codes={stock_codes[i]}
                  stock_yieldmoneys={stock_yieldmoneys[i]}
                  stock_num={i}
                  seedmoney={seedmoney}
                  stock_rate={stock_rate}
                  init_money={init_money}
                />
              );
            })}

          {[...Array(count)].map((n, index) => {
            return (
              <EmptyList key={index}>
                <Empty>
                  실험한 종목이 <br />
                  {(5 - count)}개 뿐이에요
                </Empty>
              </EmptyList>
            );
          })}
        </Lists>
      }
    </StockWrap>
  );
};

export default StockList;
