import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import axios from "axios";
import { getToken } from '../../shared/token';

// actions
const GET_POST = "GET_POST";
const DELETE_POST = "DELETE_POST";
const GET_TOPFIVE = "GET_TOPFIVE";
const LIKE_POST = "LIKE_POST";
const UNLIKE_POST = "UNLIKE_POST";

// action creators
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const deletePost = createAction(DELETE_POST, (portId) => ({ portId }));
const getTopFive = createAction(GET_TOPFIVE, (Top_list) => ({ Top_list }));
const likePost = createAction(LIKE_POST, (like_list) => ({ like_list }));
const unlikePost = createAction(UNLIKE_POST, (like_list) => ({ like_list }));

// initialState
const initialState = {
  list: [],
  top_five_list: [],
};

// middlewares
const getPostDB = (page = 1) => {
  return async function (dispatch, getState, { history }) {
    try {
      let response = await axios.get(`http://yuseon.shop/community`, {
        params: {
          page: page,
          size: 10,
        },
      });

      console.log(response.data)

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

      dispatch(getTopFive(response.data));
    }
    catch (err) {
      console.log(err);
    }
  };
};

const likePostDB = (port_id, type, nick_name) => {
  return async function (dispatch, getState, { history }) {
    const token = getToken("token");

    try {
      await axios.post(`http://yuseon.shop/community/likes`, {
        portId: port_id,
        likes: !type,
      }, {
        headers: {
          authorization: `${token}`
        }
      });

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

    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        let new_list = draft.list.filter((d) => {
          return d.communityPort.portId !== action.payload.portId;
        })

        draft.list = new_list
      }),

    [GET_TOPFIVE]: (state, action) =>
      produce(state, (draft) => {
        draft.top_five_list.push(...action.payload.Top_list)

      }),

  },
  initialState
);

// action creator export
const actionCreators = {
  getPostDB,
  likePostDB,
  getTopFiveDB,
  getTopFive,
  deletePost,
};

export { actionCreators };