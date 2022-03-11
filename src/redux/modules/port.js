import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getToken } from '../../shared/token';
import axios from "axios";
import moment from "moment";

// actions
const GET_RESULT = "GET_RESULT";
const SAVE_PORTONE = "SAVE_PORTONE";
const GET_PORT = "GET_PORT"
const GET_PORTONE = "GET_PORTONE"
const DELETE_PORT = "DELETE_PORT"

// action creators
const getResult = createAction(GET_RESULT, (test_result) => ({ test_result }));
const savePortOne = createAction(SAVE_PORTONE, (port_id, result) => ({ port_id, result }));
const getPort = createAction(GET_PORT, (port_list) => ({ port_list }));
const getPortOne = createAction(GET_PORTONE, (port) => ({ port }));
const deletePort = createAction(DELETE_PORT, (port_idx) => ({ port_idx }));

// initialState
const initialState = {
  list: [],
  port_list: [],
  port_one: {},
};

// middleware
const getResultDB = () => {
  return async function (dispatch, getState, { history }) {
    let end = getState().testform.end_date;
    end = moment(end).add("1", "M").format("YYYY-MM-DD");

    let data = {
      startDate: getState().testform.start_date,
      endDate: end,
      seedMoney: parseFloat(getState().testform.init_money),
      stockList: getState().testform.stockList,
      ratioList: getState().testform.ratioList,
    };

    try {
      const test_result = await axios.post(
        `http://yuseon.shop/port/result`,
        data
      );
  
      dispatch(getResult(test_result.data));
      history.push('./result');
    }
    catch (err) {
      console.log(err);
    }
  };
};

const savePortDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = getToken("token");
    let end = getState().testform.end_date;
    end = moment(end).add("1", "M").format("YYYY-MM-DD");

    let data = {
      startDate: getState().testform.start_date,
      endDate: end,
      seedMoney: parseFloat(getState().testform.init_money),
      stockList: getState().testform.stockList,
      ratioList: getState().testform.ratioList,
    };

    try {
      const port_id = await axios.post(`http://yuseon.shop/port`, data, {
        headers: {
          Authorization: token
        }
      });

      const result = getState().port.list;
      dispatch(savePortOne(port_id.data, result));
    }
    catch (err) {
      console.log(err);
    }
  };
};

const getMyPortDB = (user_id) => {
  return async function (dispatch, getState, { history }) {
    try {
      let response = await axios.get(`http://yuseon.shop/port/mypage/${user_id}`)

      dispatch(getPort(response));
    }
    catch (err) {
      console.log(err);
    }
  }
}

const getPortOneDB = (port_id) => {
  return async function (dispatch, getState, { history }) {
    try {
      let response = await axios.get(`http://yuseon.shop/port/Individual/${port_id}`)

      dispatch(getPortOne(response));
    }
    catch (err) {
      console.log(err);
    }
  }
}

const deletePortDB = (port_id) => {
  return async function (dispatch, getState, { history }) {
    const token = getToken("token");
    const _port_list = getState().port.port_list;

    try {
      await axios.delete(`http://yuseon.shop/port/${port_id}`, {
        headers: {
          authorization: `${token}`
        }
      })

      const port_idx = _port_list.findIndex((v) => {
        return parseInt(v.portId) === parseInt(port_id)
      })

      dispatch(deletePort(port_idx));
    }
    catch (err) {
      console.log(err);
    }
  }
}

// reducer
export default handleActions(
  {
    [GET_RESULT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.test_result;
    }),
    [SAVE_PORTONE]: (state, action) =>
      produce(state, (draft) => {
        draft.port_list.push({
          portId: action.payload.port_id,
          ...action.payload.result,
        });
    }),
    [GET_PORT]: (state, action) =>
      produce(state, (draft) => {
        draft.port_list.push(...action.payload.port_list);

        draft.port_list = draft.port_list.reduce((acc, cur) => {
          if(acc.findIndex(a => a.portId === cur.portId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex(a => a.portId === cur.portId)] = cur;
            return acc;
          }
        }, [])
    }),
    [GET_PORTONE]: (state, action) =>
    produce(state, (draft) => {
      draft.port_one = action.payload.port;
    }), 
    [DELETE_PORT]: (state, action) =>
      produce(state, (draft) => {
        const new_port_list = draft.port_list.filter((p, i) => {
          return parseInt(action.payload.port_idx) !== i;
        })

        draft.port_list = new_port_list;
    }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getResult,
  getResultDB,
  savePortDB,
  getMyPortDB,
  getPortOneDB,
  deletePortDB,
};

export { actionCreators };
