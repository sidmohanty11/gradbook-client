import React from "react";
import Header from "../components/HeaderComponents/Header";
import AskQuestion from "../components/QAComponents/AskQuestion";
import Qas from "./qas";

function Dashboard() {
  return (
    <div className="">
      <Header active="dashboard" />
      <AskQuestion />
      <Qas />
    </div>
  );
}

export default Dashboard;
