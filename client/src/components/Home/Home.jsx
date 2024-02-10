import React from "react";
import NavbarHome from "../Navbar/NavbarHome";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <NavbarHome />
            <div className="wrapper">
                <h1>Home</h1>
            </div>
        </div>
    );
};

export default Home;
