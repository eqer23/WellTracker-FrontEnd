import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import Sidebar from "../Global/Sidebar";
import "./Form.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const WellnessForm = () => {
    return (
        <div className="home">
            <div className="form-wrapper-form">
                <div className="title">
                    <h1>Wellness Form</h1>
                </div>
                <div className="questions">
                    <div className="form-group-form">
                        <div className="days">
                            <p>
                                {" "}
                                1. How many days a week you you exercise
                                currently?
                            </p>
                        </div>
                        <select
                            className="dropdown"
                            name="days"
                            id="days"
                            onChange={(e) => setDays(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="one">1</option>
                            <option value="two">2</option>
                            <option value="three">3</option>
                            <option value="four">4</option>
                            <option value="five">5</option>
                            <option value="six">6</option>
                            <option value="sevem">7</option>
                        </select>
                    </div>

                    <div className="form-group-form">
                        <div className="rate">
                            <p>
                                2. On a scale of 1-5, how would you rate your
                                current overall health?
                            </p>
                        </div>
                        <select
                            className="dropdown"
                            name="rate"
                            id="rate"
                            onChange={(e) => setRate(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="one">1 - Poor </option>
                            <option value="two">2 - Decent </option>
                            <option value="three">3 - Average </option>
                            <option value="four">4 - Good </option>
                            <option value="five">5 - Amazing </option>
                        </select>
                    </div>

                    <div className="form-group-form">
                        <div className="sleep">
                            <p>
                                3. On average, how many hours of sleep do you
                                get per night?
                            </p>
                        </div>
                        <select
                            className="dropdown"
                            name="sleep"
                            id="sleep"
                            onChange={(e) => setSleep(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="one">1</option>
                            <option value="two">2</option>
                            <option value="three">3</option>
                            <option value="four">4</option>
                            <option value="five">5</option>
                            <option value="six">6</option>
                            <option value="seven">7</option>
                            <option value="eight">8</option>
                            <option value="nine">9</option>
                            <option value="ten">10</option>
                            <option value="eleven">11+</option>
                        </select>
                    </div>

                    <div className="form-group-form">
                        <div className="nutrition">
                            <p>
                                4. Are you currently following any of the meal
                                plans listed?
                            </p>
                        </div>
                        <select
                            className="dropdown"
                            name="nutrition"
                            id="nutrition"
                            onChange={(e) => setNutrition(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="one">Keto</option>
                            <option value="one">Whole30</option>
                            <option value="one">Intermit Fasting</option>
                            <option value="one">Adkins</option>
                            <option value="one">Weight Watchers</option>
                            <option value="one">Vegan</option>
                            <option value="one">Veggaterian</option>
                            <option value="zero">Not following any plan</option>
                        </select>
                    </div>
                    {/*  */}

                    {/* submit button */}
                    <button
                        className="btn-submit-form"
                        type="submit"
                        // onClick={handleSubmit}
                    >
                        Submit
                    </button>

                    {/* // */}
                </div>
            </div>
        </div>
    );
};
export default WellnessForm;
