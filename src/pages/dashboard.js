import React, { useEffect, useState, useContext } from "react";
import QPost from "../components/QAComponents/QPost";
import axios from "../axios";
import Header from "../components/HeaderComponents/Header";
import AskQuestion from "../components/QAComponents/AskQuestion";
import { UserCtx } from "../context/user";

function Dashboard() {
  const [questions, setQuestions] = useState();
  const user = useContext(UserCtx);

  useEffect(() => {
    async function callQuestions() {
      const res = await axios.get("/api/v1/questions");
      if (res.status === 200) {
        const QuesArr = await res.data.qs;
        setQuestions(QuesArr);
      }
    }
    callQuestions();
  }, []);
  return (
    <div>
      <Header active="dashboard" user={user} />
      <AskQuestion user={user} />
      <div className="flex justify-center mt-4">
        {questions?.map((question) => (
          <QPost key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
