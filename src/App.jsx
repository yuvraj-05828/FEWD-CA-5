import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BookSection from './components/BookSection';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  // State
  const [searchTerm, setSearchTerm] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);

  // Toggle Registration Form
  const toggleRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <div className="app-container">
      {/* Navbar Component */}
      <Navbar
        showRegistration={showRegistration}
        toggleRegistration={toggleRegistration}
        setSearchTerm={setSearchTerm}
      />

      <div className="main-content">
        {showRegistration ? (
          <RegistrationForm setShowRegistration={setShowRegistration} />
        ) : (
          <BookSection searchTerm={searchTerm} />
        )}
      </div>
    </div>
  );
};

export default App;