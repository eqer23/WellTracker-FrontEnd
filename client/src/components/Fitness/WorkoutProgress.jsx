import React from "react";

function WorkoutProgress({ goal, current, label }) {
  const percentage = goal > 0 ? (current / goal * 100) : 0;
  const progressStyle = {
    width: `${percentage}%`,
    backgroundColor: percentage >= 100 ? 'green' : 'blue',
    height: '24px',
    color: 'white',
    textAlign: 'center',
    lineHeight: '24px'
  };

  return (
    <div>
      <h4>{label}</h4>
      <div style={{ border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={progressStyle}>
          {percentage.toFixed(0)}%
        </div>
      </div>
    </div>
  );
}

export default WorkoutProgress;
