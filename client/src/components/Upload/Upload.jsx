import React, { useState } from "react";
import "./Upload.css";
import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

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
    const [creatorID, setCreatorID] = useState(undefined);
    const {token} = useParams();
    const [ImgUrl, setImgURL] = useState();
    const [description, setDescription] = useState("")
    
    const navigate = useNavigate();

    /*useEffect(() => {
        const fetchData = async () => {
          if (!localStorage.getItem("session-token")) {
            navigate("/login");
            alert("You cannot use upload if you haven't logged in.");
          } else {
            const decodedToken = jwtDecode(localStorage.getItem("session-token"));
            setCreatorID(decodedToken);
            
          }
        };
    
        fetchData();
      }, [navigate]);
*/

    const handleFileUpload = (event) => {
        const selectedFile = event.target.files[0]

        if (selectedFile) {
            const storageRef = firebase.storage().ref()
            const fileRef = storageRef.child(selectedFile.name)

            fileRef.put(selectedFile).then((snapshot) => {
                snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log(downloadURL);
                    setImgURL(downloadURL);
                });
            });
        } else {
            console.log("No file selected")
        }
      }

    const handleSubmit = () => {
        if (title) {
            event.preventDefault();
            axios
            .post(URL + "upload", {
                ImgUrl,
                title,
                creatorID,
                description,
                
            })
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
                    <input
                        type="text"
                        placeholder="Enter Description Here"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div> 
                <input type = "file" onChange = {handleFileUpload}/>
                <input type = "text"
                placeholder = "Add Image URL"
                value = {ImgUrl}
                onChange={(e) => setImgURL(e.target.value)}/>
                <button className="push-upload-btn" onClick={handleSubmit}>
                    Submit
                </button>
                </main>
            </div>
        </div>
    );
};

export default Upload;