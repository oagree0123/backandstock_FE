import React, { useEffect } from "react";
import "./App.css";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "../redux/configStore";
import { useDispatch } from "react-redux";

import { actionCreators as userActions } from "../redux/modules/user";
import { BackTest, Login, Signup, Community, BestDetail, Mypage, Detail, Result } from "../pages";
import Analytics from "../components/Analytics/Analytics";

import { Header, SideTap } from "../components";
import { getToken } from "./token";

import Social from './Social';
import ReactGA from 'react-ga';
const TRACKING_ID = "308629029";
ReactGA.initialize(TRACKING_ID);



function App() {
  const dispatch = useDispatch();

  const is_token = getToken("token");

  useEffect(() => {
    if (is_token) {
      dispatch(userActions.LoginCheckDB());
    }
  });

  return (
    <AppWrap className="App">
      <Analytics />
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
              <Route path="/result" exact component={Result}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
              <Route path="/community/detail/:id" exact component={BestDetail}></Route>
            </RouteWrap>
          </ContentWrap>
        </Switch>
      </ConnectedRouter>
    </AppWrap>
  );
}

const AppWrap = styled.div`
`;

const ContentWrap = styled.div`
  padding-left: calc(30.9vw - 293px);
  //width: 100vw;
  display: flex;

  @media only screen and (max-width: 1360px) {
    padding-left: 0;
  }
`;

const RouteWrap = styled.div`
  margin-left: 293px;
  margin-top: 80px;
  width: 100%;
  overflow-x: hidden;
`;

export default App;
