import React, { useEffect, useState } from "react";
import EmailVerification from "../EmailVerification/EmailVerification";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Profile.css";
import axios from "axios";
import NavbarHome from "../Navbar/NavbarHome";
import { useCookies } from "react-cookie";
let URL = "http://localhost:3001/";

const Profile = () => {
  const [data, setData] = useState(null);
  const [cookies] = useCookies(["session-token"]); // Get the token cookie
  const [decodedToken, setDecodedToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const decodedToken = jwtDecode(cookies["session-token"]);
        const userId = decodedToken.id;
        console.log("userId: " + decodedToken.id);
        setDecodedToken(decodedToken);
        setUserId(userId);
        // Send HTTP request to backend
        const response = await axios.get(URL + "data", {
          headers: {
            Authorization: `Bearer ${cookies["session-token"]}`, // Include the session-token cookie in the request headers
            userId: userId,
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
  }, [cookies]);

  const handle2fa = async () => {
    console.log("2fa ");
    try {
      const response = await axios.post(URL + "generate-secret", {
        userId: decodedToken.id,
      });
      console.log("Secret generated:", response.data);
    } catch (error) {
      console.log(error.response.data.message)
      console.error("Error generating secret:", error);
    }
  };
  const isTfaTokenIdPresent = data && data["tfaTokenId"];
  return (
    <div>
      <NavbarHome />
      <h1>Your Profile</h1>
      {/* <p>Data: {data}</p> */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

      <button 
        className="btn-login" 
        onClick={handle2fa} 
        disabled={isTfaTokenIdPresent} // Disable the button if tfaTokenId is present
      >
        Activate 2-Factor Authentication
      </button>
    </div>
  );
};

export default Profile;
