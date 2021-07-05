import React from "react";

function AskQuestion({ user }) {
  return (
    <form action="">
      <div className="flex mt-4 justify-center">
        <div>
          <img
            className="rounded-full mr-2"
            width="55px"
            src={user.image_url}
            alt=""
          />
        </div>
        <div>
          <input
            className="h-12 md:w-96 rounded-sm bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder="Ask your question?"
          />
        </div>
        <button type="submit" className="ml-2">
          <svg
            className="text-black hover:text-green-forhover"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentcolor"
              d="M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-8.698 6.825l-1.439-.507 5.701-5.215 1.436.396-5.698 5.326zm3.262 4.287l-1.323-.565 4.439-4.503 1.32.455-4.436 4.613zm-4.083.387l-1.481-.507 8-7.89 1.437.397-7.956 8z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default AskQuestion;
