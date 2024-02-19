import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../Search/SearchBar"
import { SearchBar } from "../Search/SearchBar";
import { SearchResultsList } from "../Search/SearchResultsList";
import { useCookies } from "react-cookie";

const Navbar = () => {
    // variables for searchBar
    const [results, setResults] = useState([]);
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
                <li className="nav-item">
                    <SearchBar setResults={setResults} />
                    <SearchResultsList results={results} />
                </li>
                <li className="nav-item">
                    <NavLink to="/register">Register</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink w/>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
