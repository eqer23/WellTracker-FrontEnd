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
import QRCode from "qrcode";
let URL = import.meta.env.VITE_SERVER_URL;

import SubscribeButton from "../Subscriptions/SubscribeButton";
const Profile = () => {
  const [data, setData] = useState(null);
  const [cookies] = useCookies(["session-token"]); // Get the token cookie
  const [decodedToken, setDecodedToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [qrCodeDataUrl, setQRCodeDataUrl] = useState("");
  const [rerenderKey, setRerenderKey] = useState(0); // State variable for triggering re-render
  const [isSubscribed, setIsSubscribed] = useState(false); // State to manage subscription status

  useEffect(() => {
    const fetchData = async () => {
      if (qrCodeDataUrl != "") {
        const qrCode = await QRCode.toDataURL(data.tfaToken);
        setQRCodeDataUrl(qrCode);
      }
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

        checkSubscriptionStatus(userId, response.data.professionalId); // check subscription status
      } catch (error) {
        console.error("Error fetching data:", error);
        alert(error.response.data.message);
      }
    };

    fetchData();
  }, [cookies, rerenderKey]);

  const checkSubscriptionStatus = async (userId, professionalId) => {
    try {
      const response = await axios.get(`${URL}isSubscribed/${professionalId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("session-token")}`,
        },
      });
      setIsSubscribed(response.data.isSubscribed);
    } catch (error) {
      console.error("Error checking subscription status: ", error);
    }
  };

  const handle2fa = async () => {
    console.log("2fa started");
    try {
      const response = await axios.post(URL + "generate-secret", {
        userId: decodedToken._id,
      });
      if (response.status === 200) {
        const secret = await response.data.secret; // Get the generated secret from the response
        const qrCode = await QRCode.toDataURL(
          "otpauth://totp/" +
            userId +
            "?secret=" +
            secret +
            "&issuer=Instafit&digits=6&period=30"
        );
        setQRCodeDataUrl(qrCode);
        console.log("Secret generated:", response.data);
      }
    } catch (error) {
      console.log(error);
    }
    setRerenderKey((prevKey) => prevKey + 1);
  };

  const handleRerender = async () => {
    const qrCode = await QRCode.toDataURL(
      "otpauth://totp/Instafit?secret=" +
        data.tfaToken +
        "&issuer=Instafit&digits=6&period=30"
    );
    setQRCodeDataUrl(qrCode);
  };

  const isTfaTokenIdPresent = data && data["tfaTokenId"];
  return (
    <div>
      <NavbarHome />
      <div className="profile">
        <h1>
          Hello, {data && data.firstName} {data && data.lastName}!
        </h1>
        <h3>Role: {data && data.role}</h3>
        <h3>My Account</h3>
        <p>Email: {data && data.email}</p>
        <p>Change Password</p>

        {/* Subscribe button for fitness professionals */}
        {data && data.role === "professional" && (
          <SubscribeButton
          professionalId={data._id}
          isSubscribed={isSubscribed}
          onSubscriptionChange={() => setIsSubscribed(!isSubscribed)}
          />
        )}
        <button
          className="btn-tfa"
          onClick={handle2fa}
          style={{ display: isTfaTokenIdPresent ? "none" : "block" }}
        >
          Activate 2-Factor Authentication
        </button>

        <button
          className="btn-login"
          onClick={handleRerender}
          style={{ display: isTfaTokenIdPresent ? "block" : "none" }}
        >
          Show 2fa QR Code
        </button>
        {qrCodeDataUrl && <img src={qrCodeDataUrl} alt="QR Code" />}
      </div>
    </div>
  );
};

export default Profile;
