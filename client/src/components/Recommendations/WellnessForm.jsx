import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import Sidebar from "../Global/Sidebar";
import "./Form.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
let URL = import.meta.env.VITE_SERVER_URL;
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const WellnessForm = () => {
    const [days, setDays] = useState(0);
    const [rate, setRate] = useState(0);
    const [sleep, setSleep] = useState(0);
    const [nutrition, setNutrition] = useState(0);
    const [currentUser, setCurrentUser] = useState(undefined);

    const navigate = useNavigate();
    // const userId = getCurrentUserId();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const total =
        //     Number(days) + Number(rate) + Number(sleep) + Number(nutrition);
        const total = days + rate + sleep + nutrition;
        let description = "";

        console.log({ days, rate, sleep, nutrition, total }); // Add this to log values and see what you're actually calculating

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
                _userId: currentUser,
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

    useEffect(() => {
        const fetchData = async () => {
            if (!localStorage.getItem("session-token")) {
                navigate("/login");
            } else {
                const decodedToken = jwtDecode(
                    localStorage.getItem("session-token")
                );
                setCurrentUser(decodedToken);
            }
        };

        fetchData();
    }, [navigate]);

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
                            // onChange={(e) => setDays(Number(e.target.value))}
                            onChange={(e) => {
                                console.log("Selected days:", e.target.value); // Check the raw input from the dropdown
                                setDays(Number(e.target.value));
                            }}
                        >
                            <option value="0">Select one</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
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
                            onChange={(e) => setRate(Number(e.target.value))}
                        >
                            <option value="0">Select one</option>
                            <option value="1">1 - Poor </option>
                            <option value="2">2 - Decent </option>
                            <option value="3">3 - Average </option>
                            <option value="4">4 - Good </option>
                            <option value="5">5 - Amazing </option>
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
                            onChange={(e) => setSleep(Number(e.target.value))}
                        >
                            <option value="0">Select one</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11+</option>
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
                            onChange={(e) =>
                                setNutrition(Number(e.target.value))
                            }
                        >
                            <option value="0">Select one</option>
                            <option value="1">Keto</option>
                            <option value="1">Whole30</option>
                            <option value="1">Intermit Fasting</option>
                            <option value="1">Adkins</option>
                            <option value="1">Weight Watchers</option>
                            <option value="1">Vegan</option>
                            <option value="1">Veggaterian</option>
                            <option value="0">Not following any plan</option>
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
