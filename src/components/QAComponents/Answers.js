import React, { useEffect, useState } from "react";
import axios from "../../axios";

function Answers({ question }) {
  const [answers, setAnswers] = useState();
  useEffect(() => {
    async function callAnswers() {
      const res = await axios.get(`/api/v1/answers/${question.id}`);
      if (res.status === 200) {
        const AnsArr = res.data.ans;
        setAnswers(AnsArr);
      }
    }
    callAnswers();
  }, []);
  return (
    <div className="mb-2 ml-2">
      {answers?.map((ans) => (
        <div key={ans.id} className="mb-2 text-sm">
          <span className="font-bold mr-2">{ans.username}</span> {ans.a_text}
        </div>
      ))}
    </div>
  );
}

export default Answers;
