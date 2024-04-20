import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./Profile.css";
import axios from "axios";
import NavbarHome from "../Navbar/NavbarHome";
import { useCookies } from "react-cookie";
import SubscribeButton from "../Subscriptions/SubscribeButton";
import SubscriptionList from "../Subscriptions/SubscriptionList";

import { useParams } from "react-router-dom";

let URL = import.meta.env.VITE_SERVER_URL;

const ViewProfile = () => {
  const {userId} = useParams();
  const [data, setData] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false); // State to manage subscription status


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Send HTTP request to backend
        const response = await axios.get(`${URL}data/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("session-token")}`, // Include the session-token cookie in the request headers
          },
        });
        console.log("data requested");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert(error.response.data.message);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    if(data) {
      checkSubscriptionStatus(); // check subscription status
    }
  }, [data]);

  const checkSubscriptionStatus = async () => {
    const me = getUserIdFromToken();
    if(!me || !userId || !data) return;
    try {
      const response = await axios.get(`${URL}isSubscribed/${me}/${data._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("session-token")}`,
        },
      });
      setIsSubscribed(response.data.isSubscribed);
    } catch (error) {
      console.error("Error checking subscription status: ", error);
    }

  };

  const getUserIdFromToken = () =>{
    const token = localStorage.getItem('session-token');
    try{
      const decoded = jwtDecode(token);
      return decoded._id;
    } catch (error) {
      console.error("Failed to decode token:", error);
      return null;
    }
  }

  const handleSubscriptionChange = async () => {
    setIsSubscribed(!isSubscribed);
    const url = `${URL}${isSubscribed ? 'unsubscribe' : 'subscribe'}/${data._id}`;
    try {
      await axios.post(url, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('session-token')}`
        }
      });
    } catch (error) {
      console.error("Error updating subscription status: ", error);
      setIsSubscribed(!isSubscribed);
    }
  };

  return (
    <div>
      <NavbarHome />
      <div className="profile">
        <h1>
            {data ? `${data.firstName} ${data && data.lastName}` : 'Loading...' }
        </h1>
        <h3>Role: {data ? data.role : 'Loading...'}</h3>
        <p>Email: {data ? data.email : 'Loading...'}</p>

        {/* Subscribe button for fitness professionals */}
        {data && data.role === "professional" && (
          <>
            <SubscribeButton
            professionalId={data._id}
            isSubscribed={isSubscribed}
            onSubscriptionChange={handleSubscriptionChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ViewProfile;
