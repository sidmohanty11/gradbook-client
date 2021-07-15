import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/HeaderComponents/Header";
import axios from "../axios";
import { UserCtx } from "../context/user";
import { Link } from "react-router-dom";
import Blog from "../components/BlogComponent/Blog";

//https://rrinsunc.sirv.com/Images/cet-b.jpeg

function Profile() {
  const activeUser = useContext(UserCtx);
  const [user, setUser] = useState();
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    async function callBlogs() {
      const res = await axios.get(`/api/v1/blogs/${id}`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        const blogArr = await res.data.blogs;
        setBlogs(blogArr);
      }
    }
    callBlogs();
  }, [id]);

  useEffect(() => {
    async function callUserWhoseProfileIClicked() {
      const res = await axios.get(`/api/v1/users/${id}`, {
        withCredentials: true,
      });
      setUser(res.data.user);
    }
    callUserWhoseProfileIClicked();
  }, [id]);

  return (
    <div>
      <Header user={activeUser} />
      <div className="flex justify-center">
        <div className="py-4 md:w-3/4 w-full flex justify-evenly border-b border-gray-200">
          <div className="">
            <img
              className="rounded-full lg:w-60 w-32"
              src={user?.image_url}
              alt="profile"
            />
          </div>
          <div className="mt-4">
            <h1 className="font-bold text-4xl">{user?.username}</h1>
            <div className="flex mt-4 items-center p-2 bg-green-logo rounded-lg shadow-xs cursor-pointer hover:bg-green-forhover hover:text-gray-100">
              <svg
                className="h-6 fill-current hover:text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"
                />
              </svg>
              <p className="text-xs font-medium ml-1">Let's Catch Up!</p>
            </div>
            <p className="mt-4 text-gray-400">
              Joined since,{" "}
              <span className="italic">
                {new Date(user?.created_on).toDateString()}
              </span>
            </p>
          </div>
        </div>
      </div>
      <ul
        className="flex items-center justify-around md:justify-center space-x-12  
                    uppercase tracking-widest font-semibold text-xs text-gray-600"
      >
        <li className="border-t border-gray-700 -mt-px text-gray-700">
          <Link className="inline-block p-3" to="/blog">
            <span className="inline">blogs</span>
          </Link>
        </li>
        <li>
          <Link className="inline-block p-3" to="/story">
            <span className="inline">story</span>
          </Link>
        </li>
      </ul>
      {blogs?.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Profile;
