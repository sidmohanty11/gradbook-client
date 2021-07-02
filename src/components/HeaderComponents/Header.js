import React, { useContext, useState } from "react";
import HeaderIcon from "./HeaderIcon";
import { Link } from "react-router-dom";
import { DASHBOARD, STORIES, MESSAGES } from "../../constants/routes";
import { UserCtx } from "../../context/user";

function Header({ active }) {
  const [dropdown, setDropdown] = useState(false);
  const user = useContext(UserCtx);
  return (
    <div className="sticky top-0 z-50 flex items-center p-2 lg:px-5 shadow-md border-b-2">
      {/* left */}
      <div className="flex items-center">
        <img width="110px" src="./logo.png" alt="logo" />
        <div className="hidden md:inline-flex ml-2 items-center p-2 bg-gray-100">
          <svg
            className="h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentcolor"
              d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search GradBook"
            className="hidden md:inline-flex ml-2 items-center bg-transparent flex-shrink outline-none"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <Link to={DASHBOARD}>
            <HeaderIcon>
              <svg
                className={`${
                  active === "dashboard"
                    ? "text-green-logo"
                    : "text-black hover:text-green-forhover"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"
                />
              </svg>
            </HeaderIcon>
          </Link>
          <Link to={STORIES}>
            <HeaderIcon>
              <svg
                className={`${
                  active === "story"
                    ? "text-green-logo"
                    : "text-black hover:text-green-forhover"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M24 24l-6-5.269-6 5.269v-24h12v24zm-14-23h-10v2h10v-2zm0 5h-10v2h10v-2zm0 5h-10v2h10v-2zm0 5h-10v2h10v-2z"
                />
              </svg>
            </HeaderIcon>
          </Link>
          <Link to="blogs">
            <HeaderIcon>
              <svg
                className={`${
                  active === "blogs"
                    ? "text-green-logo"
                    : "text-black hover:text-green-forhover"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M22.548 9l.452-2h-5.364l1.364-6h-2l-1.364 6h-5l1.364-6h-2l-1.364 6h-6.184l-.452 2h6.182l-1.364 6h-5.36l-.458 2h5.364l-1.364 6h2l1.364-6h5l-1.364 6h2l1.364-6h6.185l.451-2h-6.182l1.364-6h5.366zm-8.73 6h-5l1.364-6h5l-1.364 6z"
                />
              </svg>
            </HeaderIcon>
          </Link>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Link to={MESSAGES}>
          <HeaderIcon>
            <svg
              className={`${
                active === "messages"
                  ? "text-green-logo"
                  : "text-black hover:text-green-forhover"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentcolor"
                d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"
              />
            </svg>
          </HeaderIcon>
        </Link>

        <div className="relative">
          <button
            onClick={() => setDropdown((prevState) => !prevState)}
            className="relative z-10 block bg-white rounded-md dark:bg-gray-800 focus:outline-none"
          >
            <img
              className="ml-1 rounded-full"
              src={user.story.imageURL}
              width="50px"
              alt=""
            />
          </button>
          <div
            className={`${
              dropdown ? "absolute" : "hidden"
            } right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800`}
          >
            <a
              href="/p"
              className={`${
                dropdown ? "block" : "hidden"
              } px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-logo hover:text-white dark:hover:text-white`}
            >
              your profile
            </a>
            <a
              href="/b"
              className={`${
                dropdown ? "block" : "hidden"
              } px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-logo hover:text-white dark:hover:text-white`}
            >
              Your blogs
            </a>
            <a
              href="/s"
              className={`${
                dropdown ? "block" : "hidden"
              } px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-logo hover:text-white dark:hover:text-white`}
            >
              Settings
            </a>
            <a
              href="/signout"
              className={`${
                dropdown ? "block" : "hidden"
              } px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-logo hover:text-white dark:hover:text-white`}
            >
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
