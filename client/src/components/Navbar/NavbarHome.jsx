import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavbarHome = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/">
                    <h1>LOGO</h1>
                </NavLink>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/team">Our Team</NavLink>
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

export default NavbarHome;
