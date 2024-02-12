import React, { useState } from "react";
import "./ForgotPassword.css";
import EmailVerification from "../EmailVerification/EmailVerification";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
let LOGIN_URL = "http://localhost:3001/login";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = () => {
        if (email && password && role) {
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
                })
                .catch((err) => console.log(err));
        } else {
            alert("please enter your email, password, and role.");
        }
    };

    return (
        <div className="wrapper">
            <div>
                <h1>Forgot Password?</h1>

                {/* email input textbox */}
                <div className="input-box">
                    <EmailVerification setEmail={setEmail} />

                    {/* <input
                        type="text"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    /> */}
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
