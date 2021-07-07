import React, { useContext } from "react";
import Header from "../components/HeaderComponents/Header";
import Sidebar from "../components/MessageComponent/Sidebar";
import Chat from "../components/MessageComponent/Chat";
import { UserCtx } from "../context/user";

function Messages() {
  const user = useContext(UserCtx);
  return (
    <>
      <Header active="messages" user={user} />
      <div className="container flex justify-center">
        <Sidebar user={user} />
        <Chat />
      </div>
    </>
  );
}

export default Messages;
