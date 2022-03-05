import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextWrap, InputLabel, InputWrap, LoginSpan, SignupBtn, SignupBtnWrap, SignupInput, SignupLeft, SignupRight, SignupText, SignupTitle, SignupWrap, TitleWrap } from "./style";

import { actionCreators as userActions } from "../../redux/modules/user";

const Signup = () => {
  const dispatch = useDispatch();

  const [user_name, setUserName] = useState("");
  const [nickname, setNickname] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd_check, setPwdCheck] = useState("");

  const clickSignup = () => {
    if(user_name === "" || nickname === "" || pwd === "" || pwd_check === "") {
      window.alert("정보를 모두 입력해주세요.");
      return ;
    }
    if(pwd !== pwd_check) {
      window.alert("비밀번호가 일치하지 않습니다.");
      return ;
    }
    const user_data = {
      user_name,
      nickname,
      pwd,
    }

    dispatch(userActions.SignupDB(user_data));
  }

  return (
    <SignupWrap>
      <SignupLeft>
        <TitleWrap>
          <SignupTitle>회원가입</SignupTitle>
          <TextWrap>
            <SignupText>이미 회원이신가요?</SignupText>
            <LoginSpan>로그인</LoginSpan>
          </TextWrap>
        </TitleWrap>
        <InputWrap>
          <InputLabel>이메일</InputLabel>
          <SignupInput 
            type="text" 
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </InputWrap>
        <InputWrap>
          <InputLabel>닉네임</InputLabel>
          <SignupInput 
            type="text"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        </InputWrap>
        <InputWrap>
          <InputLabel>비밀번호</InputLabel>
          <SignupInput 
            type="password" 
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </InputWrap>
        <InputWrap>
          <InputLabel>비밀번호 확인</InputLabel>
          <SignupInput 
            type="password" 
            onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </InputWrap>
        <SignupBtnWrap>
          <SignupBtn  
            onClick={clickSignup}
          >
            회원가입
          </SignupBtn>
        </SignupBtnWrap>
      </SignupLeft>
      <SignupRight>

      </SignupRight>
    </SignupWrap>
  );
};

export default Signup;
