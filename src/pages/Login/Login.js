import React, { useState } from "react";
import {
  LoginCont,
  LoginLeft,
  LoginRight,
  LoginInput,
  LoginWrap,
  InputLabel,
  InputWrap,
  LoginBtnWrap,
  LoginBtn,
  KakaoLoginBtn,
  LeftTitle,
  LOGO,
  Line,
} from "./style";
import { useDispatch } from "react-redux";
import { history } from '../../redux/configStore';

import { actionCreators as userActions } from "../../redux/modules/user";

const Login = () => {
  const API_key = "4f269c2d7b614ed22a514496123b7a38";
  const Redirect_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_key}&redirect_uri=${Redirect_URI}&response_type=code`;

  const dispatch = useDispatch();

  const [user_name, setUserName] = useState("");
  const [pwd, setPwd] = useState("");

  const clickLogin = () => {
    if (user_name === "" || pwd === "") {
      window.alert("정보를 모두 입력해주세요.");
      return;
    }

    const login_data = {
      user_name,
      pwd,
    };

    dispatch(userActions.LoginDB(login_data));
  };

  const clickKakao = () => {
    return (window.location.href = KAKAO_AUTH_URL);
  };

  return (
    <LoginWrap>
      <LoginCont>
        <LoginLeft>
          <LeftTitle>
            Back&Stock에 <br />
            오신 것을 환영합니다.
          </LeftTitle>
        </LoginLeft>

        <LoginRight>
          <LOGO onClick={()=>{
            history.push('/')
          }}></LOGO>
          <KakaoLoginBtn onClick={clickKakao}>카카오로 계속하기</KakaoLoginBtn>
          <Line />
          <InputWrap>
            <InputLabel>이메일</InputLabel>
            <LoginInput
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </InputWrap>
          <InputWrap>
            <InputLabel>비밀번호</InputLabel>
            <LoginInput
              type="password"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </InputWrap>
          <LoginBtnWrap>
            <LoginBtn onClick={clickLogin}>로그인</LoginBtn>
          </LoginBtnWrap>
        </LoginRight>
      </LoginCont>
    </LoginWrap>
  );
};

export default Login;
