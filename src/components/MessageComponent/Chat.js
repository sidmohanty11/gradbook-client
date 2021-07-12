import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "../../axios";
import timeSince from "../../helpers/timeSince";

function Chat({ user }) {
  const { to } = useParams();
  const history = useHistory();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getAllMessages() {
      const res = await axios.get(`/api/v1/messages/${user.id}/${to}`);
      setMessages(res.data.messages);
    }
    getAllMessages();
  }, []);

  async function sendMessage(e) {
    e.preventDefault();
    const res = await axios.post(`/api/v1/messages/${to}/${user.id}`, {
      content: message,
    });
    console.log(`res`, res);
    setMessage("");
    history.push("/messages");
    history.push(`/messages/${to}`);
  }

  const FromUser = () => {
    return (
      <>
        {messages?.map((msg) => (
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col">
              <div key={msg.id} className="bg-gray-200 rounded p-5">
                {msg.content}
              </div>
              <div key={msg.id} className="text-sm text-gray-600">
                {timeSince(new Date(msg.created_on).getTime())}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  const ToUser = () => {
    return (
      <>
        {messages?.map((msg) => (
          <div className="flex space-x-2 flex-row-reverse space-x-reverse">
            <div className="flex flex-col">
              <div key={msg.id} className="bg-green-100 rounded p-5">
                {msg.content}
              </div>
              <div key={msg.id} className="text-sm text-gray-600">
                {timeSince(new Date(msg.created_on))}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="md:w-3/5 w-full border-l border-r border-gray-400 flex flex-col">
      <div className="flex-none h-20 flex flex-row justify-between items-center p-5 border-b">
        <div className="flex flex-col space-y-1">
          <strong>ram</strong>
          <div className="text-sm outline-none border-b border-dashed text-black placeholder-gray-600">
            online
          </div>
        </div>
      </div>

      <div
        className="flex-auto overflow-y-auto p-5 space-y-4"
        style={{
          backgroundImage:
            "url('https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Background.max-1300x1300.jpg')",
        }}
      >
        {messages?.to_user_id === user.id ? <FromUser /> : <ToUser />}
      </div>

      <div className="flex-none h-40 p-4 pt-0">
        <form className="flex">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here."
            className="w-5/6 outline-none border focus:border-black-logo hover:border-black-logo rounded p-4 shadow-lg"
          />
          <button type="submit" onClick={sendMessage}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
