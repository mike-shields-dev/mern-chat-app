import { React, useEffect, useState } from "react";
import axios from "axios";

export default function Chats() {
  const [chats, setChats] = useState([]);
  
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  fetchChats();
  return (
    <div>
      {chats.map((chat) => (
        <div key={ chat._id }>{chat.chatName}</div>
      ))}
    </div>
  );
}