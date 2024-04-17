import React, { useState } from "react";
import FoodInput from "./foodinput";
import FoodList from "./foodlist";

function CalorieTracker() {
  const [foods, setFoods] = useState([]);

  const addFood = (food) => {
    setFoods([...foods, food]);
  };

  const clearAllFoods = () => {
    setFoods([]);
  };

  return (
    <div className="calorie-tracker">
      <h2>Calorie Tracker</h2>

      <FoodInput onAddFood={addFood} />

      <FoodList foods={foods} onClearAll={clearAllFoods} />
    </div>
  );
}

export default CalorieTracker;
