// import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./Role.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Role = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("admin");
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = () => {
        axios
            .post("http://localhost:3001/auth/login", {
                username,
                password,
                role,
            })
            .then((res) => {
                if (res.data.login && res.data.role === "admin") {
                    console.log(res);
                    navigate("/dashboard");
                }
            })
            .catch((err) => console.log(err));
    };

    // const navigate = useNavigate(); // Use useNavigate instead of useHistory
    // const [selectedUserRole, setSelectedUserRole] = useState("");

    // const handleUserRoleChange = (event) => {
    //     setSelectedUserRole(event.target.value);
    // };

    // when the user clicks submit, we go into this loop?
    const handleRegisterSubmit = (event) => {
        event.preventDefault();

        // will link pages here based on what the user selected
        switch (selectedUserRole) {
            case "client":
                navigate("/cregistration");
                break;
            case "professional":
                navigate("/pregistration");
                break;
            default:
                // handle default case or show an error
                break;
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleRegisterSubmit}>
                <h1>Register</h1>

                {/* users name email and password creation */}
                <div className="input-box-reg">
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* <FaUserAlt className="icon" /> */}
                </div>

                <div className="input-box-reg">
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* <FaUserAlt className="icon" /> */}
                </div>

                <div className="input-box-reg">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <FaLock className="icon" /> */}
                </div>

                <div className="input-box-reg">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <FaLock className="icon" /> */}
                </div>

                {/* client button */}
                {/* <div className="user-roles">
                    <label>
                        <input
                            type="radio"
                            value="client"
                            checked={selectedUserRole === "client"}
                            onChange={handleUserRoleChange}
                        />
                        Client
                    </label>

                    {/* fitness professional button 
                    <label>
                        <input
                            type="radio"
                            value="professional"
                            checked={selectedUserRole === "professional"}
                            onChange={handleUserRoleChange}
                        />
                        Fitness Professional
                    </label>
                </div> */}
                <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select
                        className="dropdown"
                        name="role"
                        id="role"
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="admin">Admin</option>
                        <option value="client">Client</option>
                    </select>
                </div>

                {/* submit button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Role;
