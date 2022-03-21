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

const SET_BEST = "SET_BEST";
const SET_COMPARE = "SET_COMPARE";
const GET_COMPARE = "GET_COMPARE";
const SET_INITCOMPARE = "SET_INITCOMPARE";

// action creators
const getResult = createAction(GET_RESULT, (test_result) => ({ test_result }));
const savePortOne = createAction(SAVE_PORTONE, (port_id, result) => ({ port_id, result }));
const getPort = createAction(GET_PORT, (port_list) => ({ port_list }));
const getPortOne = createAction(GET_PORTONE, (port) => ({ port }));
const deletePort = createAction(DELETE_PORT, (port_idx, port_id) => ({ port_idx, port_id }));

const setBest = createAction(SET_BEST, (type, port_id) => ({ type, port_id }));
const setCompare = createAction(SET_COMPARE, (type, compare_id) => ({ type, compare_id }));
const getCompare = createAction(GET_COMPARE, (compare_item, compare_data) => ({ compare_item, compare_data }));
const setInitCompare = createAction(SET_INITCOMPARE, () => ({}));

// initialState
const initialState = {
  list: [],
  port_list: [],
  port_one: {},
  compare_list: [],
  compare_item: [],
  compare_data: [], 
};

// middleware
const getResultDB = () => {
  return async function (dispatch, getState, { history }) {
    let end = getState().testform.end_date;
    end = moment(end).add("1", "M").format("YYYY-MM-DD");

    let data = {
      startDate: getState().testform.start_date,
      endDate: end,
      seedMoney: parseFloat(getState().testform.init_money * 10000),
      stockList: getState().testform.stockList,
      ratioList: getState().testform.ratioList,
    };

    if (data.stockList.length === 0 || data.ratioList.length === 0) {
      window.alert("종목을 추가해 주세요!");
      return ;
    }

    // 실험 금액 100만원 ~ 100,000만원
    if (data.seedMoney < 1000000 || data.seedMoney > 1000000000) {
      window.alert("실험금액을 다시 확인해 주세요!");
      return ;
    }

    let ratio_sum = data.ratioList.reduce((acc, cur) => {
      return acc = acc + cur;
    }, 0);

    if (ratio_sum < 100) {
      window.alert("자산 비율은 100%가 되어야 합니다.");
      return ;
    }

    // 시작날짜와 종료날짜 역순 false
    if(!moment(data.endDate).isBefore(data.startDate)) {
      window.alert("종료년도가 시작년도 이전입니다!");
      return ;
    } 
    else {
      try {
        const test_result = await axios.post(
          `http://yuseon.shop/port/result`,
          data
        );

        dispatch(getResult(test_result.data));
        history.push('/result')
      }
      catch (err) {
        console.log(err);
      }
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
      seedMoney: parseFloat(getState().testform.init_money * 10000),
      stockList: getState().testform.stockList,
      ratioList: getState().testform.ratioList,
    };

    try {
      const port_id = await axios.post(`http://yuseon.shop/port`, data, {
        headers: {
          Authorization: `${token}`
        }
      });

      const result = getState().port.list;
      dispatch(savePortOne(port_id.data.portId, result));
    }
    catch (err) {
      window.alert(err.response.data.errorMessage);
    }
  };
};

const getMyPortDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = getToken("token");
    try {
      let response = await axios.get(`http://yuseon.shop/port/mypage`, {
        headers: {
          Authorization: `${token}`
        }
      })

      dispatch(getPort(response.data));
    }
    catch (err) {
      console.log(err);
    }
  }
}

const getPortOneDB = (port_id) => {
  return async function (dispatch, getState, { history }) {
    try {
      let response = await axios.get(`http://yuseon.shop/port/details/${port_id}`)

      dispatch(getPortOne(response.data));
      //history.push('/detail');
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

      dispatch(deletePort(port_idx, port_id));
    }
    catch (err) {
      console.log(err);
    }
  }
}

const setBestDB = (type, port_id) => {
  return async function (dispatch, getState, { history }) {
    const token = getToken("token");

    try {
      await axios.post(`http://yuseon.shop/port/mybest`,  {
        portId : port_id,
        myBest: type,
      }, {
        headers: {
          authorization: `${token}`
        }
      })
      
      dispatch(setBest(type, port_id));
    }
    catch (err) {
      console.log(err);
    }
  }
}

const getCompareDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = getToken("token");
    
    const compare_list = getState().port.compare_list;
    const port_list = getState().port.port_list

    if (compare_list.length < 2) {
      return;
    }

    try {
      let response = await axios.post(`http://yuseon.shop/port/compare`,  {
        portIdList : compare_list
      }, {
        headers: {
          authorization: `${token}`
        }
      })

      let compare_item = [];

      port_list.map((p, i) => {
        if(compare_list.includes(p.portId)) {
          compare_item.push(p);
        }
      })
      
      dispatch(getCompare(compare_item, response.data));
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
        console.log(action.payload.port_id);

        draft.port_list.push({
          myBest: false,
          portId: action.payload.port_id,
          portBacktestingCal: action.payload.result,
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

        const new_compare_list = draft.compare_list.filter((c, i) => {
          return parseInt(action.payload.port_id) !== c;
        })

        draft.port_list = new_port_list;
        draft.compare_list = new_compare_list;
      }),
    [SET_BEST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.port_list.findIndex((p, i) => {
          return p.portId === action.payload.port_id
        });

        draft.port_list[idx].myBest = action.payload.type
      }),
    [SET_COMPARE]: (state, action) =>
      produce(state, (draft) => {
        if (action.payload.type) {
          draft.compare_list.push(action.payload.compare_id)
        }
        else {
          const new_list = draft.compare_list.filter((c, i) => {
            return parseInt(c) !== parseInt(action.payload.compare_id)
          })

          draft.compare_list = new_list;
        }
      }),
    [GET_COMPARE]: (state, action) =>
      produce(state, (draft) => {
        draft.compare_data = [];
        draft.compare_item = action.payload.compare_item;
        draft.compare_data = action.payload.compare_data;
      }),
    [SET_INITCOMPARE]: (state, action) =>
      produce(state, (draft) => {
        draft.compare_list = [];
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
  setCompare,
  setBestDB,
  getCompareDB,
  setInitCompare,
};

export { actionCreators };
