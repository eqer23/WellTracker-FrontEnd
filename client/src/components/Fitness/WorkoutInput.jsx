import React, { useState } from "react";

function WorkoutInput({ onAddWorkout }) {
    const [tag, setTag] = useState("");
    const [duration, setDuration] = useState("");
    const [intensity, setIntensity] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const inputStyle = {
        color: 'white',                       // Text color
        backgroundColor: '#141b2d',           // Suitable dark background color
        borderColor: 'white',                 // Border color for better visibility
        borderWidth: '1px',
        borderStyle: 'solid'
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !duration || !intensity) {
            setError("All fields are required.");
            return;
        }

        setIsSubmitting(true);

        await onAddWorkout({
            name,
            tag,
            duration: Number(duration),
            intensity
        });

        setIsSubmitting(false);
        setTag("");
        setDuration("");
        setIntensity("");
        setName("");
        setError("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Workout Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="Tag (e.g., Cardio, Strength)"
                    value={tag}
                    onChange={e => setTag(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="number"
                    placeholder="Duration (in minutes)"
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="Intensity (e.g., High, Medium, Low)"
                    value={intensity}
                    onChange={e => setIntensity(e.target.value)}
                    style={inputStyle}
                />
                <button type="submit" disabled={isSubmitting} style={{
                    backgroundColor: '#141b2d', // Matching button background
                    color: 'white', // Text color for the button
                    borderColor: 'white'
                }}>
                    {isSubmitting ? "Adding..." : "Add Workout"}
                </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default WorkoutInput;
