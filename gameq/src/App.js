import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import GameCard from './components/GameCard'
import './App.css';
import SignUp from './pages/SignUp'
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  console.log(isLoggedIn)

  return (
    <main>
      <Nav />
      <h1>gameQ</h1>
      <Routes>
        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path="/signup" element={<SignUp  />}></Route>
      </Routes>
      
    </main>
  );
}

export default App;
