import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import axios from "axios";
import { getToken } from "../../shared/token";

// actions
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

// action creators
const getComment = createAction(GET_COMMENT, (commentList) => ({
    commentList,
}));

const addComment = createAction(ADD_COMMENT, (comment) => ({
    comment,
}));


const initialState = {
    commentList: []
}

// middlewares
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
    },
    initialState
)


const actionCreators = {
    getCommentFB,
    getComment,
    addComment,
};

export { actionCreators };