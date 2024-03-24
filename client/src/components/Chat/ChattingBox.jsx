import React, { useEffect, useRef, useState } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";
import axios from "axios";
import "./ChattingBox.css";
import { getMessageRoute, sendMessageRoute } from "../utils/APIRoutes";
import { v4 as uuidv4 } from "uuid";

let URL = import.meta.env.VITE_SERVER_URL;

function ChattingBox({ currentChat, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivingMessage, setArrivingMessage] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentChat) {
          const response = await axios.post(getMessageRoute, {
            from: currentUser._id,
            to: currentChat._id,
          });
          setMessages(response.data);
          console.log("messages: " + messages);
        }
      } catch (error) {}
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
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: currentUser._id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivingMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivingMessage && setMessages((prev) => [...prev, arrivingMessage]);
  }, [arrivingMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    currentChat && (
      <div className="holder">
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
                <div ref={scrollRef} key={uuidv4} className={`${message.fromSelf ? "sent" : "recieved"}`}>
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
