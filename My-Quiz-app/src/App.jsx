import { useState } from "react";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";

export default function App() {
  const [settings, setSettings] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {settings ? (
        <QuizPage settings={settings} onExit={() => setSettings(null)} />
      ) : (
        <HomePage onStart={(options) => setSettings(options)} />
      )}
    </div>
  );
}
