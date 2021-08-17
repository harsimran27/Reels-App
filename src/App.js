import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login";
import Home from "./home"

let App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
