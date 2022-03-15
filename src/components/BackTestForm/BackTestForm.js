import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BackTestList from "../BackTestList/BackTestList";
import MonthPicker from "../MonthPicker/MonthPicker";
import StockSearch from "../StockSearch/StockSearch";
import {
  FormBottom,
  FormInput,
  FormLeft,
  FormRight,
  FormTitle,
  FormTop,
  FormWrap,
  MoneyWrap,
  Won,
  BackTextBtn,
  ErrorText,
} from "./style";

import { actionCreators as testformActions } from "../../redux/modules/testform";
import { actionCreators as portActions } from "../../redux/modules/port";
import { useHistory } from "react-router-dom";

const BackTestForm = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.testform);
  const history = useHistory();

  const [init_money, setInitMoney] = useState("");
  const [check_money, setCheckMoney] = useState(true);

  const change_Money = (e) => {
    const num_reg = /\d/;

    if (!num_reg.test(e.target.value) && e.target.value !== "") {
      e.target.value = "";
      window.alert("숫자만 입력해주세요.");
      return;
    }
    setInitMoney(e.target.value);

    if (e.target.value < 100 || e.target.value > 100000) {
      setCheckMoney(false);
    }
    else {
      setCheckMoney(true);
    }
    dispatch(testformActions.setMoney(e.target.value));
  };

  return (
    <FormWrap>
      <FormTop>
        <FormLeft>
          <FormTitle>실험 기간</FormTitle>
          <MonthPicker type="start" />
          <MonthPicker type="end" />
        </FormLeft>
        <FormRight>
          <FormTitle>실험 금액</FormTitle>
          <MoneyWrap>
            <FormInput
              type="text"
              placeholder="금액을 입력해 주세요"
              onChange={change_Money}
              value={init_money}
            />
            <Won>만원</Won>
            {!check_money &&
              <ErrorText>실험금액은 100만원 이상 100,000만원 이하만 가능해요</ErrorText>
            }
          </MoneyWrap>
        </FormRight>
      </FormTop>
      <FormBottom>
        <StockSearch />
      </FormBottom>
      <BackTestList />
      <BackTextBtn
        onClick={() => {
          dispatch(portActions.getResultDB());
        }}
      >
        실험 시작하기
      </BackTextBtn>
    </FormWrap>
  );
};

export default BackTestForm;
