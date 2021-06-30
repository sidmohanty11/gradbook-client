import React from "react";

function AddAnswer() {
  return (
    <div className="border border-gray-primary m-2">
      <form className="flex justify-between pl-0 pr-5" method="post">
        <input
          aria-label="Add an answer"
          autoComplete="off"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4 outline-none"
          type="text"
          name="add-comment"
          placeholder="Add an answer."
        />
        <button className={`text-sm font-bold text-gray-400`} type="button">
          Post
        </button>
      </form>
    </div>
  );
}

export default AddAnswer;
