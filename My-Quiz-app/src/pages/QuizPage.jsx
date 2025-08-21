import { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import ScoreBoard from "../components/ScoreBoard";
import Loader from "../components/Loader";

export default function QuizPage({ settings, onExit }) {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const { category, difficulty } = settings;
    // Always fetch 10 questions
    const url = `https://opentdb.com/api.php? amount=10 &category=${category}&difficulty=${difficulty}&type=multiple`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.results.map((q) => {
          const answers = [...q.incorrect_answers];
          const randomIndex = Math.floor(Math.random() * (answers.length + 1));
          answers.splice(randomIndex, 0, q.correct_answer);
          return {
            question: q.question,
            correct: q.correct_answer,
            answers,
          };
        });
        setQuestions(formatted);
        setLoading(false);
      });
  }, [settings]);

  const handleAnswer = (answer) => {
    if (answer === questions[current].correct) {
      setScore((prev) => prev + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  if (loading) return <Loader />;

  if (finished)
    return (
      <ScoreBoard
        score={score}
        total={questions.length}
        onRestart={() => window.location.reload()}
        onExit={onExit}
      />
    );

  return (
    <QuestionCard
      question={questions[current].question}
      answers={questions[current].answers}
      onAnswer={handleAnswer}
      current={current + 1}
      total={questions.length}
    />
  );
}
