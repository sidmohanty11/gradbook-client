import React, { useContext } from "react";
import Header from "../components/HeaderComponents/Header";
import { UserCtx } from "../context/user";

function Messages() {
  const user = useContext(UserCtx);
  return <Header active="messages" user={user} />;
}

export default Messages;
