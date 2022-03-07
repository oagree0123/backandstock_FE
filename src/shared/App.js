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
      <Header />
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <SideTap />
        <ContentWrap>
          <Route path="/" exact component={BackTest} />
          <Route path="/community" exact component={Community}></Route>
        </ContentWrap>
      </ConnectedRouter>
    </AppWrap>
  );
}

const AppWrap = styled.div`
`;

const ContentWrap = styled.div`
  margin-left: 24vw;
  padding: 47px 112px 0px 104px;
`;

export default App;
