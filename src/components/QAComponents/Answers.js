import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";

function Answers({ question }) {
  const [answers, setAnswers] = useState();
  const qid = question.id;
  useEffect(() => {
    async function callAnswers() {
      const res = await axios.get(`/api/v1/answers/${qid}`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        const AnsArr = res.data.ans;
        setAnswers(AnsArr);
      }
    }
    callAnswers();
  }, [qid]);
  return (
    <div className="mb-2 ml-2">
      {answers?.map((ans) => (
        <div key={ans.id} className="mb-2 text-sm">
          <Link to={`profile/${ans.user_id}`} className="font-bold mr-2">
            {ans.username}
          </Link>{" "}
          {ans.a_text}
        </div>
      ))}
    </div>
  );
}

export default Answers;
