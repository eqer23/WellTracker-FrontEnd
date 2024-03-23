import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";


function Welcome({currentUser}) {
  // const [userName, setUserName] = useState("");
  // const navigate = useNavigate();



  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (!localStorage.getItem("session-token")) {
  //       navigate("/login");
  //       alert("You cannot use chat if you haven't logged in.");
  //     } else {
  //       const decodedToken = jwtDecode(localStorage.getItem("session-token"));
  //       setUserName(decodedToken);
  //     }
  //   };

  //   fetchData();
  // }, [navigate]);

  return (
    <div>
      <h1> Welcome! {currentUser._id}</h1>
      <h2> Select a Chat to Start Chatting!</h2>
    </div>

  );
}

export default Welcome;
