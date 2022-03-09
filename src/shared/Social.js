import React, { useEffect } from "react";
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
  return <h1>Hello</h1>;
};

export default Social;