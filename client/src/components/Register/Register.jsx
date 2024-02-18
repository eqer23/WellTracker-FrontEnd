import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import EmailVerification from "../EmailVerification/EmailVerification";
import { Link } from "react-router-dom";
import axios from "axios";
let REGISTER_URL = "http://localhost:3001/register";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (email && password && role) {
            event.preventDefault();
            axios
                .post(REGISTER_URL, {
                    email,
                    password,
                    role,
                })
                .then((res) => {
                    if (res.status == 200) {
                        console.log(res); // check if error is thrown because emil already used - 409 error (make message)
                        navigate("/dashboard");
                    }
                })
                .catch((err) => {
                    console.log('Missing fields' + err)
                    alert("Please fill in all required fields.")
                });
        }
    };

    return (
        <div className="wrapper">
            <form>
                <h1>Register</h1>

                {/* users name email and password creation */}
                <div className="input-box-reg">
                    <input
                        type="text"
                        placeholder="First Name"
                        // required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="input-box-reg">
                    <input
                        type="text"
                        placeholder="Last Name"
                        // required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="loginInfo">
                    <div className="input-box-reg">
                        <input
                            type="text"
                            placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* <EmailVerification setEmail={setEmail} /> */}
                    </div>

                    <div className="input-box-reg">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                        // onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="input-box-reg">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* add age and gender here - do we want it to look differernt?? */}

                    {/* role selection dropdown */}
                    <div className="form-group">
                        <label htmlFor="role">Role:</label>
                        <select
                            className="dropdown"
                            name="role"
                            id="role"
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="user">Client</option>
                            <option value="professional">Professional</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>

                {/* submit button */}
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>

                {/* will link to a redister page */}
                <div className="login-link">
                    <p>
                        Already have an account?
                        <Link to="/login" className="btn-reg">
                            Login
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;
