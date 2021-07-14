import React from "react";
import { useHistory } from "react-router-dom";
import TextEditor from "../UiElements/TextEditor";

function AddBlog() {
  const history = useHistory();
  return (
    <div className="max-w-2xl mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-4">
      <h1 className="text-3xl text-center mb-2">Write Your Blog...</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Blog Title
        </label>
        <input
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="blog-thumbnail"
        />
      </div>
      <TextEditor />
      <div className="flex justify-center">
        <button className="bg-gray-900 text-white-normal p-2 mr-2">
          Post!
        </button>
        <button
          onClick={() => history.push("/blogs")}
          className="bg-red-700 text-white-normal p-2"
        >
          Cancel!
        </button>
      </div>
    </div>
  );
}

export default AddBlog;
