import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Global/Sidebar";
import Calendar from "./Calendar";
import "./CalendarPage.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Recommendations = () => {
    // const handleSubmit = () => {

    // };

    return (
        <div className="cal-home">
            <Navbar />
            <Sidebar />
            <div className="content-cal">
                <div className="cal-wrapper">
                    <div className="more-style">
                        <h1>Calendar</h1>
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommendations;
