import React, { useState } from "react";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import "./ChatInput.css";

function ChatInput() {
  const [msg, setMsg] = useState("");
  return (
    <div>
      <form className="input-container">
        <input type="text" placeholder="Enter your message here" value={msg} onChange={(e)=>setMsg(e.target.value)}></input>
        <button className="submit">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
