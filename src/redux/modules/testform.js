import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import axios from "axios";

// actions
const SET_START = "SET_START";
const SET_END = "SET_END";
const SET_MONEY = "SET_MONEY";
const SET_STOCK = "SET_STOCK";
const DELETE_STOCK = "DELETE_STOCK";

// action creators
const setStart = createAction(SET_START, (start_year, start_month) => ({ start_year, start_month }));
const setEnd = createAction(SET_END, (end_year, end_month) => ({ end_year, end_month }));
const setMoney = createAction(SET_MONEY, (money) => ({ money }));
const setStock = createAction(SET_STOCK, (ratio, stock_name, stock_code) => ({ ratio, stock_name, stock_code }));
const deleteStock = createAction(DELETE_STOCK, (stock_num) => ({ stock_num }));

// initialState
const initialState = {
  start_date: "",
  end_date: "",
  init_money: 0,
  stockList: [],
  ratioList: [],
  codeList: [],
};

// middlewares

// reducer
export default handleActions(
  {
    [SET_START]: (state, action) =>
      produce(state, (draft) => {
        let start_date = '';
        if (action.payload.start_month < 10) {
          start_date = moment(`${action.payload.start_year}-0${action.payload.start_month}-01`).format('YYYY-MM-DD');
        }
        else {
          start_date = moment(`${action.payload.start_year}-${action.payload.start_month}-01`).format('YYYY-MM-DD');
        }
        draft.start_date = start_date;
      }),
    [SET_END]: (state, action) =>
      produce(state, (draft) => {
        let end_date = '';
        if (action.payload.end_month < 10) {
          end_date = moment(`${action.payload.end_year}-0${action.payload.end_month}-01`).format('YYYY-MM-DD');
        }
        else {
          end_date = moment(`${action.payload.end_year}-${action.payload.end_month}-01`).format('YYYY-MM-DD');
        }
        draft.end_date = end_date;
      }),
    [SET_MONEY]: (state, action) =>
      produce(state, (draft) => {
        draft.init_money = action.payload.money;
      }),
    [SET_STOCK]: (state, action) =>
      produce(state, (draft) => {
        let ratio_sum = 0;
        draft.ratioList.map((r, i) => {
          ratio_sum += parseInt(r);
        })

        if (ratio_sum + parseInt(action.payload.ratio) > 100) {
          window.alert("자산 비율은 100%를 넘을 수 없습니다.")
          return;
        }

        draft.stockList.push(action.payload.stock_name);
        draft.ratioList.push(parseInt(action.payload.ratio));
        draft.codeList.push(action.payload.stock_code);
      }),
    [DELETE_STOCK]: (state, action) =>
      produce(state, (draft) => {
        draft.stockList = draft.stockList.filter((n, i) => {
          return action.payload.stock_num !== i;
        })
        draft.ratioList = draft.ratioList.filter((r, i) => {
          return action.payload.stock_num !== i;
        })
        draft.codeList = draft.codeList.filter((c, i) => {
          return action.payload.stock_num !== i;
        })
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  setStart,
  setEnd,
  setMoney,
  setStock,
  deleteStock,
};

export { actionCreators };
