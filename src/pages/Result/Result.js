import React, { useState, useEffect } from "react";
import { history } from "../../redux/configStore";
import {
  Btn,
  ResultWrap,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as portActions } from "../../redux/modules/port";
import { DetailResult } from "../../components";

const Result = () => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  const result_list = useSelector((state) => state.port.list);

  const click_save = () => {
    dispatch(portActions.savePortDB());
    history.push("/mypage");
  };

  useEffect(() => {
    if(result_list.length === 0) {
      history.push('/');
      return ;
    }
  }, [])

  if(result_list.length === 0) {
    return <></>;
  }
  else {
    return (
      <ResultWrap>
        {result_list && (
          <DetailResult
            type="test"
            result_list={result_list}
          />
        )}
  
        {is_login ? (
          <Btn onClick={click_save}>실험 결과 저장하기</Btn>
        ) : (
          <Btn onClick={click_save} disabled>
            실험 결과 저장하기
          </Btn>
        )}
      </ResultWrap>
    );
  }
};

export default Result;
