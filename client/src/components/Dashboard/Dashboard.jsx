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

                        {/* will show workout for the day, meals, sleep cycle 
                        (as in that speific day's info, but can click on a link 
                        to the calendar page which will also be able to be accesses 
                        by the navbar */}
                        <div className="calendar">
                            <p>info for that day (to do's)</p>
                            <p>link to calendar page</p>
                        </div>
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
