import React, { useState, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import {
  LOGIN,
  SIGNUP,
  DASHBOARD,
  STORIES,
  MESSAGES,
  BLOGS,
  BLOG,
  ADDBLOG,
  ADDSTORY,
  PROFILE,
} from "./constants/routes";
import { UserCtx } from "./context/user";
import IsProtected from "./components/AuthComponents/IsProtected";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./pages/notfound"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));
const Blogs = lazy(() => import("./pages/blogs"));
const Blog = lazy(() => import("./pages/blog"));
const Stories = lazy(() => import("./pages/stories"));
const AddStory = lazy(() => import("./components/StoryComponent/AddStory"));
const AddBlog = lazy(() => import("./components/BlogComponent/AddBlog"));
const Messages = lazy(() => import("./pages/messages"));

function App() {
  const [activeUser, setActiveUser] = useState(null);
  return (
    <Suspense fallback={<p>Loading...</p>}>
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
            <Route exact path={BLOG}>
              <Blog />
            </Route>
            <Route exact path={ADDBLOG}>
              <AddBlog />
            </Route>
            <Route exact path={ADDSTORY}>
              <AddStory />
            </Route>
            <Route exact path={PROFILE}>
              <Profile />
            </Route>
          </IsProtected>
        </UserCtx.Provider>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
