import React from "react";
import "./LoginForm.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUserAlt className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#"> Forgot Password?</a>
                </div>

                <button type="submit">Login</button>
                {/* <a class="button" href="Dashboard.jsx">
                    Login
                </a> */}
                <Link to="/dashboard" className="button">
                    Ckick to dashbord page
                </Link>

                <div className="register-link">
                    <p>
                        Don't have an account? <a href="#"> Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
