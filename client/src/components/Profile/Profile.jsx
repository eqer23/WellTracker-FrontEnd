import React, { useState } from "react";
import EmailVerification from "../EmailVerification/EmailVerification";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import axios from "axios";
let LOGIN_URL = "http://localhost:3001/login";


const Profile = () => {
    axios.defaults.withCredentials = true;
    const handleSubmit = () => {
        if (email && password) {
            event.preventDefault();
            axios
                .post(LOGIN_URL, {
                    email,
                    password,
                    role,
                })
                .then((res) => {
                    if (res.data.login) {
                        console.log(res);
                        navigate("/dashboard");
                    }
                    console.log(res.data)

                })
                .catch((err) => {
                    alert(err.response.data.message)
                });
        } else {
            alert("please enter your email, password, and role.");
        }
    };

    return (
        <div>
            <h1>Your Profile</h1>
        </div>
    );
};

export default Profile;
