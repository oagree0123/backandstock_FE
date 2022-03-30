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
  MonthWrap,
  TitleWrap,
  RebalanceWrap,
  RebalanceSelect,
  SelectItem,
  RebalanceCont,
  RebalanceTitle,
} from "./style";

import { actionCreators as testformActions } from "../../redux/modules/testform";
import { actionCreators as portActions } from "../../redux/modules/port";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import RebalanceInfo from "../RebalanceInfo/RebalanceInfo";

const MySwal = withReactContent(Swal);

const BackTestForm = () => {
  const dispatch = useDispatch();

  const [init_money, setInitMoney] = useState("");
  const [check_money, setCheckMoney] = useState(true);

  const [rebalance, setRebalance] = useState("없음");
  const [open_select, setOpenSelect] = useState(false);

  const change_Money = (e) => {
    const num_reg = /\d/;

    if (!num_reg.test(e.target.value) && e.target.value !== "") {
      e.target.value = "";
      MySwal.fire({
        title: "숫자만 입력해주세요.",
        confirmButtonColor: '#0075FF',
      })
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

  const click_select = (value) => {
    setRebalance(value)
    setOpenSelect(false);
  }

  return (
    <FormWrap>
      <FormTop>
        <FormLeft>
          <MonthWrap margin_bottom="40px">
            <FormTitle>실험 시작</FormTitle>
            <MonthPicker type="start" />
          </MonthWrap>
            <FormTitle>실험 종료</FormTitle>
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
          <TitleWrap>
            <RebalanceTitle>리벨런싱 주기</RebalanceTitle>
            <RebalanceInfo />
          </TitleWrap>
          <RebalanceWrap
            onClick={() => {
              setOpenSelect(!open_select);
            }}
          >
            <RebalanceCont>{rebalance}</RebalanceCont>
            { open_select &&
              <RebalanceSelect>
                <SelectItem
                  onClick={() => {
                    click_select("없음")
                    dispatch(testformActions.setRebalance(0));
                  }}
                >
                  없음
                </SelectItem>
                <SelectItem
                  onClick={() => {
                    click_select("1 개월")
                    dispatch(testformActions.setRebalance(1));
                  }}
                >
                  1 개월
                </SelectItem>
                <SelectItem
                  onClick={() => {
                    click_select("3 개월")
                    dispatch(testformActions.setRebalance(3));
                  }}
                >
                  3 개월
                </SelectItem>
                <SelectItem
                  onClick={() => {
                    click_select("6 개월")
                    dispatch(testformActions.setRebalance(6));
                  }}
                >
                  6 개월
                </SelectItem>
              </RebalanceSelect>
            }
          </RebalanceWrap>
        </FormRight>
      </FormTop>
      <FormBottom>
        <StockSearch />
      </FormBottom>
      <BackTestList />
      <BackTextBtn
        onClick={() => {
          try {
            dispatch(portActions.getResultDB());
          }
          catch(err) {
            console.log(err);
          }
        }}
      >
        실험 시작하기
      </BackTextBtn>
    </FormWrap>
  );
};

export default BackTestForm;
