import React from "react";
import {
  CommentCont,
  CommentContWrap,
  CommentItemWrap,
  ImgWrap,
  ReCommnentBtn,
  UserNick,
} from "./style";

const CommentItem = (props) => {
  return (
    <CommentItemWrap>
      <ImgWrap />
      <CommentContWrap>
        <UserNick>한강물찬가요</UserNick>
        <CommentCont>
          현금으로 매달 배당 받을 수 있는 포폴을 만들고 싶은데 어떻게 하는 것이
          좋을까요? 다들 배당 종목은 몇프로 떨어지셨을 때 손절을 하시나요? 손절
          기준 정하기가 너무 어렵네요 ㅠ
        </CommentCont>
        <ReCommnentBtn>답변</ReCommnentBtn>
      </CommentContWrap>
    </CommentItemWrap>
  );
};

export default CommentItem;
