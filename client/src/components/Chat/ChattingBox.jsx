import React from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";

function ChattingBox({ currentChat }) {
  const sendMessageHandler = (msg) => {

  };
  return (
    // Wrap the JSX in parentheses for the return statement
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
        <Message />
        <ChatInput sendMessageHandler={sendMessageHandler} />
      </div>
    )
  );
}

export default ChattingBox;
