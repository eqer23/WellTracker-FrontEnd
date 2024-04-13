import React from "react";

function FoodList({ foods, onClearAll }) {
  const totalCalories = foods.reduce((acc, curr) => acc + curr.calories, 0);

  return (
    <div>
      <ul>
        {foods.map((food, index) => (
          <li
            key={index}
            style={{ color: food.calories > 500 ? "red" : "black" }}
          >
            {`${food.name}: ${food.calories} calories, Fat: ${food.fat}g (Saturated: ${food.saturatedFat}g, Trans: ${food.transFat}g), Carbs: ${food.carbs}g (Total Sugars: ${food.totalSugars}g, Added Sugars: ${food.addedSugars}g), Protein: ${food.protein}g, Sodium: ${food.sodium}mg`}
          </li>
        ))}
      </ul>

      {foods.length > 0 && (
        <div>
          <p>Total Calories: {totalCalories}</p>
          <button onClick={onClearAll}>Clear All</button>
        </div>
      )}
    </div>
  );
}

export default FoodList;
