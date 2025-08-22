export default function ScoreBoard({ score, total, onRestart, onExit }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Quiz Finished!</h2>
      <p>
        Your Score: {score} / {total}
      </p>
      <button onClick={onRestart} style={{ margin: "5px", padding: "10px 20px", backgroundColor:"green",color:"white",borderRadius:"15px", border:"none"}}>
        Restart Quiz
      </button>
      <button onClick={onExit} style={{ margin: "5px", padding: "10px 20px", backgroundColor:"red",color:"white",borderRadius:"15px", border:"none"}}>
        Exit
      </button>
    </div>
  );
}
