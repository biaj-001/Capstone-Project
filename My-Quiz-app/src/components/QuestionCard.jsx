export default function QuestionCard({ question, answers, onAnswer, current, total }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 px-4">
      <div className="w-full max-w-[900px] border-4 border-green-600 rounded-2xl shadow-2xl bg-white text-gray-800 p-8 sm:p-12 animate-fadeIn">
        
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-green-700">
          Question {current} of {total}
        </h2>

        <p
          className="mb-8 text-lg sm:text-xl font-semibold text-gray-800"
          dangerouslySetInnerHTML={{ __html: question }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {answers.map((ans, idx) => (
            <button
              key={idx}
              onClick={() => onAnswer(ans)}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-lg font-semibold hover:scale-105 hover:from-indigo-600 hover:to-purple-600 transition shadow-md text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: ans }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
