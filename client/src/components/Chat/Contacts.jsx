import React, { useState, useEffect } from "react";
import "./Contacts.css";

function Contacts({ contacts, currentUser, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [selectedContact, setSelectedContact] = useState(undefined);

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
            <h2 className="username">{currentUserName}</h2>
          </div>
        </div>
      )}
    </>
  );
}




export default Contacts;
