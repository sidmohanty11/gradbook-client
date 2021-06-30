import React from "react";
import { Route, Switch } from "react-router-dom";
import { LOGIN, SIGNUP, DASHBOARD, STORIES } from "./constants/routes";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Story from "./pages/story";
import NotFound from "./pages/notfound";

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
        <Story />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
