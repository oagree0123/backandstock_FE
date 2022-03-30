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
} from "../CommentItem/style";

import BasicImage from '../../assets/images/basic_image.svg';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CommentReply = (props) => {
    const dispatch = useDispatch();

    const is_login = useSelector(state => state.user.is_login);
    const user = useSelector(state => state.user.user_info.user_id);

    const [open_reco, setOpenReco] = useState(false);
    const [open_edit, setOpenEdit] = useState(false);
    const [comment, setComment] = useState("");
    const [edit_comment, setEditComment] = useState(props.content);
    const [edit_recomment, setEditReComment] = useState(props.content);

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

    // const clickComment = () => {
    //     if (!is_login) {
    //         MySwal.fire({
    //             title: "로그인 후 댓글 작성이 가능합니다.",
    //             confirmButtonColor: '#0075FF',
    //         })
    //         return;
    //     }

    //     if (!comment) {
    //         MySwal.fire({
    //             title: "댓글 내용을 입력해주세요!",
    //             confirmButtonColor: '#0075FF',
    //         })
    //         return;
    //     }
    //     setComment("");
    //     setOpenReco(false);
    //     dispatch(commentActions.ReaddCommentDB(props.commentId, comment));
    // }

    // const clickDelComment = () => {
    //     if (window.confirm("정말 삭제하시겠습니까?")) {
    //         dispatch(commentActions.deleteCommentDB(props.commentId));
    //     }
    // }

    // const clickEditComment = () => {
    //     dispatch(commentActions.editCommentDB(props.commentId, edit_comment));
    //     setOpenEdit(false);
    // }

    const clickEditReComment = () => {
        dispatch(commentActions.editRecommentDB(props.commentId, edit_recomment));
        setOpenEdit(false);
    }

    const clickDelReComment = (recomment_id) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            dispatch(commentActions.deleteREcommnetDB(props.commentId, edit_recomment));
        }
    }

    return (
        <CommentItemWrap>
            {/* <ImgWrap user_img={props.profileImg ? props.profileImg : BasicImage} /> */}
            <CommentContWrap>
                <ReCommentItemWrap mTop="12px">
                    <ImgWrap user_img={props.profileImg ? props.profileImg : BasicImage} />
                    <CommentContWrap>
                        {open_reedit ?
                            <RecoWrap
                                mTop="8px"
                            >
                                <RecoInput
                                    type="text"
                                    placeholder="댓글을 입력해주세요"
                                    onChange={changeEditRecomment}
                                    value={edit_recomment}
                                />
                                <RecoBtn
                                    onClick={clickEditReComment}
                                >
                                    수정
                                </RecoBtn>
                                <RecoCancleBtn
                                    onClick={() => {
                                        open_reedit(false);
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
                                {user === props.userId &&
                                    <Wrap>
                                        <EditCommnentBtn
                                            onClick={() => {
                                                setOpenReEdit(!open_reedit);
                                                if (open_reco) {
                                                    setOpenReco(false);
                                                }
                                            }}
                                        >
                                            수정
                                        </EditCommnentBtn>
                                        <DelCommnentBtn
                                            onClick={() => {
                                                clickDelReComment(props.commentId)
                                            }}
                                        >
                                            삭제
                                        </DelCommnentBtn>
                                    </Wrap>

                                }
                            </>
                        }
                    </CommentContWrap>
                </ReCommentItemWrap>
            </CommentContWrap>
        </CommentItemWrap>
    );
};

export default CommentReply;