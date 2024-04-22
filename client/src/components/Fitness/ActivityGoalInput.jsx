import React, { useState, useEffect } from "react";

function ActivityGoalInput({ onUpdateGoals, currentGoals }) {
  const [daily, setDaily] = useState(currentGoals.daily);
  const [weekly, setWeekly] = useState(currentGoals.weekly);

  useEffect(() => {
    setDaily(currentGoals.daily);
    setWeekly(currentGoals.weekly);
  }, [currentGoals]); // Update local state when prop changes

  const inputStyle = {
    color: 'white',
    backgroundColor: '#141b2d', // Dark background color
    borderColor: 'white',       // White border color
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateGoals({ daily, weekly });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Set Your Activity Goals</h3>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Daily Minute Goal:
        <input 
          type="number" 
          value={daily} 
          onChange={e => setDaily(Number(e.target.value))} 
          style={inputStyle}
        />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Weekly Minute Goal:
        <input 
          type="number" 
          value={weekly} 
          onChange={e => setWeekly(Number(e.target.value))} 
          style={inputStyle}
        />
      </label>
      <button type="submit" style={{ backgroundColor: '#141b2d', color: 'white' }}>Update Goals</button>
    </form>
  );
}

export default ActivityGoalInput;
