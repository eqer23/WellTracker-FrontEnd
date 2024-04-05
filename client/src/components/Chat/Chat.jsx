import { Container } from "@mui/material";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(0);
  const socket = useRef();
  const [data, setData] = useState(null);

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
      
      try {
        const decodedToken = jwtDecode(localStorage.getItem("session-token"));
        const response = await axios.get(URL + "data", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("session-token")}`, // Include the session-token cookie in the request headers
            userId: decodedToken._id,
          },
        });
        setData(response.data);
      }
      catch {
        console.error("Error fetching data:", error);
        alert(error.response.data.message);
      }
    };

    fetchData();
  }, [navigate]);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(URL);
      socket.current.emit("add-user", currentUser._id);
    }
  },[currentUser])
  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        try {
          const data = await axios.get(URL + `getAllUsers/${currentUser._id}`);
          setContacts(data.data);
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


  return (
    <>
      {/* <NavbarHome /> */}

      <div>
        <div className="conversationContainer">
          <Contacts
            contacts={contacts}
            currentUser={currentUser}
            changeChat={changeChat}
          />
          {loaded && currentChat === undefined ? (
            <Welcome data={data} />
          ) : (
            <ChattingBox currentChat={currentChat} currentUser={currentUser} socket={socket}/>
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;
