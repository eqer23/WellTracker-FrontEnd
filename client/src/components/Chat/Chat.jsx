import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Contacts from "./Contacts";
import Welcome from "./Welcome";
import "./Chat.css";
import ChattingBox from "./ChattingBox";
let URL = import.meta.env.VITE_SERVER_URL;

const Chat = () => {
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(0); 


  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem("session-token")) {
        navigate("/login");
        alert("You cannot use chat if you haven't logged in.");
      } else {
        const decodedToken = jwtDecode(localStorage.getItem("session-token"));
        setCurrentUser(decodedToken);
        setLoaded(1);
      }
    };

    fetchData();
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        try {
          const data = await axios.get(URL + `getAllUsers/${currentUser.id}`);
          setContacts(data.data);
          console.log(data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [currentUser]);

  const changeChat = (chat) => {
    setCurrentChat(chat);
  };

  // console.log(currentChat.)

  return (
    <>
      <div>
        <div className="conversationContainer">
          <Contacts
            contacts={contacts}
            currentUser={currentUser}
            changeChat={changeChat}
          />
          {
            loaded && currentChat === undefined ? (
              <Welcome currentUser = {currentUser} />
            ) : (
              <ChattingBox currentChat = {currentChat} />
            )
          }
        </div>
      </div>
    </>
  );
};


export default Chat;
