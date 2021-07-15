import React from "react";
import truncateString from "../../helpers/truncateString";
import { Link } from "react-router-dom";
import Interweave from "interweave";

function Blog({ blog }) {
  return (
    <div className="max-w-2xl mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <img
        className="object-cover w-full h-64"
        src={blog.blog_thumbnail}
        alt="Article"
      />
      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-green-logo uppercase dark:text-blue-400">
            CET BHUBANESWAR
          </span>
          <Link
            to={`/blog/${blog.id}`}
            className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
          >
            {blog.blog_title}
          </Link>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <Interweave content={truncateString(blog.blog_text, 100)} />
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="object-cover h-10 rounded-full"
                src={blog.image_url}
                alt="Avatar"
              />
              <Link
                to={`/profile/${blog.user_id}`}
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
              >
                {blog.username}
              </Link>
            </div>
            <span className="mx-1 text-xs text-gray-400 dark:text-gray-300">
              {new Date(blog.created_on).toDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
