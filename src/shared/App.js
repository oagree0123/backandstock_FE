import React, { useEffect } from "react";
import "./App.css";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "../redux/configStore";
import { useDispatch } from "react-redux";

import { actionCreators as userActions } from "../redux/modules/user";
import { BackTest, Login, Signup, Community, TestResult, Mypage } from "../pages";

import { Header, SideTap } from "../components";
import { getToken } from "./token";

import Social from './Social';

function App(props) {
  const dispatch = useDispatch();

  const is_token = getToken("token");

  useEffect(() => {
    if (is_token) {
      dispatch(userActions.LoginCheckDB());
    }
  });

  return (
    <AppWrap className="App">
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/oauth/kakao/callback" exact component={Social} />
          <ContentWrap>
            <Header />
            <SideTap />
            <RouteWrap>
              <Route path="/" exact component={BackTest} />
              <Route path="/community" exact component={Community} />
              <Route path="/mypage" exact component={Mypage}></Route>
              <Route path="/result" exact component={TestResult}></Route>
            </RouteWrap>
          </ContentWrap>
        </Switch>
      </ConnectedRouter>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  margin: 0 auto;
  display: flex;
`;

const ContentWrap = styled.div`
  width: 1280;
  margin: 0 auto;
`;

const RouteWrap = styled.div`
  margin-top: 80px;
  margin-left: 293px;
`;

export default App;
