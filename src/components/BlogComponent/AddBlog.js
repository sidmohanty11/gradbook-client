import React, { useContext, useState } from "react";
import { UserCtx } from "../../context/user";
import TextEditor from "../UiElements/TextEditor";

function AddBlog() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogThumbnail, setBlogThumbnail] = useState("");
  const user = useContext(UserCtx);
  return (
    <div className="max-w-2xl mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-4">
      <h1 className="text-3xl text-center mb-2">Write Your Blog...</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Blog Title
        </label>
        <input
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="blog-title"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Blog Thumbnail
        </label>
        <input
          value={blogThumbnail}
          onChange={(e) => setBlogThumbnail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="blog-thumbnail"
        />
      </div>
      <TextEditor
        user={user}
        blogTitle={blogTitle}
        blogThumbnail={blogThumbnail}
      />
    </div>
  );
}

export default AddBlog;
