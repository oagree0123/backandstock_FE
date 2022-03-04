import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { delToken, getToken, setToken } from "../../shared/token";

// actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

// action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logout = createAction(LOG_OUT, () => ({}));

// initialState
const initialState = {
  user_info: {
    nickname: "",
    profile_img: "",
  },
  is_login: false,
};

// middlewares
const LoginDB = ({user_name, pwd}) => {
  return async function (dispatch, getState, { history }) {
    try {
      const response = await axios
      .post(`url/user/login`, {
        username : user_name,
        password : pwd,
      });

      const token = response.headers.authorization;
      setToken(token);

      try {
        let check_user = await axios.post(`url/islogin`, {}, {
          headers: {
            authorization: `${token}`
          }
        })

        dispatch(setUser({
          nickname : check_user.nickname,
          profile_img : check_user.profileImg,
        }))
      }
      catch(err) {
        console.log(err);
      }

      window.alert("로그인이 완료되었습니다.");
      history.replace("/");
    }
    catch (err) {
      console.log(err);
    }
  }
}

const LoginCheckDB = () => {
  return async function (dispatch, getState, {history}) {
    const token = getToken("token");
    try {
      let check_user = await axios.post(`url/islogin`, {}, {
        headers: {
          authorization: `${token}`
        }
      })

      dispatch(setUser({
        nickname : check_user.nickname,
        profile_img : check_user.profileImg,
      }))
    }
    catch(err) {
      console.log(err);
    }
  }
}

const SignupDB = ({user_name, nickname, pwd}) => {
  return async function (dispatch, getState, { history }) {
    try {
      await axios
      .post(`url/user/signup`, {
        username: user_name,
        password: pwd,
        nickname: nickname,
      });

      window.alert("회원가입이 완료되었습니다.");
      history.replace("/");
    } 
    catch (err) {
      console.log(err);
    }
  };
};

const ResignDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = getToken();
    try {
      await axios
      .delete(`url/resign`, {
        headers: {
          Autorization: `${token}`
        }
      })

      dispatch(logout());
      history.replace('/');
    }
    catch (err) {
      console.log(err);
    }
  }
}

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user_info = action.payload.user;
        draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        delToken();
        draft.user_info = {
          nickname: "",
          profile_img: "",
        };
        draft.is_login = false;
    }),
  },
  initialState
);

// action creator export
const actionCreators = {
  LoginDB,
  LoginCheckDB,
  logout,
  SignupDB,
  ResignDB,
}

export { actionCreators };