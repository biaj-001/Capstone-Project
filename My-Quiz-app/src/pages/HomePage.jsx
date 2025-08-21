import { useState } from "react";

export default function HomePage({ onStart }) {
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");

  const handleStart = () => {
    onStart({ category, difficulty });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-4">
      <div className="w-full max-w-[900px] border-4 border-indigo-600 rounded-2xl shadow-2xl bg-white text-gray-800 p-8 sm:p-12 text-center animate-fadeIn">
        
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-indigo-700 drop-shadow-lg">
          🎯 My Quiz App
        </h1>
        <p className="mb-8 text-base sm:text-lg text-gray-600">
          Answer <span className="font-semibold text-indigo-600">10 questions</span> to test your knowledge!
        </p>

        {/* Category */}
        <div className="mb-6 text-left">
          <label className="block mb-2 font-semibold text-gray-700">Choose Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400"
          >
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="23">History</option>
            <option value="17">Science & Nature</option>
            <option value="18">Computers</option>
            <option value="22">Geography</option>
          </select>
        </div>

        {/* Difficulty */}
        <div className="mb-8 text-left">
          <label className="block mb-2 font-semibold text-gray-700">Select Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400"
          >
            <option value="easy">Easy 😎</option>
            <option value="medium">Medium 🤓</option>
            <option value="hard">Hard 🧠</option>
          </select>
        </div>

        <button
          onClick={handleStart}
          className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          🚀 Start Quiz
        </button>
      </div>
    </div>
  );
}
