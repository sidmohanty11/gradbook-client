import React from "react";

function NotFound() {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="https://images.unsplash.com/photo-1517322479358-df90f951f87d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt=""
        className="absolute h-full w-full object-cover"
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            You&#x27;re alone here
          </h1>
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
