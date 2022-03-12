import React from 'react';
import StockItem from './StockItem.js';
import { StockWrap, Lists, ListTitle, ListTop, TopStockName, TopStockRate, TopStockPrice, ListWrap } from '../Result/style';



const StockList = (props) => {
    const stock_name = props.stockNames
    const stock_codes = props.stockCodes
    const stock_yieldmoneys = props.stockYieldMoneys
    const seedmoney = props.seedMoney
    console.log(stock_name);


    return (
        <StockWrap>
            <ListTitle>종목별 최종 수익금</ListTitle>
            <ListTop>
                <ListWrap>
                    <TopStockName>종목명</TopStockName>
                    <TopStockRate>최종 자산</TopStockRate>
                    <TopStockPrice>수익금</TopStockPrice>
                </ListWrap>
            </ListTop>


            <Lists>
                {stock_name?.map((a, i) => {

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
                })}
            </Lists>

        </StockWrap>






    );



};




export default StockList;


