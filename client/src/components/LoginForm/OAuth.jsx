import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux'
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import axios from "axios";
let OAUTH_URL = "http://localhost:3001/oauth";




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "instafit-8ad3a.firebaseapp.com",
    projectId: "instafit-8ad3a",
    storageBucket: "instafit-8ad3a.appspot.com",
    messagingSenderId: "961039527584",
    appId: "1:961039527584:web:7a7fd3411101433ea263c5",
    measurementId: "G-8SB8MBQ4DW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const OAuth = ({ role }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/userinfo.email');
            provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            console.log('User object:', result.user);

            console.log(result.user.displayName);
            console.log(result.user.email);
            console.log(role);
            setEmail(result.user.email)

            axios.defaults.withCredentials = true;
            if (result.user.email) {
                event.preventDefault();
                // console.log('Email' + email);
                axios
                    .post(OAUTH_URL, {
                        email: result.user.email,
                        role: role,
                    })
                    .then((res) => {
                        if (res.data.login) {
                            console.log(res);
                        }
                        console.log(res.data)

                    })
                    .catch((err) => console.log(err));
            } else {
                alert("Could not sign in with Google.");
            }

            navigate("/");

        } catch (error) {
            console.log('Could not sign in with Google', error);
        }
    };

    return (
        <button onClick={handleGoogleClick} type='button' className=''>
            Continue with Google
        </button>
    )
}

export { OAuth };