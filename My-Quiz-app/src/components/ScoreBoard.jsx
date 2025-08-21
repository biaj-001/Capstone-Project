export default function ScoreBoard({ score, total, onRestart, onExit }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-red-400 to-yellow-300 px-4">
      <div className="w-full max-w-[700px] border-4 border-pink-600 rounded-2xl shadow-2xl bg-white text-gray-800 p-8 sm:p-12 text-center animate-fadeIn">
        
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-pink-700 drop-shadow-lg">
          🏆 Quiz Completed!
        </h2>

        <p className="text-lg sm:text-xl mb-8">
          Your Score: <span className="font-bold text-indigo-600">{score}</span> / {total}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:scale-105 transition"
          >
            🔄 Restart
          </button>
          <button
            onClick={onExit}
            className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:scale-105 transition"
          >
            🚪 Exit
          </button>
        </div>
      </div>
    </div>
  );
}
