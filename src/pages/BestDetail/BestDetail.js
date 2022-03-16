import React, { useEffect } from "react";
import {
  CommentList,
  DetailResult,
} from "../../components";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as portActions } from "../../redux/modules/port";
import {
  BestDetailWrap,
  CancleBtn,
  CommentBtn,
  CommentCnt,
  CommentInputWrap,
  CommentWrap,
  CommnetInput,
  ContWrap,
  UserImg,
} from "./style";

import { test_data } from "./testData";

const BestDetail = (props) => {
  const dispatch = useDispatch();

  const port_id = useParams();

  let result_list = test_data.portBacktestingCal;

  useEffect(() => {
    dispatch(portActions.getPortOneDB(port_id.id))
  }, []);

  return (
    <BestDetailWrap>
      <ContWrap>
        <DetailResult type="Best" result_list={result_list} />
        {/* <InfoWrap>
          <TopInfo 
            nickname={test_data.nickname}
            type="Best" 
            port_list={test_data.portBacktestingCal}
          />
        </InfoWrap>

        <LineChartWrap>
            <LineChart 
              margin={{
                top: 32, 
                right: 120, 
                bottom: 64, 
                left: 100
              }}
              line_data={data} 
            />
          </LineChartWrap>
          
          <BarChartWrap>
            <BarChart 
              width={880}
              height={300}
              margin={{
                top: 32, 
                right: 120, 
                bottom: 64, 
                left: 100
              }}
              translateX={120}
              translateY={38}
              bar_data={bar_data} 
              tick_font={12}
            />
          </BarChartWrap>
          <StockList {...result_list}></StockList> */}
      </ContWrap>

      <CommentWrap>
        <CommentCnt>댓글 {test_data.likesCnt}</CommentCnt>
        <CommentInputWrap>
          <UserImg />
          <CommnetInput />
          <CommentBtn>완료</CommentBtn>
          <CancleBtn>취소</CancleBtn>
        </CommentInputWrap>
        <CommentList />
      </CommentWrap>
    </BestDetailWrap>
  );
};

export default BestDetail;
