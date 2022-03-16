import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import axios from "axios";
import { getToken } from '../../shared/token';

// actions
const GET_POST = "GET_POST";
const GET_TOPFIVE = "GET_TOPFIVE";
const LIKE_POST = "LIKE_POST";
const UNLIKE_POST = "UNLIKE_POST";

// action creators
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const getTopFive = createAction(GET_TOPFIVE, (Top_list) => ({ Top_list }));
const likePost = createAction(LIKE_POST, () => ({}));
const unlikePost = createAction(UNLIKE_POST, () => ({}));

// initialState
const initialState = {
  list: [],
  top_five_list: [],
};

// middlewares
const getPostDB = (page=1) => {
  return async function (dispatch, getState, { history }) {
    try {
      let response = await axios.get(`http://yuseon.shop/community`, {
        params: {
          page: page,
          size: 10  ,
        },
      });
      console.log(response.data);
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
      let response = await axios.get(`http://yuseon.shop/community/topFive`)

      console.log(response.data);
      dispatch(getTopFive(response.data));
    }
    catch (err) {
      console.log(err);
    }
  };
};

const likePostDB = (user_id, port_id, type) => {
  return async function (dispatch, getState, { history }) {
    try {
      await axios.post(`http://yuseon.shop/community/likes`, {
        userId: user_id,
        portId: port_id,
        likes: type,
      });

      if (type) {
        dispatch(likePost());
      } else {
        dispatch(unlikePost());
      }
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
        draft.list = draft.list.reduce((acc, cur) => {
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
      }),

    [GET_TOPFIVE]: (state, action) =>
      produce(state, (draft) => {
        draft.top_five_list.push(...action.payload.Top_list);
      }),

    [LIKE_POST]: (state, action) =>
      produce(state, (draft) => {

      }),

    [UNLIKE_POST]: (state, action) =>
      produce(state, (draft) => {

      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getPostDB,
  likePostDB,
  getTopFiveDB,
  getTopFive

};

export { actionCreators };
