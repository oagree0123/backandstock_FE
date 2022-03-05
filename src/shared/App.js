import './App.css';
import { Route } from "react-router-dom"

import Community from '../pages/Community';
import Main from '../pages/Main';
import React from 'react';


function App() {
  return (

    <React.Fragment>
      <Route path="/" exact component={Main}></Route>
      <Route path="/community" exact component={Community}></Route>
    </React.Fragment>
  );
}

export default App;
