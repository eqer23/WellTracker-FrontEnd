import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/dashboard">
                    <h1>LOGO</h1>
                </NavLink>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/plans">Fitness Plans</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/nutrition">Nutrition</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/rec">Recommendations</NavLink>
                </li>
            </ul>

            <ul className="navbar-btn">
                <li className="nav-item">Search</li>
                <li className="nav-item">
                    <NavLink to="/register">Register</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
