import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Global/Sidebar";
import "./Recommendations.css";
import "./WellnessForm";
import "./WorkoutForm";
import "./NutritionForm";

import { NavLink } from "react-router-dom";
import axios from "axios";

//temp images for testing frond view:
import image1 from "../Assets/jonathan-borba-lrQPTQs7nQQ-unsplash.jpg";
import image2 from "../Assets/kike-vega-F2qh3yjz6Jk-unsplash.jpg";
import image3 from "../Assets/mor-shani-li4dxZ0KYRw-unsplash.jpg";
import image4 from "../Assets/scott-broome-cuOHHP5tx5g-unsplash.jpg";
import image5 from "../Assets/victor-freitas-WvDYdXDzkhs-unsplash.jpg";
import nutritionImage from "../Assets/AdobeStock_258165676.jpeg";

const Recommendations = () => {
    // const handleSubmit = () => {

    // };

    return (
        <div className="recc-home">
            <Navbar />
            <Sidebar />
            <div className="content" style={{ paddingTop: "100px" }}>
                <div className="recc-wrapper">
                    <div className="recc-flex">
                        <div className="workout-reccs">
                            <h2>Workout Recommendations:</h2>

                            <ul>
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
                            </ul>
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
