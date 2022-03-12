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
const getComment = createAction(GET_COMMENT, (comment_list) => ({ comment_list }));

const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const deleteComment = createAction(DELETE_COMMENT, (comment_idx) => ({ comment_idx }));
const editComment = createAction(EDIT_COMMENT, (comment_id, comment) => ({
    comment_id,
    comment,
  })
);

const initialState = {
  list: [],
};

// middlewares
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

const getCommentDB = (post_id) => {
  return async function (dispatch, getState, { history }) {
    if (!post_id) {
      return;
    }

    try {
      let response = axios.get(`http://yuseon.shop/community/comment/${post_id}`)
      dispatch(getComment(response.data.reverse()));
    }
    catch(err) {
      console.log("댓글 정보를 가져올 수가 없어요! :(", err);
    }
  };
};

const editCommentDB = (comment_id, comment) => {
  return async function (dispatch, getState) {
    const token = getToken("token");

    try {
      let response = await axios.put(`http://yuseon.shop/community/comment/${comment_id}`, {
        content : comment
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

const deleteCommentDB = (comment_id) => {
  return async function (dispatch, getState) {
    const token = getToken("token");
    const _comment_list = getState().comment.list;

    try {
      await axios.delete(`http://yuseon.shop/community/comment/${comment_id}` , {
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
          return  parseInt(c.commentId) === parseInt(action.payload.comment_id)
        })
    
        draft.list[idx] = {...draft.list[idx], comment: action.payload.comment};
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
};

export { actionCreators };
