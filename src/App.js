import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import {
  LOGIN,
  SIGNUP,
  DASHBOARD,
  STORIES,
  MESSAGES,
  BLOGS,
  ADDBLOG,
  ADDSTORY,
} from "./constants/routes";
import { UserCtx } from "./context/user";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Stories from "./pages/stories";
import NotFound from "./pages/notfound";
import Messages from "./pages/messages";
import Blogs from "./pages/blogs";
import AddBlog from "./components/BlogComponent/AddBlog";
import AddStory from "./components/StoryComponent/AddStory";
import IsProtected from "./components/AuthComponents/IsProtected";

function App() {
  const [activeUser, setActiveUser] = useState(null);
  return (
    <Switch>
      <Route exact path={LOGIN}>
        <Login setActiveUser={setActiveUser} />
      </Route>
      <Route exact path={SIGNUP}>
        <Signup setActiveUser={setActiveUser} />
      </Route>
      <UserCtx.Provider value={activeUser}>
        <IsProtected user={activeUser}>
          <Route exact path={DASHBOARD}>
            <Dashboard />
          </Route>
          <Route exact path={STORIES}>
            <Stories />
          </Route>
          <Route exact path={MESSAGES}>
            <Messages />
          </Route>
          <Route exact path={BLOGS}>
            <Blogs />
          </Route>
          <Route exact path={ADDBLOG}>
            <AddBlog />
          </Route>
          <Route exact path={ADDSTORY}>
            <AddStory />
          </Route>
        </IsProtected>
      </UserCtx.Provider>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
