import React, { useState, useEffect } from "react";
import { history } from "../../redux/configStore";
import {
  Btn,
  EditBtn,
  HeaderWrap,
  ResultHeaer,
  ResultWrap,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as portActions } from "../../redux/modules/port";
import { DetailResult, ResultEdit } from "../../components";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Result = () => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  const result_list = useSelector((state) => state.port.list);

  const start_date = useSelector(state => state.testform.start_date);
  const end_date = useSelector(state => state.testform.end_date);
  const router = useSelector(state => state.router);

  const [check_edit, setCheckEdit] = useState(false);

  const click_edit = () => {
    setCheckEdit(!check_edit);
  }

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

  useEffect(() => {
    if(router.action === "POP" && router.location.pathname === "/result") {
      MySwal.fire({
        title: "저장되지 않은 실험결과는 다시 볼 수 없습니다.",
        confirmButtonColor: '#0075FF',
      });
      history.push('/');
      return ;
    }
  }, [router]);

  if(result_list.length === 0) {
    return <></>;
  }
  else {
    return (
      <ResultWrap>
        { check_edit &&
          <ResultEdit
            setCheckEdit={setCheckEdit}
            start_date={start_date}
            end_date={end_date}
          />
        }
        <HeaderWrap>
          <ResultHeaer>실험한 결과를 확인해 볼까요?</ResultHeaer>
          <EditBtn onClick={click_edit}>
            수정하기
          </EditBtn>
        </HeaderWrap>
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
