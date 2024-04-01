import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header";
import "./Dashboard.css";
import axios from "axios";
import image1 from "../Assets/jonathan-borba-lrQPTQs7nQQ-unsplash.jpg";
import image2 from "../Assets/kike-vega-F2qh3yjz6Jk-unsplash.jpg";
import image3 from "../Assets/mor-shani-li4dxZ0KYRw-unsplash.jpg";
import image4 from "../Assets/scott-broome-cuOHHP5tx5g-unsplash.jpg";
import image5 from "../Assets/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import progressImage from "../Assets/AdobeStock_207866687.jpeg";
import nutritionImage from "../Assets/AdobeStock_258165676.jpeg";
import Sidebar from "../Global/Sidebar";

const Dashboard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace 'your-backend-endpoint' with the actual endpoint
                const response = await axios.get(URL + "data", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "session-token"
                        )}`, // Include the session-token cookie in the request headers
                        // userId: userId,
                    },
                });
                setData(response.data); // Update state with fetched data
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
                                    <h2>Hello, {data.username}!</h2>
                                )}
                            </div>
                            <div className="resume-activity">
                                <h3>Pick up where you left off?</h3>
                                <div className="last-used-features">
                                    <div className="last-feature-progress">
                                        <img
                                            width={70}
                                            src={progressImage}
                                            alt="Description of Image"
                                        />
                                        <h3>Progress</h3>
                                    </div>

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
                            <p>info for that day (to do's)</p>
                            <p>link to calendar page</p>
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
