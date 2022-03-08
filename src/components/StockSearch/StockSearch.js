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
  Rate,
  RateWrap,
  SearchStock,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import SearchPreview from "../SearchPreview/SearchPreview";

import { actionCreators as testformActions } from "../../redux/modules/testform";

const StockSearch = () => {
  const dispatch = useDispatch();
 
  const [is_open, setIsOpen] = useState(false);
  const [ratio, setRatio] = useState("");
  const [stock_search, setStockSearch] = useState("");
  const [stock_name, setStockName] = useState("");
  const [stock_code, setStockCode] = useState("");


  let search_list = {
    stockName : ["삼성전자", "삼성전기", "삼성엔지니어링", "삼성엔지니어링", "삼성엔지니어링" ],
    stockCode : ["000100", "000200", "000300", "000300", "000300"]
  }

  return (
    <StockWrap>
      <SearchLeft>
        <SearchTitle>자산 비율</SearchTitle>
        <RateWrap>
          <StockRate
            placeholder="비율"
            type="number"
            onChange={(e) => {
              setRatio(e.target.value);
            }}
          >
          </StockRate>
          <Rate>%</Rate>
        </RateWrap>
      </SearchLeft>
      <SearchRight>
        <SearchTitle>실험하고 싶은 자산</SearchTitle>
        <SearchStock>
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
          <SearchBtn
            onClick={()=> {
              dispatch(testformActions.setStock(ratio, stock_name, stock_code));
            }}
          >
            추가
          </SearchBtn>
        </SearchStock>
      </SearchRight>
    </StockWrap>
  );
};

export default StockSearch;
