import React from "react";

function Blog({ blog }) {
  return (
    <div className="max-w-2xl mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <img
        className="object-cover w-full h-64"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />
      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-green-logo uppercase dark:text-blue-400">
            CET BHUBANESWAR
          </span>
          <a
            href={blog.id}
            className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
          >
            {blog.blog_title}
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {blog.blog_text}
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
              <a
                href={`/profile/${blog.user_id}`}
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
              >
                {blog.username}
              </a>
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
