import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import { app } from "./firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
  measurementId: "G-8SB8MBQ4DW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const OAuth = () => {
    console.log(import.meta.env.FIREBASE_API_KEY)

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            const res = await fetch("/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });

            const data = await res.json();

            dispatch(signInSuccess(data));
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

export {OAuth};