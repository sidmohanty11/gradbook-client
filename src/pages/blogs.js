import React from "react";
import Header from "../components/HeaderComponents/Header";
import Blog from "../components/BlogComponent/Blog";
import AddBtn from "../components/UiElements/AddBtn";

function Blogs() {
  return (
    <div>
      <Header active="blogs" />
      <div className="flex mt-4 justify-center">
        <AddBtn element="Blog" to="/add/blog" />
      </div>
      <Blog />
    </div>
  );
}

export default Blogs;
