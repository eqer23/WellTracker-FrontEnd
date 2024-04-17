import React, { useState, useEffect } from "react";

import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { jwtDecode } from "jwt-decode";

let UPLOAD_URL = "http://localhost:3001/meals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "instafit-8ad3a.firebaseapp.com",
    projectId: "instafit-8ad3a",
    storageBucket: "instafit-8ad3a.appspot.com",
    messagingSenderId: "961039527584",
    appId: "1:961039527584:web:7a7fd3411101433ea263c5",
    measurementId: "G-8SB8MBQ4DW",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/*function Upload() {
    const [file, setFile] = useState()
    return (
        <div>
            <input type = "file" onChange = {(e) => setFile(e.target.files[0])}/>
        </div>
    )
}*/



const Upload = () => {
    const [tag, setTag] = useState()
    const [title, setTitle] = useState("");
    const [creatorID, setCreatorID] = useState(undefined);
    const [dateCreated, setDateCreated] = useState();
    const {token} = useParams();
    
    const [description, setDescription] = useState("")
    
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          if (!localStorage.getItem("session-token")) {
            navigate("/login");
            alert("You cannot use meal tracking if you haven't logged in.");
          } else {
            const decodedToken = jwtDecode(localStorage.getItem("session-token"));
            setCreatorID(decodedToken._id)
            
          }
        };
    
        fetchData();
      }, [navigate]);


    

    const handleSubmit = () => {
        if (title) {
            event.preventDefault();
            axios
            .post(UPLOAD_URL, {
                
                title,
                creatorID,
                description,
                dateCreated,
                tag
                
            })
                .then((res) => {
                    if (res.data.status) {
                        console.log("Content uploaded");
                        navigate("/meals");
                    }
                    console.log(res.data)
                })
                .then()
                .catch((err) => console.log(err));
                setDateCreated(Date());
        } else {
            alert("Please upload a file.");
            
        }
    };

    return (
        <div className="home">
            <Navbar />
            <div className="wrapper">
                <h1>Upload</h1>
                <main>
                    <p>Upload videos or workout plans here!</p>


                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Enter Meal Contents"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Calories"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                    />
                
                
                <h2>{tag}</h2>
                <select value = {tag} onChange = {(e) => setTag(e.target.value)}>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Additional</option>
                </select>
                
                <button className="push-upload-btn" onClick={handleSubmit}>
                    Submit
                </button>
                </div>
                </main>
            </div>
        </div>
    );
};

export default Upload;