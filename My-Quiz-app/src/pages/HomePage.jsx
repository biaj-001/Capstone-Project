import { useState } from "react";

export default function HomePage({ onStart }) {
  const [category, setCategory] = useState("9"); // General Knowledge
  const [difficulty, setDifficulty] = useState("easy");

  const handleStart = () => {
    onStart({ category, difficulty });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My Quiz App</h1>
      <p>Choose your preferences and start the quiz!</p>

      {/* Category Selector */}
      <div style={{ margin: "10px" }}>
        <label>Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="23">History</option>
          <option value="17">Science & Nature</option>
          <option value="18">Computers</option>
          <option value="22">Geography</option>
        </select>
      </div>

      {/* Difficulty Selector */}
      <div style={{ margin: "10px" }}>
        <label>Difficulty: </label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button
        onClick={handleStart}
        style={{ marginTop: "20px", padding: "10px 20px",backgroundColor:"green",border:"none",borderRadius:"15px" }}
      >
        Start Quiz
      </button>
    </div>
  );
}
