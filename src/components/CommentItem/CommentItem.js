import React, { useState } from "react";
import {
  CommentCont,
  CommentContWrap,
  CommentItemWrap,
  ImgWrap,
  RecoBtn,
  RecoCancleBtn,
  RecoInput,
  ReCommnentBtn,
  RecoWrap,
  ReImgWrap,
  UserNick,
} from "./style";

const CommentItem = (props) => {
  const [open_reco, setOpenReco] = useState(false);

  return (
    <CommentItemWrap>
      <ImgWrap />
      <CommentContWrap>
        <UserNick>{props.nickname}</UserNick>
        <CommentCont>
          {props.content}
        </CommentCont>
        <ReCommnentBtn
          onClick={() => {
            setOpenReco(!open_reco);
          }}
        >
          답변
        </ReCommnentBtn>
        { open_reco ?
          <RecoWrap>
            <ReImgWrap />
            <RecoInput />
            <RecoBtn>완료</RecoBtn>
            <RecoCancleBtn>취소</RecoCancleBtn>
          </RecoWrap>:
          null
        }
      </CommentContWrap>
    </CommentItemWrap>
  );
};

export default CommentItem;
