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
const deleteComment = createAction(DELETE_COMMENT, (comment_idx) => ({ comment_idx }));
const editComment = createAction(EDIT_COMMENT, (comment_id, comment) => ({
  comment_id,
  comment,
})
);

const readdComment = createAction(READD_COMMNET, (comment_idx, recomment_data) => ({ comment_idx, recomment_data }));
const deleterecommnet = createAction(DELETE_RECOMMENT, (comment_idx, recomment_id) => ({ comment_idx, recomment_id }));
const editrecomment = createAction(EDIT_RECOMMENT, (comment_id, newcommnet) => ({ comment_id, newcommnet }))

const initialState = {
  list: [],
};

// middlewares
// 댓글 쓰기
const addCommentDB = (port_id, content) => {
  return async function (dispatch, getState, { history }) {
    const token = getToken('token');
    const user = getState().user.user_info;
    try {
      let response = await axios.post(`http://yuseon.shop/community/comment/${port_id}`, {
        content: content
      }, {
        headers: {
          Authorization: `${token}`
        }
      });

      dispatch(addComment({
        commentId: response.data.commentId,
        content: content,
        nickname: user.nickname,
        profileImg: user.profile_img,
        replyList: [],
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
      let response = await axios.get(`http://yuseon.shop/community/comment/${post_id}`)

      console.log(response.data)
      if(!response.data) {
        return;
      }
      dispatch(getComment(response.data));
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
      axios.put(`http://yuseon.shop/community/comment/${comment_id}`, {
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
    const user = getState().user.user_info
    const comment_list = getState().comment.list;
    try {
      let response = await axios.post(`http://yuseon.shop/community/reply/${commentId}`, {
        content: Newcontent
      }, {
        headers: {
          Authorization: `${token}`
        }
      });

      const data = {
        commentId: response.data.commentId,
        content: Newcontent,
        nickname: user.nickname,
        profileImg: user.profile_img,
      }

      let comment_idx = comment_list.findIndex(c => {
        return c.commentId === commentId;
      })

      dispatch(readdComment(comment_idx, data))
    }
    catch (err) {
      console.log(err);
    }
  }
}

//대댓글 삭제
const deleteREcommnetDB = (comment_id, recomment_id) => {
  return async function (dispatch, getState) {
    const token = getToken("token");
    const _comment_list = getState().comment.list;

    try {
      await axios.delete(`http://yuseon.shop/community/comment/${recomment_id}`, {
        headers: {
          Authorization: `${token}`
        }
      });

      const comment_idx = _comment_list.findIndex((c) => {
        return parseInt(c.commentId) === parseInt(comment_id);
      })

      dispatch(deleterecommnet(comment_idx, recomment_id));
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
        draft.list = [];
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
        draft.list.push(action.payload.comment);
      }),

    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((c) => {
          return parseInt(c.commentId) === parseInt(action.payload.comment_id)
        })

        draft.list[idx] = { ...draft.list[idx], content: action.payload.comment };
      }),
    [EDIT_RECOMMENT]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((c) => {
          return parseInt(c.commentId) === parseInt(action.payload.comment_id)
        })

        draft.list[idx] = { ...draft.list[idx], content: action.payload.comment };
      }),

    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const new_comment_list = draft.list.filter((c, i) => {
          return parseInt(action.payload.comment_idx) !== i;
        });
        draft.list = new_comment_list;
      }),

    [READD_COMMNET]: (state, action) => produce(state, (draft) => {
      draft.list[action.payload.comment_idx].replyList.push(action.payload.recomment_data);
    }),

    [DELETE_RECOMMENT]: (state, action) =>
      produce(state, (draft) => {
        let new_reply = 
          draft.list[action.payload.comment_idx].replyList.filter((r) => {
            console.log(r.commentId, action.payload.recomment_id);
            return r.commentId !== action.payload.recomment_id
          });

          draft.list[action.payload.comment_idx].replyList = new_reply;
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
