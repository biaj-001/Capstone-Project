import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Quiz App
        </h1>
        
      </div>
    </header>
  );
};

export default Header;
