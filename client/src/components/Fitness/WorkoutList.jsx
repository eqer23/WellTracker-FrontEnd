import React from "react";

function WorkoutList({ workouts, onClearAll }) {
  return (
    <div>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {`Name: ${workout.name}, Tag: ${workout.tag}, Duration: ${workout.duration} minutes, Intensity: ${workout.intensity}`}
          </li>
        ))}
      </ul>
      {workouts.length > 0 && (
        <div>
          <button onClick={onClearAll}>Clear All</button>
        </div>
      )}
    </div>
  );
}

export default WorkoutList;
