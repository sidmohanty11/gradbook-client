import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import Header from "../components/HeaderComponents/Header";
import { UserCtx } from "../context/user";
import axios from "../axios";
import Interweave from "interweave";

function Blog() {
  const user = useContext(UserCtx);
  const { id } = useParams();
  const [blogHead, setBlogHead] = useState();
  useEffect(() => {
    const callTheBlog = async () => {
      const res = await axios.get(`/api/v1/blog/${id}`, {
        withCredentials: true,
      });
      console.log(`res`, res);
      setBlogHead(res.data);
    };
    callTheBlog();
  }, []);
  return (
    <div>
      <Header user={user} />
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="flex justify-between">
          <h1 className="text-4xl">{blogHead?.blog_title}</h1>
          <img
            className="rounded-full"
            width="50px"
            src={blogHead?.image_url}
            alt={blogHead?.username}
          />
        </div>
        <span className="italic"> - by {blogHead?.username}</span>
        <img src={blogHead?.blog_thumbnail} alt={blogHead?.blog_title} />
        <Interweave content={blogHead?.blog_text} />
      </div>
    </div>
  );
}

export default Blog;
