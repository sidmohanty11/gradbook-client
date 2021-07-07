import React from "react";

function Chat() {
  return (
    <div className="md:w-3/5 w-full border-l border-r border-gray-400 flex flex-col">
      <div className="flex-none h-20 flex flex-row justify-between items-center p-5 border-b">
        <div className="flex flex-col space-y-1">
          <strong>sid</strong>
          <div className="text-sm outline-none border-b border-dashed text-black placeholder-gray-600">
            online
          </div>
        </div>
      </div>

      <div
        className="flex-auto overflow-y-auto p-5 space-y-4"
        style={{
          backgroundImage:
            "url('https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Background.max-1300x1300.jpg')",
        }}
      >
        <div className="flex flex-row space-x-2">
          <svg
            className="flex-none w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <div className="flex flex-col">
            <div className="bg-gray-200 rounded p-5">Some message text</div>
            <div className="text-sm text-gray-600">4hr ago</div>
          </div>
        </div>
        <div className="flex space-x-2 flex-row-reverse space-x-reverse">
          <svg
            className="flex-none w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <div className="flex flex-col">
            <div className="bg-green-100 rounded p-5">Some message text</div>
            <div className="text-sm text-gray-600">5hr ago</div>
          </div>
        </div>
      </div>

      <div className="flex-none h-40 p-4 pt-0">
        <input
          placeholder="Type your message here."
          className="w-full outline-none border focus:border-black-logo hover:border-black-logo rounded p-4 shadow-lg"
        />
      </div>
    </div>
  );
}

export default Chat;
