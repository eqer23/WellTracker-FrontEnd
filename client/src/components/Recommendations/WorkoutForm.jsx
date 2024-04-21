import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import Sidebar from "../Global/Sidebar";
import "./Form.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
let URL = import.meta.env.VITE_SERVER_URL;
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const WorkoutForm = () => {
    const [tag, setTag] = useState("");
    const [level, setLevel] = useState("");
    const [intensity, setIntensity] = useState("");
    const [time, setTime] = useState("");
    const [currentUser, setCurrentUser] = useState(undefined);

    const navigate = useNavigate();
    // const userId = getCurrentUserId();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(URL + "workoutPreference", {
                _userId: currentUser,
                tag: tag,
            });

            if (response.status === 200) {
                console.log("form filled out susccessfully!!!");
                navigate("/recommendations");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
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
        <div className="workout">
            <div className="form-wrapper-form">
                <div className="title">
                    <h1>Workout Form</h1>
                </div>
                <div className="questions">
                    <div className="form-group-form">
                        <div className="focus">
                            <p>
                                {" "}
                                1. Which of the following are you looking to
                                focus on?
                            </p>
                        </div>
                        <select
                            className="dropdown"
                            name="tag"
                            id="tag"
                            onChange={(e) => setTag(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="Weights">Strength</option>
                            <option value="Yoga">Flexiability</option>
                            <option value="HIIT">Endurance</option>
                            <option value="Pilates">Loose Fat</option>
                            <option value="Upper Body">Upper Body</option>
                            <option value="Lower Body">Lower Body</option>
                            <option value="Full Body">Full Body</option>
                            <option value="No Equipment">No Equipment</option>
                            <option value="Low Impact">Low Impact</option>
                        </select>
                    </div>

                    <div className="form-group-form">
                        <div className="level">
                            <p>
                                2. How would you describe you current fitness
                                level?
                            </p>
                        </div>
                        <select
                            className="dropdown"
                            name="level"
                            id="level"
                            onChange={(e) => setLevel(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>

                    <div className="form-group-form">
                        <div className="intensity">
                            <p>
                                3. What level of intensity would you like your
                                workouts to be at?
                            </p>
                        </div>
                        <select
                            className="dropdown"
                            name="intensity"
                            id="intensity"
                            onChange={(e) => setIntensity(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="Low Intensity">Low Intensity</option>
                            <option value="Medium Intensity">
                                Medium Intensity
                            </option>
                            <option value="High Intensity">
                                High Intensity
                            </option>
                        </select>
                    </div>

                    <div className="form-group-form">
                        <div className="time">
                            <p>
                                4. How long would you like your workouts to be?
                            </p>
                        </div>
                        <select
                            className="dropdown"
                            name="time"
                            id="time"
                            onChange={(e) => setTime(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="15 Minutes">15 Minutes</option>
                            <option value="30 Minutes">30 Minutes</option>
                            <option value="1 Hour">1 Hour</option>
                        </select>
                    </div>

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
export default WorkoutForm;
