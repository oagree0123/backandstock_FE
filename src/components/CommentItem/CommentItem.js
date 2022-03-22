import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../../redux/modules/comment";
import {
  BtnWrap,
  CommentCont,
  CommentContWrap,
  CommentItemWrap,
  DelCommnentBtn,
  EditCommnentBtn,
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

  const is_login = useSelector(state => state.user.is_login);
  const user = useSelector(state => state.user.user_info.nickname);

  const [open_reco, setOpenReco] = useState(false);
  const [open_edit, setOpenEdit] = useState(false);
  const [comment, setComment] = useState("");
  const [edit_comment, setEditComment] = useState(props.content);
  
  const [open_reedit, setOpenReEdit] = useState(false);

  const changeComment = (e) => {
    setComment(e.target.value);
  }

  const changeEditComment = (e) => {
    setEditComment(e.target.value);
  }

  const clickComment = () => {
    if(!is_login) {
      window.alert("로그인 후 댓글 작성이 가능합니다.")
      return;
    }

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

  const clickEditComment = () => {
    dispatch(commentActions.editCommentDB(props.commentId, edit_comment));
    setOpenEdit(false);
  }

  const clickDelReComment = (recomment_id) => {
    if( window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(commentActions.deleteREcommnetDB(props.commentId, recomment_id));
    }
  }

  const clickEditReComment = () => {
    
  }

  return (
    <CommentItemWrap>
        { props.profileImg ?
          <ImgWrap user_img={props.profileImg} />:
          <ImgWrap user_img="" />
        }
      <CommentContWrap>
        { open_edit ?
          <RecoWrap
            mTop="8px"
          >
            <RecoInput 
              type="text"
              placeholder="댓글을 입력해주세요"
              onChange={changeEditComment} 
              value={edit_comment}
            />
            <RecoBtn
              onClick={clickEditComment}
            >
              수정
            </RecoBtn>
            <RecoCancleBtn
              onClick={() => {
                setOpenEdit(false);
                setComment("");
              }}
            >
              취소
            </RecoCancleBtn>
          </RecoWrap>:
          <>
            <UserNick>{props.nickname}</UserNick>
            <CommentCont>
              {props.content}
            </CommentCont>
            <BtnWrap>
                <ReCommnentBtn
                  onClick={() => {
                    if(!is_login) {
                      window.alert("로그인 후 댓글 작성이 가능합니다.")
                      return;
                    }

                    setOpenReco(!open_reco);
                    if(open_edit) {
                      setOpenEdit(false);
                    }
                  }}
                >
                  답글 달기
                </ReCommnentBtn>

              { user === props.nickname &&
                <>
                  <EditCommnentBtn
                    onClick={() => {
                      setOpenEdit(!open_edit);
                      if(open_reco) {
                        setOpenReco(false);
                      }
                    }}
                  >
                    수정
                  </EditCommnentBtn>
                  <DelCommnentBtn
                    onClick={clickDelComment}
                  >
                    삭제
                  </DelCommnentBtn>
                </>
              }

            </BtnWrap>
          </>
        }
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
                setOpenReco(false);
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
                { r.profileImg ?
                  <ImgWrap user_img={r.profileImg} />:
                  <ImgWrap user_img="" />
                }
                <CommentContWrap>
                  <UserNick>{r.nickname}</UserNick>
                  <CommentCont>
                    {r.content}
                  </CommentCont>
                  { user === r.nickname &&
                    <>
                    <DelCommnentBtn
                      onClick={() => {
                        clickDelReComment(r.commentId)
                      }}
                    >
                      삭제
                    </DelCommnentBtn>
                    </>
                  }
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
