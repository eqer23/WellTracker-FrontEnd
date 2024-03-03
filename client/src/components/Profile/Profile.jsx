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

const Profile = () => {
    const [data, setData] = useState(null);
    const [cookies] = useCookies(["session-token"]); // Get the token cookie
    const [decodedToken, setDecodedToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [qrCodeDataUrl, setQRCodeDataUrl] = useState("");
    const [rerenderKey, setRerenderKey] = useState(0); // State variable for triggering re-render

    //   useEffect(() => {
    //     const fetchData = async () => {
    //       if (qrCodeDataUrl != "") {
    //         const qrCode = await QRCode.toDataURL(data.tfaToken);
    //         setQRCodeDataUrl(qrCode);
    //       }
    //       try {
    //         const decodedToken = jwtDecode(localStorage.getItem('session-token'));
    //         const userId = decodedToken.id;
    //         console.log("userId: " + decodedToken.id);
    //         setDecodedToken(decodedToken);
    //         setUserId(userId);
    //         // Send HTTP request to backend
    //         const response = await axios.get(URL + "data", {
    //           headers: {
    //             Authorization: `Bearer ${localStorage.getItem('session-token')}`, // Include the session-token cookie in the request headers
    //             userId: userId,
    //           },
    //         });
    //         console.log("data requested");
    //         setData(response.data);

    //         fetchData();
    //     }, [cookies, rerenderKey]);

    const handle2fa = async () => {
        console.log("2fa started");
        try {
            const response = await axios.post(URL + "generate-secret", {
                userId: decodedToken.id,
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
            <form>
                <NavbarHome />
                <div className="wrapper-profile">
                    <h1>USER NAME HERE</h1>

                    {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

                    <button
                        className="btn-2Factor"
                        onClick={handle2fa}
                        style={{
                            display: isTfaTokenIdPresent ? "none" : "block",
                        }}
                    >
                        Activate 2-Factor Authentication
                    </button>

                    <button
                        className="btn-qr"
                        onClick={handleRerender}
                        style={{
                            display: isTfaTokenIdPresent ? "block" : "none",
                        }}
                    >
                        Show 2fa QR Code
                    </button>
                    {qrCodeDataUrl && <img src={qrCodeDataUrl} alt="QR Code" />}
                </div>
            </form>
        </div>
    );
};

export default Profile;
