import React from 'react';
import CategoryCard from '../components/CategoryCard';


// For a real-world app, you could fetch this from an API.
const categories = [
  { id: 9, name: 'General Knowledge',icon:'fa-solid fa-brain' },
  { id: 10, name: 'Books',icon:'fa-solid fa-book'},
  { id: 11, name: 'Film',icon:'fa-solid fa-film' },
  { id: 12, name: 'Music' ,icon:'fa-solid fa-music'},
  { id: 17, name: 'Science & Nature',icon:'fa-solid fa-flask' },
  { id: 18, name: 'Computers' ,icon:'fa-solid fa-computer'},
  { id: 21, name: 'Sports' ,icon:'fa-solid fa-football' },
  { id: 22, name: 'Geography',icon:'fa-solid fa-geo-alt' },
  { id: 23, name: 'History' ,icon:'fa-solid fa-history'},
];

const HomePage = ({ onStartQuiz }) => {
  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Choose a Quiz Category
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onSelect={() => onStartQuiz(category)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
