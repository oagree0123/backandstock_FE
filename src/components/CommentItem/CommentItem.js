import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../../redux/modules/comment";
import {
  BtnWrap,
  CommentCont,
  CommentContWrap,
  CommentItemWrap,
  DelCommnentBtn,
  ImgWrap,
  RecoBtn,
  RecoCancleBtn,
  RecoInput,
  ReCommentItemWrap,
  ReCommnentBtn,
  RecoWrap,
  ReImgWrap,
  UserNick,
} from "./style";

const CommentItem = (props) => {
  const dispatch = useDispatch();

  const [open_reco, setOpenReco] = useState(false);
  const [comment, setComment] = useState("");

  const changeComment = (e) => {
    setComment(e.target.value);
  }

  const clickComment = () => {
    if(!comment) {
      window.alert("댓글을 작성해주세요!")
      return;
    }
    setComment("");
    setOpenReco(false);
    dispatch(commentActions.ReaddCommentDB(props.commentId, comment));
  }
  
  const clickDelComment = () => {
    if( window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(commentActions.deleteCommentDB(props.commentId));
    }
  }

  const clickDelReComment = (comment_id) => {
    if( window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(commentActions.deleteCommentDB(comment_id));
    }
  }

  return (
    <CommentItemWrap>
        { props.profile_img ?
          <ImgWrap userImg={props.profile_img} />:
          <ImgWrap userImg="" />
        }
      <CommentContWrap>
        <UserNick>{props.nickname}</UserNick>
        <CommentCont>
          {props.content}
        </CommentCont>
        <BtnWrap>
          <ReCommnentBtn
            onClick={() => {
              setOpenReco(!open_reco);
            }}
          >
            답변
          </ReCommnentBtn>
          <DelCommnentBtn
            onClick={clickDelComment}
          >
            삭제
          </DelCommnentBtn>
        </BtnWrap>
        { open_reco ?
          <RecoWrap>
            <ReImgWrap />
            <RecoInput 
              type="text"
              placeholder="댓글을 입력해주세요"
              onChange={changeComment} 
              value={comment}
            />
            <RecoBtn
              onClick={clickComment}
            >
              완료
            </RecoBtn>
            <RecoCancleBtn
              onClick={() => {
                setComment("");
              }}
            >
              취소
            </RecoCancleBtn>
          </RecoWrap>:
          null
        }
        { 
          props.replyList.map((r, i) => {
            return (
              <ReCommentItemWrap mTop="12px" key={i}>
                { props.profile_img ?
                  <ImgWrap userImg={props.profile_img} />:
                  <ImgWrap userImg="" />
                }
                <CommentContWrap>
                  <UserNick>{r.nickname}</UserNick>
                  <CommentCont>
                    {r.content}
                  </CommentCont>
                  <DelCommnentBtn
                    onClick={() => {
                      clickDelReComment(r.commentId)
                    }}
                  >
                    삭제
                  </DelCommnentBtn>
                </CommentContWrap>
              </ReCommentItemWrap> 
            );
          })
        }
      </CommentContWrap>
    </CommentItemWrap>
  );
};

export default CommentItem;
