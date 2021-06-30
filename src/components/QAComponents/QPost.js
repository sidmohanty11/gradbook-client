import React from "react";
import AddAnswer from "./AddAnswer";
import Header from "./Header";
import Answers from "./Answers";

function QPost() {
  return (
    <div className="rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0 shadow-md">
      <Header />
      <div className="px-3 pb-2">
        <div className="pt-1">
          <div className="mb-2 text-sm">
            <span className="font-bold mr-2">sidharth</span>How to solve this?
          </div>
        </div>
        <AddAnswer />
        <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
          View all 14 answers
        </div>
        <Answers />
      </div>
    </div>
  );
}

export default QPost;