import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { delToken, getToken, setToken } from "../../shared/token";

// actions
const SET_USER = "SET_USER";
const EDIT_USER = "EDIT_USER";
const LOG_OUT = "LOG_OUT";

// action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const editUser = createAction(EDIT_USER, (img_url, nickname) => ({ img_url, nickname }));
const logout = createAction(LOG_OUT, () => ({}));

// initialState
const initialState = {
  user_info: {
    user_id: 0,
    nickname: "",
    profile_img: "",
  },
  is_login: false,
};

// middlewares
const LoginDB = ({ user_name, pwd }) => {
  // test12@naver.com
  // test1234!
  return async function (dispatch, getState, { history }) {
    try {
      const response = await axios.post(`http://yuseon.shop/user/login`, {
        username: user_name,
        password: pwd,
      });

      const token = response.headers.authorization;
      setToken("token", token);

      try {
        let check_user = await axios.post(
          `http://yuseon.shop/islogin`,
          {},
          {
            headers: {
              authorization: `${token}`,
            },
          }
        );

        dispatch(
          setUser({
            user_id: check_user.data.userId,
            nickname: check_user.data.nickname,
            profile_img: check_user.data.profileImg,
          })
        );
      } catch (err) {
        console.log(err);
      }

      window.alert("로그인이 완료되었습니다.");
      history.replace("/");
    } catch (err) {
      console.log(err);
      window.alert("이메일 비밀번호를 다시 확인해주세요.")
    }
  };
};

const LoginCheckDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = getToken("token");
    try {
      let check_user = await axios.post(
        `http://yuseon.shop/islogin`,
        {},
        {
          headers: {
            authorization: `${token}`,
          },
        }
      );

      dispatch(
        setUser({
          user_id: check_user.data.userId,
          nickname: check_user.data.nickname,
          profile_img: check_user.data.profileImg,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};

const kakaoLogin = (code) => {
  return async function (dispatch, getState, { history }) {
    try {
      let response = await axios.get(
        `http://yuseon.shop/user/kakao/callback?code=${code}`
      );

      const token = response.headers.authorization;
      setToken("token", token);

      try {
        let check_user = await axios.post(
          `http://yuseon.shop/islogin`,
          {},
          {
            headers: {
              authorization: `${token}`,
            },
          }
        );

        dispatch(
          setUser({
            user_id: check_user.data.userid,
            nickname: check_user.data.nickname,
            profile_img: check_user.data.profileImg
          })
        );
      } catch (err) {
        console.log(err);
      }

      window.alert("로그인이 완료되었습니다.");
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };
};

const SignupDB = ({ user_name, nickname, pwd }) => {
  return async function (dispatch, getState, { history }) {
    try {
      await axios.post(`http://yuseon.shop/user/signup`, {
        username: user_name,
        password: pwd,
        nickname: nickname,
      });

      window.alert("회원가입이 완료되었습니다.");
      history.push("/");
    } catch (err) {
      if (err.response.data.errorMessage) {
        alert(err.response.data.errorMessage);
      }
    }
  };
};

const editUserDB = (img_url, nickname, img_file) => {
  return async function (dispatch, getState, { history }) {
    const token = getToken("token");

    const form = new FormData();

    form.append('nickname', nickname);
    form.append('profileImage', img_file);

    console.log(img_file)
    try {
      let response = await axios.put(`http://yuseon.shop/user/edit`, form, {
        headers: {
          authorization: `${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      
      dispatch(editUser(img_url, nickname));
    }
    catch (err) {
      window.alert(err.response.data.errorMessage)
      console.log(err);
    }
  }
}

const ResignDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = getToken("token");
    try {
      await axios.delete(`http://yuseon.shop/resign`, {
        headers: {
          authorization: `${token}`,
        },
      });

      dispatch(logout());
      history.replace("/");
    } catch (err) {
      console.log(err);
    }
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user_info = action.payload.user;
        draft.is_login = true;
      }),
    [EDIT_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user_info = {
          ...draft.user_info,
          nickname: action.payload.nickname,
          profile_img: action.payload.img_url
        }
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        delToken("token");
        draft.user_info = {
          user_id: 0,
          nickname: "",
          profile_img: "",
        };
        draft.is_login = false;
        window.location.reload("/");
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
  kakaoLogin,
  editUserDB,
};

export { actionCreators };
