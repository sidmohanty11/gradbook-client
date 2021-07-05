import React, { useContext, useEffect, useState } from "react";
import Header from "../components/HeaderComponents/Header";
import Blog from "../components/BlogComponent/Blog";
import AddBtn from "../components/UiElements/AddBtn";
import { UserCtx } from "../context/user";
import axios from "../axios";

function Blogs() {
  const user = useContext(UserCtx);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    async function callBlogs() {
      const res = await axios.get("/api/v1/blogs/");
      if (res.status === 200) {
        const blogArr = await res.data.blogs;
        setBlogs(blogArr);
      }
    }
    callBlogs();
  }, []);
  return (
    <div>
      <Header active="blogs" user={user} />
      <div className="flex mt-4 justify-center">
        <AddBtn element="Blog" to="/add/blog" />
      </div>
      {blogs?.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blogs;
