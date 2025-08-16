import React from 'react';

const CategoryCard = ({ category, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center 
                 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      <div className="text-4xl mb-4">📚</div>
      <h3 className="text-xl font-semibold text-gray-800 text-center">
        {category.name}
      </h3>
    </button>
  );
};

export default CategoryCard;
