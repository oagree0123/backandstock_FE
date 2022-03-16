import React, { useEffect, useState } from "react";
import {
  CommentList,
  DetailResult,
} from "../../components";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as portActions } from "../../redux/modules/port";
import { actionCreators as commentActions } from "../../redux/modules/comment";
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
import { useSelector } from "react-redux";

const BestDetail = (props) => {
  const dispatch = useDispatch();

  const port_id = useParams();
  const result_list = useSelector(state => state.port.port_one.portBacktestingCal);
  const comment_list = useSelector(state => state.comment.list);

  useEffect(() => {
    dispatch(portActions.getPortOneDB(port_id.id))
    dispatch(commentActions.getCommentDB(port_id.id));
  }, []);

  return (
    <BestDetailWrap>
      <ContWrap>
      {
        result_list &&
        <DetailResult 
          nickname={test_data.nickname}
          type="Best" 
          result_list={result_list} 
        />
      }
      </ContWrap>

      <CommentWrap>
        <CommentCnt>댓글 {test_data.likesCnt}</CommentCnt>
        <CommentList port_id={port_id.id} comment_list={comment_list} />
      </CommentWrap>
    </BestDetailWrap>
  );
};

export default BestDetail;
