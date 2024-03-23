import React, { useEffect, useState } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";
import axios from "axios";
import "./ChattingBox.css";
import { getMessageRoute, sendMessageRoute } from "../utils/APIRoutes";
let URL = import.meta.env.VITE_SERVER_URL;

function ChattingBox({ currentChat, currentUser }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(getMessageRoute, {
          from: currentUser._id,
          to: currentChat._id,
        });
        setMessages(response.data);
        console.log("messages: " + messages);
      } catch (error) {
      }
    };
    fetchData();
  }, [currentChat]);
  

  const sendMessageHandler = async (msg) => {
    console.log("from: " + currentUser._id);
    console.log("to: " + currentChat._id);
    await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
  };
  return (
    currentChat && (
      <div>
        <div className="chat-header">
          <div className="user-details">
            <div className="avatar"></div>
            <div className="username">
              <h3>{currentChat.firstName}</h3>
            </div>
          </div>
        </div>
        <div className="chat-messages">
          {messages.map((message) => {
            return (
              <div
                className={`${message.fromSelf ? "sent" : "recieved"}`}
              >
                <p>{message.message}</p>
              </div>
            );
          })}
        </div>
        <ChatInput sendMessageHandler={sendMessageHandler} />
      </div>
    )
  );
}

export default ChattingBox;
