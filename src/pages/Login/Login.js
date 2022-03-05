import React, { useState } from 'react';
import { LoginLeft, LoginRight, LoginInput, LoginWrap, InputLabel, InputWrap, LoginBtnWrap, LoginBtn, KakaoLoginBtn, TitleWrap, LoginTitle, LoginText } from './style';
import { useDispatch } from 'react-redux';

import { actionCreators as userActions } from '../../redux/modules/user';

const Login = () => {
  const dispatch = useDispatch();

  const [user_name, setUserName] = useState("");
  const [pwd, setPwd] = useState("");

  const clickLogin = () => {
    if(user_name === "" || pwd === "") {
      window.alert("정보를 모두 입력해주세요.");
      return ;
    }

    const login_data = {
      user_name,
      pwd,
    }

    dispatch(userActions.LoginDB(login_data));
  }

  return (
    <LoginWrap>
      <LoginLeft>
        <TitleWrap>
          <LoginTitle>로그인</LoginTitle>
          <LoginText>카카오 계정으로 로그인할 수도 있어요.</LoginText>
        </TitleWrap>
        <InputWrap>
          <InputLabel>이메일</InputLabel>
          <LoginInput 
            type="text" 
            onChange={(e) => {
              setUserName(e.target.value)
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
          <LoginBtn
            onClick={clickLogin}
          >
            로그인
          </LoginBtn>
          <KakaoLoginBtn>카카오 로그인</KakaoLoginBtn>
        </LoginBtnWrap>
      </LoginLeft>
      <LoginRight>

      </LoginRight>
    </LoginWrap>
  );
};

export default Login;