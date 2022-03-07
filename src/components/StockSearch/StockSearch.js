import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  StockRate,
  StockWrap,
  SearchWrap,
  SearchInput,
  SearchBtn,
  PreviewListWrap,
  SearchLeft,
  SearchRight,
  SearchTitle,
} from "./style";
import { useDispatch } from "react-redux";
import SearchPreview from "../SearchPreview/SearchPreview";

const StockSearch = () => {
  const dispatch = useDispatch();
 
  const [is_open, setIsOpen] = useState(false);
  const [ratio, setRatio] = useState();
  const [stock_search, setStockSearch] = useState("");
  const [stock_name, setStockName] = useState("");
  const [stock_code, setStockCode] = useState("");
  const [stock_list, setStockList] = useState({});

  let search_list = {
    stockName : ["삼성전자", "삼성전기", "삼성엔지니어링", "삼성엔지니어링", "삼성엔지니어링" ],
    stockCode : ["000100", "000200", "000300", "000300", "000300"]
  }

  const searchStock = async (search_name) => {
    if (Number(search_name)) {
      let list = await axios
        .get(`url/stock/search`, {
          params: {
            keyword: search_name,
            type: "code"
          }
      });
      setStockList(list);
    }
    else {
      let list = await axios
        .get(`url/stock/search`, {
          params: {
            keyword: search_name,
            type: "name"
          }
      });
      setStockList(list);
    }
  }

  useEffect(() => {
    console.log(stock_name);
    console.log(stock_code);
  }, [stock_name, stock_code])

  return (
    <StockWrap>
      <SearchLeft>
        <SearchTitle>자산 비율</SearchTitle>
        <StockRate
          placeholder="비율"
          type="number"
          onChange={(e) => {
            setRatio(e.target.value);
          }}
        />
      </SearchLeft>
      <SearchRight>
        <SearchTitle>실험하고 싶은 자산</SearchTitle>
        <SearchWrap>
          <SearchInput
            type="text"
            placeholder="자산을 검색해 주세요"
            onChange={(e) => {
              // 변경 시 검색
              setStockSearch(e.target.value);
              //searchStock(e.target.value)
              if(e.target.value==="") {
                return;
              }
              setIsOpen(true)
            }}
            value={stock_search}
          />
          {is_open &&
            <PreviewListWrap>
              {search_list.stockName.map((s, i) => {
                return (
                  <SearchPreview 
                    key={i} 
                    stock_name={s} 
                    stock_code={search_list.stockCode[i]} 
                    _onClick={() => {
                      setStockName(s);
                      setStockSearch(s);
                      setStockCode(search_list.stockCode[i]);
                      setIsOpen(false);
                    }}
                  />
                );
              })
              }
            </PreviewListWrap>
          }
        </SearchWrap>
        {/* <SearchBtn>추가하기</SearchBtn> */}
      </SearchRight>
    </StockWrap>
  );
};

export default StockSearch;
