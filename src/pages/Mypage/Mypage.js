import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CompareRank, CompareResult } from "../../components";
import PortCardList from "../../components/PortCardList/PortCardList";
import { actionCreators as portActions } from "../../redux/modules/port";
import { actionCreators as communityActions } from "../../redux/modules/community";

import {
  MypageWrap,
  ChartWrap,
  ChartTitle,
  MypageInfoWrap,
  MypageHead,
  ChartBtnWrap,
  CompareBtn,
  DeleteBtn,
  NoneChartWrap,
  NoneChartText,
} from "./style";
import CompareLineResult from "../../components/CompareLineResult/CompareLineResult";

const Mypage = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user_info);
  const port_list = useSelector((state) => state.port.port_list);
  const compare_list = useSelector((state) => state.port.compare_list);
  const compare_item = useSelector((state) => state.port.compare_item);
  const compare_data = useSelector((state) => state.port.compare_data);

  const [com_lenght, setComLenght] = useState(compare_list.length);
  console.log(com_lenght);

  const [check_compare, setCheckCompare] = useState(false);
  const [compare_idx, setCompareIdx] = useState([]);

  const click_compare = () => {
    if (com_lenght < 2) {
      window.alert("실험을 2개 이상 선택해주세요!");
      return;
    }

    if (port_list) {
      setCompareIdx([]);
      compare_list.map((c, i) => {
        let idx = port_list.findIndex((p, j) => {
          return p.portId === c;
        });

        setCompareIdx((prev) => [...prev, idx + 1]);
      });
    }

    dispatch(portActions.getCompareDB());
    setCheckCompare(true);
  };

  const click_delete = () => {
    if (compare_list.length >= 2) {
      window.alert("하나의 실험만 선택해주세요!");
      return;
    }

    if (compare_list.length < 1) {
      window.alert("실험을 선택해주세요!");
      return;
    }

    if (window.confirm("정말 삭제하시겠습니까?")) {
      compare_list.map((c) => {
        dispatch(portActions.deletePortDB(c));
        dispatch(communityActions.deletePost(c));
      });
    }
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    dispatch(portActions.getMyPortDB(user.user_id));
    dispatch(portActions.setInitCompare());
  }, []);

  useEffect(() => {
    setComLenght(compare_list.length);
  }, [compare_list])

  return (
    <MypageWrap>
      <MypageHead>
        실험한 자산들을 <br />
        비교해볼까요?
      </MypageHead>
      <ChartBtnWrap>
        <CompareBtn
          onClick={() => {
            click_compare();
          }}
        >
          비교하기
        </CompareBtn>
        <DeleteBtn onClick={click_delete}>삭제하기</DeleteBtn>
      </ChartBtnWrap>
      <PortCardList port_list={port_list} />

      <ChartTitle>실험 월별 비교</ChartTitle>
      <ChartWrap>
        {check_compare ? (
          <>
          <CompareLineResult compare_idx={compare_idx} port_list={compare_item}/>
          </>
        ) : (
          <NoneChartWrap>
            <NoneChartText>
              실험을 <br />
              아직 비교하지
              <br />
              않았습니다
            </NoneChartText>
          </NoneChartWrap>
        )}
      </ChartWrap>

      {check_compare
        ? compare_data && (
            <MypageInfoWrap>
              <CompareRank port_list={port_list} compare_data={compare_data} />
            </MypageInfoWrap>
          )
        : null}
    </MypageWrap>
  );
};

export default Mypage;
