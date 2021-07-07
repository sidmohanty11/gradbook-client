import React from "react";
import Modal from "../UiElements/Modal";

function Sidebar({ user }) {
  return (
    <div className="flex flex-col w-1/5 h-screen">
      <div className="flex justify-between border-b border-black-light text-lg h-24">
        <span className="hidden md:inline">sid's ChatBox</span>
        <div className="md:p-2 p-1">
          <Modal />
        </div>
      </div>

      <div className="flex-auto overflow-y-auto">
        <a className="block border-b">
          <div className="border-l-2 border-transparent hover:bg-green-100 p-3 space-y-4">
            <div className="flex flex-row items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <strong className="flex-grow text-sm">sid</strong>
              <div className="text-sm text-gray-600">5hr</div>
            </div>

            <div className="flex flex-row items-center space-x-1">
              <div className="hidden md:inline flex-grow text-xs">
                sidmohanty11@gmail.com
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
