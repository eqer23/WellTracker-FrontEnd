import React, { useState } from "react";
import WorkoutInput from "./WorkoutInput";
import WorkoutList from "./WorkoutList";
import ActivityGoalInput from "./ActivityGoalInput";
import WorkoutProgress from "./WorkoutProgress";

function WorkoutTracker() {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem("workouts");
    return saved ? JSON.parse(saved) : [];
  });
  const [activityGoals, setActivityGoals] = useState(() => {
    const savedGoals = localStorage.getItem("activityGoals");
    return savedGoals ? JSON.parse(savedGoals) : { daily: 0, weekly: 0 };
  });
  const [dailyTotal, setDailyTotal] = useState(() => {
    return Number(localStorage.getItem("dailyTotal")) || 0;
  });
  const [weeklyTotal, setWeeklyTotal] = useState(() => {
    return Number(localStorage.getItem("weeklyTotal")) || 0;
  });

  const addWorkout = (workout) => {
    setWorkouts(prevWorkouts => {
      const updatedWorkouts = [...prevWorkouts, workout];
      localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
      return updatedWorkouts;
    });
    setDailyTotal(prevTotal => {
      const updatedTotal = prevTotal + workout.duration;
      localStorage.setItem("dailyTotal", updatedTotal.toString());
      return updatedTotal;
    });
    setWeeklyTotal(prevTotal => {
      const updatedTotal = prevTotal + workout.duration;
      localStorage.setItem("weeklyTotal", updatedTotal.toString());
      return updatedTotal;
    });
  };

  const clearDailyTotal = () => {
    setDailyTotal(0);
    localStorage.setItem("dailyTotal", "0");
  };

  const clearWeeklyTotal = () => {
    setWeeklyTotal(0);
    localStorage.setItem("weeklyTotal", "0");
  };

  const updateActivityGoals = (goals) => {
    setActivityGoals(goals);
    localStorage.setItem("activityGoals", JSON.stringify(goals));
  };

  return (
    <div className="workout-tracker">
      <h2>Workout Tracker</h2>
      <ActivityGoalInput onUpdateGoals={updateActivityGoals} currentGoals={activityGoals} />
      <WorkoutInput onAddWorkout={addWorkout} />
      <WorkoutList workouts={workouts} onClearAll={() => { clearDailyTotal(); clearWeeklyTotal(); setWorkouts([]); }} />
      <WorkoutProgress goal={activityGoals.daily} current={dailyTotal} label="Daily Progress" />
      <WorkoutProgress goal={activityGoals.weekly} current={weeklyTotal} label="Weekly Progress" />
      <button onClick={clearDailyTotal} style={{ margin: "10px" }}>Reset Daily Total</button>
      <button onClick={clearWeeklyTotal} style={{ margin: "10px" }}>Reset Weekly Total</button>
    </div>
  );
}

export default WorkoutTracker;
