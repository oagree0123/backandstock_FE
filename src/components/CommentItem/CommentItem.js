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
  Wrap,
} from "./style";

import BasicImage from '../../assets/images/basic_image.svg';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CommentReply from "../CommentReply/CommentReply";

const MySwal = withReactContent(Swal);

const CommentItem = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector(state => state.user.is_login);
  const user = useSelector(state => state.user.user_info.user_id);

  const [open_reco, setOpenReco] = useState(false);
  const [open_edit, setOpenEdit] = useState(false);
  const [comment, setComment] = useState("");
  const [edit_comment, setEditComment] = useState(props.content);
  const [edit_recomment, setEditReComment] = useState(props);

  const [open_reedit, setOpenReEdit] = useState(false);

  const changeComment = (e) => {
    console.log(e.target.value.length)
    if (e.target.value.length > 100) {
      MySwal.fire({
        title: "댓글은 100글자 까지 가능합니다.",
        confirmButtonColor: '#0075FF',
      })
      return;
    }
    setComment(e.target.value);
  }

  const changeEditComment = (e) => {
    if (e.target.value.length > 100) {
      MySwal.fire({
        title: "댓글은 100글자 까지 가능합니다.",
        confirmButtonColor: '#0075FF',
      })
      return;
    }
    setEditComment(e.target.value);
  }

  const changeEditRecomment = (e) => {
    if (e.target.value.length > 100) {
      MySwal.fire({
        title: "댓글은 100글자 까지 가능합니다.",
        confirmButtonColor: '#0075FF',
      })
      return;
    }
    setEditReComment(e.target.value);
  }

  const clickComment = () => {
    if (!is_login) {
      MySwal.fire({
        title: "로그인 후 댓글 작성이 가능합니다.",
        confirmButtonColor: '#0075FF',
      })
      return;
    }

    if (!comment) {
      MySwal.fire({
        title: "댓글 내용을 입력해주세요!",
        confirmButtonColor: '#0075FF',
      })
      return;
    }
    setComment("");
    setOpenReco(false);
    dispatch(commentActions.ReaddCommentDB(props.commentId, comment));
  }

  const clickDelComment = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(commentActions.deleteCommentDB(props.commentId));
    }
  }

  const clickEditComment = () => {
    dispatch(commentActions.editCommentDB(props.commentId, edit_comment));
    setOpenEdit(false);
  }

  const clickEditReComment = () => {
    dispatch(commentActions.editRecommentDB(props.commentId, edit_recomment));
    setOpenEdit(false);
  }

  const clickDelReComment = (recomment_id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(commentActions.deleteREcommnetDB(props.commentId, recomment_id));
    }
  }

  return (
    <CommentItemWrap>
      <ImgWrap user_img={props.profileImg ? props.profileImg : BasicImage} />
      <CommentContWrap>
        {open_edit ?
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
          </RecoWrap> :
          <>
            <UserNick>{props.nickname}</UserNick>
            <CommentCont>
              {props.content}
            </CommentCont>
            <BtnWrap>
              <ReCommnentBtn
                onClick={() => {
                  if (!is_login) {
                    MySwal.fire({
                      title: "로그인 후 댓글 작성이 가능합니다.",
                      confirmButtonColor: '#0075FF',
                    })
                    return;
                  }

                  setOpenReco(!open_reco);
                  if (open_edit) {
                    setOpenEdit(false);
                  }
                }}
              >
                답글 달기
              </ReCommnentBtn>

              {user === props.userId &&
                <>
                  <EditCommnentBtn
                    onClick={() => {
                      setOpenEdit(!open_edit);
                      if (open_reco) {
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
        {open_reco ?
          <RecoWrap>
            <ReImgWrap user_img={user.profile_img ? user.profile_img : BasicImage} />
            <RecoInput
              type="text"
              placeholder="댓글을 입력해주세요"
              onChange={changeComment}
              value={comment}
            />
            <RecoBtn
              onClick={clickComment}
            >
              작성
            </RecoBtn>
            <RecoCancleBtn
              onClick={() => {
                setOpenReco(false);
                setComment("");
              }}
            >
              취소
            </RecoCancleBtn>
          </RecoWrap> :
          null
        }
        {
          props.replyList.map((r, i) => {
            return (

              <CommentReply key={i} {...r}></CommentReply>
            );
          })
        }

      </CommentContWrap>

    </CommentItemWrap>
  );
};

export default CommentItem;