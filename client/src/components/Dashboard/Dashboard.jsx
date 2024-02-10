import React from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="wrapper">
                <h1>Dashboard</h1>
                <main>
                    <p>this is the dashboard/ homepage</p>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
