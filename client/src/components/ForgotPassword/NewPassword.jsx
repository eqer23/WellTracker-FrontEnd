import React, { useState } from "react";
import "./ForgotPassword.css";
import EmailVerification from "../EmailVerification/EmailVerification";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
let URL = "http://localhost:3001/newpassword";

// TODO

const NewPassword = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = () => {
        if (email) {
            event.preventDefault();
            axios
                .post(URL, {
                    password,
                })
                .then((res) => {
                    if (res.status == 404) {
                        alert("This user does not exist.");
                    }
                    if (res.data.login) {
                        console.log("Password email request sent to backend.");
                        navigate("/dashboard");
                    }
                })
                .catch((err) => console.log(err));
        } else {
            alert("Please enter an email.");
        }
    };

    return (
        <div className="wrapper">
            <div>
                <h1>Enter your new password.</h1>

                {/* email input textbox */}
                <div className="input-box">
                    {/* <EmailVerification setEmail={setEmail} /> */}
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaUserAlt className="icon" />
                </div>

                {/* login button */}
                <button className="btn-login" onClick={handleSubmit}>
                    Submit
                </button>


            </div>
        </div>
    );
};

export default NewPassword;
