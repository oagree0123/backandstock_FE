import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  ReCommnentBtn,
  RecoWrap,
  ReImgWrap,
  UserNick,
} from "./style";

import BasicImage from '../../assets/images/basic_image.svg';
import ReCommentItem from "../ReCommentItem/ReCommentItem";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CommentItem = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector(state => state.user.is_login);
  const user = useSelector(state => state.user.user_info.user_id);
  const user_img = useSelector(state => state.user.user_info.profile_img);

  const [open_reco, setOpenReco] = useState(false);
  const [open_edit, setOpenEdit] = useState(false);
  const [comment, setComment] = useState("");
  const [edit_comment, setEditComment] = useState(props.content);

  const changeComment = (e) => {
    setComment(e.target.value);
  }

  const changeEditComment = (e) => {
    setEditComment(e.target.value);
  }

  const clickComment = () => {
    if(!is_login) {
      MySwal.fire({
        title: "로그인 후 댓글 작성이 가능합니다.",
        confirmButtonColor: '#0075FF',
      })
      return;
    }

    if(!comment) {
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
    MySwal.fire({
      title: "정말 삭제하시겠습니까?",

      showCancelButton: true,
      confirmButtonColor: '#0075FF',
      cancelButtonColor: '#FF0000',
      confirmButtonText: '삭제',
      cancelButtonText: '취소',
    }).then((result) => {

      if(result.isConfirmed) {
        dispatch(commentActions.deleteCommentDB(props.commentId));
      }
      else {
        return ;
      }
    });
  }

  const clickEditComment = () => {
    dispatch(commentActions.editCommentDB(props.commentId, edit_comment));
    setOpenEdit(false);
  }

  useEffect(() => {
    setEditComment(props.content);
  }, [props.content]);

  return (
    <CommentItemWrap>
      <ImgWrap user_img={props.profileImg ? props.profileImg : BasicImage} />
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
                      MySwal.fire({
                        title: "로그인 후 댓글 작성이 가능합니다.",
                        confirmButtonColor: '#0075FF',
                      })
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

              { user === props.userId &&
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
            <ReImgWrap user_img={user_img ? user_img : BasicImage} />
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
          </RecoWrap>:
          null
        }
        { 
          props.replyList.map((r, i) => {
            return (
              <ReCommentItem 
                comment_id={props.commentId}
                reco_content={r} 
                key={i} 
              /> 
            );
          })
        }
      </CommentContWrap>
    </CommentItemWrap>
  );
};

export default CommentItem;
