import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  LOGIN,
  SIGNUP,
  DASHBOARD,
  STORIES,
  MESSAGES,
} from "./constants/routes";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Stories from "./pages/stories";
import NotFound from "./pages/notfound";
import Messages from "./pages/messages";

function App() {
  return (
    <Switch>
      <Route exact path={LOGIN}>
        <Login />
      </Route>
      <Route exact path={SIGNUP}>
        <Signup />
      </Route>
      <Route exact path={DASHBOARD}>
        <Dashboard />
      </Route>
      <Route exact path={STORIES}>
        <Stories />
      </Route>
      <Route exact path={MESSAGES}>
        <Messages />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
