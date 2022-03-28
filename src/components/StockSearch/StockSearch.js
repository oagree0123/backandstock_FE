import React, { useEffect, useState } from "react";
import axios from "axios";
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

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const StockSearch = () => {
  const dispatch = useDispatch();

  const [is_open, setIsOpen] = useState(false);
  const [ratio, setRatio] = useState("");
  const [stock_search, setStockSearch] = useState("");
  const [stock_name, setStockName] = useState("");
  const [stock_code, setStockCode] = useState("");
  const [search_list, setSearchList] = useState([]);

  const onChangeRatio = (e) => {
    console.log(e.target.value);
    const num_reg = /\d/;

    if (!num_reg.test(e.target.value) && e.target.value !== "") {
      e.target.value = "";
      MySwal.fire({
        title: "숫자만 입력해주세요.",
        confirmButtonColor: '#0075FF',
      });
      return;
    }

    if (e.target.value > 100 || e.target.value < 0) {
      MySwal.fire({
        title: "100이하의 자연수를 입력해주세요.",
        confirmButtonColor: '#0075FF',
      });
      e.target.value = ratio;
      return;
    }

    if (
      Number.isInteger(parseInt(e.target.value)) ||
      e.target.value === "0" ||
      e.target.value === ""
    ) {
      setRatio(e.target.value);
    } else {
      MySwal.fire({
        title: "정수의 수를 입력해주세요.",
        confirmButtonColor: '#0075FF',
      });
    }
  };

  const clickAddStock = () => {
    if (!(ratio <= 100 && ratio > 0)) {
      MySwal.fire({
        title: "비율을 다시 확인해주세요.",
        confirmButtonColor: '#0075FF',
      });
      return;
    }

    if (ratio === "") {
      MySwal.fire({
        title: "비율을 입력해주세요.",
        confirmButtonColor: '#0075FF',
      });
      return;
    }
    if (stock_name === "" || search_list === "") {
      MySwal.fire({
        title: "종목을 선택해주세요.",
        confirmButtonColor: '#0075FF',
      });
      return;
    }

    dispatch(testformActions.setStock(ratio, stock_name, stock_code));
    setStockSearch("");
    setStockName("");
    setRatio("");
  };

  const searchStock = async (search_name) => {
    if (Number(search_name)) {
      let list = await axios.get(`https://yuseon.shop/stocks`, {
        params: {
          keyword: search_name,
          type: "code",
        },
      });
      setSearchList(list.data);
    } else {
      let list = await axios.get(`https://yuseon.shop/stocks`, {
        params: {
          keyword: search_name,
          type: "name",
        },
      });
      setSearchList(list.data);
    }
  };

  return (
    <StockWrap>
      <SearchLeft>
        <SearchTitle>자산 비율</SearchTitle>
        <RateWrap>
          <StockRate
            placeholder="비율"
            type="text"
            onChange={onChangeRatio}
            value={ratio}
          ></StockRate>
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
                setStockName("");
                searchStock(e.target.value);
                if (e.target.value === "") {
                  return;
                }
                setIsOpen(true);
              }}
              value={stock_search}
            />
            {is_open && (
              <PreviewListWrap>
                {search_list.map((s, i) => {
                  return (
                    <SearchPreview
                      key={i}
                      stock_name={s.stockName}
                      stock_code={s.stockCode}
                      _onClick={() => {
                        setStockName(s.stockName);
                        setStockSearch(s.stockName);
                        setStockCode(s.stockCode);
                        setIsOpen(false);
                      }}
                    />
                  );
                })}
              </PreviewListWrap>
            )}
          </SearchWrap>
          <SearchBtn onClick={clickAddStock}>추가</SearchBtn>
        </SearchStock>
      </SearchRight>
    </StockWrap>
  );
};

export default StockSearch;
