import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import axios from "axios";
import { getToken } from "../../shared/token";

// actions
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";

// action creators
const getComment = createAction(GET_COMMENT, (commentList) => ({
    commentList,
}));

const addComment = createAction(ADD_COMMENT, (comment) => ({
    comment,
}));

const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
    commentId,
}));
const editComment = createAction(
    EDIT_COMMENT,
    (post_id, comment, comment_id) => ({
        post_id,
        comment,
        comment_id,
    })
);


const initialState = {
    commentList: []
}

// middlewares
const addCommentDB = (uid, post_id, title, content, img) => {
    return function (dispatch, getState, { history }) {
        // const uid = getState().user.user.userid;
        console.log("uid: ", uid);
        console.log("pid: ", post_id);
        console.log("title: ", title);
        console.log("comment: ", content);
        console.log("img: ", img);

        const token_key = `${localStorage.getItem("token")}`;

        const form = new FormData();
        form.append("file", img);
        axios
            .post("주소입력", form, {
                headers: {
                    Authorization: `Bearer ${token_key}`,
                },
            })
            .then((res) => {
                console.log("댓글 이미지 전송: ", res.data);

                let comment = {
                    uid: uid,
                    pid: post_id,
                    commentTitle: title,
                    comment: content,
                    file: res.data.file,
                };

                axios
                    .post(
                        "주소입력",
                        { ...comment },
                        {
                            headers: {
                                Authorization: `Bearer ${token_key}`,
                            },
                        }
                    )
                    .then((res) => {
                        console.log("댓글 작성 콘솔: ", res.data);

                        dispatch(addComment(res.data));
                        alert("댓글 작성이 완료되었습니다! :)");
                        window.location.replace(`/detail/${post_id}`);
                    })

                    .catch(function (error) {
                        console.log(error);
                    });
                // dispatch(addCommentImg(img));
                // alert("댓글 작성이 완료되었습니다! :)");
                // window.location.reload();
            })

            .catch(function (error) {
                console.log(error);
            });
    };
};

const getCommentFB = (post_id) => {
    const token_key = getToken("token");
    console.log(post_id);
    return function (dispatch, getState, { history }) {
        if (!post_id) {
            return;
        }
        axios
            .get(`${post_id}`, {
                headers: {
                    Authorization: `Bearer ${token_key}`,
                },
            })
            .then((res) => {
                console.log("COMMENT DATA: ", res.data);
                dispatch(getComment(res.data.reverse()));
            })
            .catch((err) => {
                console.log("댓글 정보를 가져올 수가 없어요! :(");
            });
    };
};



const editCommentFB = (commentId, newComment = {}) => {
    return async function (dispatch, getState) {
        const uid = getState().user.user.userid;
        const token_key = localStorage.getItem("token");
        // const _img = getState().image.preview;
        const _comment_idx = getState().comment.list.findIndex(
            (p) => parseInt(p.commentId) === parseInt(commentId)
        );
        const _comment = getState().comment.list[_comment_idx];

        axios({
            method: "put",
            url: `주소입력${commentId}`,
            data: {
                uid: uid,
                commentId: commentId,
                // img: _comment.img,
                title: newComment.title,
                comment: newComment.comment,
            },
            headers: {
                Authorization: `Bearer ${token_key}`,
            },
        }).then((res) => {
            dispatch(editComment(1, { ...newComment }));
        });
    };
};


export default handleActions(
    {
        [GET_COMMENT]: (state, action) =>
            produce(state, (draft) => {
                draft.list = [];
                draft.list.push(...action.payload.comment);
                draft.list = draft.list.reduce((acc, cur) => {
                    if (acc.findIndex((a) => a.commentId === cur.commentId) === -1) {
                        return [...acc, cur];
                    } else {
                        acc[acc.findIndex((a) => a.commentId === cur.commentId)] = cur;
                        return acc;
                    }
                }, []);
            }),

        [ADD_COMMENT]: (state, action) =>
            produce(state, (draft) => {
                draft.list.unshift(action.payload.comment); //push로 주면 배열의 맨 마지막에 쌓이기 때문에, 뷰에서 맨 밑에 쌓인다. 따라서 배열의 맨 앞에 쌓는 unshift로 넘겨준다
            }),

        [EDIT_COMMENT]: (state, action) =>
            produce(state, (draft) => {
                const new_comment = draft.list[action.payload.commentId].find(
                    (c) => c.commentId === action.payload.commentId
                );
                new_comment.comment = action.payload.new_comment;
            }),

        [DELETE_COMMENT]: (state, action) =>
            produce(state, (draft) => {
                const new_comment_list = draft.list.filter((c, i) => {
                    return parseInt(action.payload.comment_idx) !== i;
                });
                draft.list = new_comment_list;
            }),
    },
    initialState
)


const actionCreators = {
    getCommentFB,
    getComment,
    addComment,
    deleteComment,
    editCommentFB,
    editComment,
};

export { actionCreators };