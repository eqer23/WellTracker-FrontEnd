import React, { useEffect, useState } from "react";
import EmailVerification from "../EmailVerification/EmailVerification";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'; import "./Profile.css";
import axios from "axios";
import NavbarHome from "../Navbar/NavbarHome";
import { useCookies } from "react-cookie";
let URL = "http://localhost:3001/data";



const Profile = () => {
    const [data, setData] = useState(null);
    const [cookies] = useCookies(["session-token"]); // Get the token cookie

    useEffect(() => {
        const fetchData = async () => {
            try {
                const decodedToken = jwtDecode(cookies['session-token']);
                const userId = decodedToken.id
                console.log("userId: " + decodedToken.id);
                // Send HTTP request to backend
                const response = await axios.get(URL, {
                    headers: {
                        Authorization: `Bearer ${cookies["session-token"]}`, // Include the session-token cookie in the request headers
                        'userId': userId
                    }
                });
                console.log("data requested")
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                alert(error.response.data.message);
            }
        };

        fetchData();
    }, [cookies]);

    return (
        <div>
            <NavbarHome />
            <h1>Your Profile</h1>

            {/* <p>Data: {data}</p> */}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};

export default Profile;
