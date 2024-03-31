import React, { useState, useEffect } from "react";
import "./Contacts.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
let URL = import.meta.env.VITE_SERVER_URL;



function Contacts({ contacts, currentUser, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [selectedContact, setSelectedContact] = useState(undefined);
  const [decodedToken, setDecodedToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const decodedToken = jwtDecode(localStorage.getItem("session-token"));
        const userId = decodedToken._id;
        console.log("userId: " + decodedToken._id);
        setDecodedToken(decodedToken);
        setUserId(userId);
        // Send HTTP request to backend
        const response = await axios.get(URL + "data", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("session-token")}`, // Include the session-token cookie in the request headers
            userId: userId,
          },
        });
        console.log("data requested");
        setData(response.data);
        console.log("data ", response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
        alert(error.response.data.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Update currentUserName when currentUser changes
    if (currentUser) {
      console.log(currentUser._id);
      setCurrentUserName(currentUser._id);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    console.log("chat changing to " + contact.firstName)
    setSelectedContact(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserName && (
        <div className="contactsholder">
          <div className="brand">Instafit</div>
          <div className="contacts">
            {contacts.map((contact, index) => (
              <div
                className={`contact ${
                  index === selectedContact ? "selected" : ""
                }`}
                key={index}
                onClick={() => changeCurrentChat(index, contact)}
              >
                <div className="username">
                  <h3>{contact.firstName}</h3>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="current-user">{data && data.firstName}</h2>
          </div>
        </div>
      )}
    </>
  );
}




export default Contacts;
