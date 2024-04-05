import { Container } from "@mui/material";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
//   useEffect(async()=>{
//     if()
//   },[]);
//   useEffect(async()=>{
//     if()
//   },[]);
  return (
    <Container
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem",
        alignItems: "center",
        backgroundColor: "#131324",
      }}
    >
      <Container
        style={{
          height: "85vh",
          width: "85vw",
          backgroundColor: "#00000076",
          display: "grid",
          gridTemplateColumns: "25% 75%",
          "@media screen and (min-width: 720px) and (max-width: 1080px)": {
            gridTemplateColumns: "35% 65%",
          },
        }}
      />
    </Container>
  );
};

export default Chat;
