import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getToken } from '../../shared/token';

// actions
const GET_POST = "GET_POST";
const DELETE_POST = "DELETE_POST";
const GET_TOPFIVE = "GET_TOPFIVE";
const LIKE_POST = "LIKE_POST";
const DELETELIKE_POST = "DELETELIKE_POST";

// action creators
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const deletePost = createAction(DELETE_POST, (portId) => ({ portId }));
const getTopFive = createAction(GET_TOPFIVE, (Top_list) => ({ Top_list }));
const likePost = createAction(LIKE_POST, (idx, nickname) => ({ idx, nickname }));
const deletelikePost = createAction(DELETELIKE_POST, (idx, nickname) => ({ idx, nickname }));

// initialState
const initialState = {
  list: [],
  top_five_list: [],
};

// middlewares
const getPostDB = (page = 1) => {
  return async function (dispatch, getState, { history }) {
    try {
      let response = await axios.get(`https://yuseon.shop/portfolios/boast`, {
        params: {
          page: page,
          size: 3,
        },
      });

      if (response.data.length === 0) {
        window.alert("더 이상 포트폴리오가 없습니다.")
        return;
      }
      dispatch(getPost(response.data));
    }
    catch (err) {
      console.log(err);
    }
  }
}

const getTopFiveDB = () => {
  return async function (dispatch, getState, { history }) {
    try {
      let response = await axios.get(`https://yuseon.shop/stocks/topfive`)

      dispatch(getTopFive(response.data));
    }
    catch (err) {
      console.log(err);
    }
  };
};

/* like수정 */
const likePostDB = (port_id, user_id, like) => {
  return async function (dispatch, getState, { history }) {
    const token = getToken("token");
    const community_list = getState().community.list;

    try {
      axios.post(`https://yuseon.shop/portfolios/${port_id}/likes`, {
        userId: user_id
      }, {
        headers: {
          authorization: `${token}`
        }
      });

      let idx = community_list.findIndex(c => {
        return c.communityPort.portId === port_id;
      })

      dispatch(likePost(idx, user_id));

    } catch (err) {
      console.log(err);
    }
  };
};

const deletelikePostDB = (port_id, user_id) => {
  return async function (dispatch, getState, { history }) {
    const token = getToken("token");
    const community_list = getState().community.list;
    console.log(token);
    try {
      axios.delete(`https://yuseon.shop/portfolios/${port_id}/likes`,
        {
          headers: {
            authorization: `${token}`
          }
        });

      let idx = community_list.findIndex(c => {
        return c.communityPort.portId === port_id;
      })

      //좋아요 취소
      dispatch(deletelikePost(idx, user_id));

    } catch (err) {
      console.log(err);
    }
  };
};

// reducer
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);
        let _new_list = draft.list.reduce((acc, cur) => {
          if (
            acc.findIndex(
              (a) => a.communityPort.portId === cur.communityPort.portId
            ) === -1
          ) {
            return [...acc, cur];
          } else {
            acc[
              acc.findIndex(
                (a) => a.communityPort.portId === cur.communityPort.portId
              )
            ] = cur;
            return acc;
          }
        }, [])

        //좋아요 순 정렬
        draft.list = _new_list.sort((a, b) => b.likesCnt - a.likesCnt);
      }),

    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        let new_list = draft.list.filter((d) => {
          return d.communityPort.portId !== action.payload.portId;
        })

        draft.list = new_list;
      }),

    [LIKE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.idx].likesUsers.push(action.payload.nickname)
        draft.list[action.payload.idx].likesCnt += 1;

        //좋아요 순 정렬
        //draft.list = draft.list.sort((a, b) => b.likesCnt - a.likesCnt);
      }),

    [DELETELIKE_POST]: (state, action) =>
      produce(state, (draft) => {
        let new_likeUsers = draft.list[action.payload.idx].likesUsers.filter(u => {
          return u !== action.payload.nickname;
        })
        draft.list[action.payload.idx].likesUsers = new_likeUsers;
        draft.list[action.payload.idx].likesCnt -= 1;
        //좋아요 순 정렬
        //draft.list = draft.list.sort((a, b) => b.likesCnt - a.likesCnt);
      }),

    [GET_TOPFIVE]: (state, action) =>
      produce(state, (draft) => {
        draft.top_five_list.push(...action.payload.Top_list);

        draft.top_five_list = draft.top_five_list.reduce((acc, cur) => {
          if (
            acc.findIndex(
              (a) => a.option === cur.option
            ) === -1
          ) {
            return [...acc, cur];
          } else {
            acc[
              acc.findIndex(
                (a) => a.option === cur.option
              )
            ] = cur;
            return acc;
          }
        }, [])
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getPostDB,
  likePostDB,
  deletelikePostDB,
  getTopFiveDB,
  getTopFive,
  deletePost,
  deletelikePost
};

export { actionCreators };