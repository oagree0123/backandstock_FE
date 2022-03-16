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
};

// middlewares
const getPostDB = () => {
  return async function (dispatch, getState, { history }) {
    // try {
    //   let response = await axios.get(`http://yuseon.shop/community`)

    //   dispatch(getPost(response.data));
    // }

    try {
      let response = await axios.get(`http://yuseon.shop/community?page=1&size=10`)
      dispatch(getPost(response.data));
      console.log(response);
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
  }
}

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
    }
    catch (err) {
      console.log(err);
    }
  }
}


// reducer
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);

        draft.list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex(a => a.postId === cur.postId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex(a => a.postId === cur.postId)] = cur;
            return acc;
          }
        }, [])
      }),

    [GET_TOPFIVE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.Top_list;



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
