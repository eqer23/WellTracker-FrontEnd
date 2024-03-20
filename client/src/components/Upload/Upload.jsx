import React, { useState } from "react";
import "./Upload.css";
import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let UPLOAD_URL = "http://localhost:3001/upload";


/*function Upload() {
    const [file, setFile] = useState()
    return (
        <div>
            <input type = "file" onChange = {(e) => setFile(e.target.files[0])}/>
        </div>
    )
}*/



const Upload = () => {

    const [title, setTitle] = useState("");
    const [file, setFile] = useState();
    const {token} = useParams();
    const navigate = useNavigate();


    const handleSubmit = () => {
        if (title) {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('title', title)
            event.preventDefault();
            axios
                .post("http://localhost:5173/upload/", formData)
                .then((res) => {
                    if (res.data.status) {
                        console.log("Content uploaded");
                        navigate("/upload");
                    }
                    console.log(res.data)
                })
                .then()
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


                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Enter Title Here"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div> 
                <input type = "file" onChange = {(e) => setFile(e.target.files[0])}/>
                <button className="push-upload-btn" onClick={handleSubmit}>
                    Submit
                </button>
                </main>
            </div>
        </div>
    );
};

export default Upload;