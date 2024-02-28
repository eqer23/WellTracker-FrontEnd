import React from "react";
import { Box } from "@mui/material";
import Header from "../Header";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="content" style={{ paddingTop: "100px" }}>
                {/* <Box m="20px">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Header title="DASHBOARD" subtitle="Welcome to Instafit" />
                </Box>
            </Box> */}
                <div className="dash-wrapper">
                    <div className="message">
                        <h1>Welcome to InstaFit!</h1>
                        <h3>Pick up where you left off?</h3>
                        <ul className="last-used-features">
                            <li className="last-feature">Plans</li>
                            <li className="last-feature">Nutrition</li>
                        </ul>
                    </div>
                    <div className="calendar">CALENDAR HERE</div>
                    <div className="recommendations">
                        <ul>
                            <li>
                                image here
                                <h3>class name</h3>
                                <p>description</p>
                            </li>
                            <li>
                                image here
                                <h3>class name</h3>
                                <p>description</p>
                            </li>
                            <li>
                                image here
                                <h3>class name</h3>
                                <p>description</p>
                            </li>
                            <li>
                                image here
                                <h3>class name</h3>
                                <p>description</p>
                            </li>
                            <li>
                                image here
                                <h3>class name</h3>
                                <p>description</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
