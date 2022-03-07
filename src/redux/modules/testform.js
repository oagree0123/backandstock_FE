import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import axios from "axios";

// actions
const SET_START = "SET_START";
const SET_END = "SET_END";

// action creators
const setStart = createAction(SET_START, (start_year, start_month) => ({ start_year, start_month }));
const setEnd = createAction(SET_END, (end_year, end_month) => ({ end_year, end_month }));

// initialState
const initialState = {
  start_date: "",
  end_date: "",
  stockList: [],
  ratioList: [],
};

// middlewares

// reducer
export default handleActions(
  {
    [SET_START]: (state, action) =>
      produce(state, (draft) => {
        let start_date = '';
        if(action.payload.start_month < 10){
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
        if(action.payload.end_month < 10){
          end_date = moment(`${action.payload.end_year}-0${action.payload.end_month}-01`).format('YYYY-MM-DD');
        }
        else {
          end_date = moment(`${action.payload.end_year}-${action.payload.end_month}-01`).format('YYYY-MM-DD');
        }
        draft.end_date = end_date;
    }),
  },
  initialState
);

// action creator export
const actionCreators = {
  setStart,
  setEnd,
};

export { actionCreators };
