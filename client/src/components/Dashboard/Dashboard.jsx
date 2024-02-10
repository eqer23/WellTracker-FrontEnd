import React from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <header>
                <h1>Dashboard</h1>
            </header>
            <main>
                <p>this is the dashboard/ homepage</p>
            </main>
        </div>
    );
};

export default Dashboard;
