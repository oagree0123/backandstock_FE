import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import moment from "moment";

// actions
const GET_RESULT = "GET_RESULT";
const GET_PORTFOLIO = "GET_PORTFOLIO";


// action creators
const getResult = createAction(GET_RESULT, (result_list) => ({ result_list }));
const getPortfolio = createAction(GET_PORTFOLIO, (portfolio_list) => ({ portfolio_list }));


// initialState
const initialState = {};

// middleware
const getResultDB = () => {
  return async function (dispatch, getState, { history }) {
    let end = getState().testform.end_date
    end = moment(end).add("1", "M").format('YYYY-MM-DD');

    let data = {
      startDate: getState().testform.start_date,
      endDate: end,
      seedMoney: parseFloat(getState().testform.init_money),
      stockList: getState().testform.stockList,
      ratioList: getState().testform.ratioList,
    }
    console.log(data);

    const test_result = await axios.post(`http://yuseon.shop/port/result`, data)

    const result_list = test_result.data

    dispatch(getResult(result_list))

    history.push("/result");
  };
};

const getPortfolioDB = () => {
  return async function (dispatch, getState, { history }) {
    let end = getState().testform.end_date
    end = moment(end).add("1", "M").format('YYYY-MM-DD');

    let data = {
      startDate: getState().testform.start_date,
      endDate: end,
      seedMoney: parseFloat(getState().testform.init_money),
      stockList: getState().testform.stockList,
      ratioList: getState().testform.ratioList,
    }
    console.log(data);

    const portfolio_result = await axios.post(`http://yuseon.shop/port`, data)

    const portfolio_list = portfolio_result.data

    dispatch(getPortfolio(portfolio_list))

    history.push("/mypage");
  };

}




// reducer
export default handleActions(
  {
    [GET_RESULT]: (state, action) => produce(state, (draft) => {
      draft.result_list = { ...action.payload.result_list }
    }),
    [GET_PORTFOLIO]: (state, action) => produce(state, (draft) => {
      draft.portfolio_list = { ...action.payload.portfolio_list }
    }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getResult,
  getResultDB,
  getPortfolioDB,
}

export { actionCreators };