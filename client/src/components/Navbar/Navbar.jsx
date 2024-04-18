import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../Search/SearchBar";
import { SearchBar } from "../Search/SearchBar";
import { SearchResultsList } from "../Search/SearchResultsList";
import { useCookies } from "react-cookie";
import Logout from "../Logout/Logout";
import logo from "../Assets/instaFitLogo1.jpg";
// import Sidebar from "../Global/Sidebar";

const Navbar = () => {
    // variables for searchBar
    const [results, setResults] = useState([]);
    const [cookies] = useCookies(["session-token"]); // Get the token cookie
    const isLoggedIn = localStorage.getItem("session-token") ? true : false;

    return (
        <nav className="navbar">
            <div className="navbar-sidebar">{/* <Sidebar /> */} </div>

            <div className="navbar-logo">
                <NavLink to="/dashboard">
                    <img width={50} src={logo} alt="Description of Image" />
                </NavLink>
            </div>

            <ul className="navbar-other">
                <li className="nav-item">
                    <SearchBar setResults={setResults} />
                    <SearchResultsList results={results} />
                </li>
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

export default Navbar;
