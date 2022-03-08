import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import moment from "moment";

// actions
const GET_RESULT = "GET_RESULT";

// action creators
const getResult = createAction(GET_RESULT, () => ({}));

// initialState
const initialState = {};

// middleware
const getResultDB = () => {
  return async function (dispatch, getState, { history }) {
    let end = getState().testform.end_date
    end = moment(end).add("1", "M").format('YYYY-MM-DD');

    let data = {
      startDate : getState().testform.start_date,
      endDate : end,
      seedMoney : parseFloat(getState().testform.init_money),
      stockList : getState().testform.stockList,
      ratioList : getState().testform.ratioList,
    }
    console.log(data);

    const test_result = await axios.post(`http://yuseon.shop/port/result`, data)

    console.log(test_result);
  };
};

// reducer
export default handleActions(
  {
    [GET_RESULT]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  getResult,
  getResultDB,
}

export { actionCreators };