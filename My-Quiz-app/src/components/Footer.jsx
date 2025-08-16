import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md p-4 w-full text-center text-gray-500 text-sm">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()}  My Quiz App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
