import React, { useContext } from "react";
import AddAnswer from "./AddAnswer";
import Header from "./Header";
import Answers from "./Answers";
import { UserCtx } from "../../context/user";

function QPost({ question }) {
  const user = useContext(UserCtx);
  return (
    <div className="rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white m-2 shadow-md">
      <Header question={question} />
      <div className="px-3 pb-2">
        <div className="pt-1">
          <div className="mb-2 text-sm">
            <span className="ml-2">{question.q_text}</span>
          </div>
        </div>
        <AddAnswer user={user} question={question} />
        <Answers question={question} />
      </div>
    </div>
  );
}

export default QPost;
