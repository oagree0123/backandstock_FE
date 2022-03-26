import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  InputLabel,
  InputWrap,
  SignupBtn,
  SignupBtnWrap,
  SignupInput,
  SignupRight,
  SignupTitle,
  SignupWrap,
  TitleWrap,
  SignupCont,
  ErrorText
} from "./style";

import {
  LoginLeft,
  LoginText,
  LeftLogo,
  LeftTitle,
  LogoWrap

} from "../../pages/Login/style.js"

import { actionCreators as userActions } from "../../redux/modules/user";
import { history } from '../../redux/configStore';
import LogoTitle from '../../assets/images/logo_big.png';
// import Logo from '../../assets/images/logo_1.png';
import Wlogo from '../../assets/images/w_logo_1.png';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Signup = () => {
  const dispatch = useDispatch();

  // 입력 상태 관리
  const [user_name, setUserName] = useState("");
  const [nickname, setNickname] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd_check, setPwdCheck] = useState("");

  // 입력 오류 확인
  const [is_email, setIsEmail] = useState(false);
  const [is_nick, setIsNick] = useState(false);
  const [is_pwd, setIsPwd] = useState(false);
  const [is_pwdcheck, setIsPwdCheck] = useState(false);

  const clickSignup = () => {
    if (user_name === "" || nickname === "" || pwd === "" || pwd_check === "") {
      MySwal.fire({
        title: "빈칸을 모두 입력해주세요.",
        confirmButtonColor: '#0075FF',
      });
      return;
    }

    if (!is_email || !is_nick || !is_pwd || !is_pwdcheck) {
      MySwal.fire({
        title: "입력을 다시 확인해주세요",
        confirmButtonColor: '#0075FF',
      });
      return;
    }

    const user_data = {
      user_name,
      nickname,
      pwd,
    }

    dispatch(userActions.SignupDB(user_data));
  }

  // 이메일 형식 체크
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

  // 닉네임 체크 (한글, 영어, 숫자) 2~6 글자
  const onChangeNickname = (e) => {
    const nick_reg = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,6}$/;
    const current_nickname = e.target.value;
    setNickname(current_nickname);

    if (!nick_reg.test(current_nickname)) {
      setIsNick(false);
    } else {
      setIsNick(true);
    }
  }

  // 비밀번호 체크 (영어, 특수문자) 8~20 글자
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

  // 비밀번호 일치 
  const onChangePwdCheck = (e) => {
    const current_pwdcheck = e.target.value;
    setPwdCheck(current_pwdcheck);

    if (pwd !== current_pwdcheck) {
      setIsPwdCheck(false);
    } else {
      setIsPwdCheck(true);
    }
  }

  return (
    <SignupWrap>
      <SignupCont>
        <LoginLeft>
          <LeftTitle
            src={LogoTitle}
            onClick={() => { history.push('/') }}>
          </LeftTitle>
          <LoginText>
            <LogoWrap>
              <LeftLogo src={Wlogo}></LeftLogo>
            </LogoWrap>
            <span>백스탁에서 나의<br />
              자산을 다양하게<br />
              실험해 보세요</span>
          </LoginText>
        </LoginLeft>

        <SignupRight>
          <TitleWrap>
            <SignupTitle>회원가입</SignupTitle>
          </TitleWrap>
          <InputWrap>
            <InputLabel>닉네임</InputLabel>
            <SignupInput
              type="text"
              onChange={onChangeNickname}
            />
            {nickname.length > 0 ?
              (nickname.length >= 2 && nickname.length <= 6) ?
                !is_nick && (
                  <ErrorText>닉네임에 특수문자는 입력하실 수 없습니다.</ErrorText>
                ) :
                <ErrorText>닉네임은 2~6자를 입력하세요.</ErrorText> :
              null
            }
          </InputWrap>
          <InputWrap>
            <InputLabel>이메일</InputLabel>
            <SignupInput
              type="text"
              onChange={onChangeEmail}
            />
            {user_name.length > 0 && !is_email && (
              <ErrorText>올바른 이메일 형식을 입력해주세요.</ErrorText>
            )}
          </InputWrap>

          <InputWrap>
            <InputLabel>비밀번호</InputLabel>
            <SignupInput
              type="password"
              onChange={onChangePwd}
            />
            {pwd.length > 0 && !is_pwd && (
              <ErrorText>8~20자로 영문 대소문자, 숫자, 특수문자 조합을 사용하세요.</ErrorText>
            )}
          </InputWrap>
          <InputWrap>
            <InputLabel>비밀번호 확인</InputLabel>
            <SignupInput
              type="password"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  clickSignup();
                }
              }
              }
              onChange={onChangePwdCheck}
            />
            {pwd_check.length > 0 && !is_pwdcheck && (
              <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>
            )}
          </InputWrap>
          <SignupBtnWrap>
            <div>
              <SignupBtn
                onClick={clickSignup}
              >
                회원가입
              </SignupBtn>
            </div>
          </SignupBtnWrap>
        </SignupRight>
      </SignupCont>
    </SignupWrap>
  );
};

export default Signup;
