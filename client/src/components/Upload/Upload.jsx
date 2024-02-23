import React, { useState } from "react";
import "./Upload.css";
import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Upload = () => {

    const [content, postContent] = useState("");
    const {token} = useParams()
    const navigate = useNavigate();


    const handleSubmit = () => {
        if (content) {
            event.preventDefault();
            axios
                .post("http://localhost:3001/upload/"+token, {
                    content
                })
                .then((res) => {
                    if (res.data.status) {
                        console.log("Content uploaded");
                        navigate("/upload");
                    }
                    console.log(res.data)
                })
                .catch((err) => console.log(err));
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

                    <button className="push-upload-btn" onClick={handleSubmit}>
                    Submit
                </button>
                </main>
            </div>
        </div>
    );
};

export default Upload;