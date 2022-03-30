import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../../redux/modules/comment";
import BasicImage from '../../assets/images/basic_image.svg';

import {
  RecoWrap,
  RecoInput,
  RecoBtn,
  RecoCancleBtn,
  BtnWrap,
  CommentCont,
  CommentContWrap,
  DelCommnentBtn,
  EditCommnentBtn,
  ReImgWrap,
  ReCommentItemWrap,
  UserNick,
} from "./style";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ReCommentItem = (props) => {
  const dispatch = useDispatch();

  const reco_content = props.reco_content

  console.log(reco_content);

  const user = useSelector(state => state.user.user_info.user_id);

  const [edit_recomment, setReEditComment] = useState(reco_content.content);
  const [open_reedit, setOpenReEdit] = useState(false);

  const changeReEditComment = (e) => {
    setReEditComment(e.target.value);
  }

  const clickReEditComment = () => {
    dispatch(commentActions.editRecommentDB(props.comment_id, reco_content.commentId, edit_recomment));
    setOpenReEdit(false);
  }

  const clickDelReComment = (recomment_id) => {
    MySwal.fire({
      title: "정말 삭제하시겠습니까?",

      showCancelButton: true,
      confirmButtonColor: '#0075FF',
      cancelButtonColor: '#FF0000',
      confirmButtonText: '삭제',
      cancelButtonText: '취소',
    }).then((result) => {

      if(result.isConfirmed) {
        dispatch(commentActions.deleteREcommnetDB(props.comment_id, recomment_id));
      }
      else {
        return ;
      }
    });
  }

  useEffect(() => {
    setReEditComment(reco_content.content);
  }, [reco_content]);

  return (
    <ReCommentItemWrap mTop="12px">
      { open_reedit ? 
        <RecoWrap
          mTop="0px"
        >
          <ReImgWrap user_img={reco_content.profileImg ? reco_content.profileImg : BasicImage} />
          <RecoInput 
            type="text"
            placeholder="댓글을 입력해주세요"
            onChange={changeReEditComment} 
            value={edit_recomment}
          />
          <RecoBtn
            onClick={clickReEditComment}
          >
            수정
          </RecoBtn>
          <RecoCancleBtn
            onClick={() => {
              setOpenReEdit(false);
              setReEditComment(reco_content.content);
            }}
          >
            취소
          </RecoCancleBtn>
        </RecoWrap> :
        <>
          <ReImgWrap user_img={reco_content.profileImg ? reco_content.profileImg : BasicImage} />
          <CommentContWrap>
            <UserNick>{reco_content.nickname}</UserNick>
            <CommentCont>{reco_content.content}</CommentCont>
            {user === reco_content.userId && (
              <BtnWrap>
                <EditCommnentBtn
                  onClick={() => {
                    setOpenReEdit(!open_reedit);
                  }}
                >
                  수정
                </EditCommnentBtn>
                <DelCommnentBtn
                  onClick={() => {
                    clickDelReComment(reco_content.commentId);
                  }}
                >
                  삭제
                </DelCommnentBtn>
              </BtnWrap>
            )}
          </CommentContWrap>
        </>
      }
    </ReCommentItemWrap>
  );
};

export default ReCommentItem;
