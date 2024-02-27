import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../Search/SearchBar";
import { SearchBar } from "../Search/SearchBar";
import { SearchResultsList } from "../Search/SearchResultsList";
import { useCookies } from "react-cookie";
import Logout from "../Logout/Logout";


const Navbar = () => {
    // variables for searchBar
    const [results, setResults] = useState([]);
    const [cookies] = useCookies(["session-token"]); // Get the token cookie
    const isLoggedIn = cookies["session-token"] ? true : false; // if token exists then logged in

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
                    <NavLink to="/calendar">Calendar</NavLink>
                </li>
            </ul>

            <ul className="navbar-btn">
                <li className="nav-item">
                    <SearchBar setResults={setResults} />
                    <SearchResultsList results={results} />
                </li>
<<<<<<< HEAD
                <li className="nav-item">
                    <NavLink to="/register">Register</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink w />
                </li>
=======
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
>>>>>>> de4daafb5471e6c270995ffb90071a3704902796
            </ul>
        </nav>
    );
};

export default Navbar;
