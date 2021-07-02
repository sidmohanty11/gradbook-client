import React from "react";
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
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Stories from "./pages/stories";
import NotFound from "./pages/notfound";
import Messages from "./pages/messages";
import Blogs from "./pages/blogs";
import AddBlog from "./components/BlogComponent/AddBlog";
import AddStory from "./components/StoryComponent/AddStory";
import { UserCtx } from "./context/user";

const DUMMY_USER = {
  id: 1,
  username: "sidharth",
  email: "sidmohanty11@gmail.com",
  story: {
    name: "Sidharth Mohanty",
    branch: "IEE",
    clubs: "Zairza, Spectrum",
    motto: "man in pursuit of his dreams",
    github: "https://github.com/sidmohanty11",
    youtube: "",
    linkedin: "https://www.linkedin.com/in/sidmohanty11/",
    imageURL: "https://avatars.githubusercontent.com/u/73601258?v=4",
    journey: "ksafnkansfihasfasijfiasj",
  },
};

function App() {
  return (
    <UserCtx.Provider value={DUMMY_USER}>
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
        <Route exact path={BLOGS}>
          <Blogs />
        </Route>
        <Route exact path={ADDBLOG}>
          <AddBlog />
        </Route>
        <Route exact path={ADDSTORY}>
          <AddStory />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </UserCtx.Provider>
  );
}

export default App;
