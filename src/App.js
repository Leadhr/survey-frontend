import React from "react";
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import "./App.css";
import Surveywrapper from "./components/surveywrapper/surveywrapper";
import Auth from "./components/auth/auth"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Auth}></Route>
          <Route path="/survey" component={Surveywrapper}></Route>
          <Route component={Error}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
