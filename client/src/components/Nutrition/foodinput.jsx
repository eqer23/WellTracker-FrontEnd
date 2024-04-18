import React, { useState } from "react";

function FoodInput({ onAddFood }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [fat, setFat] = useState("");
  const [saturatedFat, setSaturatedFat] = useState("");
  const [transFat, setTransFat] = useState("");
  const [carbs, setCarbs] = useState("");
  const [totalSugars, setTotalSugars] = useState("");
  const [addedSugars, setAddedSugars] = useState("");
  const [protein, setProtein] = useState("");
  const [sodium, setSodium] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !calories || !fat || !protein || !carbs || !sodium) {
      setError("All fields are required.");

      return;
    }

    setIsSubmitting(true);

    // Assume this is where you would interact with a backend service

    await onAddFood({
      name,
      calories: Number(calories),
      fat: Number(fat),
      saturatedFat: Number(saturatedFat),

      transFat: Number(transFat),
      carbs: Number(carbs),
      totalSugars: Number(totalSugars),

      addedSugars: Number(addedSugars),
      protein: Number(protein),
      sodium: Number(sodium),
    });

    setIsSubmitting(false);
    setName("");
    setCalories("");
    setError("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Form Inputs remain the same */}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Food"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default FoodInput;
