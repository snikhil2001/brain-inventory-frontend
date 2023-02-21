import React, { useEffect, useState } from "react";
import ChatBar from "../../components/ChatBar";
import ChatBody from "../../components/ChatBody";
import ChatFooter from "../../components/ChatFooter";
import { useJwt } from "react-jwt";
import { useSelector } from "react-redux";

const Home = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const { token } = useSelector((store) => store.auth);
  const { decodedToken } = useJwt(token);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className="chat">
      <ChatBar name={decodedToken?.name} email={decodedToken?.email} />
      <div className="chat__main">
        <ChatBody messages={messages} name={decodedToken?.name} />
        <ChatFooter socket={socket} name={decodedToken?.name} />
      </div>
    </div>
  );
};

export default Home;
