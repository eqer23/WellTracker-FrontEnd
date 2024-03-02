import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useCookies } from "react-cookie";
import Logout from "../Logout/Logout";
import "../Search/SearchBar";

import { SearchBar } from "../Search/SearchBar";
import { SearchResultsList } from "../Search/SearchResultsList";

const NavbarHome = () => {
    const [results, setResults] = useState([]);
    const [cookies] = useCookies(["session-token"]); // Get the token cookie
    const isLoggedIn = localStorage.getItem('session-token') ? true : false;

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
                <li className="nav-item">
                    <SearchBar setResults={setResults} />
                    <SearchResultsList results={results} />
                </li>

                {/* Changes navbar based on user logged in or not */}

                {isLoggedIn ? (
                    <React.Fragment>
                        <li className="nav-item">
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                        <Logout />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <li className="nav-item">
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </React.Fragment>
                )}
            </ul>
        </nav>
    );
};

export default NavbarHome;
