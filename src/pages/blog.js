import React, { useContext } from "react";
import Header from "../components/HeaderComponents/Header";
import { UserCtx } from "../context/user";

function Blog() {
  const user = useContext(UserCtx);
  return (
    <div>
      <Header user={user} />
      <div>
        <div class="container w-full md:max-w-3xl mx-auto pt-20"></div>
      </div>
    </div>
  );
}

export default Blog;
