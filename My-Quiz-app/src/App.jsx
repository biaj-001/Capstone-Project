import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';


function App() {
 
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
