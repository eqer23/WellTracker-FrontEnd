import React, { useEffect } from "react";
import NavbarHome from "../Navbar/NavbarHome";
import "./Home.css";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";


const Home = () => {
  

  const navigate = useNavigate();

  return (
    <div className="home">
      <NavbarHome />
      <div className="home-wrapper">

        <h2>InstaFit</h2>
        <h3>Get ready to reach new heights!</h3>

        <p></p>

        {/* will link to a redister page */}
        <div className="register-link">
          <p>
            Don't have an account?
            <Link to="/register" className="btn-reg">
              Register
            </Link>
          </p>
        </div>

        <div>{/* image here */}</div>
      </div>
    </div>
  );
};

export default Home;
