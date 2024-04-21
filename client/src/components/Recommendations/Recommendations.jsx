import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Global/Sidebar";
import "./Recommendations.css";
import "./WellnessForm";
import "./WorkoutForm";
import "./NutritionForm";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
let URL = import.meta.env.VITE_SERVER_URL;

//temp images for testing frond view:
import image1 from "../Assets/jonathan-borba-lrQPTQs7nQQ-unsplash.jpg";
import image2 from "../Assets/kike-vega-F2qh3yjz6Jk-unsplash.jpg";
import image3 from "../Assets/mor-shani-li4dxZ0KYRw-unsplash.jpg";
import image4 from "../Assets/scott-broome-cuOHHP5tx5g-unsplash.jpg";
import image5 from "../Assets/victor-freitas-WvDYdXDzkhs-unsplash.jpg";

const Recommendations = () => {
    const [wellness, setWellness] = useState({
        score: 0 / 26,
        description: "",
    });
    const [formContent, setFormContent] = useState([]);
    const [content, setContent] = useState([]);
    const [userTag, setUserTag] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchWellnessScore = async () => {
            if (!localStorage.getItem("session-token")) {
                navigate("/login");
            } else {
                const token = localStorage.getItem("session-token");
                const decodedToken = jwtDecode(token);
                const userId = decodedToken._id;
                try {
                    const response = await axios.get(URL + "getWellnessScore", {
                        params: { _userId: userId },
                    });

                    console.log("in fetch wellness score");

                    setWellness({
                        score: response.data.score,
                        description: response.data.description,
                    });
                } catch (error) {
                    console.error("Error fetching wellness data", error);
                }
            }
        };

        const getUserTag = async () => {
            try {
                const token = localStorage.getItem("session-token");
                const decodedToken = jwtDecode(token);
                const userId = decodedToken._id;
                const response = await axios.get(URL + "getWorkoutPreference", {
                    params: {
                        _userId: userId,
                    },
                });
                console.log(response.data);
                setUserTag(response.data);

                console.log("getWorkoutPre success: ", userTag);
            } catch (error) {
                console.error("Error fetching workout data", error);
            }
        };

        fetchWellnessScore();
        getUserTag();
    }, [navigate]);

    useEffect(() => {
        if (userTag.tag) {
            // Ensure userTag is set before fetching content
            const getContentTag = async () => {
                try {
                    const contentRetrieved = await axios.get(
                        URL + "getAllContent",
                        {
                            params: {
                                tag: userTag.tag, // Now using the state variable
                            },
                        }
                    );
                    setContent(
                        contentRetrieved.data.filter(
                            (content) => content.tag === userTag.tag
                        )
                    );
                } catch (error) {
                    console.error("Error fetching content data", error);
                }
            };
            getContentTag();
        }
    }, [userTag]); // This useEffect runs whenever userTag changes

    return (
        <div className="recc-home">
            <Navbar />
            <Sidebar />
            <div className="content" style={{ paddingTop: "100px" }}>
                <div className="recc-wrapper">
                    <div className="recc-flex">
                        <div className="workout-reccs">
                            <h2>Workout Recommendations:</h2>
                            <div className="content-flex">
                                {content.map((item, index) => (
                                    <div
                                        className={`content-item-wrapper`}
                                        key={index}
                                    >
                                        <div
                                            className={`content-item`}
                                            onClick={() =>
                                                handleItemClick(index, item)
                                            }
                                        >
                                            <a
                                                href={item.contentContents}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={item.contentContents}
                                                    alt={item.contentTitle}
                                                    style={{
                                                        maxWidth: "200px",
                                                        maxHeight: "200px",
                                                    }}
                                                />
                                            </a>

                                            <div className="content-details">
                                                <h3>{item.contentTitle}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* <ul>
                                <li>
                                    <img
                                        src={image1}
                                        alt="Description of Image"
                                    />
                                    <h3>15 Minute Core</h3>
                                    <p>Taught By: Coach A</p>
                                    <p>description</p>
                                </li>
                                <li>
                                    <img
                                        src={image2}
                                        alt="Description of Image"
                                    />
                                    <h3>Yoga A</h3>
                                    <p>Taught By: Coach A</p>
                                    <p>description</p>
                                </li>
                                <li>
                                    <img
                                        src={image3}
                                        alt="Description of Image"
                                    />
                                    <h3>Yoga B</h3>
                                    <p>Taught By: Coach B</p>
                                    <p>description</p>
                                </li>
                                <li>
                                    <img
                                        src={image4}
                                        alt="Description of Image"
                                    />
                                    <h3>30 Minute Full Body Workout</h3>
                                    <p>Taught By: Coach C</p>
                                    <p>description</p>
                                </li>
                                <li>
                                    <img
                                        src={image5}
                                        alt="Description of Image"
                                    />
                                    <h3>Strength A</h3>
                                    <p>Taught By: Coach D</p>
                                    <p>description</p>
                                </li>
                            </ul> */}
                        </div>

                        <div className="nutrition-reccs">
                            <h2>Nutrition Plan Recommendations:</h2>
                        </div>

                        <div className="wellness-form">
                            <h2>General Wellness Form:</h2>
                            <div className="form-description">
                                <p>
                                    {" "}
                                    This form will as a series of general
                                    wellness questions, and return you overall
                                    wellness score along with provided
                                    recommendations to imporve your health!
                                </p>
                            </div>
                            <div className="form-result">
                                <h3>Youre wellness form results: </h3>
                                <p>Wellness Score: {wellness.score} / 26</p>
                                <p>{wellness.description}</p>
                            </div>
                            <div className="btn">
                                {/* <div className="btn-wellness">
                                    Wellness Form
                                </div> */}
                                <NavLink
                                    to="/WellnessForm"
                                    className="btn-wellness"
                                >
                                    {" "}
                                    Wellness Form
                                </NavLink>
                            </div>
                        </div>
                        <div className="workout-form">
                            <h2>Custom Workout Reccomendations Form:</h2>
                            <div className="form-description">
                                <p>
                                    {" "}
                                    This form will as a series of questions
                                    about your workout habbits, goals, and skill
                                    level. After completing the form, the
                                    workouts recommended to you will help you
                                    achieve your goals, and be inline with your
                                    stated prefrences.
                                </p>
                            </div>
                            <div className="btn">
                                {/* <button
                                    className="btn-workout"
                                    // onClick={handleSubmit}
                                >
                                    Workout Form
                                </button> */}
                                <NavLink
                                    to="/WorkoutForm"
                                    className="btn-workout"
                                >
                                    {" "}
                                    Workout Form
                                </NavLink>
                            </div>
                        </div>
                        <div className="nutrition-form">
                            <h2>Custom Nutrition Plan Reccomendations Form:</h2>
                            <div className="form-description">
                                <p>
                                    {" "}
                                    This form will as a series of questions
                                    about your current eatting habbits and
                                    nutrition goals. After completing the form,
                                    the nutrition plans recommended to you will
                                    help you achieve your goals, and be inline
                                    with your stated prefrences.
                                </p>
                            </div>
                            <div className="btn">
                                {/* <button
                                    className="btn-nutrition"
                                    // onClick={handleSubmit}
                                >
                                    Nutrition Form
                                </button> */}
                                <NavLink
                                    to="/NutritionForm"
                                    className="btn-nutrition"
                                >
                                    {" "}
                                    Nutrition Form
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommendations;
