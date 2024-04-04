import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Calendar from "../Calendar/Calendar";
import "./Dashboard.css";
import axios from "axios";
import image1 from "../Assets/jonathan-borba-lrQPTQs7nQQ-unsplash.jpg";
import image2 from "../Assets/kike-vega-F2qh3yjz6Jk-unsplash.jpg";
import image3 from "../Assets/mor-shani-li4dxZ0KYRw-unsplash.jpg";
import image4 from "../Assets/scott-broome-cuOHHP5tx5g-unsplash.jpg";
import image5 from "../Assets/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import progressImage from "../Assets/AdobeStock_207866687.jpeg";
import nutritionImage from "../Assets/AdobeStock_258165676.jpeg";
import {jwtDecode} from "jwt-decode";
import Sidebar from "../Global/Sidebar";



const Dashboard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace 'your-backend-endpoint' with the actual endpoint
                // const response = await axios.get(URL + "data", {
                //     headers: {
                //         Authorization: `Bearer ${localStorage.getItem(
                //             "session-token"
                //         )}`, // Include the session-token cookie in the request headers
                //         // userId: userId,
                //     },
                // });
                let user = jwtDecode(localStorage.getItem("session-token"))
                setData(user._id); // Update state with fetched data
                // console.log(response);
                // console.log(response.data);
                // console.log(data.username);
            } catch (error) {
                console.error("Error fetching data:", error);
                alert(error.response.data.message); // Handle error (e.g., through user notification)
            }
        };

        fetchData(); // Call the fetchData function
    }, []);

    // console.log(data);
    // console.log(data.response);

    return (
        <div className="home">
            <Navbar />
            <Sidebar />
            <div className="content" style={{ paddingTop: "100px" }}>
                <div className="dash-wrapper">
                    <div className="dash-greeting-calendar">
                        <div className="dash-greeting">
                            <div className="message">
                                <h1>Welcome to InstaFit!</h1>
                                {data && (
                                    // Now safely accessing `username` since `data` is confirmed to exist
                                    <h1>Hello, {data}!</h1>
                                )}
                            </div>
                            <div className="resume-activity">
                                <h2>Pick up where you left off?</h2>
                                <div className="last-used-features">
                                    {/* <div className="last-feature-progress">
                                        <img
                                            width={70}
                                            src={progressImage}
                                            alt="Description of Image"
                                        />
                                        <h3>Progress</h3>
                                    </div> */}

                                    <div className="last-feature-nutrition">
                                        <img
                                            width={100}
                                            src={nutritionImage}
                                            alt="Description of Image"
                                        />
                                        <h3>Nutrition</h3>
                                    </div>

                                    <div className="last-feature-class">
                                        <img
                                            width={100}
                                            src={image1}
                                            alt="Description of Image"
                                        />
                                        <h3>15 Minute Core</h3>
                                        <p>Taught By: Coach A</p>
                                        <p>description</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* will show workout for the day, meals, sleep cycle 
                        (as in that speific day's info, but can click on a link 
                        to the calendar page which will also be able to be accesses 
                        by the navbar */}
                        <div className="calendar">
                            <div className="my-calendar">
                                <NavLink
                                    to="/Calendar"
                                    className="calendar-link"
                                >
                                    {" "}
                                    <h2>Calendar</h2>
                                </NavLink>
                                <Calendar />
                            </div>
                            <div className="progress">
                                <div className="to-do-list">
                                    <p>to do list (WORK IN PROGRESS)</p>
                                    {/* <Calendar availableViews="Agenda" /> */}
                                    <div className="completion-graph">
                                        <p>completion graph</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="recommendations">
                        <h2>Recommendations: </h2>
                        <ul>
                            <li>
                                <img src={image1} alt="Description of Image" />
                                <h3>15 Minute Core</h3>
                                <p>Taught By: Coach A</p>
                                <p>description</p>
                            </li>
                            <li>
                                <img src={image2} alt="Description of Image" />
                                <h3>Yoga A</h3>
                                <p>Taught By: Coach A</p>
                                <p>description</p>
                            </li>
                            <li>
                                <img src={image3} alt="Description of Image" />
                                <h3>Yoga B</h3>
                                <p>Taught By: Coach B</p>
                                <p>description</p>
                            </li>
                            <li>
                                <img src={image4} alt="Description of Image" />
                                <h3>30 Minute Full Body Workout</h3>
                                <p>Taught By: Coach C</p>
                                <p>description</p>
                            </li>
                            <li>
                                <img src={image5} alt="Description of Image" />
                                <h3>Strength A</h3>
                                <p>Taught By: Coach D</p>
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
