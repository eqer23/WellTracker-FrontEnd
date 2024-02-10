// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//     return (
//         <nav className='navbar'>
//             <div className='navbar-left'>
//                 <Link to="/" className='navbar-brand'>Wellness Tracker</Link>
//             </div>
//             <div className='navbar-right'>
//                 <Link to="/login" className='navbar-link'>Login</Link>
//                 <Link to="/role" className='navbar-link'>Register</Link>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Logo</h1>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/team">Our Team</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/role">Register</NavLink>
                </li>
            </ul>
            <ul className="navbar-btn">
                <li>Search</li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
