import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import axios from "axios";
import { getToken } from "../../shared/token";

// actions
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const READD_COMMNET = "READD_COMMNET"
const DELETE_COMMENT = "DELETE_COMMENT";
const DELETE_RECOMMENT = "DELETE_RECOMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const EDIT_RECOMMENT = "EDIT_RECOMMENT";


// action creators
const getComment = createAction(GET_COMMENT, (comment_list) => ({ comment_list }));
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const readdComment = createAction(READD_COMMNET, (newcomment) => ({ newcomment }));
const deleteComment = createAction(DELETE_COMMENT, (comment_idx) => ({ comment_idx }));
const deleterecommnet = createAction(DELETE_RECOMMENT, (comment_idx) => ({ comment_idx }));
const editComment = createAction(EDIT_COMMENT, (comment_id, comment) => ({
  comment_id,
  comment,
})
);

const editrecomment = createAction(EDIT_RECOMMENT, (comment_id, newcommnet) => ({ comment_id, newcommnet }))

const initialState = {
  list: [],
};

// middlewares
// 댓글 쓰기
const addCommentDB = (port_id, content) => {
  return async function (dispatch, getState, { history }) {
    const token = getToken('token');
    const nickname = getState().user.user_info.nickname
    try {
      let response = await axios.post(`http://yuseon.shop/community/comment/${port_id}`, {
        content: content,
        nickname: nickname
      }, {
        headers: {
          Authorization: `${token}`
        }
      });

      console.log(response.data);
      dispatch(addComment({
        commentId: response.data.commentId,
        content: content,
        nickname: nickname,
      }));
    }
    catch (err) {
      console.log(err);
    }
  };
};

// 댓글 가져오기
const getCommentDB = (post_id) => {
  return async function (dispatch, getState, { history }) {
    if (!post_id) {
      return;
    }

    try {
      let response = axios.get(`http://yuseon.shop/community/comment/${post_id}`)
      dispatch(getComment(response.data.reverse()));
    }
    catch (err) {
      console.log("댓글 정보를 가져올 수가 없어요! :(", err);
    }
  };
};

// 댓글 수정
const editCommentDB = (comment_id, comment) => {
  return async function (dispatch, getState) {
    const token = getToken("token");

    try {
      let response = await axios.put(`http://yuseon.shop/community/comment/${comment_id}`, {
        content: comment
      }, {
        headers: {
          Authorization: `${token}`
        }
      })

      dispatch(editComment(comment_id, comment));
    }
    catch (err) {
      console.log(err);
    }
  };
};
// 댓글 삭제
const deleteCommentDB = (comment_id) => {
  return async function (dispatch, getState) {
    const token = getToken("token");
    const _comment_list = getState().comment.list;

    try {
      await axios.delete(`http://yuseon.shop/community/comment/${comment_id}`, {
        headers: {
          Authorization: `${token}`
        }
      });

      const comment_idx = _comment_list.findIndex((c) => {
        return parseInt(c.commentId) === parseInt(comment_id);
      })
      dispatch(deleteComment(comment_idx));
    }
    catch (err) {
      console.log(err);
    }
  }
}



// 대댓글 쓰기 
const ReaddCommentDB = (commentId, Newcontent) => {
  return async function (dispatch, getState, { history }) {
    const token = getToken('token');
    const nickname = getState().user.user_info.nickname
    try {
      let response = await axios.post(`http://yuseon.shop/community/comment/${commentId}`, {
        content: Newcontent,
        nickname: nickname
      }, {
        headers: {
          Authorization: `${token}`
        }
      });

      console.log(response.data);
      const data = {
        commentId: response.data.commentId,
        Newcontent: Newcontent,
        nickname: nickname,
      }
      dispatch(readdComment(data))
    }
    catch (err) {
      console.log(err);
    }
  }
}

//대댓글 삭제
const deleteREcommnetDB = (comment_id) => {
  return async function (dispatch, getState) {
    const token = getToken("token");
    const _newcomment_list = getState().newcomment.list;


    try {
      await axios.delete(`http://yuseon.shop/community/comment/${comment_id}`, {
        headers: {
          Authorization: `${token}`
        }
      });
      const comment_idx = _newcomment_list.findIndex((c) => {
        return parseInt(c.commentId) === parseInt(comment_id);
      })
      dispatch(deleteComment(comment_idx));
    }
    catch (err) {
      console.log(err);
    }

  }
}

const editRecommentDB = (comment_id, newcomment) => {
  return async function (dispatch, getState) {
    const token = getToken("token");

    try {
      let response = await axios.put(`http://yuseon.shop/community/comment/${comment_id}`, {
        content: newcomment
      }, {
        headers: {
          Authorization: `${token}`
        }
      })

      dispatch(editComment(comment_id, newcomment));
    }
    catch (err) {
      console.log(err);
    }
  };
};



export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.comment_list);
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
        draft.list.unshift(action.payload.comment);
      }),

    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((c) => {
          return parseInt(c.commentId) === parseInt(action.payload.comment_id)
        })

        draft.list[idx] = { ...draft.list[idx], comment: action.payload.comment };
      }),
    [EDIT_RECOMMENT]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((c) => {
          return parseInt(c.commentId) === parseInt(action.payload.comment_id)
        })

        draft.list[idx] = { ...draft.list[idx], newcomment: action.payload.comment };
      }),

    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const new_comment_list = draft.list.filter((c, i) => {
          return parseInt(action.payload.comment_idx) !== i;
        });
        draft.list = new_comment_list;
      }),

    [READD_COMMNET]: (state, action) => produce(state, (draft) => {
      const newComment = draft.list.comment.filter(
        (com, id) => com.id !== action.payload.commentid
      );

      draft.list.comments = [...newComment];
    }),

    [DELETE_RECOMMENT]: (state, action) =>
      produce(state, (draft) => {
        const new_comment_list = draft.list.filter((c, i) => {
          return parseInt(action.payload.comment_idx) !== i;
        });
        draft.list = new_comment_list;
      }),
  },
  initialState
);

const actionCreators = {
  getCommentDB,
  getComment,
  addComment,
  addCommentDB,
  deleteComment,
  deleteCommentDB,
  editCommentDB,
  editComment,
  ReaddCommentDB,
  readdComment,
  deleteREcommnetDB,
  deleterecommnet,
  editRecommentDB,
  editrecomment
};

export { actionCreators };
