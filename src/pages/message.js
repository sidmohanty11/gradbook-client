import React, { useContext } from "react";
import Chat from "../components/MessageComponent/Chat";
import { UserCtx } from "../context/user";
import Header from "../components/HeaderComponents/Header";

function Message() {
  const user = useContext(UserCtx);
  return (
    <>
      <Header user={user} active="messages" />
      <div className="container flex justify-center h-screen">
        <Chat user={user} />
      </div>
    </>
  );
}

export default Message;
