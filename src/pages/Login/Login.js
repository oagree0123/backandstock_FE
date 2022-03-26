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
  ErrorText,
  LoginText,
  LeftLogo,
  RightTitle,
  SignUpBtn,
  Wrap,
  LogoWrap
} from "./style";
import kakao from "../../assets/images/kakaoIcon.svg"
import kakaologo from "../../assets/images/kakao.svg"
import { useDispatch } from "react-redux";
import { history } from '../../redux/configStore';

import { actionCreators as userActions } from "../../redux/modules/user";
import LogoTitle from '../../assets/images/logo_big.png';
// import Logo from '../../assets/images/logo_1.png';
import Wlogo from '../../assets/images/w_logo_1.png';

const Login = () => {
  const API_key = process.env.REACT_APP_KAKAO_ID;
  const Redirect_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_key}&redirect_uri=${Redirect_URI}&response_type=code`;

  const dispatch = useDispatch();

  // 이메일, 비밀번호
  const [user_name, setUserName] = useState("");
  const [pwd, setPwd] = useState("");

  // 입력 오류 확인
  const [is_email, setIsEmail] = useState(false);
  const [is_pwd, setIsPwd] = useState(false);

  // 로그인
  const clickLogin = () => {
    if (user_name === "" || pwd === "") {
      window.alert("빈칸을 모두 입력해주세요.");
      return;
    }

    const login_data = {
      user_name,
      pwd,
    };

    dispatch(userActions.LoginDB(login_data));
  };

  // 카카오 로그인
  const clickKakao = () => {
    return (window.location.href = KAKAO_AUTH_URL);
  };

  const onChangeEmail = (e) => {
    const email_reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const current_email = e.target.value;

    setUserName(current_email);

    if (!email_reg.test(current_email)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  }

  const onChangePwd = (e) => {
    const pwd_reg =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    const current_pwd = e.target.value;
    setPwd(current_pwd);

    if (!pwd_reg.test(current_pwd)) {
      setIsPwd(false);
    } else {
      setIsPwd(true);
    }
  }

  return (
    <LoginWrap>
      <LoginCont>
        <LoginLeft>
          <LeftTitle
            src={LogoTitle}
            onClick={() => { history.push('/') }}>
          </LeftTitle>
          <LoginText>
            <span>백스탁에서 나의<br />
              자산을 다양하게<br />
              실험해 보세요</span>
            <LogoWrap>
              <LeftLogo src={Wlogo}></LeftLogo>
            </LogoWrap>
          </LoginText>
        </LoginLeft>
        <LoginRight>
          <RightTitle>
            <p>로그인</p>
          </RightTitle>
          <Wrap>
            <span>아직 계정이 없으신가요?</span>
            <SignUpBtn onClick={() => { history.push('/signup') }}>회원가입</SignUpBtn>
          </Wrap>
          <InputWrap>
            <InputLabel>이메일</InputLabel>
            <LoginInput
              type="text"
              onChange={onChangeEmail}
            />
            {user_name.length > 0 && !is_email && (
              <ErrorText>올바른 이메일 형식을 입력해주세요.</ErrorText>
            )}
          </InputWrap>
          <InputWrap>
            <InputLabel>비밀번호</InputLabel>
            <LoginInput
              type="password"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  clickLogin();
                }
              }
              }
              onChange={onChangePwd}
            />
            {pwd.length > 0 && !is_pwd && (
              <ErrorText>8~20자로 영문 대소문자, 숫자, 특수문자 조합을 사용하세요.</ErrorText>
            )}
          </InputWrap>
          <Line />
          <LoginBtnWrap>
            <div>
              <LoginBtn onClick={clickLogin}>로그인</LoginBtn>
              <KakaoLoginBtn src={kakao} onClick={clickKakao}></KakaoLoginBtn>
            </div>
          </LoginBtnWrap>
        </LoginRight>
      </LoginCont>
    </LoginWrap>

  );
};

export default Login;
