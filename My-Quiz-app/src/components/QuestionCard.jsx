export default function QuestionCard({ question, answers, onAnswer, current, total }) {
  return (
    <div>
      <h2>
        Question {current} / {total}
      </h2>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((ans, i) => (
          <button
            key={i}
            onClick={() => onAnswer(ans)}
            style={{ display: "block", margin: "10px 0", padding: "8px 12px", width: "100%"}}
            dangerouslySetInnerHTML={{ __html: ans }}
          />
        ))}
      </div>
    </div>
  );
}
