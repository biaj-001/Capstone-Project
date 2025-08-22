🎯My Quiz App

A responsive and colorful Quiz Application built with React JS and styled using TailwindCSS.
The app fetches questions from the Open Trivia Database API and allows users to test their knowledge with 10 fixed questions.

✨ Features

🎨 Modern UI: Vibrant, gradient-based design with TailwindCSS.

📱 Responsive Layout: Works perfectly on phone, tablet, and laptop.

🎮 Interactive Quiz: Answer 10 fixed questions per quiz session.

🧠 Category & Difficulty Selection: Choose quiz topic and level before starting.

📊 Scoreboard: View results at the end with restart and exit options.

🎭 Animations: Smooth hover and transition effects.

🛠️ Tech Stack

React JS (Vite) ⚛️

TailwindCSS 🎨

Open Trivia Database API 🌍

📂 Project Structure
quiz-app/
├── public/               # Static assets
├── src/
│   ├── components/
│   │   ├── QuestionCard.jsx     # Displays a question & answer choices
│   │   ├── ScoreBoard.jsx       # Shows final results
│   │   |_Loader.jsx
│   ├── pages/
│   │   └── HomePage.jsx 
|   |   |_QuizPages.jsx        # Category & difficulty selection
│   │
│   ├── App.jsx                  # Main app logic & routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Tailwind styles
│
├── package.json
├── tailwind.config.js
└── README.md

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/biaj-001/Capstone-Project.git
cd My-Quiz-app

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

4️⃣ Open in browser

The app will run at:
👉 http://localhost:5173

🎮 Usage

Select a category and difficulty level.

Answer 10 questions.

View your final score on the scoreboard.

Restart to play again or exit to go back home.

📸 Screenshots
🏠 Home Page

Category & difficulty selection.

❓ Quiz Page

Questions with answer options.

🏆 ScoreBoard

Final results with Restart & Exit.

🌍 API Reference

This project uses the Open Trivia Database API
.

Fetches 10 questions based on selected category & difficulty.

Example endpoint:

https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
