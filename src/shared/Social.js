import React, { useEffect } from "react";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
//import Spinner from "./Spinner";


const Social = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    dispatch(userActions.kakaoLogin(code));
  }, []);

  //return <Spinner />;
  return (
    <SocialWrap>
      <SocialTitle>로그인 중...</SocialTitle>
    </SocialWrap>
  );
};

const SocialWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialTitle = styled.h1`
  font-size: 72px;
  font-weight: 800;
  color: var(--primary-color);
`;

export default Social;