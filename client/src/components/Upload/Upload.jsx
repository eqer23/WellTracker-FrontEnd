import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import "../Dashboard/Dashboard";
import "./Upload.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Global/Sidebar";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { jwtDecode } from "jwt-decode";

let UPLOAD_URL = import.meta.env.VITE_SERVER_URL + "upload";

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

const Upload = ({ onSuccess }) => {
  const [tag, setTag] = useState();
  const [difficulty, setDifficulty] = useState();
  const [intensity, setIntensity] = useState();
  const [time, setTime] = useState();
  const [title, setTitle] = useState("");
  const [creatorID, setCreatorID] = useState(undefined);
  const { token } = useParams();
  const [ImgUrl, setImgURL] = useState();
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem("session-token")) {
        navigate("/login");
        alert("You cannot use upload if you haven't logged in.");
      } else {
        const decodedToken = jwtDecode(localStorage.getItem("session-token"));
        if (decodedToken.role == "professional" || "admin") {
          setCreatorID(decodedToken._id);
        } else {
          console.log("you do not have permission to use this feature");
        }
      }
    };

    fetchData();
  }, [navigate]);

  const handleFileUpload = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(selectedFile.name);

      await fileRef.put(selectedFile).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);
          setImgURL(downloadURL);
        });
      });
    } else {
      console.log("No file selected");
    }
  };

  const handleSubmit = () => {
    if (title) {
      event.preventDefault();
      axios
        .post(UPLOAD_URL, {
          ImgUrl,
          title,
          creatorID,
          description,
          tag,
          difficulty,
          intensity,
          time,
        })
        .then((res) => {
          if (res.data.status) {
            console.log("Content uploaded");
            // navigate("/dashboard");
          }
          setTitle("");
          setDescription("");
          setImgURL("");
          setTag("");
          setDifficulty("");
          setIntensity("");
          setTime("");
          alert("Content Uploaded");
          console.log(res.data);
          const selects = document.querySelectorAll("select");
          selects.forEach((select) => {
            select.selectedIndex = 0;
          });

          // Clearing text input fields
          const textInputs = document.querySelectorAll('input[type="text"]');
          textInputs.forEach((input) => {
            input.value = "";
          });
          // onSuccess();
          navigate("/upload");
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
      <Sidebar />
      <div className="wrapper-up">
        <main>
          <div className="input-box-up">
            <h1>Upload</h1>
            <p>Upload videos or workout plans here!</p>

            <div className="form-input">
              <input
                type="text"
                placeholder="Enter Title Here"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-input">
              <input
                type="text"
                placeholder="Enter Description Here"
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-input">
              <input type="file" onChange={handleFileUpload} />
              {/* <input
                type="text"
                placeholder="Add Image URL"
                value={ImgUrl}
                onChange={(e) => setImgURL(e.target.value)}
              /> */}
            </div>

            <div className="drop-label">
              <h3>Type: </h3>
              <div className="form-click">
                <select value={tag} onChange={(e) => setTag(e.target.value)}>
                  <option></option>

                  <option>HIIT</option>
                  <option>Yoga</option>
                  <option>Pilates</option>
                  <option>Weights</option>
                  <option>No Equipment</option>
                  <option>Low Impact</option>
                  <option>Upper Body</option>
                  <option>Full Body</option>
                  <option>Lower Body</option>
                </select>
              </div>
            </div>

            {/* <h2>{intensity}</h2> */}

            <div className="drop-label">
              <h3>Intensity: </h3>
              <div className="form-click">
                <select
                  value={intensity}
                  onChange={(e) => setIntensity(e.target.value)}
                >
                  <option></option>
                  <option>Low Intensity</option>
                  <option>Medium Intensity</option>
                  <option>High Intensity</option>
                </select>
              </div>
            </div>

            {/* <h2>{difficulty}</h2> */}
            <div className="drop-label">
              <h3>Difficulity: </h3>
              <div className="form-click">
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option></option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>

            {/* <h2>{time}</h2> */}
            <div className="drop-label">
              <h3>Time: </h3>
              <div className="form-click">
                <select value={time} onChange={(e) => setTime(e.target.value)}>
                  <option></option>

                  <option>15 Minutes</option>
                  <option>30 Minutes</option>
                  <option>1 Hour</option>
                </select>{" "}
              </div>
            </div>
            <div className="btn-flex">
              <button className="btn-submit-up" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Upload;
