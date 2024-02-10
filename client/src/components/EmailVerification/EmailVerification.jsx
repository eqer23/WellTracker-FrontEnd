import React, { useState } from "react";

const EmailVerification = () => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);

        // Regular expression to validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(inputValue));
    };

    return (
        <div>
            {/* <label>Email:</label> */}
            <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={handleInputChange}
                style={{ borderColor: isValid ? "" : "red" }}
            />
            {!isValid && (
                <p style={{ color: "red" }}>
                    Please enter a valid email address
                </p>
            )}
        </div>
    );
};

export default EmailVerification;
