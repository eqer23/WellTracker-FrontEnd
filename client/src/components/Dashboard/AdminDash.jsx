import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
let URL = import.meta.env.VITE_SERVER_URL;



const AdminDash = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [professionalUsers, setProfessionalUsers] = useState([]);
    const [clientUsers, setClientUsers] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(URL + `getAllUsers/${-1}`);
                setAllUsers(data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                alert(error.response.data.message); 
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (allUsers.length > 0) {
            const professionals = allUsers.filter(user => user.role === 'professional');
            setProfessionalUsers(professionals);
        }
    }, [allUsers]);

    useEffect(() => {
        if (allUsers.length > 0) {
            const professionals = allUsers.filter(user => user.role === 'user');
            setClientUsers(professionals);
        }
    }, [allUsers]);



    return (
        <div className="home">
            <div className="content" style={{ paddingTop: "100px" }}>
                <div className="dash-wrapper">
                    <div className="dash-greeting-calendar">
                        <div className="dash-greeting">
                            <div className="message">
                                <h1>Admin Dashboard!</h1>
                                <h1>Hello, admin!</h1>
                            </div>
                            <div className="resume-activity">
                                <h3>Total number of users: {allUsers && allUsers.length}</h3>
                                <h3>Professional users: {professionalUsers && professionalUsers.length}</h3>
                                <h3>Client users: {clientUsers && clientUsers.length}</h3>
                                {/* <h3>Client users: {allUsers && allUsers.data.filter(user => user.role === 'user').data.length}</h3> */}

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
                </div>
            </div>
        </div>
    );
};

export default AdminDash;
