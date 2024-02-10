import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css"; // Import your custom CSS file for the Home component

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="wrapper">
                <h1>Home</h1>
            </div>
        </div>
    );
};

export default Home;
