import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MonthPicker from '../MonthPicker/MonthPicker';
import { CloseBtn, ContBody, ContHeader, ContTitle, ContWrap, Editdesc, EditHeader, InitMoneyInput, MoneyWrap, MonthWrap, ResultEditWrap, Won, ErrorText, TestEditBtn } from './style';
import close_btn from '../../assets/images/close_btn.svg'
import { actionCreators as testformActions } from '../../redux/modules/testform';
import { actionCreators as portActions } from '../../redux/modules/port';

const ResultEdit = (props) => {
  const dispatch = useDispatch();

  const start_date = props.start_date;
  const end_date = props.end_date;

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
    <ResultEditWrap>
      <ContWrap>
        <CloseBtn
          src={close_btn}
          alt="close-btn"
          onClick={() => {
            props.setCheckEdit(false)
          }}
        />
        <ContHeader>
          <EditHeader>실험 정보 수정</EditHeader>
          <Editdesc>정보 수정은 실험기간과 금액만 수정이 가능해요</Editdesc>
        </ContHeader>
        <ContBody>
          <MonthWrap>
            <ContTitle>실험 기간</ContTitle>
            <MonthPicker 
              type="edit_start" 
              edit_year={Number(moment(start_date).format('YYYY'))} 
              edit_month={Number(moment(start_date).format('MM'))} 
            />
            <MonthPicker
              type="edit_end" 
              edit_year={Number(moment(end_date).format('YYYY'))} 
              edit_month={Number(moment(end_date).format('MM'))} 
            />
          </MonthWrap>
          <ContTitle>실험 금액</ContTitle>
          <MoneyWrap>
            <InitMoneyInput
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
        </ContBody>
        <TestEditBtn
          onClick={() => {
            dispatch(portActions.getResultDB());
            props.setCheckEdit(false)
          }}
        >
          수정하기
        </TestEditBtn>
      </ContWrap>
    </ResultEditWrap>
  );
};

export default ResultEdit;