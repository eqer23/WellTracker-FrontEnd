import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="content" style={{ paddingTop: "100px" }}>
                <div className="dash-wrapper">
                    <div className="dash-greeting-calendar">
                        <div className="dash-greeting">
                            <div className="message">
                                <h1>Welcome to InstaFit!</h1>
                            </div>
                            <div className="resume-activity">
                                <h3>Pick up where you left off?</h3>
                                <ul className="last-used-features">
                                    <li className="last-feature">Plans</li>
                                    <li className="last-feature">Nutrition</li>
                                </ul>
                            </div>
                        </div>

                        <div className="calendar">CALENDAR HERE</div>
                    </div>

                    <div className="recommendations">
                        <h2>Recommendations: </h2>
                        <ul>
                            <li>
                                <p>image here</p>
                                <h3>class name</h3>
                                <p>description</p>
                            </li>
                            <li>
                                <p>image here</p>
                                <h3>class name</h3>
                                <p>description</p>
                            </li>
                            <li>
                                <p>image here</p>
                                <h3>class name</h3>
                                <p>description</p>
                            </li>
                            <li>
                                <p>image here</p>
                                <h3>class name</h3>
                                <p>description</p>
                            </li>
                            <li>
                                <p>image here</p>
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
