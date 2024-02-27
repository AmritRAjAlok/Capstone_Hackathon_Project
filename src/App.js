// app.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/HomePage/HomePage'; // Updated import path
import SignUpSignIn from './components/SignUpSignIn/Box';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignUpSignIn type="signin" />} />
          <Route path="/signup" element={<SignUpSignIn type="signup" />} />
        </Routes>
      
    </Router>
  );
};

export default App;
