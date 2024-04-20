import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import Sidebar from "../Global/Sidebar";
import "./Form.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
let URL = import.meta.env.VITE_SERVER_URL;
import { useNavigate } from "react-router-dom";

const WellnessForm = () => {
    const [days, setDays] = useState("");
    const [rate, setRate] = useState("");
    const [sleep, setSleep] = useState("");
    const [nutrition, setNutrition] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const total =
            Number(days) + Number(rate) + Number(sleep) + Number(nutrition);
        let description = "";

        if (total < 10) {
            description =
                "You may need to focus more on your wellness routines!";
        } else if (total >= 10 && total < 20) {
            description =
                "You're doing well, but there's room for improvement.";
        } else {
            description =
                "Great job! You're really taking good care of your wellness!";
        }

        try {
            const response = await axios.post(URL + "wellnessScore", {
                totalScore: total,
                description: description,
            });

            if (response.status === 200) {
                console.log("form filled out susccessfully!!!");
                navigate("/recommendations");
            }
        } catch (error) {
            console.error("Error submitting form:", error);

            // Handle errors differently based on the error status
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error(error.response.data);
                console.error(error.response.status);
                console.error(error.response.headers);
                alert(
                    "Failed to submit the wellness score: " +
                        error.response.data.message
                );
            } else if (error.request) {
                // The request was made but no response was received
                console.error(error.request);
                alert(
                    "No response received when submitting the wellness score."
                );
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error", error.message);
                alert(
                    "An error occurred when setting up the submission: " +
                        error.message
                );
            }
        }
    };

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
                            <option value="seven">7</option>
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
                        onClick={handleSubmit}
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
