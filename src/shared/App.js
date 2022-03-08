import React, { useEffect } from "react";
import "./App.css";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configStore";
import { useDispatch } from "react-redux";

import { actionCreators as userActions } from "../redux/modules/user";
import { BackTest, Login, Signup, Community } from "../pages";
import { Header, SideTap } from "../components";
import { getToken } from "./token";

function App() {
  const dispatch = useDispatch();

  const is_token = getToken();

  useEffect(() => {
    if(is_token){
      dispatch(userActions.LoginCheckDB());
    }
  }); 

  return (
    <AppWrap className="App">
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <ContentWrap>
          <SideTap />
          <RouteWrap>
            <Route path="/" exact component={BackTest} />
            <Route path="/community" exact component={Community}></Route>
          </RouteWrap>
        </ContentWrap>
      </ConnectedRouter>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  margin: 0 auto;
  width: 1280px;
  display: flex;
`;

const ContentWrap = styled.div`
  margin-top: 80px;
  display: flex;
`;

const RouteWrap = styled.div`
  margin-left: 293px;
  padding: 44px 0px 56px 56px;
`;

export default App;
