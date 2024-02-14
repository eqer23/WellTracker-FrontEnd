import React, { useState } from "react";
import "./ForgotPassword.css";
import EmailVerification from "../EmailVerification/EmailVerification";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
let URL = "http://localhost:3001/forgot-password";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = () => {
        if (email) {
            event.preventDefault();
            axios
                .post(URL, {
                    email,
                })
                .then((res) => {
                    if (res.status === 404) {
                        alert(res.data.message);
                    }
                    if (res.data.login || res.status === 200) {
                        console.log("Password email request sent to backend.");
                        navigate("/login");
                    }
                })
                .catch((err) => console.log(res.status.message));
        } else {
            alert("Please enter an email.");
        }
    };

    return (
        <div className="wrapper">
            <div>
                <h1>Forgot Password?</h1>

                {/* email input textbox */}
                <div className="input-box">
                    {/* <EmailVerification setEmail={setEmail} /> */}
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaUserAlt className="icon" />
                </div>

                {/* login button */}
                <button className="btn-login" onClick={handleSubmit}>
                    Submit
                </button>

                {/* will link to a redister page */}
                <div className="register-link">
                    <p>
                        Don't have an account?
                        <Link to="/register" className="btn-reg">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
