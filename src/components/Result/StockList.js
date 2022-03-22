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
  const [stock_name, setStockName] = useState([]);
  const [stock_codes, setStockCodes] = useState([]);
  const [stock_yieldmoneys, setStockYieldMoneys] = useState([]);
  const [seedmoney, setSeedMoney] = useState(0);
  const [count, setCount] = useState(5);

  const [stock_ratio, setStockRatio] = useState([]);
  const [stock_rate, setStockRate] = useState([]);
  const [init_money, setInitMoney] = useState(0);
  const test = useSelector((state) => state.testform);

  useEffect(() => {
    if (!props.stockNames) {
      return;
    }

    setStockName(props.stockNames);
    setStockCodes(props.stockCodes);
    setStockYieldMoneys(props.stockYieldMoneys);
    setSeedMoney(props.seedMoney);
    setCount((prevState) => prevState - props.stockNames.length);

    if (!test) {
      return;
    }
    setStockRatio(test.ratioList);
    setInitMoney(test.init_money);

    if (!props.stock_ratio) {
      return;
    }
    setStockRate(props.stock_ratio);
  }, []);

  return (
    <StockWrap>
      <Lists>
        {props.type === "detail"
          ? stock_name?.map((a, i) => {
              return (
                <StockItem
                  key={i}
                  stock_name={a}
                  stock_codes={stock_codes[i]}
                  stock_yieldmoneys={stock_yieldmoneys[i]}
                  stock_num={i}
                  seedmoney={seedmoney}
                  init_money={init_money}
                  stock_rate={stock_rate}
                />
              );
            })
          : stock_name?.map((a, i) => {
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
              );
            })}

        {[...Array(count)].map((n, index) => {
          return (
            <EmptyList key={index}>
              <Empty>
                실험한 종목이 <br />
                {count}개 뿐이에요
              </Empty>
            </EmptyList>
          );
        })}
      </Lists>
    </StockWrap>
  );
};

export default StockList;
