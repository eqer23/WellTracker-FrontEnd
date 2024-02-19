// Logout.js
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const Logout = () => {
    const [, , removeCookie] = useCookies(["session-token"]);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the session-token cookie
        removeCookie("session-token");
        // Perform any additional logout tasks
        alert("You have logged out.")
        navigate("/"); // Redirect to the login page after logout
    };

    return (
        <li className="nav-item" onClick={handleLogout}>
            Logout
        </li>
    );
};

export default Logout;
