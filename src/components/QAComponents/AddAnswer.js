import React, { useState } from "react";
import axios from "../../axios";
import { useHistory } from "react-router-dom";

function AddAnswer({ user, question }) {
  const { id } = user;
  const history = useHistory();
  const [ans, setAns] = useState("");
  async function postAnswer(e) {
    e.preventDefault();
    await axios.post(
      "/api/v1/answer",
      {
        user_id: id,
        q_id: question.id,
        a_text: ans,
      },
      { withCredentials: true }
    );
    setAns("");
    //for making it realtime -_^
    history.push("/s");
    history.push("/");
  }
  return (
    <div className="border border-gray-primary m-2">
      <form className="flex justify-between pl-0 pr-5" method="post">
        <input
          aria-label="Add an answer"
          autoComplete="off"
          className="text-sm text-gray-base w-full mr-3 py-2 px-4 outline-none"
          type="text"
          name="a_text"
          value={ans}
          placeholder="Add an answer."
          onChange={(e) => {
            setAns(e.target.value);
          }}
        />
        <button
          onClick={postAnswer}
          className={`${
            ans.length > 0 ? "text-green-logo" : "text-gray-400"
          } text-sm font-bold`}
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default AddAnswer;
